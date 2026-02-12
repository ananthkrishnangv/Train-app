"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { STATIONS } from "@/lib/data"

export default function SeatsPage() {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [date, setDate] = useState("")
    const [results, setResults] = useState<any[]>([])
    const [loading, setLoading] = useState(false)

    const handleSearch = () => {
        if (!from || !to) return
        setLoading(true)
        setResults([])
        // Simulate API
        setTimeout(() => {
            setLoading(false)
            setResults([
                { date: "15 Aug", status: "AVAILABLE 45", color: "text-green-600" },
                { date: "16 Aug", status: "RAC 12", color: "text-yellow-600" },
                { date: "17 Aug", status: "WL 23", color: "text-red-600" },
                { date: "18 Aug", status: "AVAILABLE 102", color: "text-green-600" },
            ])
        }, 1000)
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Seat Availability</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid gap-2">
                        <Label>From Station</Label>
                        <Input
                            placeholder="From Station"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            list="stations"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>To Station</Label>
                        <Input
                            placeholder="To Station"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            list="stations"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label>Date</Label>
                        <Input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <datalist id="stations">
                        {STATIONS.map((s) => (
                            <option key={s.code} value={s.code}>{s.name}</option>
                        ))}
                    </datalist>

                    <Button className="w-full" onClick={handleSearch} disabled={loading}>
                        {loading ? "Searching..." : "Check Availability"}
                    </Button>
                </CardContent>
            </Card>

            {results.length > 0 && (
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-base">12626 / KERALA EXPRESS (SL)</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="divide-y">
                            {results.map((r, i) => (
                                <div key={i} className="flex justify-between py-3">
                                    <span className="font-medium">{r.date}</span>
                                    <span className={`font-bold ${r.color}`}>{r.status}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
