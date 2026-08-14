'use client';
import { type LucideProps} from 'lucide-react'
import {UserRound , LocateIcon, GraduationCapIcon, LightbulbIcon} from 'lucide-react'
import React from 'react';

const infos=[
    {icon: UserRound, description:'Experience 3+ years in IT 1+ Year in Dev'},
    {icon:LocateIcon, description:'Location Quezon City,Philippines'},
    {icon:GraduationCapIcon, description:'Focus Full Stack Web Development'},
    {icon:LightbulbIcon, description:'Mindset Problem Solver Lifelong Learner'}
]

export default function About(){
    return(
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] bg-[#09090B] px-6 sm:px-8 lg:px-12 py-16 lg:py-0 gap-12 lg:gap-32 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
                    backgroundSize: '48px 48px',
                }}>
                </div>

            <div className="">
                <h1 className="bg-gradient-to-r from-white via-indigo-600 to-[#6366F1] bg-clip-text text-transparent font-inter font-bold text-4xl lg:text-4xl p-2 ">About Me</h1>
                <p className="text-white font-geist">I'm a career shifter from IT support to software enggineering.<br />
                            My background in enterprise IT taught me how system work,<br />
                            how to solve real problems, and how to support people.<br />
                            Now, I build web applications that create impact.<br />
                            i love turning ideas into practical solutions through<br />
                            clean code, intuitive UI, and efficient backend architecture.
                </p>
            </div>

            <div>
                <div>
                    {infos.map((info,index)=>(
                        <React.Fragment key={index}>
                            <div className='border flex flex-col gap-4 lg:rounded-xl border-[#6366F1] items-center justify-center min-h-[150px] p-6 w-50'></div>
                        </React.Fragment>
                    ))}
                    </div>
                </div>
            
        </section>
    )
}