export type Platform = "webflow" | "custom-code" | "tilda";

export type Mod = {
  slug: string;
  order: number;
  title: string;
  description: string;
  cover: {
    src: string;
    alt: string;
  };
  code: {
    language: "html" | "css" | "js";
    snippet: string;
  };
  platform: Platform;
  resources?: Array<{ label: string; url: string }>;
};

export const PLATFORMS: readonly Platform[] = [
  "webflow",
  "custom-code",
  "tilda",
] as const;

export const mods: Mod[] = [
  {
    slug: "video-bg",
    order: 1,
    title: "Видео на фоне в зеро блок",
    description:
      "Видео добавляется в элемент HTML в зероблоке.  Поправить ссылку: вместо www.dropbox.com поставить dl.dropboxusercontent.com",
    cover: {
      src: "/img/tilda-video-bg.jpg",
      alt: "Превью модификации «Видео на фоне в зеро блок»",
    },
    code: {
      language: "html",
      snippet: `<video style="object-fit: cover; background-size: cover; width: 100%; height: 100%" preload="auto" playsinline autoplay loop muted>
  <source src="https://dl.dropboxusercontent.com/scl/fi/9gm9c7a1dnelz0d8jy4v6/bg-vid.mp4?rlkey=h9kfretr8sx7xmdv1z34ek4m2&st=vxpdxqqi&dl=0" type="video/mp4">
</video>`,
    },
    platform: "tilda",
  },
  {
    slug: "parallax-scroll",
    order: 2,
    title: "Паралакс эффект на скролл",
    description:
      "Подробное описание, пара абзацев о том, что делает модификация. Можно оставить текст-заглушку, если готового описания нет.",
    cover: {
      src: "/img/hotel.png",
      alt: "Превью модификации «Видео на фоне в зеро блок»",
    },
    code: {
      language: "html",
      snippet: `<video style="object-fit: cover; background-size: cover; width: 100%; height: 100%" preload="auto" playsinline autoplay loop muted>
  <source src="https://dl.dropboxusercontent.com/scl/fi/9gm9c7a1dnelz0d8jy4v6/bg-vid.mp4?rlkey=h9kfretr8sx7xmdv1z34ek4m2&st=vxpdxqqi&dl=0" type="video/mp4">
</video>`,
    },
    platform: "webflow",
  },
  {
    slug: "parallax-scroll-tilda",
    order: 3,
    title: "Паралакс эффект на скролл Tilda",
    description:
      "Подробное описание, пара абзацев о том, что делает модификация. Можно оставить текст-заглушку, если готового описания нет.",
    cover: {
      src: "/img/hotel.png",
      alt: "Превью модификации «Видео на фоне в зеро блок»",
    },
    code: {
      language: "html",
      snippet: `<video style="object-fit: cover; background-size: cover; width: 100%; height: 100%" preload="auto" playsinline autoplay loop muted>
  <source src="https://dl.dropboxusercontent.com/scl/fi/9gm9c7a1dnelz0d8jy4v6/bg-vid.mp4?rlkey=h9kfretr8sx7xmdv1z34ek4m2&st=vxpdxqqi&dl=0" type="video/mp4">
</video>`,
    },
    platform: "tilda",
  },
];
