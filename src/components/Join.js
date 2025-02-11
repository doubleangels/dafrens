import React from 'react';
import { joinData } from './serverData';

function Join() 
{   const { title, description } = joinData;
    return (
        <section className="join-section">
            <h2>{title}</h2>
            <p>{description}</p>
            <a
                href="https://discord.gg/dafrens"
                className="join-btn"
                aria-label="Join Discord"
            >
                Join Discord
            </a>
        </section>
    );
}

export default Join;
