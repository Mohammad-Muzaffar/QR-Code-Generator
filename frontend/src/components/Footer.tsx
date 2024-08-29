
export const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
                {/* Logo or Brand Name */}
                <div className="text-2xl font-semibold mb-4 lg:mb-0">
                    <span className="text-slate-400">QR </span> Generator
                </div>

                {/* Navigation Links */}
                <nav className="mb-4 lg:mb-0">
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#home" className="hover:text-slate-400">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-slate-400">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-slate-400">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300">
                        <svg width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.034 0 9.333-5 9.333-9.333 0-.142 0-.284-.008-.426A6.673 6.673 0 0 0 16 3.542a6.691 6.691 0 0 1-1.889.518A3.319 3.319 0 0 0 15.553 2a6.597 6.597 0 0 1-2.085.796A3.3 3.3 0 0 0 7.87 6.178 9.35 9.35 0 0 1 1.112 2.763a3.292 3.292 0 0 0 1.024 4.393A3.284 3.284 0 0 1 .64 6.77v.042a3.305 3.305 0 0 0 2.651 3.236A3.313 3.313 0 0 1 .65 9.94a3.329 3.329 0 0 0 3.096 2.297A6.658 6.658 0 0 1 .963 14.9a9.327 9.327 0 0 0 5.063 1.48" />
                        </svg>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300">
                        <svg width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M8 0C3.582 0 0 3.582 0 8c0 4.418 3.582 8 8 8 4.418 0 8-3.582 8-8 0-4.418-3.582-8-8-8zm1.046 4.868c.48 0 .853.391.853.877v.533h.56c.55 0 .997.446.997.997v.552a.997.997 0 0 1-.997.997h-.56v2.43a.877.877 0 0 1-.877.877h-1.12a.877.877 0 0 1-.877-.877V8.329h-1.12a.997.997 0 0 1-.997-.997v-.552a.997.997 0 0 1 .997-.997h1.12v-.533c0-.647.53-1.178 1.178-1.178z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-300">
                        <svg width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0c-1.622 0-3.238.628-4.396 1.768A5.971 5.971 0 0 0 1 5.604C.628 6.762 0 8.378 0 10s.628 3.238 1.768 4.396A5.971 5.971 0 0 0 5.604 16c1.622 0 3.238-.628 4.396-1.768A5.971 5.971 0 0 0 16 10c0-1.622-.628-3.238-1.768-4.396A5.971 5.971 0 0 0 10 1.768C8.762.628 7.146 0 5.604 0zM8 1.605c1.447 0 2.812.56 3.847 1.572C12.58 4.457 13 5.82 13 7.282s-.42 2.825-1.153 3.855C10.816 12.69 9.451 13.25 8 13.25c-1.447 0-2.812-.56-3.847-1.572C2.42 10.107 2 8.744 2 7.282s.42-2.825 1.153-3.855C5.188 2.564 6.553 2.005 8 2.005zM8 3.708a4.197 4.197 0 0 0-4.197 4.197A4.197 4.197 0 0 0 8 12.102a4.197 4.197 0 0 0 4.197-4.197A4.197 4.197 0 0 0 8 3.708zm2.197 4.197a2.197 2.197 0 1 1-4.394 0 2.197 2.197 0 0 1 4.394 0z" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="text-center py-4 border-t border-slate-700">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} QR Code Generator. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
