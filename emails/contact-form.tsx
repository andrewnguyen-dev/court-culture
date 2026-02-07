import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={body}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://www.courtculture.com.au/logo-horizontal-white.png"
              width="160"
              height="40"
              alt="Court Culture"
              style={logo}
            />
          </Section>

          {/* Content */}
          <Section style={content}>
            <Heading style={heading}>New Contact Submission</Heading>
            <Text style={paragraph}>
              You received a new message from the Court Culture website.
            </Text>

            <Hr style={divider} />

            {/* Sender Details */}
            <Section style={detailBlock}>
              <Text style={label}>NAME</Text>
              <Text style={value}>{name}</Text>
            </Section>

            <Section style={detailBlock}>
              <Text style={label}>EMAIL</Text>
              <Text style={value}>{email}</Text>
            </Section>

            <Hr style={divider} />

            {/* Message */}
            <Section style={detailBlock}>
              <Text style={label}>MESSAGE</Text>
              <Text style={messageText}>{message}</Text>
            </Section>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              This email was sent from the contact form at courtculture.com.au
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#f2f2f2",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  margin: "0",
  padding: "0",
};

const container: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
};

const header: React.CSSProperties = {
  backgroundColor: "#141414",
  padding: "32px 40px",
  borderRadius: "8px 8px 0 0",
};

const logo: React.CSSProperties = {
  display: "block",
};

const content: React.CSSProperties = {
  backgroundColor: "#ffffff",
  padding: "40px",
};

const heading: React.CSSProperties = {
  color: "#141414",
  fontSize: "24px",
  fontWeight: "600",
  letterSpacing: "-0.025em",
  margin: "0 0 8px 0",
};

const paragraph: React.CSSProperties = {
  color: "#737373",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 24px 0",
};

const divider: React.CSSProperties = {
  borderColor: "#e5e5e5",
  margin: "24px 0",
};

const detailBlock: React.CSSProperties = {
  marginBottom: "16px",
};

const label: React.CSSProperties = {
  color: "#a3a3a3",
  fontSize: "12px",
  fontWeight: "500",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  margin: "0 0 4px 0",
};

const value: React.CSSProperties = {
  color: "#141414",
  fontSize: "16px",
  fontWeight: "500",
  margin: "0",
};

const messageText: React.CSSProperties = {
  color: "#141414",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const footer: React.CSSProperties = {
  backgroundColor: "#141414",
  padding: "24px 40px",
  borderRadius: "0 0 8px 8px",
};

const footerText: React.CSSProperties = {
  color: "#a3a3a3",
  fontSize: "13px",
  margin: "0",
  textAlign: "center" as const,
};
