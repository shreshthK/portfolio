import heroImage from '../../assets/hero-img.png'
import { motion } from 'framer-motion'
import { fadeInUp, slideInLeft } from '@/lib/animations'

interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    role: string;
    company: string;
    companyUrl?: string;
    isLatest?: boolean;
}

const TimelineItem = ({ date, title, description, role, company, companyUrl, isLatest }: TimelineItemProps) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={slideInLeft}
    >
        <div className="ps-2 my-2 first:mt-0">
            <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                {date}
            </h3>
        </div>
        <div className="flex gap-x-3">
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gradient-to-b after:from-blue-500 after:to-purple-500 dark:after:from-blue-400 dark:after:to-purple-400">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className={`size-4 rounded-full ${isLatest ? 'bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse' : 'bg-gray-400 dark:bg-neutral-500'}`}></div>
                </div>
            </div>
            <div className="grow pt-0.5 pb-8">
                <div className="p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                        <svg className="shrink-0 size-4 mt-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" x2="8" y1="13" y2="13"></line>
                            <line x1="16" x2="8" y1="17" y2="17"></line>
                            <line x1="10" x2="8" y1="9" y2="9"></line>
                        </svg>
                        {title}
                    </h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                        {description}
                    </p>
                    <button type="button" className="mt-3 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 transition-colors duration-200">
                        <img className="shrink-0 size-4 rounded-full" src={heroImage} alt="Avatar" />
                        {role} {companyUrl ? (
                            <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">({company})</a>
                        ) : `(${company})`}
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
)

function Timeline() {
    const timelineData: TimelineItemProps[] = [
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
        },{
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
        <motion.div
            id="timeline"
            className="flex flex-col items-center py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
        >
            <h2 className="text-2xl font-bold dark:text-white">Career Timeline</h2>
            <div className="mt-10 w-full max-w-2xl px-4">
                {timelineData.map((item, index) => (
                    <TimelineItem key={index} {...item} />
                ))}
            </div>
        </motion.div>
    )
}

export default Timeline
