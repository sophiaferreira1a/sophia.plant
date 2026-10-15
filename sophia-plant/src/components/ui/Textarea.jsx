function Textarea({
    id,
    label,
    error,
    className = "",
    ...props
}) {
    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={id}
                    className="block font-medium text-soil"
                >
                    {label}
                </label>
            )}

            <textarea
                id={id}
                className="
                    w-full
                    rounded-xl
                    border
                    border-sand
                    bg-white
                    px-4
                    py-3
                    text-soil
                    outline-none
                    transition
                    focus:border-leaf
                    focus:ring-2
                    focus:ring-leaf/20
                    resize-y
                "
                {...props}
            />

            {error && (
                <p className="text-sm text-red-600">
                    {error}
                </p>
            )}
        </div>
    );
}

export default Textarea;