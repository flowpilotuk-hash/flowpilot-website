import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Column,
  Section,
  Text,
} from "@react-email/components";

export type InternalNotificationProps = {
  name: string;
  email: string;
  business?: string;
  phone?: string;
  message: string;
  submittedAt: string;
};

const font =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

export function InternalNotificationEmail({
  name,
  email,
  business,
  phone,
  message,
  submittedAt,
}: InternalNotificationProps) {
  const preview = `New enquiry from ${name}${business ? ` — ${business}` : ""}`;
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={{ backgroundColor: "#f4f4f5", margin: 0, padding: "24px 0", fontFamily: font }}>
        <Container style={{ maxWidth: "560px", margin: "0 auto", padding: "0 16px" }}>
          <Section
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              border: "1px solid #e8e8ea",
              padding: "32px",
            }}
          >
            <Text style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#8a8a8a" }}>
              New website enquiry
            </Text>
            <Heading style={{ margin: "8px 0 0", fontSize: "22px", color: "#0b0b0c", fontWeight: 700 }}>
              {name}
              {business ? (
                <span style={{ color: "#6e6e6e", fontWeight: 500 }}> · {business}</span>
              ) : null}
            </Heading>

            <Hr style={{ borderColor: "#e8e8ea", margin: "24px 0" }} />

            <DetailRow label="Email">
              <Link href={`mailto:${email}`} style={{ color: "#5a7a00", textDecoration: "none" }}>
                {email}
              </Link>
            </DetailRow>
            {phone ? <DetailRow label="Phone">{phone}</DetailRow> : null}
            {business ? <DetailRow label="Business">{business}</DetailRow> : null}
            <DetailRow label="Received">{submittedAt}</DetailRow>

            <Hr style={{ borderColor: "#e8e8ea", margin: "24px 0" }} />

            <Text style={{ margin: "0 0 8px", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#8a8a8a" }}>
              Message
            </Text>
            <Text style={{ margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#27272a", whiteSpace: "pre-wrap" }}>
              {message}
            </Text>

            <Hr style={{ borderColor: "#e8e8ea", margin: "24px 0" }} />

            <Text style={{ margin: 0, fontSize: "13px", color: "#6e6e6e" }}>
              Reply directly to this email to respond to {name.split(" ")[0]} — the reply-to is set to
              their address.
            </Text>
          </Section>
          <Text style={{ textAlign: "center", fontSize: "12px", color: "#a1a1aa", margin: "16px 0 0" }}>
            FlowPilot · contact form · flowpilotuk.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Row style={{ marginBottom: "10px" }}>
      <Column style={{ width: "96px", verticalAlign: "top" }}>
        <Text style={{ margin: 0, fontSize: "13px", color: "#8a8a8a" }}>{label}</Text>
      </Column>
      <Column>
        <Text style={{ margin: 0, fontSize: "15px", color: "#18181b", fontWeight: 500 }}>{children}</Text>
      </Column>
    </Row>
  );
}

export default InternalNotificationEmail;
