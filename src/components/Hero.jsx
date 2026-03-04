import Container from "./Container";
import Badge from "./Badge";
import Image from "next/image";

export default function Hero() {
  const phone = "2615257366";
  const wa = `https://wa.me/54${phone}?text=${encodeURIComponent(
    "Hola! Quiero reservar en Las Marías (Carrodilla).",
  )}`;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[var(--color-accent)] blur-3xl opacity-20" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white blur-3xl opacity-10" />
      </div>

      <Container className="relative py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge>🍷 Bebida libre</Badge>
              <Badge>🥩 Parrillada completa</Badge>
              <Badge>🍝 Variedad de platos</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              La experiencia más{" "}
              <span className="text-[var(--color-accent-2)]">abundante</span>{" "}
              para compartir en Carrodilla.
            </h1>

            <p className="mt-4 muted max-w-xl">
              Tenedor libre con parrilla completa, empanadas, sorrentinos,
              paella, fiambres y papas rústicas. Comé sin apuros, brindá sin
              límites.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-semibold text-black hover:opacity-90"
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#menu"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver lo que incluye
              </a>
            </div>

            <div className="mt-6 border-t border-white/10 pt-5 text-sm">
              <p className="muted">
                📍 JJ Paso 272, Carrodilla (cerca de la rotonda de la Virgen)
              </p>
              <p className="muted">📲 Reservas: {phone}</p>
            </div>
          </div>

          <div className="card p-3">
            <div className="relative aspect-[4/5] h-full overflow-hidden rounded-[20px] border border-white/10 bg-white/5">
              <Image src="/hero.png" alt="las marias carrodilla" fill="cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/40" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold">
                  Nuevo: Rosato (aperitivo rosado) para brindar 🍹
                </p>
                <p className="mt-1 text-xs muted">
                  Ideal para arrancar la noche antes de la parrilla.
                </p>
              </div>
              <div className="absolute top-4 left-4">
                <Badge>🔥 “Vení con hambre”</Badge>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
