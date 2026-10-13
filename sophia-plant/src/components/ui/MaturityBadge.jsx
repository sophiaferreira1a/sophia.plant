import { useLanguage } from "../../i18n/useLanguage.js";
import { maturityImages } from "../../data/maturity.js";
//Reusa maturityImages e o dicionário

const toneClasses = {
    seed: "border-sand bg-sand/60 text-soil",
    sprout: "border-sprout bg-sprout/70 text-leaf",
    flower: "border-petal bg-petal text-leaf/80",
};

export default function MaturityBadge({ maturity, icon = true, className = "" }) {
    const { t } = useLanguage();
    const validMaturities = ["seed", "sprout", "flower"];
    const safeMaturity = validMaturities.includes(maturity) ? maturity : "seed";
    const tone = toneClasses[safeMaturity];
    return (
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${tone} ${className}`}>
            {icon && <img src={maturityImages[safeMaturity]} alt="" className="h-4 w-4" />}
            {t(`maturity.${safeMaturity}`)}
        </span>
    );
}