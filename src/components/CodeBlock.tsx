"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { BiSolidCopy, BiCheck } from "react-icons/bi";

import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

type CodeBlockProps = {
  language: "html" | "css" | "js";
  snippet: string;
};

const prismLanguageMap: Record<CodeBlockProps["language"], string> = {
  html: "markup",
  css: "css",
  js: "javascript",
};

export function CodeBlock({ language, snippet }: CodeBlockProps) {
  const prismLanguage = prismLanguageMap[language];

  const highlighted = useMemo(
    () =>
      Prism.highlight(
        snippet.trim(),
        Prism.languages[prismLanguage],
        prismLanguage
      ),
    [snippet, prismLanguage]
  );

  const [isCopied, setIsCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(snippet.trim());
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  }, [snippet]);

  useEffect(() => {
    if (!isCopied) {
      return undefined;
    }

    if (resetTimerRef.current) {
      clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = setTimeout(() => {
      setIsCopied(false);
      resetTimerRef.current = null;
    }, 2000);

    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
        resetTimerRef.current = null;
      }
    };
  }, [isCopied]);

  return (
    <section className="code-block--wrap">
      <div className="content__header">
        <h2 className="content__title">Код</h2>
      </div>

      <div className="code-block">
        <button type="button" className={`code-block__copy${
            isCopied ? " code-block__copy--success" : ""
          }`}
          aria-label={isCopied ? "Код скопирован" : "Скопировать код"}
          onClick={handleCopy}
        >
          {isCopied ? (
            <BiCheck aria-hidden="true" />
          ) : (
            <BiSolidCopy aria-hidden="true" />
          )}
          <span className="visually-hidden">
            {isCopied ? "Код скопирован" : "Скопировать код"}
          </span>
        </button>

        <pre className={`language-${language}`} tabIndex={0}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    </section>
  );
}
