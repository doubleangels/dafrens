import React from 'react';
import { communityTagline } from './serverData';

function Header() {
    return (
        <header>
            <h1>Welcome to Da Frens!</h1>
            <p>{communityTagline}</p>
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
