export default function Tag({ children, className = "" }) {
    return (
        <span className={`inline-flex items-center rounded-full border border-soil/40 bg-sand/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-soil ${className}`}>
            {children}
        </span>
    );
}