import { ChevronRight } from 'lucide-react';

export default function FlowArrow() {
  return (
    <div className="flex items-center justify-center rotate-90 lg:rotate-0 transition-transform duration-300 my-1 lg:my-0">
      <div className="h-px w-8 lg:w-10 bg-[#6366F1]" />
      <ChevronRight className="w-4 h-4 text-[#6366F1] -mt-0 lg:mt-0 lg:-ml-1" strokeWidth={2.5} />
    </div>
  );
}