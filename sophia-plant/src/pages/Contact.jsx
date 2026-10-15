import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Tag from "../components/ui/Tag";
import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";

import flower from "../assets/plants/flower.svg";
import { useLanguage } from "../i18n/useLanguage";

function Contact() {
    const { t } = useLanguage();
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); 
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setStatus(null);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            formRef.current.reset();
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-16">
            {/* HERO */}

            <section className="space-y-6">
                <Tag>
                    {t("contact.hero.tag")}
                </Tag>

                <h1 className="max-w-5xl font-display text-5xl text-leaf md:text-7xl">
                    {t("contact.hero.title")}
                </h1>

                <p className="max-w-3xl text-xl text-soil">
                    {t("contact.hero.subtitle")}
                </p>
            </section>

            {/* CONTEÚDO */}

            <section className="grid gap-8 lg:grid-cols-[340px_1fr]">
              {/* COLUNA ESQUERDA */}

              <div className="space-y-8">
                  <Card tone="moss">
                      <div className="flex flex-col gap-4">
                          <img
                              src={flower}
                              alt="Vaso de flores"
                              className="h-20 w-20 object-contain"
                          />

                          <h2 className="font-display text-3xl text-leaf">
                              {t("contact.card.title")}
                          </h2>

                          <p className="text-soil">
                              {t("contact.card.description")}
                          </p>
                      </div>
                  </Card>

                  <div className="space-y-6">
                      <div>
                          <p className="font-semibold text-leaf">
                              {t("contact.channels.email")}
                          </p>
                          <a
                              href="mailto:sophianfrg@gmail.com"
                              className="text-soil transition-colors hover:text-leaf"
                          >
                              sophianfrg@gmail.com
                          </a>
                      </div>

                      <div>
                          <p className="font-semibold text-leaf">
                              {t("contact.channels.github")}
                          </p>
                          <a
                              href="https://github.com/sophiaferreira1"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-soil transition-colors hover:text-leaf"
                          >
                              github.com/sophiaferreira1
                          </a>
                      </div>

                      <div>
                          <p className="font-semibold text-leaf">
                              {t("contact.channels.linkedin")}
                          </p>
                          <a
                              href="https://www.linkedin.com/in/sophia-ferreira-35019a3b7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-soil transition-colors hover:text-leaf"
                          >
                              linkedin.com/in/sophia-ferreira-35019a3b7
                          </a>
                      </div>
                  </div>
              </div>

                {/* FORMULÁRIO */}

                <Card tone="cream">
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <h2 className="font-display text-4xl text-leaf">
                                {t("contact.form.title")}
                            </h2>

                            <p className="mt-3 text-sm text-soil">
                                {t("contact.form.required")}
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Input
                                id="user_name"
                                name="user_name"
                                label={t("contact.form.name")}
                                placeholder={t(
                                    "contact.form.namePlaceholder"
                                )}
                                autoComplete="name"
                                required
                            />

                            <Input
                                id="user_email"
                                name="user_email"
                                type="email"
                                label={t("contact.form.email")}
                                placeholder={t(
                                    "contact.form.emailPlaceholder"
                                )}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <Input
                            id="subject"
                            name="subject"
                            label={t("contact.form.subject")}
                            placeholder={t(
                                "contact.form.subjectPlaceholder"
                            )}
                        />

                        <Textarea
                            id="message"
                            name="message"
                            label={t("contact.form.message")}
                            placeholder={t(
                                "contact.form.messagePlaceholder"
                            )}
                            rows={8}
                            required
                        />

                        {status === "success" && (
                            <p className="text-sm text-leaf">
                                {t("contact.form.success")}
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-sm text-red-600">
                                {t("contact.form.error")}
                            </p>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {loading
                                ? t("contact.form.sending")
                                : t("contact.form.submit")}
                        </Button>
                    </form>
                </Card>
            </section>
        </main>
    );
}

export default Contact;