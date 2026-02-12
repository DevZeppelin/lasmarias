import Container from "./Container";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const images = [
  { src: "/images/gallery/gal-01-parrilla.jpg", title: "Parrilla al fuego" },
  {
    src: "/images/gallery/gal-02-parrilla-tabla.jpg",
    title: "Cortes bien servidos",
  },
  { src: "/images/gallery/gal-03-empanadas.jpg", title: "Empanadas caseras" },
  {
    src: "/images/gallery/gal-04-sorrentinos.jpg",
    title: "Sorrentinos artesanales",
  },
  { src: "/images/gallery/gal-05-paella.jpg", title: "Paella abundante" },
  { src: "/images/gallery/gal-06-fiambres.jpg", title: "Tabla de fiambres" },
  {
    src: "/images/gallery/gal-07-papas-rusticas.jpg",
    title: "Papas rústicas crocantes",
  },
  { src: "/images/gallery/gal-08-ambiente.jpg", title: "Ambiente familiero" },
  {
    src: "/images/gallery/gal-09-brindis.jpg",
    title: "Brindis y bebida libre",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16">
      <Container>
        <SectionTitle
          eyebrow="Galería"
          title="Una experiencia que se ve… y se saborea"
          subtitle="Parrilla, variedad, brindis y momentos compartidos."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold text-white">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
