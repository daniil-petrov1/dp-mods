import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { SearchForm } from "@/components/SearchForm";
import { ModCard } from "@/components/ModCard";
import { mods } from "@/data/mods";

export const metadata: Metadata = {
  title: "Библиотека модификаций DP Mods",
};

export default function HomePage() {
  return (
    <>
      <Sidebar />

      <main className="content">
        <div className="content__inner">
          <SearchForm />

          <header className="content__header">
            <h1 className="content__title">Библиотека модификаций DP Mods</h1>
          </header>

          <section className="mods" aria-label="Список модификаций">
            <div className="mods__grid">
              {mods
                .slice()
                .sort((a, b) => a.order - b.order)
                .map(({ slug, title, cover, order, platform }) => (
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
  )
}
