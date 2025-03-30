import { data } from './data.tsx';

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
                            <span className="font-bold text-white text-lg">Da Frens</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-8 md:mb-0">
                        <a href={data.footerData.disboardURL} className="text-gray-400 hover:text-[#cd41ff] transition-colors" target="_blank" rel="noopener noreferrer">
                            {data.footerData.disboardText}
                        </a>
                    </div>
                </div>
                
                <div className="pt-8 border-t border-gray-800/30 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">
                            © {year} {data.footerData.footerText}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
