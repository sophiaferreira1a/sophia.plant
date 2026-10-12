import { projects } from "../data/projects.js";
import Plant from "../components/garden/Plant.jsx";
import { useLanguage } from "../i18n/useLanguage.js";

export default function Projects() { //projetos já vêm ordenados
  const { t } = useLanguage();

  return (
    <section>
      <h1 className="text-4xl font-bold font-display mb-3">{t("projects.title")}</h1>
      <p className="text-soil mb-10">{t("projects.subtitle")}</p>

      <div className="relative -mx-4 sm:mx-8 lg:-mx-12">
        <div className="absolute left-0 right-0 top-[152px] h-1 bg-soil/60" aria-hidden /> {/* "terra" onde as plantas se apoiam */}
          <div className="flex gap-8 overflow-x-auto snap-x pt-4 pb-10 px-1"> {projects.map((p) => (<Plant key={p.id} project={p} />))}</div>
      </div>
    </section>
  );
}