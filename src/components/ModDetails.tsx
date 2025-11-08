import Image from "next/image";

type ModDetailsProps = {
  title: string;
  number: string;
  cover: { src: string; alt: string };
  description: string;
};

export function ModDetails({ title, number, cover, description }: ModDetailsProps) {
  return (
    <header className="content__header--mod">
      <div className="content__title--wrap">
        <h1 className="content__title">{title}</h1>
        <span className="content__num">{number}</span>
      </div>

      <div className="content__preview">
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 704px"
          className="content__preview-image"
        />
      </div>

      <div className="content__description--box">
        <p className="content__description">{description}</p>
      </div>
    </header>
  );
}
