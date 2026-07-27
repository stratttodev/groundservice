import { Container, Text } from "@react-email/components";
import InstitutionalTemplate from "./InstitutionalTemplate";

interface ContactNotificationProps {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}

const fieldStyle: React.CSSProperties = { marginBottom: 16 };
const labelStyle: React.CSSProperties = {
  fontSize: 12,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  color: "#9ca3af",
  margin: 0,
  marginBottom: 4,
};
const valueStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#202928",
  margin: 0,
};

export default function ContactNotification({
  nombre,
  empresa,
  email,
  telefono,
  mensaje,
}: ContactNotificationProps) {
  return (
    <InstitutionalTemplate
      previewText={`Nueva solicitud de cotización de ${empresa}`}
      heading="Nueva solicitud de cotización"
    >
      <Container className="bg-gs-sand rounded-lg p-6">
        <div style={fieldStyle}>
          <Text style={labelStyle}>Nombre</Text>
          <Text style={valueStyle}>{nombre}</Text>
        </div>
        <div style={fieldStyle}>
          <Text style={labelStyle}>Empresa</Text>
          <Text style={valueStyle}>{empresa}</Text>
        </div>
        <div style={fieldStyle}>
          <Text style={labelStyle}>Email</Text>
          <Text style={valueStyle}>{email}</Text>
        </div>
        <div style={fieldStyle}>
          <Text style={labelStyle}>Teléfono</Text>
          <Text style={valueStyle}>{telefono || "—"}</Text>
        </div>
        <div style={{ marginBottom: 0 }}>
          <Text style={labelStyle}>Mensaje</Text>
          <Text style={valueStyle}>{mensaje}</Text>
        </div>
      </Container>
    </InstitutionalTemplate>
  );
}
