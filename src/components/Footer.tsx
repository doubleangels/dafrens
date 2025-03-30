import { footerText } from './data.tsx';

function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="relative bg-[#0a0a0b] border-t border-gray-800/30">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-[#cd41ff]/5 rounded-full blur-[80px] transform -translate-y-1/2"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center">
                            {/* You can add a small logo here if available */}
                            <span className="font-bold text-white text-lg">Da Frens</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
                        <a href="https://discord.com" className="text-gray-400 hover:text-[#cd41ff] transition-colors" target="_blank" rel="noopener noreferrer">
                            Discord
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#cd41ff] transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#cd41ff] transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-gray-800/30 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            © {year} {footerText}
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-4">
                            {/* Social icons (can be replaced with actual icons) */}
                            <a href="#" className="text-gray-400 hover:text-[#cd41ff] transition-colors" aria-label="Twitter">
                                <span className="w-5 h-5">𝕏</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#cd41ff] transition-colors" aria-label="GitHub">
                                <span className="w-5 h-5">GH</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
