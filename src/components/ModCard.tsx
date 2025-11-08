import Image from "next/image";

type ModCardProps = {
  href: string;
  order: number;
  title: string;
  cover: {
    src: string;
    alt: string;
};
}

export function ModCard({href, order, title, cover}: ModCardProps) {
  const number = String(order).padStart(3, "0");

  return (
    <article className="mod-card">
      <a href={href} className="mod-card__link">
        <div className="mod-card__thumb">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="mod-card__image"
          />
        </div>
        <div className="mod-card__info">
          <span className="mod-card__num">{number}</span>
          <h2 className="mod-card__name">{title}</h2>
        </div>
      </a>
    </article>
  );
}
