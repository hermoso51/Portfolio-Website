'use client';

import { li } from "framer-motion/client";


const Frontend= [
    'React',
    'Next js',
    'TypeScript',
    'Zustand',
    'Tailwind css'
]

const Backend = [
    'Node',
    'Express',
    'Rest APIs',
    'WebSockets',
    'JWT',
    'FastAPI',
    
]

const Database = [
    'Postgre',
    'SQL',
    'MongoDB'
]

const Tools = [
    'Github',
    'Docker',
    'VSCODE',
    'PlayWright',
    'Postman'
]
const li_class = "sm:text-sm flex items-center gap-2"
const bullet = "text-purple-400 text-3xl select-none leading-none"
const h2_heading = "text-white font-inter sm:text-xl"
const textstach_text_styling = "text-white font-geist p-1"


export default function TechStack() {
    return(
    <section className="relative bg-[#09090B] px-6 sm:px-8 lg:px-12 py-24 overflow-hidden -mt-30">

      {/* Grid background, consistent with Hero */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}>
        </div>
        

        <h1 className="text-white font-inter font-semibold text-4xl p-10">Tech Stack</h1>

        <div className="flex flex-col lg:flex-row lg:justify-evenly w-full gap-9">
            <div>
                <h2 className={h2_heading}>Frontend</h2>
                    <div className={textstach_text_styling}>
                        <ul>
                            {Frontend.map((i, index) => (
                                <li className={li_class} key={index}>
                                    <span className={bullet} key={index}>&#8226;</span>{i}</li>    
                            ))}
                        </ul>                       
                    </div>       
            </div>

            <div>
                <h2 className={h2_heading}>Backend</h2>
                <div className={textstach_text_styling}>
                    <ul>
                        {Backend.map((i, index)=>(
                            <li className={li_class} key={index}>
                                <span className={bullet} key={index}>&#8226;</span>{i}
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

            <div>
                <h2 className={h2_heading}>Database</h2>
                <div className={textstach_text_styling}>
                    <ul>
                        {Database.map((i,index)=> (
                            <li className={li_class} key={index}>
                                <span className={bullet} key={index}>&#8226;</span>
                                {i}
                            </li>

                        ))}
                    </ul>
                </div>
            </div>

            <div>
                <h2 className={h2_heading}>Tools</h2>
                <div className={textstach_text_styling}>
                    <ul>
                        {Tools.map((i,index)=>(
                            <li className={li_class} key={index}>
                                <span className={bullet} key={index}>&#8226;</span>
                                {i}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

       </div>



    </section>
    )
}