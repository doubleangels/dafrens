import { data } from "./data";

function Embed() {
    return (
        <section className="py-16 px-4 relative" aria-label="Discord embed from Da Frens server">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#cd41ff] to-purple-400 bg-clip-text text-transparent">
                        {data.embedData.embedTitle}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                        {data.embedData.embedDescription}
                    </p>
                </div>
                
                <div className="relative mx-auto max-w-md">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#cd41ff]/30 to-purple-500/20 rounded-xl blur-md"></div>
                    <div className="bg-[#121214]/80 backdrop-blur-sm border border-[#cd41ff]/20 rounded-xl p-3 shadow-xl shadow-[#cd41ff]/5 relative">
                        <iframe
                            title="Discord Widget"
                            src="https://discord.com/widget?id=691991366615564388&theme=dark"
                            className="w-[350px] h-[500px] mx-auto rounded-lg"
                            allowTransparency={true}
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Embed;
