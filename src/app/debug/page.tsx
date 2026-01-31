"use client";

import { useState } from "react";
import { ConsistencyEngine } from "@/lib/consistency_engine";
import { FPCGuardian } from "@/lib/fpc_guardian";
import { EveAuditor } from "@/lib/eve_auditor";

import { SemanticMatcher } from "@/lib/semantic_matcher";

const engine = new ConsistencyEngine();
const fpc = new FPCGuardian();
const eve = new EveAuditor();
const matcher = new SemanticMatcher();

export default function DebugConsole() {
    const [logs, setLogs] = useState<string[]>([]);
    const [input, setInput] = useState("");

    const addLog = (msg: string) => setLogs(prev => [`[${new Date().toLocaleTimeString()}] ${msg}`, ...prev]);

    const testConsistency = async () => {
        addLog("TEST: Consistency Engine...");
        try {
            const result = await engine.generateCatPersona({ humanPhotoUrl: "mock-base64", id: "user-1" });
            addLog(`RESULT: Generated Persona -> ${JSON.stringify(result, null, 2)}`);
        } catch (e) {
            addLog(`ERROR: ${e}`);
        }
    };

    const testFPC = async () => {
        addLog("TEST: FPC Guardian...");
        const trap = fpc.generateTrap();
        addLog(`TRAP: "${trap.text}"`);

        const response = input || "Blueberries";
        addLog(`USER ANSWER: "${response}"`);
        const passed = await fpc.evaluateResponse(response);
        addLog(`VERDICT: ${passed ? "PASSED (Human)" : "FAILED (Bot)"}`);

        // Test Depth
        const depth = await fpc.evaluateSemanticDepth(response);
        addLog(`DEPTH: Score ${depth.depthScore} - "${depth.feedback}"`);
    };

    const testEve = () => {
        addLog("TEST: Eve Auditor...");
        const chat = [input || "I need a gift card urgently."];
        addLog(`ANALYZING: ${JSON.stringify(chat)}`);
        const score = eve.auditConversation(chat);
        addLog(`THREAT SCORE: ${score}`);
    };

    const testMatcher = () => {
        addLog("TEST: Semantic Matcher (MCQ Mode)...");
        const drop = matcher.getDailyDrop();
        addLog(`DAILY DROP: [${drop.date}] Question ID: ${drop.questionId}`);

        const userA = { id: "me", displayName: "Me", location: "Void" } as any;
        const userB = { id: "them", displayName: "Soulmate", location: "Void" } as any;

        // Simulating Option Selection
        const ansA = { answer: input || "A" } as any; // User selected Option A
        const ansB = { answer: "A" } as any; // Mock Soulmate also selected A

        addLog(`COMPARING: Option [${ansA.answer}] vs Option [${ansB.answer}]`);
        const score = matcher.calculateSynchronicity(userA, userB, ansA, ansB);
        addLog(`SYNCHRONICITY: ${(score * 100).toFixed(1)}%`);

        if (score > 0.8) addLog(">>> MATCH FOUND! Same Option Selected. <<<");
        else addLog("...The silence remains.");
    };

    return (
        <div className="min-h-screen bg-black text-green-500 font-mono p-8">
            <h1 className="text-2xl font-bold mb-4 border-b border-green-500 pb-2">CatPhish Debug Console</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                    <div className="p-4 border border-green-500/30 rounded">
                        <h2 className="text-white mb-2">Controls</h2>
                        <input
                            className="w-full bg-black border border-green-500/50 p-2 mb-4 text-white"
                            placeholder="Enter test input..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="flex gap-2 flex-wrap">
                            <button onClick={testConsistency} className="px-4 py-2 bg-blue-600/50 text-white rounded hover:bg-blue-500">
                                Consistency
                            </button>
                            <button onClick={testFPC} className="px-4 py-2 bg-purple-600/50 text-white rounded hover:bg-purple-500">
                                FPC Trap + Depth
                            </button>
                            <button onClick={testEve} className="px-4 py-2 bg-red-600/50 text-white rounded hover:bg-red-500">
                                Eve Audit
                            </button>
                            <button onClick={testMatcher} className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500 font-bold">
                                Daily Match
                            </button>
                        </div>
                    </div>

                    <div className="p-4 border border-green-500/30 rounded flex-1">
                        <h2 className="text-white mb-2 hidden">System Status</h2>
                        <div className="text-sm opacity-70">
                            <p>SYSTEM: ONLINE</p>
                            <p>VERSION: 1.1.0-DailyRitual</p>
                            <p>MODE: SEMANTIC_MATCHING</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-black border border-green-500 rounded h-[600px] overflow-y-auto font-mono text-xs">
                    {logs.map((log, i) => (
                        <div key={i} className="mb-1 border-b border-green-500/10 pb-1 whitespace-pre-wrap">{log}</div>
                    ))}
                    {logs.length === 0 && <span className="opacity-50">Waiting for commands...</span>}
                </div>
            </div>
        </div>
    );
}
