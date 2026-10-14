import { Link } from "react-router-dom";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../i18n/useLanguage";

function Home() {
    const { t } = useLanguage();
    console.log("LANG TEST", t("lang.label"));
    console.log("FOOTER TEST", t("home.footer.title"));
    console.log("PROJECT TEST", t("home.projects.action"));
    const featuredProjects = [
        {
            title: "Sophia.Plant",
            description:
                "Portfólio pessoal desenvolvido com React, Vite e um Design System próprio para centralizar projetos, experiências e evolução profissional.",
            href: "/projetos",
        },
        {
            title: "Estufa",
            description:
                "Documentação viva do Design System responsável por manter consistência visual, acessibilidade e escalabilidade em todo o ecossistema.",
            href: "/estufa",
        },
        {
            title: "API Spring Boot",
            description:
                "Projeto voltado à construção de APIs modernas utilizando Java, Spring Boot e boas práticas de arquitetura.",
            href: "/projetos",
        },
    ];

    const technologies = [
        "React",
        "Vite",
        "Java",
        "Spring Boot",
        "Supabase",
        "Git",
        "GitHub",
        "Tailwind",
        "Figma",
        "Python",
    ];

    const workflow = [
      {
          title: t("home.process.planning.title"),
          description: t("home.process.planning.description"),
      },
      {
          title: t("home.process.design.title"),
          description: t("home.process.design.description"),
      },
      {
          title: t("home.process.development.title"),
          description: t("home.process.development.description"),
      },
      {
          title: t("home.process.evolution.title"),
          description: t("home.process.evolution.description"),
      },
  ];

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-16">
            {/* HERO */}

            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-8">
                    <Tag>Sophia.Plant</Tag>

                    <div className="space-y-5">
                        <h1 className="font-display text-5xl text-leaf md:text-7xl">
                          {t("home.hero.title")}
                        </h1>

                        <p className="max-w-3xl text-xl text-leaf">
                          {t("home.hero.description")}
                        </p>

                        <p className="max-w-3xl text-soil">
                          {t("home.hero.supportText")}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/projetos">
                            <Button arrow>{t("home.hero.projects")}</Button>
                        </Link>

                        <Link to="/contato">
                            <Button variant="secondary">
                              {t("home.hero.contact")}
                            </Button>
                        </Link>
                    </div>
                </div>

                <Card tone="cream">
                    <div className="flex h-full flex-col justify-center space-y-4">
                        <h2 className="font-display text-3xl text-leaf">
                          {t("home.hero.cardTitle")}
                        </h2>

                        <p className="text-soil">
                          {t("home.hero.cardDescription")}
                        </p>
                    </div>
                </Card>
            </section>

            {/* SOBRE */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("home.about.tag")}
                    title={t("home.about.title")}
                    subtitle={t("home.about.subtitle")}
                />

                <Card tone="cream">
                    <div className="space-y-5">
                        <p className="text-lg text-leaf">
                          {t("home.about.paragraph1")}
                        </p>

                        <p className="text-soil">
                          {t("home.about.paragraph2")}
                        </p>

                        <Link to="/sobre">
                            <Button variant="secondary" arrow>
                              {t("home.about.action")}
                            </Button>
                        </Link>
                    </div>
                </Card>
            </section>

            {/* PROJETOS */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("home.projects.tag")}
                    title={t("home.projects.title")}
                    subtitle={t("home.projects.subtitle")}
                />

                <div className="grid gap-6 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <Card
                            key={project.title}
                            tone="cream"
                        >
                            <div className="space-y-4">
                                <h3 className="font-display text-2xl text-leaf">
                                    {project.title}
                                </h3>

                                <p className="text-soil">
                                    {project.description}
                                </p>

                                <Link to={project.href}>
                                    <Button variant="secondary">
                                      {t("home.projects.action")}
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                <div>
                    <Link to="/projetos">
                        <Button arrow>{t("home.projects.viewAll")}</Button>
                    </Link>
                </div>
            </section>

            {/* STACK */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("home.technologies.tag")}
                    title={t("home.technologies.title")}
                    subtitle={t("home.technologies.subtitle")}
                />

                <Card tone="cream">
                    <div className="flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                        ))}
                    </div>
                </Card>
            </section>

            {/* PROCESSO */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("home.process.tag")}
                    title={t("home.process.title")}
                    subtitle={t("home.process.subtitle")}
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {workflow.map((step) => (
                        <Card
                            key={step.title}
                            tone="cream"
                        >
                            <h3 className="font-display text-2xl text-leaf">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-soil">
                                {step.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA FINAL */}

            <Card tone="petal">
                <div className="space-y-6">
                    <h2 className="font-display text-4xl text-leaf md:text-5xl">
                      {t("home.footer.title")}
                    </h2>

                    <p className="max-w-3xl text-soil">
                      {t("home.footer.description")}
                    </p>
                    

                    <Link to="/contato">
                        <Button arrow>{t("home.footer.action")}</Button>
                    </Link>
                </div>
            </Card>
        </main>
    );
}

export default Home;