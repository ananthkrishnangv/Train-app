"use client"

import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, RefreshCw, Share2 } from "lucide-react"
import { getTrainDetails, Train } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function TrainLiveStatusPage() {
    const params = useParams()
    const router = useRouter()
    const trainNo = params.trainNo as string

    // In a real app we'd fetch data here. Mocking logic:
    const train = getTrainDetails(trainNo)

    if (!train) {
        return <div className="p-4">Train not found</div>
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            <header className="bg-primary text-primary-foreground p-4 sticky top-0 z-10 shadow-md">
                <div className="flex items-center gap-4 mb-2">
                    <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-primary-foreground hover:bg-primary/80">
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <div>
                        <h1 className="text-lg font-bold">{train.number} - {train.name}</h1>
                        <p className="text-xs opacity-90">Runs on: {train.runsOn.join(" ")}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-xs opacity-80 px-2">
                    <span>{train.from} ➔ {train.to}</span>
                    <span>Today (Simulated)</span>
                </div>
            </header>

            <main className="container mx-auto p-0 max-w-md">
                <div className="bg-white p-2 shadow-sm mb-2 flex justify-between items-center px-4">
                    <span className="text-sm font-medium text-green-600">On Time</span>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><Share2 className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0"><RefreshCw className="h-4 w-4" /></Button>
                    </div>
                </div>

                <div className="space-y-0 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-300 z-0"></div>

                    {train.stations && train.stations.length > 0 ? (
                        train.stations.map((station, index) => (
                            <div key={station.code} className="relative z-10 flex items-start bg-white border-b p-4 py-3">
                                <div className="flex flex-col items-center mr-4 min-w-[3rem]">
                                    <div className="text-xs text-muted-foreground">{station.arrivalTime}</div>
                                    <div className="h-3 w-3 rounded-full bg-slate-300 border-2 border-white my-1 ring-2 ring-slate-100"></div>
                                    <div className="text-xs text-muted-foreground">{station.departureTime}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="font-bold text-sm">{station.name} ({station.code})</div>
                                    <div className="text-xs text-muted-foreground">{station.distance} | Day {station.day}</div>
                                </div>
                                <div className="text-xs font-mono bg-slate-100 px-1 rounded">
                                    Pf 1
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 text-center text-muted-foreground text-sm">
                            Route info not available for this mock train.
                            <br />Try 12626 (Kerala Express).
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
