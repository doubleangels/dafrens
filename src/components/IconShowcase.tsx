import iconImage from '../../public/icon.webp';
import { IconShowcaseData } from './serverData.tsx';

function IconShowcase() {
    const { title, description } = IconShowcaseData;
    return (
        <section className="icon-showcase">
            <h2>{title}</h2>
            <img
                src={iconImage}
                alt="Da Frens Server Icon - a circle with the Da Frens logo"
            />
            <p>{description}</p>
        </section>
    );
}

export default IconShowcase;