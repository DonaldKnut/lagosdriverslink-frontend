import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Row,
  Column,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  dob: string;
};

export default function UserRegistrationEmail({
  name,
  email,
  dob,
}: Props) {
  return (
    <Html>
      <Head />
      <Preview>New User Registration</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column align="center">
                <Heading style={heading}>👤 New User Registration</Heading>
                <Text style={subHeading}>
                  LagosDriversLink - User Account Created
                </Text>
              </Column>
            </Row>
          </Section>

          {/* Content */}
          <Section style={content}>
            <Text style={paragraph}>Hello Team,</Text>
            <Text style={paragraph}>
              A new user has registered on LagosDriversLink. Here are the details:
            </Text>

            {/* Details Card */}
            <Section style={card}>
              <Row>
                <Column>
                  <Text style={label}>Full Name</Text>
                  <Text style={value}>{name}</Text>
                </Column>
              </Row>
              <Row style={rowSpacing}>
                <Column width="50%">
                  <Text style={label}>Email Address</Text>
                  <Text style={value}>{email}</Text>
                </Column>
                <Column width="50%">
                  <Text style={label}>Date of Birth</Text>
                  <Text style={value}>{dob}</Text>
                </Column>
              </Row>
              <Row style={rowSpacing}>
                <Column>
                  <Text style={label}>Account Type</Text>
                  <Text style={value}>Client</Text>
                </Column>
              </Row>
            </Section>

            <Text style={footerText}>
              This user can now access all services on LagosDriversLink.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerNote}>
              LagosDriversLink &copy; {new Date().getFullYear()}
            </Text>
            <Text style={footerNote}>123 Driver Avenue, Lagos, Nigeria</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif",
  padding: "20px 0",
};

const container = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#111111",
  borderRadius: "8px",
};

const header = {
  paddingBottom: "20px",
  borderBottom: "1px solid #1f1f1f",
  marginBottom: "20px",
};

const heading = {
  color: "#f7b500",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0 0 10px 0",
};

const subHeading = {
  color: "#a0a0a0",
  fontSize: "14px",
  margin: "0",
};

const content = {
  padding: "0 0 20px 0",
};

const paragraph = {
  color: "#e0e0e0",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 15px 0",
};

const card = {
  backgroundColor: "#1a1a1a",
  borderRadius: "6px",
  padding: "20px",
  margin: "20px 0",
  borderLeft: "4px solid #f7b500",
};

const label = {
  color: "#a0a0a0",
  fontSize: "14px",
  fontWeight: "500",
  margin: "0 0 5px 0",
};

const value = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 15px 0",
};

const rowSpacing = {
  marginTop: "15px",
};

const footerText = {
  color: "#a0a0a0",
  fontSize: "14px",
  textAlign: "center" as const,
  margin: "20px 0 0 0",
};

const footer = {
  borderTop: "1px solid #1f1f1f",
  paddingTop: "20px",
  textAlign: "center" as const,
};

const footerNote = {
  color: "#666666",
  fontSize: "12px",
  margin: "5px 0",
};









