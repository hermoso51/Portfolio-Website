'use client';


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


export default function TechStack() {
    return(
    <section className="relative bg-[#09090B] px-6 sm:px-8 lg:px-12 py-24 overflow-hidden">

      {/* Grid background, consistent with Hero */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.15) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(99,102,241,0.15) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,#09090B_80%)] pointer-events-none" />

        <h1 className="text-white font-inter font-semibold text-4xl">Tech Stack</h1>

        <div className="">

        </div>



    </section>
    )
}