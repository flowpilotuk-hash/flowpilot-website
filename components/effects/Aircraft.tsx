type Props = {
  className?: string;
  title?: string;
};

/**
 * The FlowPilot aircraft mark — a sharp paper-jet silhouette.
 * Uses currentColor so it inherits text colour.
 */
export function Aircraft({ className, title }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M44 6L5 22.5c-1.4.6-1.3 2.6.2 3l13.1 3.6 3.6 13.1c.4 1.5 2.4 1.6 3 .2L44 6z"
        fill="currentColor"
      />
      <path d="M44 6L18.3 29.1" stroke="#050505" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
