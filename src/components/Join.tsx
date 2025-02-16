import { joinData } from './data.tsx';

function Join() {
    const { title, description } = joinData;
    return (
        <div className='join-section' aria-label='Join Da Frens Discord server'>
            <h2>{title}</h2>
            <p>{description}</p>
            <a
                href="https://discord.gg/dafrens"
                className="join-btn"
                aria-label="Join Discord"
            >
                Join Discord
            </a>
        </div>
    );
}

export default Join;
