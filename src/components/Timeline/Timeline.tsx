import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, slideInLeft } from '@/lib/animations'

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    role: string;
    company: string;
    companyUrl?: string;
    isLatest?: boolean;
    index: number;
}

const TimelineItem = ({ date, title, description, role, company, companyUrl, isLatest, index }: TimelineItemProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
        className="relative"
    >
        <div className="flex gap-6 md:gap-10">
            {/* Timeline line and dot */}
            <div className="relative flex flex-col items-center">
                {/* Dot */}
                <div className={`
                    relative z-10 size-3 rounded-full
                    ${isLatest
                        ? 'bg-accent shadow-[0_0_12px_hsl(12_76%_61%/0.5)]'
                        : 'bg-border'
                    }
                `}>
                    {isLatest && (
                        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30" />
                    )}
                </div>

                {/* Line */}
                <div className="w-px flex-1 bg-border" />
            </div>

            {/* Content */}
            <div className="flex-1 pb-12">
                {/* Date */}
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
                    {date}
                </span>

                {/* Card */}
                <div className="mt-3 p-5 md:p-6 rounded-xl bg-card border border-border
                    hover:border-accent/20 hover:shadow-md transition-all duration-300 group">

                    {/* Index & Title */}
                    <div className="flex items-start gap-3 mb-3">
                        <span className="font-mono text-[10px] tracking-wider text-accent mt-1">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <h4 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors duration-300">
                            {title}
                        </h4>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 ml-8">
                        {description}
                    </p>

                    {/* Role & Company */}
                    <div className="flex items-center gap-2 ml-8 text-xs">
                        <span className="text-foreground font-medium">{role}</span>
                        <span className="text-border">at</span>
                        {companyUrl ? (
                            <a
                                href={companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:underline underline-offset-2"
                            >
                                {company}
                            </a>
                        ) : (
                            <span className="text-muted-foreground">{company}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
)

function Timeline() {
    const timelineData = [
        {
            date: "Aug 2016 - Jul 2017",
            title: "UPMC Mobile Application",
            description: "Built mobile healthcare applications using Backbone.js and Java Spring Boot for the UPMC health system.",
            role: "Software Developer Contractor",
            company: "UPMC",
            companyUrl: "https://www.upmc.com/",
            isLatest: false
        },
        {
            date: "Jul 2017 - Jul 2023",
            title: "Supply Chain Connect Platform",
            description: "Developed enterprise supply chain management solutions using AngularJS, Java, and PostgreSQL with Google Polymers and Angular Material.",
            role: "Software Developer",
            company: "General Electric",
            isLatest: false
        },
        {
            date: "Jul 2018 - Jan 2019",
            title: "Data Migration from Oracle",
            description: "Created a data migration tool to migrate data from Oracle to PostgreSQL using NodeJS and Oracle's NodeJS driver.",
            role: "Software Developer",
            company: "General Electric",
            isLatest: false
        },
        {
            date: "Jan 2021 - Aug 2022",
            title: "Supply Chain Connect - Angular Migration",
            description: "Led the refactoring of the codebase from AngularJS to Angular using a hybrid approach to ensure smooth transition.",
            role: "Staff Software Developer",
            company: "Wabtec",
            companyUrl: "https://www.wabteccorp.com/",
            isLatest: false
        },
        {
            date: "Jul 2023 - Feb 2024",
            title: "Multi-tenant Support Implementation",
            description: "Made frontend/backend database agnostic to support multi-tenancy, integrating multiple enterprise databases including Oracle.",
            role: "Senior Software Developer",
            company: "Wabtec",
            companyUrl: "https://www.wabteccorp.com/",
            isLatest: false
        },
        {
            date: "Jul 2023 - March 2024",
            title: "Task Flow Manager - Job Scheduling",
            description: "Created a job scheduling system to schedule tasks including DB scripts, API calls, and other automated tasks.",
            role: "Senior Software Developer lvl 2",
            company: "Wabtec",
            companyUrl: "https://www.wabteccorp.com/",
            isLatest: false
        },
        {
            date: "2023 - Present",
            title: "Sourcing Application",
            description: "Developed sourcing application features to streamline procurement processes and vendor management.",
            role: "Senior Software Developer lvl 2",
            company: "Wabtec",
            companyUrl: "https://www.wabteccorp.com/",
            isLatest: true
        }
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
            <div className="max-w-4xl mx-auto px-6">
                {/* Section header */}
                <motion.div className="mb-16 md:mb-20" variants={fadeInUp}>
                    <span className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4 block">
                        Career Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                        Experience
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        A timeline of my professional growth and the impactful projects I've contributed to.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {timelineData.map((item, index) => (
                        <TimelineItem key={index} {...item} index={index} />
                    ))}
                </div>
            </div>
        </motion.section>
    )
}

export default Timeline
