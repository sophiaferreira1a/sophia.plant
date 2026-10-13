import Tag from "./Tag.jsx";
//Padrão repetido em todas as seções: tag + h2 + ação à direita

export default function SectionHeader({ tag, title, subtitle, action, className = "" }) {
    return (
        <div className={`flex flex-col gap-5 md:flex-row md:items-end md:justify-between ${className}`}>
            <div className="max-w-2xl">
                <Tag>{tag}</Tag>
                <h2 className="mt-3 font-display text-3xl font-bold text-leaf">{title}</h2>
                {subtitle && <p className="mt-3 text-soil">{subtitle}</p>}
            </div>
            {action}
        </div>
    );
}