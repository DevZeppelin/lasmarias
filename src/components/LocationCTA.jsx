import Image from "next/image";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function LocationCTA() {
  const phone = "2615257366";
  const wa = `https://wa.me/54${phone}?text=${encodeURIComponent(
    "Hola! Quiero reservar en Las Marías. ¿Me confirmás horarios y disponibilidad?",
  )}`;

  // Link simple a Google Maps (podés reemplazar por el exacto)
  const maps =
    "https://www.google.com/maps/search/?api=1&query=JJ%20Paso%20272%20Carrodilla%20Mendoza";

  return (
    <section id="ubicacion" className="py-14">
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-7 md:p-10">
            <SectionTitle
              eyebrow="Ubicación y reservas"
              title="Vení a conocer la experiencia"
              subtitle="Comida abundante, bebida libre y un ambiente que invita a quedarse."
            />

            <div className="mt-4 space-y-2 text-sm">
              <p className="muted">
                📍 JJ Paso 272, Carrodilla (cerca de la rotonda de la Virgen)
              </p>
              <p className="muted">📲 Reservas: {phone}</p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-semibold text-white hover:opacity-90"
              >
                Reservar por WhatsApp
              </a>
              <a
                href={maps}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10"
              >
                Cómo llegar
              </a>
            </div>
          </div>

          <div className="card p-3">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-white/5">
              {/* Podés reemplazar por un iframe de Google Maps si querés */}
              <div className="h-full w-full bg-gradient-to-br from-white/10 to-transparent p-6">
                <p className="text-sm font-semibold">Carrodilla, Mendoza</p>
                <p className="mt-2 text-sm muted">
                  Ubicación fácil y cerca de puntos conocidos. Ideal para venir
                  en grupo.
                </p>
                <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-xs muted">
                  <Image
                    src="/images/gallery/gal-10-frente.webp"
                    alt="Las Marías – Carrodilla"
                    width={1200}
                    height={1200}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
