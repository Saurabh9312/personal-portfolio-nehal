import { motion } from 'framer-motion';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with artistic gradient/mesh */}
            <div className="absolute inset-0 bg-slate-900">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-pink-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container relative z-10 mx-auto px-6 text-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.h2 variants={itemVariants} className="text-xl md:text-2xl text-purple-400 font-medium tracking-widest uppercase mb-4">
                        Nursing Student & Artist
                    </motion.h2>
                    <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tight leading-none">
                        Nehal<br />
                        <span className="text-gradient">Parate</span>
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                        Dedicated to the art of healing and the healing power of art.
                        Pursuing excellence in BSc Nursing while exploring creative expression through visual arts.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4 justify-center">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about"
                            className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-purple-50 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            About Me
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-slate-800 transition-colors"
                        >
                            Get in Touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
