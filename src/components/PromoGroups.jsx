import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function PromoGroups() {
  const phone = "2615257366";
  const wa = `https://wa.me/54${phone}?text=${encodeURIComponent(
    "Hola! Quiero reservar para un grupo (16+). ¿Me pasás disponibilidad?",
  )}`;

  return (
    <section id="promo" className="py-14">
      <Container>
        <div className="card overflow-hidden">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-7 md:p-10">
              <SectionTitle
                eyebrow="Promo para grupos"
                title="Venís con tu gente, festejás mejor"
                subtitle="Reservando para 16 o más personas: el cumpleañero no paga."
              />

              <div className="mt-4 space-y-2 text-sm">
                <p className="muted">✅ Tenedor libre + parrillada completa</p>
                <p className="muted">✅ Bebida libre durante toda la cena</p>
                <p className="muted">✅ Ambiente familiar y de amigos</p>
              </div>

              <a
                href={wa}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-black hover:opacity-90 md:w-auto"
              >
                Reservar para grupo por WhatsApp
              </a>
            </div>

            <div className="relative min-h-[240px] border-t border-white/10 md:border-t-0 md:border-l">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative p-7 md:p-10">
                <p className="text-sm font-semibold">Precios</p>
                <div className="mt-3 grid gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs muted">Adultos</p>
                    <p className="text-2xl font-semibold">$32.700</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs muted">Niños (3 a 10)</p>
                    <p className="text-2xl font-semibold">$12.700</p>
                  </div>
                </div>

                <p className="mt-4 text-xs muted">
                  * Bebida libre: vino de la casa, soda y gaseosas (durante la
                  cena).
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
