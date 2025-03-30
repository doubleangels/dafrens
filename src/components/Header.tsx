import { data } from './data.tsx';

function Header() {
    return (
      <header className="w-full backdrop-blur-sm bg-[#121214]/70 border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={data.logoPath} alt="Da Frens Logo" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#cd41ff] to-purple-400 bg-clip-text text-transparent">
              {data.serverName}
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#features" 
                  className="text-gray-300 hover:text-[#cd41ff] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {data.featuresLinkText}
                </a>
              </li>
              <li>
                <a 
                  href="#appeal" 
                  className="text-gray-300 hover:text-[#cd41ff] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('appeal')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {data.appealLinkText}
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.gg/dafrens" 
                  className="bg-[#cd41ff]/20 hover:bg-[#cd41ff]/30 text-[#cd41ff] border border-[#cd41ff]/50 px-4 py-1.5 rounded-full transition-all hover:shadow-[0_0_15px_rgba(205,65,255,0.3)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.joinLinkText}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
export default Header;
