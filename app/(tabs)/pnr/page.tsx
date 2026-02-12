"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function PNRPage() {
    const [pnr, setPnr] = useState("")
    const [status, setStatus] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    const handleSearch = () => {
        if (pnr.length !== 10) {
            alert("Please enter a valid 10-digit PNR")
            return
        }
        setLoading(true)
        setStatus(null)

        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            const mockStatus = {
                trainName: "12626 / KERALA EXPRESS",
                doj: "15-Aug-2024",
                from: "NDLS",
                to: "TVC",
                passengers: [
                    { curr: "CNF / B1 / 45", book: "CNF / B1 / 45" },
                    { curr: "CNF / B1 / 46", book: "CNF / B1 / 46" },
                ],
                chartPrepared: true
            }
            setStatus(mockStatus)
        }, 1500)
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg">PNR Status</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Input
                        placeholder="Enter 10-digit PNR Number"
                        type="number"
                        value={pnr}
                        onChange={(e) => setPnr(e.target.value)}
                        maxLength={10}
                    />
                    <Button className="w-full" onClick={handleSearch} disabled={loading}>
                        {loading ? "Checking..." : "Find PNR Status"}
                    </Button>
                </CardContent>
            </Card>

            {status && (
                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle className="text-base">{status.trainName}</CardTitle>
                                <p className="text-xs text-muted-foreground">DOJ: {status.doj}</p>
                            </div>
                            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold">
                                CHART PREPARED
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm border-b pb-2">
                                <span>{status.from}</span>
                                <span className="text-muted-foreground">➔</span>
                                <span>{status.to}</span>
                            </div>
                            {status.passengers.map((p: any, i: number) => (
                                <div key={i} className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground">Passenger {i + 1}</span>
                                    <span className="font-bold text-green-600">{p.curr}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="text-center text-xs text-muted-foreground mt-4">
                Disclaimer: Status shown is simulated for demonstration.
            </div>
        </div>
    )
}
