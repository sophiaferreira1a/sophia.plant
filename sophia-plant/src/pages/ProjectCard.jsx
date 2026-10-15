import { Link } from "react-router-dom";

import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

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

function formatDate(date, lang) {
    const [year, month] = date.split("-");

    const months = {
        pt: [
            "",
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
        ],

        en: [
            "",
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
    };

    return `${months[lang][Number(month)]}/${year}`;
}
function ProjectCard({ project }) {
    const { t } = useLanguage();

    const lang =
        t("lang.label") === "PT"
            ? "pt"
            : "en";

    return (
        <Card tone="cream">
            <div className="flex h-full flex-col">
                {/* Imagem */}

                <div className="overflow-hidden rounded-xl bg-moss/10">
                    <img
                        src={project.image}
                        alt={project.name[lang]}
                    className="mt-5 flex flex-1 flex-col"></img>
                    <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="mb-2 text-sm text-soil">
                            {formatDate(project.date, lang)}
                        </p>

                        <h3 className="font-display text-3xl text-leaf">
                            {project.name[lang]}
                        </h3>
                    </div>

                    <div className="text-right">
                        <p className="text-sm font-semibold uppercase tracking-wider text-soil">
                            {maturityLabels[project.maturity][lang]}
                        </p>

                        <span className="mt-2 block h-1 w-16 rounded-full bg-leaf" />
                    </div>
                </div>
                    <p className="mt-4 flex-1 text-soil">
                        {project.description[lang]}
                    </p>

                    {/* Tecnologias */}

                    <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    border
                                    border-sand
                                    px-3
                                    py-1
                                    text-xs
                                    text-soil
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Rodapé */}

                    <div className="mt-6 flex items-center justify-between border-t border-sand pt-4">
                        <div className="flex items-center gap-2">
                            <img
                                src={
                                    maturityIcons[
                                        project.maturity
                                    ]
                                }
                                alt=""
                                className="h-5 w-5"
                            ></img>

                            <span className="text-sm text-soil">
                                {
                                    maturityLabels[
                                        project.maturity
                                    ][lang]
                                }
                            </span>
                        </div>

                        <Link
                            to={`/projetos/${project.id}`}
                        >
                            <Button
                                variant="secondary"
                                arrow
                            >
                                {t(
                                    "projects.explore"
                                )}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ProjectCard;