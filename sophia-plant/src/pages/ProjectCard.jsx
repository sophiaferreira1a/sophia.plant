import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProjectPreview from "../components/ProjectPreview";  
import seed from "../assets/plants/seed.svg";
import sprout from "../assets/plants/sprout.svg";
import flower from "../assets/plants/flower.svg";

import { useLanguage } from "../i18n/useLanguage";

const maturityIcons = {
  seed,
  sprout,
  flower,
};

const maturityLabels = {
  seed: {
    pt: "Semente",
    en: "Seed",
  },
  sprout: {
    pt: "Broto",
    en: "Sprout",
  },
  flower: {
    pt: "Flor",
    en: "Flower",
  },
};


function ProjectCard({ project }) {
  const { t } = useLanguage();

  const lang = t("lang.label") === "PT" ? "pt" : "en";

  return (
    <Card tone="cream">
      <div className="flex h-full flex-col">
      {/* Imagem */}
      <ProjectPreview
          image={project.images?.[0]}
          alt={project.name[lang]}
          lang={lang}
        />

        <h3 className="mt-4 text-xl font-semibold text-soil">
          {project.name[lang]}
        </h3>
        <div className="mt-3 text-right">
          <p className="text-sm font-semibold uppercase tracking-wider text-soil">
            {maturityLabels[project.maturity][lang]}
          </p>
          <span className="mt-2 block h-1 w-16 rounded-full bg-leaf" />
        </div>

        <p className="mt-4 flex-1 text-soil">{project.description[lang]}</p>

        {/* Tecnologias */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-sand px-3 py-1 text-xs text-soil"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Rodapé */}
        <div className="mt-6 flex items-center justify-between border-t border-sand pt-4">
          <div className="flex items-center gap-2">
            <img
              src={maturityIcons[project.maturity]}
              alt=""
              className="h-5 w-5"
            />
            <span className="text-sm text-soil">
              {maturityLabels[project.maturity][lang]}
            </span>
          </div>

          <Link to={`/projetos/${project.id}`}>
            <Button variant="secondary" arrow>
              {t("projects.explore")}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;