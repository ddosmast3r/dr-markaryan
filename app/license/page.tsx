import Link from "next/link";

export const metadata = {
  title: "Сведения о лицензии - Доктор Маркарян Эдуард Жорикович",
  description: "Сведения о медицинской организации и лицензии на осуществление медицинской деятельности.",
};

export default function LicensePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
          <Link href="/" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
            На главную
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Сведения о лицензии
          </h1>
          <p className="mt-3 text-gray-600">
            Медицинские услуги, представленные на сайте, оказываются в лицензированной медицинской организации.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <div className="space-y-10 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 sm:p-10">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Медицинская организация</h2>
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[16rem_1fr]">
              <dt className="text-gray-500">Полное наименование</dt>
              <dd>Общество с ограниченной ответственностью «ЛПУ-Гармония»</dd>

              <dt className="text-gray-500">Сокращённое наименование</dt>
              <dd>ООО «ЛПУ-Гармония»</dd>

              <dt className="text-gray-500">ИНН</dt>
              <dd>2632122769</dd>

              <dt className="text-gray-500">ОГРН</dt>
              <dd>1232600013854</dd>

              <dt className="text-gray-500">Юридический адрес</dt>
              <dd>357502, Ставропольский край, г. Пятигорск, пр-кт Калинина, зд. 90А</dd>

              <dt className="text-gray-500">Адрес оказания медицинской деятельности</dt>
              <dd>357502, Ставропольский край, г. Пятигорск, пр-кт Калинина, зд. 90А</dd>
            </dl>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Лицензия на осуществление медицинской деятельности</h2>
            <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[16rem_1fr]">
              <dt className="text-gray-500">Номер лицензии</dt>
              <dd className="font-mono">Л041-01197-26/01072904</dd>

              <dt className="text-gray-500">Дата предоставления</dt>
              <dd>27 февраля 2024 г.</dd>

              <dt className="text-gray-500">Срок действия</dt>
              <dd>Бессрочно</dd>

              <dt className="text-gray-500">Лицензирующий орган</dt>
              <dd>Министерство здравоохранения Ставропольского края</dd>

              <dt className="text-gray-500">Вид деятельности</dt>
              <dd>Медицинская деятельность</dd>
            </dl>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">Перечень работ (услуг)</h2>
            <p className="leading-7 text-gray-700">
              При оказании первичной медико-санитарной помощи по адресу
              г. Пятигорск, пр-кт Калинина, зд. 90А организуются и выполняются
              следующие работы (услуги):
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="leading-7">
                <span className="font-semibold">Первичная доврачебная помощь в амбулаторных условиях:</span>{' '}
                медицинский массаж; сестринское дело; сестринское дело в педиатрии.
              </p>
              <p className="leading-7">
                <span className="font-semibold">Первичная врачебная помощь в амбулаторных условиях:</span>{' '}
                педиатрия; терапия.
              </p>
              <p className="leading-7">
                <span className="font-semibold">Первичная специализированная помощь в амбулаторных условиях:</span>{' '}
                акушерство и гинекология (за исключением вспомогательных репродуктивных технологий и
                искусственного прерывания беременности); аллергология и иммунология; гастроэнтерология;
                дерматовенерология; детская кардиология; детская урология-андрология; детская хирургия;
                детская эндокринология; кардиология; косметология; неврология; онкология; организация
                здравоохранения и общественное здоровье; эпидемиология; оториноларингология (за исключением
                кохлеарной имплантации); ревматология; травматология и ортопедия; ультразвуковая
                диагностика; урология; функциональная диагностика; хирургия; эндокринология.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold">Проверка лицензии</h2>
            <p className="leading-7 text-gray-700">
              Актуальные сведения о лицензии доступны в Едином реестре лицензий на сайте Министерства
              здравоохранения Ставропольского края, а также через портал Росздравнадзора.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
