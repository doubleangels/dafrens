import { communityTagline } from './data.tsx';
import iconImage from '/icon.webp';

function Header() {
    return (
        <header aria-label='Da Frens Community'>
            <h1>Welcome to Da Frens!</h1>
            <p>{communityTagline}</p>
            <img className='header-icon'
                src={iconImage}
                alt="Da Frens server icon" />
            <a
                href="https://discord.gg/dafrens"
                className="header-cta"
                aria-label="Join Discord"
            >
                Join Discord
            </a>
        </header>
    );
}

export default Header;
