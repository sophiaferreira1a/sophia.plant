import { projects } from "../data/projects.js";
import Plant from "../components/garden/Plant.jsx";
import { useLanguage } from "../i18n/useLanguage.js";

export default function Projects() { //projetos já vêm ordenados
  const { t } = useLanguage();

  return (
    <section>
      <h1 className="text-3xl font-bold font-display mb-2">{t("projects.title")}</h1>
      <p className="text-soil mb-6">{t("projects.subtitle")}</p>

      <div className="relative">
        <div className="absolute left-0 right-0 top-[116px] h-0.5 bg-soil/50" aria-hidden /> {/* "terra" onde as plantas se apoiam */}
          <div className="flex gap-6 overflow-x-auto snap-x pt-2 pb-6 px-1"> {projects.map((p) => (<Plant key={p.id} project={p} />))}</div>
      </div>
    </section>
  );
}