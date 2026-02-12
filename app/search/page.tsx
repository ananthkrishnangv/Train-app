"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { searchTrains, getStationName, Train } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SearchResultsPage() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const from = searchParams.get("from") || ""
    const to = searchParams.get("to") || ""

    const trains: Train[] = searchTrains(from, to)

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-primary-foreground hover:bg-primary/80">
                    <ArrowLeft className="h-6 w-6" />
                </Button>
                <div>
                    <h1 className="text-lg font-bold">
                        {from} <span className="mx-1">→</span> {to}
                    </h1>
                    <p className="text-xs opacity-90">
                        {trains.length} Trains Found
                    </p>
                </div>
            </header>

            <main className="container mx-auto p-4 max-w-md space-y-4">
                {trains.length === 0 ? (
                    <div className="text-center py-10 text-muted-foreground">
                        No trains found between these stations.
                        <br />
                        Try NDLS to TVC or MAS to ALLP.
                    </div>
                ) : (
                    trains.map((train) => (
                        <Card key={train.number} className="cursor-pointer hover:bg-slate-50" onClick={() => router.push(`/train/${train.number}`)}>
                            <CardHeader className="p-4 pb-2 flex flex-row justify-between items-start space-y-0">
                                <div>
                                    <CardTitle className="text-base font-bold text-primary">{train.number}</CardTitle>
                                    <p className="text-sm font-medium">{train.name}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground">Runs On:</div>
                                    <div className="text-xs font-semibold">{train.runsOn.join(" ")}</div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 pt-2">
                                <div className="flex justify-between items-center text-sm">
                                    <div>
                                        <div className="font-bold text-lg">{train.departureTime}</div>
                                        <div className="text-muted-foreground text-xs">{train.from}</div>
                                    </div>
                                    <div className="flex flex-col items-center px-4">
                                        <div className="text-xs text-muted-foreground">{train.duration}</div>
                                        <div className="h-[2px] w-16 bg-slate-200 relative my-1">
                                            <div className="absolute -top-[3px] left-0 h-2 w-2 rounded-full bg-slate-300"></div>
                                            <div className="absolute -top-[3px] right-0 h-2 w-2 rounded-full bg-slate-300"></div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold text-lg">{train.arrivalTime}</div>
                                        <div className="text-muted-foreground text-xs">{train.to}</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </main>
        </div>
    )
}
