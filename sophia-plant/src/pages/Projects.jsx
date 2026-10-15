import { useState } from "react";
import Tag from "../components/ui/Tag";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import seed from "../assets/plants/seed.svg";
import sprout from "../assets/plants/sprout.svg";
import flower from "../assets/plants/flower.svg";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../i18n/useLanguage";

function Projects() {
    const { t } = useLanguage();

    const lang =
        t("lang.label") === "PT"
            ? "pt"
            : "en";

    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const filteredProjects = projects
    .filter((project) => {
        const matchesStage =
            filter === "all" ||
            project.maturity === filter;

        const matchesSearch =
            project.name[lang]
                .toLowerCase()
                .includes(search.toLowerCase());

        return matchesStage && matchesSearch;
    })
    .sort((a, b) => b.date.localeCompare(a.date));

    const stages = [
        {
            icon: seed,
            key: "seed",
            title: t("projects.stages.seed.title"),
            description: t(
                "projects.stages.seed.description"
            ),
        },
        {
            icon: sprout,
            key: "sprout",
            title: t("projects.stages.sprout.title"),
            description: t(
                "projects.stages.sprout.description"
            ),
        },
        {
            icon: flower,
            key: "flower",
            title: t("projects.stages.flower.title"),
            description: t(
                "projects.stages.flower.description"
            ),
        },
    ];

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16">
            {/* HERO */}

            <section className="space-y-6">
                <Tag>
                    {t("projects.hero.tag")}
                </Tag>

                <h1 className="max-w-5xl font-display text-5xl text-leaf md:text-7xl">
                    {t("projects.hero.title")}
                </h1>

                <p className="max-w-3xl text-xl text-soil">
                    {t("projects.hero.subtitle")}
                </p>
            </section>

            {/* COMO LER ESTE JARDIM */}

            <Card tone="moss">
                <div className="space-y-8">
                    <h2 className="font-display text-3xl text-leaf">
                        {t("projects.guide.title")}
                    </h2>

                    <div className="grid gap-12 md:grid-cols-3">
                        {stages.map((stage) => (
                            <div
                                key={stage.key}
                                className="flex flex-col items-center text-center"
                            >
                                <img src={stage.icon}
                                    alt={stage.title}></img>
                        
                                <h3 className="mt-4 text-2xl font-semibold text-leaf">
                                    {stage.title}
                                </h3>
                        
                                <p className="mt-2 max-w-xs text-soil">
                                    {stage.description}
                                </p>
                            </div>

                          ))}
                    </div>
                </div>
            </Card>

            {/* FILTROS */}

            <section className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                        <Button
                            variant={
                                filter === "all"
                                    ? "primary"
                                    : "secondary"
                            }
                            onClick={() =>
                                setFilter("all")
                            }
                        >
                            {t(
                                "projects.filters.all"
                            )}
                        </Button>

                        <Button
                            variant={
                                filter === "seed"
                                    ? "primary"
                                    : "secondary"
                            }
                            onClick={() =>
                                setFilter("seed")
                            }
                        >
                            {t(
                                "projects.filters.seed"
                            )}
                        </Button>

                        <Button
                            variant={
                                filter === "sprout"
                                    ? "primary"
                                    : "secondary"
                            }
                            onClick={() =>
                                setFilter("sprout")
                            }
                        >
                            {t(
                                "projects.filters.sprout"
                            )}
                        </Button>

                        <Button
                            variant={
                                filter === "flower"
                                    ? "primary"
                                    : "secondary"
                            }
                            onClick={() =>
                                setFilter("flower")
                            }
                        >
                            {t(
                                "projects.filters.flower"
                            )}
                        </Button>
                    </div>
                    
                    {/* se for apenas 1 projeto ele sai como "projeto", não "projetos" */}
                    <p className="text-sm text-soil">
                        {filteredProjects.length}{" "}
                        {filteredProjects.length === 1
                            ? t("projects.filters.result")
                            : t("projects.filters.results")}
                    </p>
                </div>

                <Card tone="cream">
                    <input
                        type="text"
                        placeholder={t("projects.filters.search")}
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="
                            w-full
                            border-none
                            bg-transparent
                            text-soil
                            outline-none
                            placeholder:text-soil/60
                        "
                    />
                </Card>
            </section>

            {/* PROJETOS */}

            <section>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {filteredProjects.map(
                        (project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        )
                    )}
                </div>
            </section>

            {/* RODAPÉ */}
            <Card tone="petal">
                <div className="space-y-6">
                    <h2 className="font-display text-4xl text-leaf md:text-5xl">
                        {t("projects.footer.title")}
                    </h2>

                    <p className="max-w-3xl text-soil">
                        {t("projects.footer.description")}
                    </p>
                </div>
            </Card>
        </main>
    );
}

export default Projects;