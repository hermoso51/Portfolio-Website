'use client';

import React from 'react';
import FlowArrow from '@/components/arroow'
import { Subtitles } from 'lucide-react';
const flow = [
    {title:'Client', subtitle:'(NEXT.js)/React'},
    {title:'API LAYER', subtitle:'(REST/WebSocket)'},
    {title:'Server', subtitle:'(Node.js/Express)'},
    {title:'Database', subtitle:'(PostgreSQL)'}
]
export default function HowIbuild(){
    return (
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-[#09090B] px-6 sm:px-8 lg:px-12 py-16 lg:py-0 gap-12 lg:gap-32 -mt-27">
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}>
                </div>
                

                <div className="flex flex-col lg:flex-row lg:justify-evenly w-full gap-9">
                    <div>
                        <h1 className="text-white lg:text-3xl m-4 ">How I Build</h1>
                        <p className="text-white m-4">
                            I build scalable maintainable<br />
                            application by following a <br />
                            separation of concerns <br />
                            architecture

                        </p>
                    </div>

                    
                      <div className="flex flex-col lg:flex-row items-center gap-4">
                        {flow.map((item, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col gap-4 border lg:rounded-xl border-[#6366F1] items-center justify-center min-h-[150px] p-6 w-50">
                                    <h1 className="text-white font-inter">{item.title}</h1>
                                    <h2 className="text-white font-geist">{item.subtitle}</h2>
                                </div>

                                {index < flow.length - 1 && <FlowArrow />}
                            </React.Fragment>
                        ))}
                    </div>
                        
                    </div>
                    
                



                
            

            

        </section>
    )
}