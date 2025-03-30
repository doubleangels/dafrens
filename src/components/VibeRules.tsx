import { vibeRulesData } from './data';

function VibeRules() {
    const { title, rules, note } = vibeRulesData;
    return (
        <section className="bg-[#121214]/60 backdrop-blur-sm border border-gray-800 rounded-lg p-8 my-10 max-w-4xl mx-auto shadow-xl" aria-label="Server culture and rules">
            <h2 className="text-2xl font-bold text-[#cd41ff] mb-6 border-b border-gray-800 pb-3">{title}</h2>
            <ul className="space-y-4 mb-6">
                {rules.map((rule, index) => (
                    <li key={index} className="text-gray-300 flex group">
                        <span className="text-[#cd41ff] text-lg mr-2 transform transition-transform group-hover:scale-125">•</span>
                        <div>
                            <strong className="text-white font-semibold">{rule.header}:</strong> {rule.description}
                        </div>
                    </li>
                ))}
            </ul>
            <p className="text-gray-400 text-sm italic mt-6 border-t border-gray-800 pt-3">{note}</p>
        </section>
    );
}


export default VibeRules;
