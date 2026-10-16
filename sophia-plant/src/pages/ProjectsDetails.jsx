import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects.js";
import { maturityImages } from "../data/maturity.js";
import { useLanguage } from "../i18n/useLanguage.js";
import ProjectPreview from "../components/ProjectPreview";

export default function ProjectDetails() {
  const { id } = useParams(); //pega o id da url
  const { t, lang } = useLanguage();

  const project = projects.find((p) => p.id === id); //busca o objeto pelo id

  if (!project) { //evita rodar se não há dados
    return (
      <div className="text-center py-16">
        <p className="text-xl mb-4">{t("projects.notFound")}</p>
        <Link to="/projetos" className="text-leaf underline">{t("projects.back")}</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto">
      <Link to="/projetos" className="text-soil hover:underline">← {t("projects.back")}</Link>

      <div className="mt-4 flex items-center gap-4">
        <img src={maturityImages[project.maturity]} alt="" className="h-20 w-20 object-contain" />
        <div>
          <span className="text-xs uppercase tracking-wide bg-sprout/50 text-leaf px-3 py-1 rounded-full">
            {t(`maturity.${project.maturity}`)} {/*rótulo vem do dicionário */}
          </span>
          <h1 className="text-3xl font-bold font-display mt-2">{project.name[lang]}</h1>
        </div>
      </div>

          <div className="my-6 grid gap-4 sm:grid-cols-2">
      {(project.images?.length ? project.images : [null]).map((img, i) => (
        <ProjectPreview
          key={i}
          image={img}
          alt={`${project.name[lang]} ${i + 1}`}
          lang={lang}
          className="h-64"
          rounded="rounded-2xl"
          emojiSize="text-4xl"
        />
      ))}
    </div>

      <p className="text-lg leading-relaxed mb-6">{project.description[lang]}</p>

      <div className="flex flex-wrap gap-2 mb-6">{project.tech.map((tech) => ( //badges de ferramentas utilizadas
        <span key={tech} className="bg-cream border border-soil/50 text-soil px-3 py-1 rounded-full text-sm">{tech}</span>))}
      </div>

      {/* abre o github e o noreferrer faz com que não receba a referência da página */}
      <a href={project.github} target="_blank" rel="noreferrer" className="inline-block bg-leaf text-cream px-6 py-2.5 rounded-lg font-semibold hover:bg-soil transition-colors"> GitHub</a>
    </article>
  );
}