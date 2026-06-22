export default function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <span
            className={className}
            style={{
                background: 'linear-gradient(135deg, #FAFAFA 30%, #A5B4FC 65%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
            }}
        >
            {children}
        </span>
    );
}