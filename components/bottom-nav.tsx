"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrainFront, Ticket, Armchair } from "lucide-react"

import { cn } from "@/lib/utils"

export function BottomNav() {
    const pathname = usePathname()

    const tabs = [
        {
            name: "Spot",
            href: "/",
            icon: TrainFront,
            active: pathname === "/",
        },
        {
            name: "PNR",
            href: "/pnr",
            icon: Ticket,
            active: pathname === "/pnr",
        },
        {
            name: "Seats",
            href: "/seats",
            icon: Armchair,
            active: pathname === "/seats",
        },
    ]

    return (
        <div className="fixed bottom-0 left-0 z-50 w-full border-t bg-background">
            <div className="flex h-16 items-center justify-around">
                {tabs.map((tab) => (
                    <Link
                        key={tab.name}
                        href={tab.href}
                        className={cn(
                            "flex flex-col items-center justify-center space-y-1 text-sm font-medium transition-colors hover:text-primary",
                            tab.active ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        <tab.icon className="h-6 w-6" />
                        <span className="text-xs">{tab.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
