import React from 'react';
import FeatureItem from './FeatureItem';
import { featuresData } from './serverData';

function Features() {
    return (
        <section className="features" aria-label="Highlights of Da Frens Community">
            {featuresData.map(({ icon, title, description }, index) => (
                <FeatureItem key={index} icon={icon} title={title}>
                    {description}
                </FeatureItem>
            ))}
        </section>
    );
}

export default Features;