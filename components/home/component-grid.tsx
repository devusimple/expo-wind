import Link from "next/link";
import Reveal from "./reveal";

export default function ComponentGrid() {
    const items = [
        { "name": "Accordion", "desc": "Collapsible accordion component for showing/hiding content", "link": "/docs/components/accordion" },
        { "name": "AlertDialog", "desc": "Modal dialog for alerts and confirmations", "link": "/docs/components/alert-dialog" },
        { "name": "Alert", "desc": "Alert component for displaying notifications", "link": "/docs/components/alert" },
        { "name": "AspectRatio", "desc": "Component for maintaining aspect ratio", "link": "/docs/components/aspect-ratio" },
        { "name": "Avatar", "desc": "Avatar component for user profile images", "link": "/docs/components/avatar" },
        { "name": "Badge", "desc": "Badge component for labels and statuses", "link": "/docs/components/badge" },
        { "name": "Breadcrumb", "desc": "Breadcrumb navigation component", "link": "/docs/components/breadcrumb" },
        { "name": "Button", "desc": "Reusable button component with multiple variants", "link": "/docs/components/button" },
        { "name": "Calendar", "desc": "Calendar date picker component", "link": "/docs/components/calendar" },
        { "name": "Card", "desc": "Card component for displaying content in a contained area", "link": "/docs/components/card" },
        { "name": "Carousel", "desc": "Carousel component for cycling through items", "link": "/docs/components/carousel" },
        { "name": "Chart", "desc": "Chart component for data visualization", "link": "/docs/components/chart" },
        { "name": "Checkbox", "desc": "Checkbox input component", "link": "/docs/components/checkbox" },
        { "name": "Cn", "desc": "Utility function for merging Tailwind CSS classes with conflict resolution", "link": "/docs/components/cn" },
        { "name": "Collapsible", "desc": "Collapsible panel component", "link": "/docs/components/collapsible" },
        { "name": "Combobox", "desc": "Combobox input with autocomplete", "link": "/docs/components/combobox" },
        { "name": "Command", "desc": "Command palette component", "link": "/docs/components/command" },
        { "name": "ContextMenu", "desc": "Context menu component", "link": "/docs/components/context-menu" },
        { "name": "DataTable", "desc": "Data table component for displaying tabular data", "link": "/docs/components/data-table" },
        { "name": "DatePicker", "desc": "Date picker component", "link": "/docs/components/date-picker" },
        { "name": "Dialog", "desc": "Modal dialog component", "link": "/docs/components/dialog" },
        { "name": "Drawer", "desc": "Drawer component for side panels", "link": "/docs/components/drawer" },
        { "name": "DropdownMenu", "desc": "Dropdown menu component", "link": "/docs/components/dropdown-menu" },
        { "name": "Form", "desc": "Form component with validation", "link": "/docs/components/form" },
        { "name": "HoverCard", "desc": "Hover card for previews", "link": "/docs/components/hover-card" },
        { "name": "InputOtp", "desc": "One-time password input component", "link": "/docs/components/input-otp" },
        { "name": "Input", "desc": "Text input component", "link": "/docs/components/input" },
        { "name": "Label", "desc": "Label component for form fields", "link": "/docs/components/label" },
        { "name": "Menubar", "desc": "Menu bar component", "link": "/docs/components/menubar" },
        { "name": "NavigationMenu", "desc": "Navigation menu component", "link": "/docs/components/navigation-menu" },
        { "name": "Pagination", "desc": "Pagination component", "link": "/docs/components/pagination" },
        { "name": "Popover", "desc": "Popover component for floating content", "link": "/docs/components/popover" },
        { "name": "Progress", "desc": "Progress bar component", "link": "/docs/components/progress" },
        { "name": "RadioGroup", "desc": "Radio group component", "link": "/docs/components/radio-group" },
        { "name": "RadioGroup", "desc": "Radio group component", "link": "/docs/components/radio-group" },
        { "name": "Resizable", "desc": "Resizable panel component", "link": "/docs/components/resizable" },
        { "name": "ScrollArea", "desc": "Scroll area component", "link": "/docs/components/scroll-area" },
        { "name": "Select", "desc": "Select dropdown component", "link": "/docs/components/select" },
        { "name": "Separator", "desc": "Separator component", "link": "/docs/components/separator" },
        { "name": "Sheet", "desc": "Sheet component for slide-in panels", "link": "/docs/components/sheet" },
        { "name": "Skeleton", "desc": "Skeleton loading component", "link": "/docs/components/skeleton" },
        { "name": "Slider", "desc": "Slider input component", "link": "/docs/components/slider" },
        { "name": "Sonner", "desc": "Sonner toast notification component", "link": "/docs/components/sonner" },
        { "name": "Switch", "desc": "Switch toggle component", "link": "/docs/components/switch" },
        { "name": "Table", "desc": "Table component", "link": "/docs/components/table" },
        { "name": "Tabs", "desc": "Tabs component", "link": "/docs/components/tabs" },
        { "name": "Text", "desc": "Text component with typography variants", "link": "/docs/components/text" },
        { "name": "Textarea", "desc": "Textarea input component", "link": "/docs/components/textarea" },
        { "name": "Toast", "desc": "Toast notification component", "link": "/docs/components/toast" },
        { "name": "ToggleGroup", "desc": "Toggle group component", "link": "/docs/components/toggle-group" },
        { "name": "Toggle", "desc": "Toggle button component", "link": "/docs/components/toggle" },
        { "name": "Tooltip", "desc": "Tooltip component", "link": "/docs/components/tooltip" },
        { "name": "Typography", "desc": "Typography components for headings and text", "link": "/docs/components/typography" },
    ];

    return (
        <section id="components" className="relative mx-auto max-w-6xl px-6 py-20">
            <Reveal>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <div className="mb-2 font-mono text-xs uppercase tracking-widest text-indigo-400">components</div>
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100">The same names. The same props you&apos;d expect.</h2>
                    </div>
                    <span className="font-mono text-sm text-zinc-500">{items.length} shipped</span>
                </div>
            </Reveal>

            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-800 md:grid-cols-4">
                {items.map((item, i) => (
                    <Reveal key={item.name} delay={i * 40}>
                        <Link href={item.link}>
                            <div className="group relative h-full bg-zinc-950 p-5 transition-colors duration-300 hover:bg-zinc-900">
                                <div
                                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    style={{
                                        background: 'radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 70%)',
                                    }}
                                />
                                <div className="relative">
                                    <div className="mb-1.5 font-mono text-sm text-zinc-100">&lt;{item.name} /&gt;</div>
                                    <div className="text-xs leading-relaxed text-zinc-500">{item.desc}</div>
                                </div>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}