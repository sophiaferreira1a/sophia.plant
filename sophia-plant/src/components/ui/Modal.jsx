import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/useLanguage.js";

//Usa o createPortal (renderiza fora do fluxo do layout), fecha com Esc, trava o scrool e prende o clique do overlay

export default function Modal({ open, onClose, labelledBy, children }) {
    const { t } = useLanguage();

    useEffect(() => {
        if (!open) return;
        const onKey = (event) => {
            if (event.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-leaf/60 p-4 py-10" onClick={onClose}>
            <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="relative w-full max-w-4xl rounded-2xl bg-cream p-6 shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={t("common.close")}
                    className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-moss text-leaf transition-colors hover:bg-sprout">
                    ✕
                </button>
                {children}
            </div>
        </div>,
        document.body
    );
}