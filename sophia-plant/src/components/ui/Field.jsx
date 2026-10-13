const baseInput = "w-full rounded-lg border bg-cream px-4 py-3 text-sm text-leaf placeholder:text-soil/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sprout";
const errorClass = "border-red-500 focus:border-red-500";
const normalClass = "border-soil/30";

//Exporta e Input e Textarea com estado de erro + o formato de validação que o design exige

function Label({ id, children, required }) {
    return (
        <label htmlFor={id} className="text-sm font-medium text-leaf">
            {children}
            {required && <span className="ml-0.5 text-red-500" aria-hidden="true">*</span>}
        </label>
    );
}

function FieldError({ id, error }) {
    if (!error) return null;
    return (
        <p id={id} role="alert" className="flex items-center gap-1.5 text-sm text-red-600">
            <span aria-hidden="true">⚠</span>
            {error}
        </p>
    );
}

export function Input({ label, id, required, error, hint = "", className = "", ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <Label id={id} required={required}>{label}</Label>
            <input
                id={id}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`${baseInput} ${error ? errorClass : normalClass} ${className}`}
                {...props}/>
            {hint && !error && <p className="text-xs text-soil/80">{hint}</p>}
            <FieldError id={`${id}-error`} error={error} />
        </div>
    );
}

export function Textarea({ label, id, required, error, hint = "", className = "", ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <Label id={id} required={required}>{label}</Label>
            <textarea
                id={id}
                rows={props.rows ?? 6}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                className={`${baseInput} ${error ? errorClass : normalClass} ${className}`}
                {...props}
            />
            {hint && !error && <p className="text-xs text-soil/80">{hint}</p>}
            <FieldError id={`${id}-error`} error={error} />
        </div>
    );
}