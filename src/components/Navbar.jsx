import Image from "next/image";
import Container from "./Container";

export default function Navbar() {
  const phone = "2615257366";
  const wa = `https://wa.me/54${phone}?text=${encodeURIComponent(
    "Hola! Quiero reservar en Las Marías. ¿Me pasás disponibilidad?",
  )}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-bg)]/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 border border-white/10">
            <Image
              src="/logo.jpg"
              alt="las-marías-restaurante-parrill-libre"
              width={100}
              height={100}
            />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">Las Marías</p>
            <p className="text-xs muted">Parrilla completa libre</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex text-sm">
          <a className="muted hover:text-white" href="#menu">
            Menú
          </a>
          <a className="muted hover:text-white" href="#promo">
            Promo grupos
          </a>
          <a className="muted hover:text-white" href="#galeria">
            Galería
          </a>
          <a className="muted hover:text-white" href="#ubicacion">
            Ubicación
          </a>
        </nav>

        <a
          href={wa}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-[var(--color-accent)] px-4 py-2 text-sm font-semibold text-black hover:opacity-90 active:opacity-80"
        >
          Reservar
        </a>
      </Container>
    </header>
  );
}
