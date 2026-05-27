"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

type ConsentState = "accepted" | "declined" | null;

interface YandexMetrikaProps {
  counterId?: string;
}

const CONSENT_STORAGE_KEY = "analytics-consent";
const GOAL_ATTRIBUTE = "data-metrika-goal";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

function getGoalByHref(href: string) {
  if (href.startsWith("tel:")) return "click_phone";
  if (href.startsWith("mailto:")) return "click_email";
  if (href.includes("wa.me/")) return "click_whatsapp";
  if (href.includes("t.me/")) return "click_telegram";
  if (href.includes("web.max.ru/")) return "click_max";
  if (href.includes("instagram.com/")) return "click_instagram";

  return null;
}

export default function YandexMetrika({ counterId }: YandexMetrikaProps) {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

      if (savedConsent === "accepted" || savedConsent === "declined") {
        setConsent(savedConsent);
      }

      setIsReady(true);
    }, 0);

    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!counterId) return;

    const handleGoalClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const goalElement = target.closest(`[${GOAL_ATTRIBUTE}], a`);

      if (!goalElement) return;

      const explicitGoal = goalElement.getAttribute(GOAL_ATTRIBUTE);
      const goal =
        explicitGoal ||
        (goalElement instanceof HTMLAnchorElement ? getGoalByHref(goalElement.href) : null);

      if (!goal || typeof window.ym !== "function") return;

      window.ym(Number(counterId), "reachGoal", goal);
    };

    document.addEventListener("click", handleGoalClick);

    return () => document.removeEventListener("click", handleGoalClick);
  }, [counterId]);

  const handleConsent = (nextConsent: Exclude<ConsentState, null>) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextConsent);
    setConsent(nextConsent);
  };

  const shouldLoadMetrika = Boolean(counterId) && isReady && consent !== "declined";
  const shouldShowBanner = isReady && consent === null;

  return (
    <>
      {shouldLoadMetrika && (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=${counterId}", "ym");
            ym(${counterId}, "init", {
              clickmap: true,
              ecommerce: "dataLayer",
              referrer: document.referrer,
              url: location.href,
              trackLinks: true,
              accurateTrackBounce: true,
              ssr: true,
              webvisor: true
            });
          `}
        </Script>
      )}

      {shouldShowBanner && (
        <div className="fixed inset-x-0 bottom-0 z-[120] px-4 pb-4 sm:pb-6">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 text-gray-800 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <p className="text-sm leading-6 sm:text-base">
              Сайт использует cookie и Яндекс Метрику для анализа посещаемости.
              Подробнее в{" "}
              <Link href="/privacy" className="font-semibold text-blue-700 underline underline-offset-4">
                политике конфиденциальности
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => handleConsent("declined")}
                className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              >
                Отклонить
              </button>
              <button
                type="button"
                onClick={() => handleConsent("accepted")}
                className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Принять
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
