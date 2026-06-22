export default function MockSwitch({ on }: { on: boolean }) {
    return (
        <div
            style={{
                width: 40,
                height: 24,
                borderRadius: 999,
                background: on ? '#6366F1' : '#27272A',
                padding: 2,
                transition: 'background 0.3s ease',
                display: 'flex',
                justifyContent: on ? 'flex-end' : 'flex-start',
            }}
        >
            <div
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    background: '#FAFAFA',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.4)',
                    transition: 'transform 0.3s ease',
                }}
            />
        </div>
    );
}