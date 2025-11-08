import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Sidebar } from "@/components/Sidebar";
import { SearchForm } from "@/components/SearchForm";
import { ModCard } from "@/components/ModCard";
import { mods, PLATFORMS, type Platform } from "@/data/mods";

type PlatformPageProps = {
  params: Promise<{ platform: Platform }>;
};

const PLATFORM_TITLES: Record<Platform, string> = {
  "webflow": "Модификации для Webflow",
  "custom-code": "Модификации с кастомным кодом",
  "tilda": "Модификации для Tilda Publishing",
};

export async function generateStaticParams() {
  return PLATFORMS.map((platform) => ({ platform }));
}

export async function generateMetadata(
  { params }: PlatformPageProps
): Promise<Metadata> {
  const { platform } = await params;

  if (!PLATFORMS.includes(platform)) {
    return {
      title: "Категория не найдена • DP Mods",
    };
  }

  return {
    title: `${PLATFORM_TITLES[platform]} • DP Mods`,
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { platform } = await params;

  if (!PLATFORMS.includes(platform)) {
    notFound();
  }

  const filtered = mods
    .filter((mod) => mod.platform === platform)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <Sidebar />
      <main className="content">
        <div className="content__inner">

          <header className="content__header">
            <h1 className="content__title">{PLATFORM_TITLES[platform]}</h1>
          </header>

          <section
            className="mods"
            aria-label={`Список модификаций: ${PLATFORM_TITLES[platform]}`}
          >
            <div className="mods__grid">
              {filtered.map(({ slug, title, cover, order, platform }) => (
                <ModCard
                  key={slug}
                  href={`/${platform}/${slug}`}
                  order={order}
                  title={title}
                  cover={cover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
