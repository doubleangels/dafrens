import React from 'react';

function FeatureItem({ icon, title, children }) {
    return (
        <div className="feature" tabIndex="0">
            <div className="feature-icon" aria-hidden="true">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}

export default FeatureItem;