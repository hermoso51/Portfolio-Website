'use client';

import { useState } from "react";

export default function Hero() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] bg-[#09090B] px-6 sm:px-8 lg:px-12 py-16 lg:py-0 gap-12 lg:gap-32 overflow-hidden">

            {/* Grid background */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}
            />
            {/* Radial fade so grid fades out at edges */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#09090B_80%)] pointer-events-none" />

            {/* Glow behind code panel */}
            <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-[#6366F1]/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Left Side */}
            <div className="relative z-10 flex flex-col justify-center flex-1 text-center lg:text-left items-center lg:items-start">
                <h3 className="text-[#6366F1] font-sekuya text-lg font-semibold select-none">
                    Junior
                </h3>

                <h1 className="text-white font-sekuya text-4xl sm:text-5xl lg:text-7xl hover:text-white transition-all duration-300 hover:[text-shadow:0_0_8px_rgba(255,255,255,0.9),0_0_16px_rgba(255,255,255,0.5)] select-none">
                    Full Stack
                    <br />
                    Developer
                </h1>

                <p className="text-white/70 text-base sm:text-lg mt-4 select-none">
                    Building modern web applications
                    <br />
                    with cutting-edge technologies.
                </p>

                <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
                    <button className="bg-[#6366F1] text-white font-geist py-2 px-4 rounded-md hover:bg-[#4F46E5] transition-colors duration-300">
                        View My Work
                    </button>
                    <button className="bg-[#111113] border border-[#27272A] text-white font-geist py-2 px-4 rounded-md hover:bg-[#2D3748] transition-colors duration-300">
                        GitHub ↗
                    </button>
                </div>

                <div className="flex items-center gap-1 mt-4">
                    <span className="text-green-400 text-4xl">&#8226;</span>
                    <p className="text-white/70 text-sm">
                        Open for Software Engineering Opportunities
                    </p>
                </div>
            </div>

            {/* Right Side */}
            <div className="relative z-10 w-full max-w-md lg:max-w-2xl lg:w-[42vw] rounded-xl border border-white/10 bg-[#0d1117] p-6 shadow-2xl">

                {/* Top Bar */}
                <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-slate-500">
                        developer.ts
                    </span>
                </div>

                {/* Code Block */}
                <pre className="font-mono text-xs sm:text-sm leading-7 whitespace-pre-wrap break-words">
                    <span className="text-pink-400">const</span>{" "}
                    <span className="text-cyan-400">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>

                    {"\n  "}
                    <span className="text-blue-400">name:</span>{" "}
                    <span className="text-green-400">"Joshua Hermoso",</span>

                    {"\n  "}
                    <span className="text-blue-400">role:</span>{" "}
                    <span className="text-green-400">
                        "Junior Full Stack Developer",
                    </span>

                    {"\n  "}
                    <span className="text-blue-400">stack:</span> [

                    {"\n    "}
                    <span className="text-green-400">"React",</span>
                    {"\n    "}
                    <span className="text-green-400">"Next.js",</span>
                    {"\n    "}
                    <span className="text-green-400">"TypeScript",</span>
                    {"\n    "}
                    <span className="text-green-400">"Node.js",</span>
                    {"\n    "}
                    <span className="text-green-400">"PostgreSQL",</span>
                    {"\n    "}
                    <span className="text-green-400">"Python",</span>
                    {"\n    "}
                    <span className="text-green-400">"FastAPI",</span>
                    {"\n    "}
                    <span className="text-green-400">"Playwright"</span>

                    {"\n  "}]

                    {"\n"}
                    <span className="text-white">{"}"}</span>;
                </pre>
            </div>

        </section>
    )
}