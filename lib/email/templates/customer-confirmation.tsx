import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export type CustomerConfirmationProps = {
  name: string;
};

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export function CustomerConfirmationEmail({ name }: CustomerConfirmationProps) {
  const firstName = name.split(" ")[0] || name;
  return (
    <Html>
      <Head />
      <Preview>Thanks for getting in touch — we&apos;ll take it from here.</Preview>
      <Body style={{ backgroundColor: "#050505", margin: 0, padding: "24px 0", fontFamily: font }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "0 16px" }}>
          <Section
            style={{
              backgroundColor: "#0b0b0b",
              borderRadius: "18px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "40px 32px",
            }}
          >
            {/* Wordmark */}
            <Text style={{ margin: 0, fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "#ffffff" }}>
              Flow<span style={{ color: "#B6FF00" }}>Pilot</span>
            </Text>

            <Heading style={{ margin: "28px 0 0", fontSize: "28px", lineHeight: 1.15, fontWeight: 700, letterSpacing: "-0.02em", color: "#ffffff" }}>
              Thanks, {firstName}.
            </Heading>
            <Text style={{ margin: "12px 0 0", fontSize: "16px", lineHeight: 1.6, color: "#b3b3b3" }}>
              We&apos;ve got your message and we&apos;ll be in touch by email soon — usually within one
              working day. No lengthy meetings, no jargon. <span style={{ color: "#ffffff" }}>We&apos;ll take it from here.</span>
            </Text>

            <Section style={{ margin: "28px 0 0", padding: "16px 18px", backgroundColor: "rgba(182,255,0,0.06)", borderRadius: "12px", border: "1px solid rgba(182,255,0,0.15)" }}>
              <Text style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#d4d4d8" }}>
                If anything changes in the meantime, just reply to this email — a real person will read it.
              </Text>
            </Section>

            <Hr style={{ borderColor: "rgba(255,255,255,0.08)", margin: "28px 0" }} />

            <Text style={{ margin: 0, fontSize: "14px", lineHeight: 1.6, color: "#8a8a8a" }}>
              While you wait, you might like to{" "}
              <Link href="https://flowpilotuk.com/packages" style={{ color: "#B6FF00", textDecoration: "none" }}>
                see our packages
              </Link>{" "}
              or read{" "}
              <Link href="https://flowpilotuk.com/how-we-work" style={{ color: "#B6FF00", textDecoration: "none" }}>
                how we work
              </Link>
              .
            </Text>

            <Text style={{ margin: "28px 0 0", fontSize: "15px", color: "#ffffff" }}>
              — The FlowPilot team
            </Text>
          </Section>

          <Text style={{ textAlign: "center", fontSize: "12px", color: "#6e6e6e", margin: "18px 0 0" }}>
            FlowPilot · Professional websites for small businesses ·{" "}
            <Link href="https://flowpilotuk.com" style={{ color: "#8a8a8a", textDecoration: "none" }}>
              flowpilotuk.com
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default CustomerConfirmationEmail;
