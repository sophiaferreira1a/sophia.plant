import  Button  from "../components/ui/Button";
import  Card  from "../components/ui/Card";
import  Tag  from "../components/ui/Tag";
import { certificates } from "../data/certificates";
import { useLanguage } from "../i18n/useLanguage";
import { Link } from "react-router-dom";

// converte data para número e  compara os valores 
const dateToNumber = (date) => {
  const [month, year] = date.split("/").map(Number);
  return year * 12 + month;
};

export default function Experiences() {
  const { t } = useLanguage();

  // detecção de idioma 
  const lang = t("lang.label") === "PT" ? "pt" : "en";

  // certificados do mais recente para o mais antigo
  const sortedCertificates = [...certificates].sort(
    (a, b) => dateToNumber(b.date) - dateToNumber(a.date)
  );

  const timelineItems = [
    {
      tag: t("experiences.education.tag"),
      title: t("experiences.education.title"),
      period: t("experiences.education.period"),
      institution: t("experiences.education.institution"),
      description: t("experiences.education.description"),
    },
    {
      tag: t("experiences.exchangeProgram.tag"),
      title: t("experiences.exchangeProgram.title"),
      period: t("experiences.exchangeProgram.period"),
      institution: t("experiences.exchangeProgram.institution"),
      description: t("experiences.exchangeProgram.description"),
    },
    {
      tag: t("experiences.learning.tag"),
      title: t("experiences.learning.title"),
      period: t("experiences.learning.period"),
      institution: t("experiences.learning.institution"),
      description: t("experiences.learning.description"),
    },
  ];

  const languages = [
    {
      title: t("experiences.languages.portuguese.title"),
      level: t("experiences.languages.portuguese.level"),
    },
    {
      title: t("experiences.languages.english.title"),
      level: t("experiences.languages.english.level"),
    },
    {
      title: t("experiences.languages.spanish.title"),
      level: t("experiences.languages.spanish.level"),
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-16">
      {/* HERO */}
      <section className="flex flex-col items-start gap-4 text-left">
        <Tag className="text-soil">{t("experiences.hero.tag")}</Tag>
        <h1 className="font-display text-5xl text-leaf md:text-7xl">
          {t("experiences.hero.title")}
        </h1>
        <p className="max-w-3xl text-xl text-soil">
          {t("experiences.hero.subtitle")}
        </p>
      </section>

      {/* CARD DE AVISO */}
      <section>
        <Card tone="petal" className="p-6">
          <h2 className="text-soil font-medium">{t("experiences.notice.text")}</h2>
        </Card>
      </section>

      {/* TIMELINE */}
      <section className="flex flex-col gap-8">
      <div className="space-y-4">

        <h2 className="font-display text-4xl text-leaf md:text-5xl">
          {t("experiences.timeline.title")}
        </h2>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 relative pl-6 border-l-2 border-leaf/40 flex flex-col gap-10">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex flex-col gap-3">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-leaf border-4 border-soil" />

                <Card tone="cream" className="p-6 flex flex-col gap-3 shadow-md">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <Tag>{item.tag}</Tag>
                    <span className="text-sm font-semibold text-soil/75">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-soil">{item.title}</h3>
                  <span className="text-sm font-medium text-leaf">
                    {item.institution}
                  </span>
                  <p className="text-soil/85 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Card tone="petal" className="p-6 flex flex-col gap-4 text-cream">
              <h3 className="text-xl font-bold text-soil">
                {t("experiences.sidebar.title")}
              </h3>
              <p className="text-soil/85 text-sm sm:text-base">
                {t("experiences.sidebar.description")}
              </p>
              <ul className="flex flex-col gap-2 text-sm sm:text-base text-soil/90 list-disc list-inside">
                <li>{t("experiences.sidebar.item1")}</li>
                <li>{t("experiences.sidebar.item2")}</li>
                <li>{t("experiences.sidebar.item3")}</li>
                <li>{t("experiences.sidebar.item4")}</li>
              </ul>
            </Card>

            <Card tone="cream" className="p-6 flex flex-col gap-3 text-soil">
              <h3 className="text-lg font-bold">
                {t("experiences.resume.title")}
              </h3>
              <p className="text-sm text-soil/80">
                {t("experiences.resume.description")}
              </p>
              <div className="mt-2 inline-block">
                <Tag>{t("experiences.resume.status")}</Tag>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* IDIOMAS */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <Tag>{t("experiences.languages.tag")}</Tag>
          <h2 className="font-display text-3xl font-bold text-cream">
            {t("experiences.languages.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((langItem, index) => (
            <Card key={index} tone="cream" className="p-6 flex flex-col gap-2">
              <h3 className="text-xl font-bold text-soil">{langItem.title}</h3>
              <p className="text-sm font-medium text-leaf">{langItem.level}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CERTIFICADOS */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <Tag>{t("experiences.certificates.tag")}</Tag>

          <h2 className="font-display text-3xl font-bold text-leaf">
            {t("experiences.certificates.title")}
          </h2>

          <p className="text-soil">{t("experiences.certificates.subtitle")}</p>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-4 pt-2">
          {sortedCertificates.map((certificate) => (
            <a
              key={certificate.id}
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
            >
              <Card
                tone="cream"
                className="min-w-[320px] max-w-[320px] cursor-pointer p-4 transition-transform hover:-translate-y-1 h-full"
              >
                <div className="space-y-4">
                <div className="rounded-xl p-2 border">
                  <img src={certificate.preview} />
                </div>


                  <div>
                    <h3 className="font-display text-2xl text-leaf">
                      {certificate.title[lang]}
                    </h3>

                    <p className="mt-2 text-soil">
                      {certificate.institution[lang]}
                    </p>

                    <p className="mt-2 text-xs text-soil">{certificate.date}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section>
        <Card
          tone="petal"
          className="p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-soil">
              {t("experiences.footer.title")}
            </h2>
          </div>
          <div>
            <Link to="/projetos">
                <Button arrow>
                    {t("experiences.footer.action")}
                </Button>        
            </Link>    
          
          </div>
        </Card>
      </section>
    </main>
  );
}