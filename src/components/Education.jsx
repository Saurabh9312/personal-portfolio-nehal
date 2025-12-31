import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            level: "B.Sc Nursing (2nd Year)",
            institution: "Centra Institute of Education, Gondia",
            year: "2024 - Present",
            grade: "Pursuing",
            icon: <GraduationCap className="text-pink-500" size={24} />
        },
        {
            id: 2,
            level: "12th Standard (HSC)",
            institution: "Balaji Patil",
            year: "2023",
            grade: "58%",
            icon: <BookOpen className="text-purple-500" size={24} />
        },
        {
            id: 3,
            level: "10th Standard (SSC)",
            institution: "St. Xavier's High School",
            year: "2021",
            grade: "92%",
            icon: <Award className="text-blue-500" size={24} />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="education" className="section bg-slate-800/30 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-600/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">Education</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        My academic journey in healthcare and foundational studies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }} // Trigger earlier on mobile
                    className="max-w-4xl mx-auto"
                >
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-sm bg-slate-900/40">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700/50 bg-slate-900/60">
                                    <th className="p-6 text-sm font-semibold tracking-wider text-slate-300 uppercase">Qualification</th>
                                    <th className="p-6 text-sm font-semibold tracking-wider text-slate-300 uppercase">Institution</th>
                                    <th className="p-6 text-sm font-semibold tracking-wider text-slate-300 uppercase">Year</th>
                                    <th className="p-6 text-sm font-semibold tracking-wider text-slate-300 uppercase text-right">Grade/Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {educationData.map((edu) => (
                                    <motion.tr
                                        key={edu.id}
                                        variants={itemVariants}
                                        className="border-b border-slate-700/30 hover:bg-white/5 transition-colors group"
                                    >
                                        <td className="p-6">
                                            <div className="flex items-center gap-4">
                                                <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 group-hover:border-purple-500/50 transition-colors">
                                                    {edu.icon}
                                                </div>
                                                <div className="font-bold text-white text-lg">{edu.level}</div>
                                            </div>
                                        </td>
                                        <td className="p-6 text-slate-300">{edu.institution}</td>
                                        <td className="p-6 text-slate-300 font-mono">{edu.year}</td>
                                        <td className="p-6 text-right">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                        ${edu.grade === "Pursuing" ? "bg-purple-500/20 text-purple-300 border border-purple-500/20" : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"}`}>
                                                {edu.grade}
                                            </span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden space-y-4">
                        {educationData.map((edu) => (
                            <motion.div
                                key={edu.id}
                                variants={itemVariants}
                                className="p-6 rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm shadow-lg hover:border-purple-500/30 transition-colors"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                                        {edu.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-lg leading-tight mb-1">{edu.level}</h3>
                                        <p className="text-sm text-slate-400">{edu.institution}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                                    <span className="text-slate-500 font-mono text-sm">{edu.year}</span>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide 
                        ${edu.grade === "Pursuing" ? "bg-purple-500/20 text-purple-300 border border-purple-500/20" : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"}`}>
                                        {edu.grade}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Education;
