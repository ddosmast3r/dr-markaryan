import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности - Доктор Маркарян Эдуард Жорикович",
  description: "Политика обработки персональных данных и использования cookie на сайте доктора Маркаряна Эдуарда Жориковича.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
            На главную
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Политика конфиденциальности
          </h1>
          <p className="mt-3 text-gray-600">Дата публикации: 15 мая 2026 г.</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="space-y-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
          <div className="space-y-3">
            <h2 className="text-xl font-bold">1. Общие положения</h2>
            <p className="leading-7 text-gray-700">
              Настоящая политика описывает порядок обработки персональных данных и использования cookie
              на сайте доктора Маркаряна Эдуарда Жориковича. Оператор обрабатывает данные посетителей
              только в объеме, необходимом для работы сайта, связи с посетителями и анализа посещаемости.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">2. Какие данные могут обрабатываться</h2>
            <p className="leading-7 text-gray-700">
              При обращении по телефону, email или через внешние мессенджеры посетитель может самостоятельно
              передать имя, контактные данные и содержание обращения. Сайт также может получать технические
              сведения: IP-адрес, данные о браузере, устройстве, времени посещения, источнике перехода и
              действиях на страницах.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">3. Цели обработки</h2>
            <p className="leading-7 text-gray-700">
              Данные используются для ответа на обращения, записи на прием, обеспечения корректной работы
              сайта, улучшения структуры страниц и оценки эффективности информационных материалов.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">4. Cookie и Яндекс Метрика</h2>
            <p className="leading-7 text-gray-700">
              Сайт использует cookie и сервис Яндекс Метрика после согласия посетителя. Метрика предоставляет
              обезличенную статистику посещаемости, источников переходов и поведения на страницах. Для учета
              посещений могут использоваться cookie, localStorage и sessionStorage, включая идентификаторы
              браузера и служебные параметры работы счетчика.
            </p>
            <p className="leading-7 text-gray-700">
              В Яндекс Метрику не следует передавать идентифицирующие сведения, такие как ФИО, телефон,
              email, адрес, медицинская информация и содержание личных обращений. Посетитель может отказаться
              от аналитических cookie в баннере при первом посещении либо ограничить cookie в настройках
              браузера.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">5. Передача данных третьим лицам</h2>
            <p className="leading-7 text-gray-700">
              Для аналитики используется сервис Яндекс Метрика. При переходе в WhatsApp, Telegram, Max,
              Instagram или почтовый клиент обработка данных также регулируется правилами соответствующих
              сервисов. Оператор не продает персональные данные посетителей.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">6. Права посетителя</h2>
            <p className="leading-7 text-gray-700">
              Посетитель может запросить уточнение, блокирование или удаление своих персональных данных,
              а также отозвать согласие на обработку, направив обращение на контактный email сайта.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">7. Контакты</h2>
            <p className="leading-7 text-gray-700">
              По вопросам обработки персональных данных можно обратиться по email{" "}
              <a href="mailto:doc.edmarkaryan@yandex.ru" className="font-semibold text-blue-700 hover:text-blue-900">
                doc.edmarkaryan@yandex.ru
              </a>{" "}
              или по телефону{" "}
              <a href="tel:+79383030311" className="font-semibold text-blue-700 hover:text-blue-900">
                +7 938 303 03 11
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
