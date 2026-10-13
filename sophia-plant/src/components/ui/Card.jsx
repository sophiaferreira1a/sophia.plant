const toneClasses = {
    sprout: "bg-sprout/70",
    moss: "bg-moss",
    petal: "bg-petal",
    cream: "bg-cream",
};

export default function Card({ tone = "sprout", className = "", children }) {
    return (
        <div className={`rounded-2xl border border-leaf/10 p-6 shadow-sm ${toneClasses[tone]} ${className}`}>
            {children}
        </div>
    );
}