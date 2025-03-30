import { data } from './data.tsx';

function Appeal() {
    return (
        <section id="appeal" className="py-20 px-4 relative" aria-label="Appeal Discord ban">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#121214]/80 backdrop-blur-sm border border-[#cd41ff]/20 rounded-xl p-8 my-12 text-center max-w-3xl mx-auto shadow-lg shadow-[#cd41ff]/10">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#cd41ff] to-purple-400 bg-clip-text text-transparent">{data.appealData.appealTitle}</h3>
                    <p className="text-gray-300 mb-8 text-lg">{data.appealData.appealDescription}</p>
                    <a
                        href={data.appealData.appealButtonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#cd41ff] to-[#cd41ff]/80 text-white font-bold py-3 px-10 rounded-full inline-block transition-all hover:shadow-[0_0_25px_rgba(205,65,255,0.5)] transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#cd41ff]/50 focus:ring-offset-2 focus:ring-offset-[#121214]"
                        aria-label="Appeal Ban"
                    >
                        {data.appealData.appealButtonText}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Appeal;
