import { Link } from "react-router-dom";
import profile from "../assets/sophia.jpeg";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import SectionHeader from "../components/ui/SectionHeader";
import { useLanguage } from "../i18n/useLanguage";

function About() {
    const { t } = useLanguage();

    const values = [
      {
          title: t("about.values.learning.title"),
          description: t("about.values.learning.description"),
      },
      {
          title: t("about.values.quality.title"),
          description: t("about.values.quality.description"),
      },
      {
          title: t("about.values.accessibility.title"),
          description: t("about.values.accessibility.description"),
      },
      {
          title: t("about.values.purpose.title"),
          description: t("about.values.purpose.description"),
      },
    ];

    const timeline = [
      {
          title: t("about.timeline.step1.title"),
          description: t("about.timeline.step1.description"),
      },
      {
          title: t("about.timeline.step2.title"),
          description: t("about.timeline.step2.description"),
      },
      {
          title: t("about.timeline.step3.title"),
          description: t("about.timeline.step3.description"),
      },
      {
          title: t("about.timeline.step4.title"),
          description: t("about.timeline.step4.description"),
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

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-16">
            {/* HERO */}

            <section className="space-y-8">
                <Tag>{t("about.hero.tag")}</Tag>

                <div className="space-y-5">
                    <h1 className="font-display text-5xl text-leaf md:text-7xl">
                        {t("about.hero.title")}
                    </h1>

                    <p className="max-w-3xl text-xl text-soil">
                        {t("about.hero.subtitle")}
                    </p>
                </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[320px_1fr]">
                {/* PERFIL */}

                <Card tone="moss">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-6 flex h-44 w-44 items-center justify-center rounded-full border border-leaf/20 bg-cream">
                            <img src={profile} alt="Sophia Ferreira" className="rounded-full"/>
                        </div>

                        <h2 className="font-display text-4xl text-leaf">
                            Sophia
                        </h2>

                        <p className="mt-3 text-leaf">
                            {t("about.profile.role")}
                        </p>

                        <p className="mt-6 text-sm text-soil">
                            {t("about.profile.details")}
                        </p>
                    </div>
                </Card>

                {/* HISTÓRIA */}

                <div className="space-y-8">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-soil">
                            <Tag>{t("about.story.tag")}</Tag>
                        </p>

                        <h1 className="font-display text-5xl text-leaf">
                            {t("about.story.title")}
                        </h1>
                    </div>

                    <p className="max-w-4xl text-lg text-leaf">
                        {t("about.story.intro")}
                    </p>

                    <Card tone="cream">
                        <div className="space-y-6 text-soil">
                            <p>
                                {t("about.story.paragraph1")}
                            </p>

                            <p>
                                {t("about.story.paragraph2")}
                            </p>
                        </div>
                    </Card>

                    <p className="text-sm text-soil">
                        {t("about.story.note")}
                    </p>
                </div>
            </section>

            {/* VALORES */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("about.values.tag")}
                    title={t("about.values.title")}
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value) => (
                        <Card
                            key={value.title}
                            tone="cream"
                        >
                            <h3 className="font-display text-2xl text-leaf">
                                {value.title}
                            </h3>

                            <p className="mt-3 text-soil">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* STACK */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("about.stack.tag")}
                    title={t("about.stack.title")}
                    subtitle={t("about.stack.subtitle")}
                />

                <Card tone="cream">
                    <div className="flex flex-wrap gap-3">
                        {technologies.map((tech) => (
                            <Tag key={tech}>{tech}</Tag>
                        ))}
                    </div>
                </Card>
            </section>

            {/* TIMELINE */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("about.timeline.tag")}
                    title={t("about.timeline.title")}
                />

                <div className="grid gap-6 md:grid-cols-2">
                    {timeline.map((step) => (
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

            {/* OBJETIVOS */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("about.goals.tag")}
                    title={t("about.goals.title")}
                />

                <Card tone="cream">
                    <p className="text-soil">
                        {t("about.goals.description")}
                    </p>
                </Card>
            </section>

            {/* CTA FINAL */}

            <Card tone="petal">
                <div className="space-y-6">
                    <h2 className="font-display text-4xl text-leaf md:text-5xl">
                        {t("about.footer.title")}
                    </h2>

                    <p className="max-w-3xl text-soil">
                        {t("about.footer.description")}
                    </p>

                    <Link to="/projetos">
                        <Button arrow>
                            {t("about.footer.action")}
                        </Button>
                    </Link>
                </div>
            </Card>
        </main>
    );
}

export default About;