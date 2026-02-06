import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface TimelineEntry {
    date: string;
    title: string;
    description: string;
    role: string;
    company: string;
    companyUrl?: string;
    isLatest?: boolean;
}

const TimelineRow = ({ entry, index, isOpen, onToggle }: {
    entry: TimelineEntry;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <motion.div
        variants={fadeInUp}
        className="border-b border-border last:border-b-0"
    >
        {/* Row header - always visible */}
        <button
            onClick={onToggle}
            className="w-full text-left py-5 md:py-6 px-2 flex items-center gap-4 md:gap-8
                group cursor-pointer hover:bg-secondary/30 transition-colors duration-200"
        >
            {/* Index */}
            <span className="font-mono text-[10px] tracking-wider text-accent shrink-0 w-6">
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Date */}
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground shrink-0 w-28 md:w-40 hidden sm:block">
                {entry.date}
            </span>

            {/* Company */}
            <span className="font-display text-sm font-semibold text-foreground shrink-0 w-24 md:w-36">
                {entry.company}
            </span>

            {/* Title */}
            <span className="font-body text-sm text-muted-foreground flex-1 truncate group-hover:text-foreground transition-colors duration-200">
                {entry.title}
            </span>

            {/* Current badge */}
            {entry.isLatest && (
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-mono tracking-wider uppercase
                    bg-accent/10 text-accent border border-accent/20 shrink-0">
                    Current
                </span>
            )}

            {/* Toggle indicator */}
            <motion.svg
                className="w-4 h-4 text-muted-foreground shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </motion.svg>
        </button>

        {/* Expanded content */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    <div className="px-2 pb-6 pl-10 md:pl-14">
                        <div className="max-w-2xl ml-0 sm:ml-40 md:ml-48">
                            {/* Mobile date */}
                            <span className="sm:hidden font-mono text-[10px] tracking-wide text-muted-foreground block mb-2">
                                {entry.date}
                            </span>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                {entry.description}
                            </p>

                            {/* Role */}
                            <div className="flex items-center gap-2 text-xs">
                                <span className="text-foreground font-medium">{entry.role}</span>
                                {entry.companyUrl && (
                                    <>
                                        <span className="text-border">&mdash;</span>
                                        <a
                                            href={entry.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-accent hover:underline underline-offset-2"
                                        >
                                            {entry.company}
                                        </a>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
)

function Timeline() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const timelineData: TimelineEntry[] = [
        {
            date: "2023 - Present",
            title: "Sourcing Application",
            description: "Developed sourcing application features to streamline procurement processes and vendor management.",
            role: "Senior Software Developer lvl 2",
            company: "Wabtec, Texas",
            companyUrl: "https://www.wabteccorp.com/",
            isLatest: true
        },
        {
            date: "2023 — 2024",
            title: "Task Flow Manager — Job Scheduling",
            description: "Created a job scheduling system to schedule tasks including DB scripts, API calls, and other automated tasks.",
            role: "Senior Software Developer lvl 2",
            company: "Wabtec, Texas",
            companyUrl: "https://www.wabteccorp.com/",
        },
        {
            date: "2023 — 2024",
            title: "Multi-tenant Support Implementation",
            description: "Made frontend/backend database agnostic to support multi-tenancy, integrating multiple enterprise databases including Oracle.",
            role: "Senior Software Developer",
            company: "Wabtec, Texas",
            companyUrl: "https://www.wabteccorp.com/",
        },
        {
            date: "2021 — 2022",
            title: "Supply Chain Connect — Angular Migration",
            description: "Led the refactoring of the codebase from AngularJS to Angular using a hybrid approach to ensure smooth transition.",
            role: "Staff Software Developer",
            company: "Wabtec, Texas",
            companyUrl: "https://www.wabteccorp.com/",
        },
        {
            date: "2018 — 2019",
            title: "Data Migration from Oracle",
            description: "Created a data migration tool to migrate data from Oracle to PostgreSQL using NodeJS and Oracle's NodeJS driver.",
            role: "Software Developer",
            company: "General Electric, New Orleans, LA",
        },
        {
            date: "2016 — 2023",
            title: "Supply Chain Connect Platform",
            description: "Developed enterprise supply chain management solutions using AngularJS, Java, and PostgreSQL with Google Polymers and Angular Material.",
            role: "Software Developer",
            company: "General Electric, New Orleans, LA",
        },
        {
            date: "2014 — 2015",
            title: "UPMC Mobile Application",
            description: "Built mobile healthcare applications using Backbone.js and Java Spring Boot for the UPMC health system.",
            role: "Software Developer Contractor",
            company: "UPMC",
            companyUrl: "https://www.upmc.com/",
        },
    ]

    return (
        <motion.section
            id="timeline"
            className="py-24 md:py-32 bg-secondary/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <motion.div className="mb-12 md:mb-16" variants={fadeInUp}>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Experience
                    </h2>
                </motion.div>

                {/* Table header */}
                <motion.div
                    className="hidden sm:flex items-center gap-4 md:gap-8 px-2 pb-3 border-b border-border
                        font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground"
                    variants={fadeInUp}
                >
                    <span className="w-6">#</span>
                    <span className="w-28 md:w-40">Period</span>
                    <span className="w-24 md:w-36">Company</span>
                    <span className="flex-1">Project</span>
                    <span className="w-4" />
                </motion.div>

                {/* Timeline rows */}
                <motion.div variants={staggerContainer}>
                    {timelineData.map((entry, index) => (
                        <TimelineRow
                            key={index}
                            entry={entry}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Timeline
