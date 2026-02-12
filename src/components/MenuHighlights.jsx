import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Badge from "./Badge";

const dishes = [
  {
    emoji: "🥩",
    name: "Parrillada completa",
    desc: "Cortes bien servidos, al punto, como se debe.",
  },
  {
    emoji: "🥘",
    name: "Paella",
    desc: "Abundante y sabrosa, perfecta para compartir.",
  },
  {
    emoji: "🍝",
    name: "Sorrentinos",
    desc: "Caseros, suaves y bien rellenos.",
  },
  {
    emoji: "🥟",
    name: "Empanadas",
    desc: "Caseras, bien criollas, para arrancar fuerte.",
  },
  {
    emoji: "🧀",
    name: "Tabla de fiambres",
    desc: "Ideal para picar y brindar.",
  },
  {
    emoji: "🥔",
    name: "Papas rústicas",
    desc: "Crocantes, calentitas, adictivas.",
  },
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-14">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Menú destacado"
            title="Un recorrido de sabores (sin límites)"
            subtitle="Vas pasando por delicias, y siempre volvés a la parrilla."
          />
          <div className="flex flex-wrap gap-2">
            <Badge>🍷 Bebida libre</Badge>
            <Badge>🍹 Rosato para brindar</Badge>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d) => (
            <div key={d.name} className="card p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                  <span className="text-xl">{d.emoji}</span>
                </div>
                <div>
                  <p className="font-semibold">{d.name}</p>
                  <p className="mt-1 text-sm muted">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 card p-5">
          <p className="text-sm">
            🍹 <span className="font-semibold">Nuevo aperitivo rosado:</span>{" "}
            sumalo para arrancar con un brindis fresco antes de la parrilla.
          </p>
        </div>
      </Container>
    </section>
  );
}
