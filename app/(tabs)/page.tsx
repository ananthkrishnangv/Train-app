"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { STATIONS } from "@/lib/data"

export default function SpotPage() {
    const router = useRouter()
    const [from, setFrom] = React.useState("")
    const [to, setTo] = React.useState("")

    const handleSearch = () => {
        if (!from && !to) return;
        router.push(`/search?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`)
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Spot Train</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="from">From Station</Label>
                        <Input
                            id="from"
                            placeholder="e.g. NDLS"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            list="stations"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="to">To Station</Label>
                        <Input
                            id="to"
                            placeholder="e.g. TVC"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            list="stations"
                        />
                    </div>

                    <datalist id="stations">
                        {STATIONS.map((s) => (
                            <option key={s.code} value={s.code}>{s.name}</option>
                        ))}
                    </datalist>

                    <Button className="w-full" onClick={handleSearch}>Find Trains</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Live Station</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="flex space-x-2">
                        <Input placeholder="Station Code/Name" />
                        <Button size="icon">
                            <Search className="h-4 w-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground mt-8">
                <p>Recent Searches will appear here</p>
            </div>
        </div>
    )
}
