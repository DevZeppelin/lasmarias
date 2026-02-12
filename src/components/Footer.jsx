import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">Las Marías</p>
          <p className="text-sm muted">
            JJ Paso 272, Carrodilla · Reservas: 2615257366
          </p>
        </div>
        <p className="text-xs muted">
          Made in Mendoza by{" "}
          <a href="https://devzeppelin.com.ar" target="_blank" rel="noreferrer">
            Dev Zeppelin
          </a>{" "}
          © {new Date().getFullYear()}.
        </p>
      </Container>
    </footer>
  );
}
