import FeatureItem from './FeatureItem';
import { featuresData } from './data.tsx';

function Features() {
    return (
        <section className="py-20 px-4 relative" aria-label="Highlights of Da Frens server">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#cd41ff] to-purple-400 bg-clip-text text-transparent">
                        Server Features
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Discover what makes our community special and why you should join us today
                    </p>
                </div>
                
                <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#cd41ff]/10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]" />
                    </div>
                    
                    {/* Grid container */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {featuresData.map(({ icon, title, description }, index) => (
                            <FeatureItem key={index} icon={icon} title={title}>
                                {description}
                            </FeatureItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
