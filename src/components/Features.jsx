import Container from "./Container";
import SectionTitle from "./SectionTitle";

const items = [
  {
    title: "Bebida libre",
    desc: "Vino de la casa, soda y gaseosas durante la cena.",
  },
  {
    title: "Tenedor libre real",
    desc: "Parrilla completa + variedad de platos caseros.",
  },
  {
    title: "Plan ideal para grupos",
    desc: "Mesas largas, ambiente familiero y de amigos.",
  },
  {
    title: "Ubicación fácil",
    desc: "Carrodilla, cerca de la rotonda de la Virgen.",
  },
];

export default function Features() {
  return (
    <section className="py-14">
      <Container>
        <SectionTitle
          eyebrow="Lo que hace única la experiencia"
          title="Comer abundante, compartir mejor"
          subtitle="Una propuesta completa para venir en familia, con amigos o a festejar."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="card p-5">
              <p className="text-base font-semibold">{it.title}</p>
              <p className="mt-2 text-sm muted">{it.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
