import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Sidebar } from "@/components/Sidebar";
import { SearchForm } from "@/components/SearchForm";
import { ModDetails } from "@/components/ModDetails";
import { CodeBlock } from "@/components/CodeBlock";
import { mods, PLATFORMS, type Platform } from "@/data/mods";

type ModPageParams = {
  platform: Platform;
  slug: string;
};

type ModPageProps = {
  params: Promise<ModPageParams>;
};

function findMod(platform: Platform, slug: string) {
  return mods.find(
    (item) => item.platform === platform && item.slug === slug,
  );
}

export async function generateStaticParams() {
  return mods.map(({ platform, slug }) => ({
    platform,
    slug,
  }));
}

export async function generateMetadata(
  { params }: ModPageProps
): Promise<Metadata> {
  const { platform, slug } = await params;

  if (!PLATFORMS.includes(platform)) {
    return { title: "Модификация не найдена • DP Mods" };
  }

  const mod = findMod(platform, slug);
  if (!mod) {
    return { title: "Модификация не найдена • DP Mods" };
  }

  return { title: `${mod.title} • DP Mods` };
}

export default async function ModPage({ params }: ModPageProps) {
  const { platform, slug } = await params;

  if (!PLATFORMS.includes(platform)) {
    return notFound();
  }

  const mod = findMod(platform, slug);

  if (!mod) {
    return notFound();
  }

  const number = String(mod.order).padStart(3, "0");
  const { title, description, cover, code } = mod;

  return (
    <>
      <Sidebar />
      <main className="content">
        <div className="content__inner content__inner--mod">
          <ModDetails
            title={title}
            number={number}
            cover={cover}
            description={description}
          />
          <CodeBlock language={code.language} snippet={code.snippet} />
        </div>
      </main>
    </>
  );
}
