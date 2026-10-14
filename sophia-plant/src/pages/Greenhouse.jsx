import logo from "../assets/sophia-plant_logo.png";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import SectionHeader from "../components/ui/SectionHeader";
import MaturityBadge from "../components/ui/MaturityBadge";
import { Input, Textarea } from "../components/ui/Field";
import { useLanguage } from "../i18n/useLanguage";

import {
    MailIcon,
} from "../components/icons.jsx";


/* ESTUFA
| Documentação viva do Design System Sophia.Plant
|
| Objetivo:
| - Exibir arquitetura do sistema
| - Documentar fundações
| - Mostrar design tokens
| - Demonstrar componentes existentes
| - Registrar padrões visuais
| - Centralizar regras de acessibilidade
*/


function Estufa() {
    const { t } = useLanguage();
    const architectureSteps = [
    {
        title: "Foundations",
        description: "Marca, cor e tipografia.",
    },
    {
        title: "Tokens",
        description: "Valores semânticos reutilizáveis.",
    },
    {
        title: "Components",
        description: "Peças reutilizáveis construídas sobre os tokens.",
    },
    {
        title: "Pages",
        description: "Experiências completas para usuários.",
    },
];

const colors = [
    {
        name: "Cream",
        hex: "#FBF9F1",
        description: "Fundo principal.",
    },
    {
        name: "Leaf",
        hex: "#3B5832",
        description: "Ações e títulos.",
    },
    {
        name: "Sprout",
        hex: "#C7DCA7",
        description: "Superfícies suaves.",
    },
    {
        name: "Moss",
        hex: "#E8F0DC",
        description: "Fundos secundários.",
    },
    {
        name: "Petal",
        hex: "#F9E0EE",
        description: "Destaques.",
    },
    {
        name: "Soil",
        hex: "#B59876",
        description: "Textos auxiliares.",
    },
    {
        name: "Sand",
        hex: "#E5E0B0",
        description: "Badges e detalhes.",
    },
];

const spacingTokens = [
    "space.1 · 4px",
    "space.2 · 8px",
    "space.3 · 12px",
    "space.4 · 16px",
    "space.6 · 24px",
    "space.8 · 32px",
    "space.12 · 48px",
    "space.16 · 64px",
];

const radiusTokens = [
    "radius.sm · 8px",
    "radius.md · 16px",
    "radius.lg · 24px",
    "radius.pill · 999px",
];

const shadowTokens = [
    "shadow.sm",
    "shadow.md",
    "shadow.lg",
];

const motionTokens = [
    "motion.fast · 150ms",
    "motion.normal · 250ms",
    "motion.slow · 400ms",
];
    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-16">
            {/* HERO */}
            <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-8">
                <Tag>{t("designSystem.hero.tag")}</Tag>
                  <h1 className="font-display text-4xl md:text-6xl text-leaf">
                      {t("designSystem.hero.title")}
                  </h1>

                  <p className="max-w-3xl text-xl text-leaf">
                      {t("designSystem.hero.description")}
                  </p>

                  <p className="max-w-3xl text-soil">
                      {t("designSystem.hero.supportText")}
                  </p>

                  <Button variant="secondary" arrow>
                      {t("designSystem.hero.back")}
                  </Button>
                </div>

                <Card tone="cream">
                    <div className="flex h-full items-center justify-center">
                        <img
                            src={logo}
                            alt="Sophia.Plant"
                            className="max-h-64 w-auto object-contain"
                        />
                    </div>
                </Card>
            </section>

            {/* ARQUITETURA */}

            <section className="space-y-10">
            <SectionHeader tag={t("designSystem.architecture.tag")} title={t("designSystem.architecture.title")} subtitle={t("designSystem.architecture.subtitle")}/>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {architectureSteps.map((step) => (
                        <Card key={step.title} tone="cream">
                            <h3 className="font-display text-2xl text-leaf">
                                {step.title}
                            </h3>

                            <p className="mt-3 text-sm text-soil">
                                {step.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FUNDAÇÕES */}

            <section className="space-y-10">
              <SectionHeader tag={t("designSystem.foundations.tag")} title={t("designSystem.foundations.title")} subtitle={t("designSystem.foundations.subtitle")}/>
                <div className="grid gap-6 lg:grid-cols-2">
                    <Card tone="cream">
                        <div className="space-y-5">
                            <h3 className="font-display text-3xl text-leaf">
                                {t("designSystem.foundations.identity")}
                            </h3>

                            <img src={logo} alt="Sophia.Plant" className="max-h-32 w-auto object-contain"/>
                            <p className="text-soil">
                                {t("designSystem.foundations.identityDescription")}
                            </p>

                            <p className="text-sm text-soil">
                                {t("designSystem.foundations.identityGuideline")}
                            </p>
                        </div>
                    </Card>

                    <Card tone="cream">
                        <div className="space-y-6">
                            <h3 className="font-display text-3xl text-leaf">
                                {t("designSystem.foundations.paletteTitle")}
                            </h3>

                            <div className="space-y-4">
                                {colors.map((color) => (
                                    <div key={color.name} className="flex items-center gap-4">
                                        <div
                                            className="h-12 w-12 rounded-lg border border-leaf/10"
                                            style={{
                                                backgroundColor: color.hex,
                                            }}
                                        />

                                        <div>
                                            <p className="font-semibold text-leaf">
                                                {color.name}
                                            </p>

                                            <p className="text-xs text-soil">
                                                {color.hex}
                                            </p>

                                            <p className="text-xs text-soil">
                                              {t(`designSystem.foundations.palette.${color.name.toLowerCase()}`)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card tone="cream" className="lg:col-span-2">
                    <h3 className="mb-8 font-display text-3xl text-leaf">
                        {t("designSystem.foundations.typographyTitle")}
                    </h3>

                      <div className="space-y-8">
                          <div>
                          <h1 className="font-display text-6xl text-leaf">
                              {t("designSystem.foundations.typography.h1")}
                          </h1>

                          <p className="mt-2 text-sm text-soil">
                              {t("designSystem.foundations.typography.h1Label")}
                          </p>
                          </div>

                          <div>
                              <h2 className="font-display text-4xl text-leaf">
                                  {t("designSystem.foundations.typography.h2")}
                              </h2>

                              <p className="mt-2 text-sm text-soil">
                                  {t("designSystem.foundations.typography.h2Label")}
                              </p>
                          </div>

                          <div>
                              <h3 className="font-display text-2xl text-leaf">
                                  {t("designSystem.foundations.typography.h3")}
                              </h3>

                              <p className="mt-2 text-sm text-soil">
                                  {t("designSystem.foundations.typography.h3Label")}
                              </p>
                          </div>

                          <div>
                              <p className="text-base text-leaf">
                                  {t("designSystem.foundations.typography.body")}
                              </p>

                              <p className="mt-2 text-sm text-soil">
                                  {t("designSystem.foundations.typography.bodyLabel")}
                              </p>
                          </div>

                          <div>
                              <p className="text-xs text-soil">
                                  {t("designSystem.foundations.typography.small")}
                              </p>

                              <p className="mt-2 text-xs text-soil">
                                  {t("designSystem.foundations.typography.smallLabel")}
                              </p>
                          </div>
                      </div>
                    </Card>
                </div>
            </section>

            {/* TOKENS */}

            <section className="space-y-10">
                <SectionHeader
                    tag={t("designSystem.tokens.tag")}
                    title={t("designSystem.tokens.title")}
                    subtitle={t("designSystem.tokens.subtitle")}
                />
              
                <div className="grid gap-6 md:grid-cols-2">
                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.tokens.spacing")}
                        </h3>

                        <div className="space-y-2">
                            {spacingTokens.map((token) => (
                                <p key={token} className="text-soil">
                                    {token}
                                </p>
                            ))}
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.tokens.radius")}
                        </h3>

                        <div className="space-y-2">
                            {radiusTokens.map((token) => (
                                <p key={token} className="text-soil">
                                    {token}
                                </p>
                            ))}
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.tokens.elevation")}
                        </h3>

                        <div className="space-y-2">
                            {shadowTokens.map((token) => (
                                <p key={token} className="text-soil">
                                    {token}
                                </p>
                            ))}
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.tokens.motion")}
                        </h3>

                        <div className="space-y-2">
                            {motionTokens.map((token) => (
                                <p key={token} className="text-soil">
                                    {token}
                                </p>
                            ))}
                        </div>
                    </Card>
                </div>
            </section>

            {/* COMPONENTES */}

            <section className="space-y-10">
            <SectionHeader tag={t("designSystem.components.tag")} title={t("designSystem.components.title")} subtitle={t("designSystem.components.subtitle")}/>         
            <Card tone="cream">
                    <h3 className="mb-4 font-display text-2xl text-leaf">
                      {t("designSystem.components.convention")}
                    </h3>

                    <div className="space-y-2 text-soil">
                        <p>Categoria / Componente / Variante</p>
                        <p>Button / Primary</p>
                        <p>Button / Secondary</p>
                        <p>Input / Error</p>
                        <p>MaturityBadge / Flower</p>
                    </div>
                </Card>

                <div className="grid items-start gap-6 lg:grid-cols-2">
                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.components.buttons")}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <Button>Primary</Button>

                            <Button variant="secondary">
                                Secondary
                            </Button>

                            <Button variant="ghost">
                                Ghost
                            </Button>
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.components.tags")}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            <Tag>React</Tag>
                            <Tag>Vite</Tag>
                            <Tag>Tailwind</Tag>
                            <Tag>Supabase</Tag>
                            <Tag>Spring</Tag>
                            <Tag>Docker</Tag>
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.components.formsTitle")}
                        </h3>

                        <div className="space-y-5">
                            <Input
                                id="name"
                                label={t("designSystem.components.forms.name")}
                                placeholder={t("designSystem.components.forms.namePlaceholder")}
                                autoComplete="name"
                            />

                            <Input
                                id="email"
                                label={t("designSystem.components.forms.email")}
                                autoComplete="email"
                                error={t("designSystem.components.forms.emailError")}
                            />

                            <Textarea
                                id="message"
                                label={t("designSystem.components.forms.message")}
                                placeholder={t("designSystem.components.forms.messagePlaceholder")}
                            />
                        </div>
                    </Card>

                    <Card tone="cream">
                        <h3 className="mb-5 font-display text-2xl text-leaf">
                          {t("designSystem.components.maturity")}
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            <MaturityBadge maturity="seed" />
                            <MaturityBadge maturity="sprout" />
                            <MaturityBadge maturity="flower" />
                        </div>
                    </Card>
                </div>
            </section>

            {/* PADRÕES */}
                                      
            <section className="space-y-10">
            <SectionHeader tag={t("designSystem.patterns.tag")} title={t("designSystem.patterns.title")} subtitle={t("designSystem.patterns.subtitle")}/>
            
                <div className="grid items-start gap-6 lg:grid-cols-2">
                    <Card tone="cream" className="space-y-5">
                        <MailIcon className="h-6 w-6 text-leaf" />
                                      
                        <div>
                            <h3 className="font-display text-2xl text-leaf">
                              {t("designSystem.patterns.contactCard.title")}
                            </h3>
                                      
                            <p className="mt-2 text-soil">
                              {t("designSystem.patterns.contactCard.description")}
                            </p>
                        </div>
                                      
                        <div className="rounded-xl bg-moss p-4">
                            <p className="font-medium text-leaf">
                              {t("designSystem.patterns.contactCard.email")}
                            </p>
                                      
                            <p className="mt-2 text-sm text-soil">
                              {t("designSystem.patterns.contactCard.emailDescription")}
                            </p>
                        </div>
                                      
                        <Button variant="secondary">
                            {t("designSystem.patterns.contactCard.action")}
                        </Button>
                    </Card>
                                      
                    <Card tone="moss" className="space-y-5">
                        <div>
                            <h3 className="font-display text-2xl text-leaf">
                            {t("designSystem.patterns.maturity.title")}
                            </h3>
                                      
                            <p className="mt-2 text-soil">
                              {t("designSystem.patterns.maturity.description")}
                            </p>
                        </div>
                                      
                        <div className="space-y-5">
                            <div>
                                <MaturityBadge maturity="seed" />
                                      
                                <p className="mt-2 text-sm text-soil">
                                {t("designSystem.patterns.maturity.seed")}
                                </p>
                            </div>
                                      
                            <div>
                                <MaturityBadge maturity="sprout" />
                                      
                                <p className="mt-2 text-sm text-soil">
                                  {t("designSystem.patterns.maturity.sprout")}
                                </p>
                            </div>
                                      
                            <div>
                                <MaturityBadge maturity="flower" />
                                      
                                <p className="mt-2 text-sm text-soil">
                                  {t("designSystem.patterns.maturity.flower")}
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
 
            {/* ACESSIBILIDADE */}

            <section className="space-y-10">
            <SectionHeader tag={t("designSystem.accessibility.tag")} title={t("designSystem.accessibility.title")} subtitle={t("designSystem.accessibility.subtitle")}/>
                  <div className="grid items-start gap-6 lg:grid-cols-2">
                    <Card tone="cream">
                        <h3 className="font-display text-xl text-leaf">
                         {t("designSystem.accessibility.perceivable")}

                        </h3>
                    </Card>

                    <Card tone="cream">
                        <h3 className="font-display text-xl text-leaf">
                          {t("designSystem.accessibility.operable")}
                        </h3>
                    </Card>

                    <Card tone="cream">
                        <h3 className="font-display text-xl text-leaf">
                          {t("designSystem.accessibility.understandable")}
                        </h3>
                    </Card>

                    <Card tone="cream">
                        <h3 className="font-display text-xl text-leaf">
                          {t("designSystem.accessibility.robust")}
                        </h3>
                    </Card>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <Card tone="cream">
                        <h3 className="mb-4 font-display text-2xl text-leaf">
                         {t("designSystem.accessibility.contrast")}
                        </h3>

                        <div className="space-y-2 text-sm">
                            <p>✅ 6.70:1</p>
                            <p>✅ 5.39:1</p>
                            <p>❌ 1.66:1</p>
                        </div>
                    </Card>

                    <Card tone="moss">
                        <h3 className="mb-4 font-display text-2xl text-leaf">
                          {t("designSystem.accessibility.keyboard")}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          <Tag>{t("navigation.home")}</Tag>
                          <Tag>{t("navigation.about")}</Tag>
                          <Tag>{t("navigation.projects")}</Tag>
                          <Tag>{t("navigation.experiences")}</Tag>
                          <Tag>{t("navigation.contact")}</Tag>
                          <Tag>{t("navigation.greenhouse")}</Tag>
                        </div>
                    </Card>
                </div>
            </section>

            {/* ENCERRAMENTO */}

            <Card tone="petal">
                <div className="space-y-6">
                  <h2 className="font-display text-4xl md:text-5xl text-leaf">
                      {t("designSystem.footer.title")}
                  </h2>
                                            
                  <p className="max-w-3xl text-soil">
                      {t("designSystem.footer.description")}
                  </p>
                                            
                  <Button variant="secondary" arrow>
                      {t("designSystem.footer.back")}
                  </Button>
                </div>
            </Card>
        </main>
    );
}

export default Estufa;
    