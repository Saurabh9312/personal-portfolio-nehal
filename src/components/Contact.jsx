import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section bg-slate-900">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">Get In Touch</h2>
                    <p className="text-xl text-slate-300 mb-12">
                        Whether for a nursing inquiry, an art commission, or just to say hi.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="https://www.instagram.com/__nehalp14/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 bg-slate-800 px-6 py-4 rounded-xl border border-slate-700 hover:border-purple-500 transition-all hover:scale-105">
                            <Instagram className="text-purple-500 group-hover:text-white transition-colors" />
                            <span className="font-medium">Instagram</span>
                        </a>
                    </div>

                    <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                        <p>&copy; 2025 Nehal Parate. All rights reserved.</p>
                        <p className="flex items-center gap-2 mt-4 md:mt-0">
                            Made with <Heart size={14} className="text-pink-500 fill-pink-500" />
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
