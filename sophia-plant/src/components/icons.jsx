//cria os íncones

export function SproutLogo(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
            <path d="M12 21V11" />
            <path d="M12 11c0-4 3-7 7-7 0 4-3 7-7 7Z" />
            <path d="M12 13c0-3-2-5-5-5 0 3 2 5 5 5Z" />
        </svg>
    );
}

export function ArrowUpRight(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
        </svg>
    );
}

export function MailIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
        </svg>
    );
}

export function GitHubIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}>
            <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-1.04-.02-1.88-2.78.62-3.37-1.21-3.37-1.21-.46-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.05 1.53 1.05.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.74 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.7.12 2.49.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.43.21 2.48.1 2.74.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
        </svg>
    );
}

export function LinkedInIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}>
            <path d="M4.98 3.5A1.48 1.48 0 1 0 5 6.46 1.48 1.48 0 0 0 4.98 3.5ZM3.5 8h3V20h-3V8Zm7 0h2.88v1.71h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.58V20h-3v-6.3c0-1.5-.03-3.43-2.09-3.43-2.1 0-2.42 1.64-2.42 3.33V20h-3V8Z" />
        </svg>
    );
}