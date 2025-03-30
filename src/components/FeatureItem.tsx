import React from 'react';

interface FeatureItemProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

function FeatureItem({ icon, title, children }: FeatureItemProps) {
    return (
        <div 
            className="bg-[#121214]/60 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-[#cd41ff]/30 transition-all hover:shadow-[0_5px_30px_rgba(205,65,255,0.15)] group flex flex-col items-center text-center hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cd41ff]/50" 
            tabIndex={0}
        >
            <div className="bg-[#cd41ff]/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-[#cd41ff]/20 transition-all">
                <span className="text-[#cd41ff] text-xl" aria-hidden="true">
                    {icon}
                </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{children}</p>
        </div>
    );
}

export default FeatureItem;
