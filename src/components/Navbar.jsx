import { useState, useEffect } from 'react';
import { Menu, X, Heart, Palette, User, Mail, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', icon: <User size={18} /> },
        { name: 'Education', icon: <BookOpen size={18} /> },
        { name: 'Contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Heart className="text-pink-500 fill-pink-500" size={24} />
                    <span className="text-2xl font-display font-bold text-white">Nehal.</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={`#${link.name.toLowerCase()}`}
                            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm uppercase tracking-wider font-medium relative group"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                {link.icon}
                                {link.name}
                            </span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-lg border-t border-slate-800"
                >
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.name.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3 text-lg text-slate-300 hover:text-white p-2"
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
