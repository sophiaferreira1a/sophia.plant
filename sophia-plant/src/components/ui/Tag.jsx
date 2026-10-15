function Tag({ children, className = "" }) {
    return (
        <div className={`inline-flex flex-col ${className}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-soil">
                {children}
            </span>

            <span className="mt-2 h-1 w-12 rounded-full bg-leaf" />
        </div>
    );
}

export default Tag;