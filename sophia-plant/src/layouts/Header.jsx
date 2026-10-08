//Menu + botão de idioma

import { useState } from "react";
import {NavLink} from "react-router-dom";
import {useLanguage} from "../i18n/useLanguage" 

const links = [ /*dados do menu de renderização. (Pra mudar um texto do menu, tem que mexer no dicionário - menu.about) */
    {to: "/", key: "menu.home", end: true}, /* sem o end, essa rota ficaria "ativa" também em /sobre */
    {to: "/sobre", key: "menu.about"},
    {to: "/projetos", key: "menu.projects"},
    {to: "/experiencias", key: "menu.experiences"},
    {to: "/contato", key: "menu.contact"},

];

export default function Header() {
    const {t, lang, setLang} = useLanguage();  /* puxa t (traduz), lang e setLang - é a hook do contexto e dicionários PT/EN */
    const[open, setOpen] = useState(false); /*Controla o menu no mobile. Fechou ao clicar num link (setOpen(false)) */

    const linkClass = ({isActive}) => `block px-4 py-2 rounded-lg transition-colors ${isActive ? "bg-sprout/60 text-leaf font-semibold" : "text-leaf hover:bg-sprout/30"}`; /*NavLink aceita a função em className e entrega isActive (estilo de rota atual sem conferir o URL na mão) */

    return(
        <header className = "bg-cream border-b border-sprout sticky top-0 z-50"> {/*Gruda no topo, por cima dos outros elementos */}
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <NavLink to="/" className="text-xl font-bold text-leaf">sophia.plant</NavLink>
                <nav className="hidden md:flex gap-2">  
                    {links.map((link) => ( /* O hidden esconde o menu horizontal no celular, mas mostra no desktop */
                        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}> {t(link.key)}</NavLink>
                    ))}
                </nav>
                <div className="flex items-center gap-2">
                    <button onClick={() => setLang(lang === "pt" ? "en" : "pt")} className="px-3 py-1.5 rounded-lg border border-leaf text-leaf text-sm font-semibold" aria-label="Change language">
                        {t("lang.label")}  {/* Mostra EN e PT. Clicar nele chama setLang - contexto muda, e todo mundo que usa "t" re-renderiza, sem reload */}
                    </button>
                    <button className="md:hidden px-2 py-1 text-leaf text-xl" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
                </div>
            </div>
            {open && ( /* Menu mobile */
                <nav className="md:hidden flex flex-col gap-1 px-4 pb-4">
                    {links.map((l) => (
                        <NavLink key={l.to} to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>{t(l.key)}</NavLink>
                    ))}
                </nav>
            )}
        </header>
    );
}

