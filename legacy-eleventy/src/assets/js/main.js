/* FlowPilot UK — progressive enhancement
 * --------------------------------------
 * Small, dependency-free interactions. Everything degrades gracefully:
 * with JS off, content is fully visible and links still work.
 */
(function () {
  "use strict";

  // Signal that JS is available (CSS uses .no-js as a fallback).
  document.documentElement.classList.remove("no-js");

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---------------------------------------------------------------- *
   * Mobile navigation
   * ---------------------------------------------------------------- */
  function initMobileNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.classList.toggle("is-open", open);
      document.body.classList.toggle("overflow-hidden", open);
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!open);
    });

    // Close on link click or Escape.
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    // Reset when resizing up to desktop.
    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------------------------------------------------------------- *
   * Header: subtle elevation once the page scrolls
   * ---------------------------------------------------------------- */
  function initHeaderState() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------------------------------------------------------- *
   * FAQ / accordion
   * ---------------------------------------------------------------- */
  function initAccordions() {
    var items = document.querySelectorAll("[data-accordion] [data-accordion-item]");
    items.forEach(function (item) {
      var button = item.querySelector("[data-accordion-trigger]");
      var panel = item.querySelector("[data-accordion-panel]");
      if (!button || !panel) return;

      button.addEventListener("click", function () {
        var expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        if (expanded) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });

      // Keep an open panel sized correctly on resize.
      window.addEventListener("resize", function () {
        if (button.getAttribute("aria-expanded") === "true") {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * Scroll reveal
   * ---------------------------------------------------------------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    els.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------- *
   * Contact form (client-side validation + friendly success state)
   * ---------------------------------------------------------------- */
  function initContactForms() {
    var forms = document.querySelectorAll("[data-contact-form]");
    forms.forEach(setupContactForm);
  }

  function setupContactForm(form) {
    if (!form) return;

    var status = form.querySelector("[data-form-status]");
    var endpoint = form.getAttribute("action") || "";
    var isPlaceholder = endpoint.indexOf("your-form-id") !== -1 || endpoint === "";

    function showStatus(message, ok) {
      if (!status) return;
      status.textContent = message;
      status.classList.remove("hidden");
      status.classList.toggle("text-chartreuse-700", ok);
      status.classList.toggle("text-red-600", !ok);
    }

    form.addEventListener("submit", function (e) {
      // Native validation handles required fields & email format.
      if (!form.checkValidity()) return;

      // If a real endpoint hasn't been wired up yet, submit via fetch is
      // pointless — fall back to a mailto so the site still "works".
      if (isPlaceholder) {
        e.preventDefault();
        var data = new FormData(form);
        var subject = encodeURIComponent(
          "Website enquiry from " + (data.get("name") || "your website")
        );
        var body = encodeURIComponent(
          "Name: " + (data.get("name") || "") +
            "\nEmail: " + (data.get("email") || "") +
            "\nBusiness: " + (data.get("business") || "") +
            "\nPhone: " + (data.get("phone") || "") +
            "\n\n" + (data.get("message") || "")
        );
        showStatus(
          "Opening your email app so you can send this to us directly…",
          true
        );
        window.location.href =
          "mailto:hello@flowpilotuk.com?subject=" + subject + "&body=" + body;
        return;
      }

      // Real endpoint: submit with fetch for a smooth, no-reload experience.
      e.preventDefault();
      var button = form.querySelector("[type=submit]");
      if (button) button.disabled = true;

      fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            showStatus(
              "Thank you — your message is on its way. We'll reply by email soon.",
              true
            );
          } else {
            showStatus(
              "Something went wrong. Please email us at hello@flowpilotuk.com.",
              false
            );
          }
        })
        .catch(function () {
          showStatus(
            "Something went wrong. Please email us at hello@flowpilotuk.com.",
            false
          );
        })
        .finally(function () {
          if (button) button.disabled = false;
        });
    });
  }

  /* ---------------------------------------------------------------- *
   * Footer year
   * ---------------------------------------------------------------- */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initHeaderState();
    initAccordions();
    initReveal();
    initContactForms();
    initYear();
  });
})();
