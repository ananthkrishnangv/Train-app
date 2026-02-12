import { BottomNav } from "@/components/bottom-nav"

export default function TabsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 pb-16">
            <header className="bg-primary text-primary-foreground p-4 shadow-md sticky top-0 z-10">
                <h1 className="text-xl font-bold">Where is my Train</h1>
            </header>
            <main className="flex-1 container mx-auto p-4 max-w-md">
                {children}
            </main>
            <BottomNav />
        </div>
    )
}
