import { vibeRulesData } from './data';

function VibeRules() {
    const { title, rules, note } = vibeRulesData;
    return (
        <section className="vibe-rules-section" aria-label="Server Culture and Rules">
            <h2>{title}</h2>
            <ul>
                {rules.map((rule, index) => (
                    <li key={index}>
                        <strong>{rule.header}:</strong> {rule.description}
                    </li>
                ))}
            </ul>
            <p className="small-print">{note}</p>
        </section>
    );
}

export default VibeRules;
