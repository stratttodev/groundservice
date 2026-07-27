import React from "react";
import {
  Html,
  Head,
  Preview,
  Tailwind,
  Body,
  Container,
  Heading,
  Hr,
  Text,
} from "@react-email/components";

interface InstitutionalTemplateProps {
  previewText: string;
  heading: string;
  children: React.ReactNode;
}

export default function InstitutionalTemplate({
  previewText,
  heading,
  children,
}: InstitutionalTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                "gs-crimson": "#FF073A",
                "gs-ink": "#202928",
                "gs-sand": "#E2DAD2",
              },
            },
          },
        }}
      >
        <Body className="bg-white font-sans">
          <Container className="max-w-[600px] mx-auto">
            <div className="bg-gs-ink px-8 py-6">
              <Heading className="text-gs-crimson text-xl font-bold m-0">
                GroundService
              </Heading>
            </div>

            <div className="px-8 py-8">
              <Heading className="text-gs-ink text-2xl font-bold mb-6">
                {heading}
              </Heading>
              {children}
            </div>

            <Hr className="border-gray-200 mx-8" />

            <div className="px-8 py-6">
              <Text className="text-gray-400 text-xs m-0">
                GroundService &middot; Camino a Chiu-Chiu Manzana 1, Sitio 12
                &middot; Calama, Región de Antofagasta
              </Text>
              <Text className="text-gray-400 text-xs m-0 mt-1">
                contacto@groundservice.cl
              </Text>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
