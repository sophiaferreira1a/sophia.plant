import { useEffect, useState } from "react";
import pt from "./pt";
import en from "./en";
import { LanguageContext } from "./context";

export function LanguageProvider({children}) { //Re-renderiza o idioma
    const[lang, setLang] = useState("pt"); //useState guarda o idioma
    const dict = lang === "pt" ? pt: en;

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (path) => path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), dict) ?? path; //Chave faltando mostra a própria chave na tela (mostra o que falta traduzir)

    return(
        <LanguageContext.Provider value={{lang, setLang, t}}>
            {children}
        </LanguageContext.Provider>
    );
}

