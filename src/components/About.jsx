import { motion } from 'framer-motion';
import { BookOpen, Palette, Heart } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="section bg-slate-800/50 relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Me</h2>
                        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image Column */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 transform rotate-3" />
                            <img
                                src={profileImg}
                                alt="Nehal Parate"
                                className="relative rounded-2xl shadow-xl w-full object-cover aspect-[3/4]"
                            />
                        </div>

                        <div className="space-y-6 text-lg text-slate-300">
                            <p>
                                Hello! I'm <span className="text-white font-bold">Nehal Parate</span>.
                                I currently reside at the intersection of science and creativity.
                            </p>
                            <p>
                                As a <span className="text-pink-400">2nd Year BSc Nursing student</span>,
                                I am deeply committed to learning the art of caregiving, anatomy, and medical support.
                                My journey in healthcare is driven by a desire to help others and make a meaningful impact.
                            </p>
                            <p>
                                Beyond my stethoscope, I wield a paintbrush. Art is my sanctuary and my voice.
                                Whether it's sketching, painting, or digital art, I find joy in capturing emotions
                                and beauty on canvas.
                            </p>

                            <div className="grid grid-cols-1 gap-4 mt-6">
                                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="bg-pink-500/10 p-3 rounded-lg"><Heart className="text-pink-500" size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Nursing</h4>
                                        <p className="text-sm text-slate-400">BSc Nursing (2nd Year)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                    <div className="bg-purple-500/10 p-3 rounded-lg"><Palette className="text-purple-500" size={20} /></div>
                                    <div>
                                        <h4 className="font-bold text-white">Art & Design</h4>
                                        <p className="text-sm text-slate-400">Traditional & Digital Artist</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
