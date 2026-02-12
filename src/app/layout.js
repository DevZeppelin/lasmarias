import "./globals.css";

export const metadata = {
  title: "Las Marías | Parrilla Completa Libre en Carrodilla",
  description:
    "Parrillada completa y tenedor libre con bebida libre. JJ Paso 272, Carrodilla, Mendoza. Reservas: 2615257366.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
