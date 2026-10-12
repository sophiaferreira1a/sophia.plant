import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage.js";
import { maturityImages } from "../../data/maturity.js";

export default function Plant({ project }) {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <article className="relative z-10 min-w-[280px] w-[280px] snap-center shrink-0 bg-white/70 rounded-2xl border border-sprout p-6 flex flex-col items-center gap-4 text-center transition-transform hover:scale-105">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex flex-col items-center gap-2 cursor-pointer"> {/* área clicável para acessar o projeto */ }
        <img src={maturityImages[project.maturity]} alt="" className="h-32 w-32 object-contain"/>
        {!open && <span className="font-semibold text-lg text-leaf">{project.name[lang]}</span>} {/*project.name tem o lang porque o texto vem do dicionário */ }
      </button>

      {open && ( //os "open &&" renderizam de forma condicional: fechado - mostra nome, aberto - mostra botão
        <div className="flex flex-col gap-2 w-full">
          <p className="font-semibold text-leaf">{project.name[lang]}</p>
          <Link to={`/projetos/${project.id}`} className="bg-leaf text-cream rounded-lg py-1.5 text-sm font-semibold hover:bg-soil transition-colors">
            {t("projects.viewMore")}
          </Link>
        </div>
      )}
    </article>
  );
}