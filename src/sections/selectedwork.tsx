'use client';

import { useState } from "react";

export default function SelectedWork() {
    const [isClicked, setIsClicked] = useState(false);
    return(
        <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen bg-[#09090B] px-6 sm:px-8 lg:px-12 py-16 lg:py-0 gap-12 lg:gap-20">
            <div className="w-full max-w-md lg:max-w-2xl lg:w-[42vw] rounded-xl border border-white/10 bg-[#0d1117] p-6 shadow-2xl">

            </div>
        </section>
    )
}