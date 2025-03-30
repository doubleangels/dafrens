import React from 'react';
import gifPath from '/banner.gif';
import { gifShowcaseData } from './data.tsx';

function GifShowcase() {
    const { title, description } = gifShowcaseData;
    
    return (
        <section className="relative mx-auto px-4 py-16 max-w-5xl" aria-label="Da Frens server showcase">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#cd41ff]/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px]"></div>
            </div>
            
            <div className="relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#cd41ff] to-purple-400 bg-clip-text text-transparent">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#cd41ff] to-purple-500 rounded mx-auto mb-6"></div>
                </div>
                
                <div className="relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800/50 hover:border-[#cd41ff]/30 transition-all group max-w-3xl">
                    {/* Glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-[#cd41ff]/20 to-purple-600/20 blur-sm"></div>
                    
                    {/* Image */}
                    <img
                        src={gifPath}
                        alt="Da Frens server banner gif"
                        className="w-full h-auto rounded-md relative z-10"
                        loading="lazy"
                    />
                </div>
                
                <p className="text-gray-300 text-lg max-w-2xl text-center mx-auto mt-8 leading-relaxed">
                    {description}
                </p>
                
                <div className="flex justify-center mt-8">
                    <a 
                        href="https://discord.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#cd41ff] to-purple-600 text-white font-semibold shadow-lg hover:shadow-[#cd41ff]/20 hover:shadow-xl transition-all"
                    >
                        Join Our Community
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default GifShowcase;
