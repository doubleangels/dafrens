import gifImage from '/banner.gif';
import { gifShowcaseData } from './data.tsx';

function gifShowcase() {
    const { title, description } = gifShowcaseData;
    return (
        <section className="gif-showcase" aria-label='Da Frens server icon'>
            <h2>{title}</h2>
            <img
                src={gifImage}
                alt="Da Frens server banner gif"
            />
            <p>{description}</p>
        </section>
    );
}

export default gifShowcase;