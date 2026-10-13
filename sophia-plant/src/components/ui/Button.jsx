const variantClasses = {
    primary: "bg-leaf text-cream hover:bg-leaf/90",
    secondary: "border border-leaf bg-transparent text-leaf hover:bg-moss/60",
    ghost: "text-leaf hover:bg-moss/60",
};

export default function Button({ variant = "primary", arrow = false, className = "", children, ...props }) {
    return (
        <button
            type="button"
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sprout focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}
            {...props}>
            {children}
            {arrow && <span aria-hidden="true">↗</span>}
        </button>
    );
}