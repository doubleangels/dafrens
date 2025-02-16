import { appealData } from './data.tsx';

function Appeal() {
    const { title, description } = appealData;
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a
                href="https://appeal.gg/dafrens"
                className="appeal-btn"
                aria-label="Appeal Ban"
            >
                Appeal Ban
            </a>
        </div>
    );
}

export default Appeal;
