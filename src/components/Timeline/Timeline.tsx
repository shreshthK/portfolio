import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { timelineEntries } from '@/data/timeline';

function Timeline() {
  const [selectedId, setSelectedId] = useState<string>(timelineEntries[0].id);

  const selectedIndex = useMemo(
    () => timelineEntries.findIndex((entry) => entry.id === selectedId),
    [selectedId],
  );

  const selectedEntry = selectedIndex >= 0 ? timelineEntries[selectedIndex] : timelineEntries[0];

  const selectRelative = (offset: number) => {
    const total = timelineEntries.length;
    const next = (selectedIndex + offset + total) % total;
    setSelectedId(timelineEntries[next].id);
  };

  return (
    <motion.section
      id="timeline"
      className="relative py-24 md:py-28 border-y border-border/35 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerContainer}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_15%,hsl(197_95%_62%_/_0.14),transparent_35%),radial-gradient(circle_at_88%_84%,hsl(28_96%_64%_/_0.12),transparent_32%),linear-gradient(180deg,color-mix(in_oklab,var(--background)_86%,transparent),color-mix(in_oklab,var(--secondary)_72%,transparent))]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="mb-12 md:mb-14" variants={fadeInUp}>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-4 block">
            Career Signal
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start">
          <motion.aside
            variants={fadeInUp}
            className="lg:sticky lg:top-24 rounded-md border border-border/60 bg-card/75 backdrop-blur-sm overflow-hidden"
          >
            <div className="p-5 border-b border-border/60 bg-[linear-gradient(140deg,color-mix(in_oklab,var(--accent)_18%,transparent)_0%,transparent_65%)]">
              <div className="flex items-center justify-between gap-3 mb-3">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-accent">Active Role</span>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
                  {String(selectedIndex + 1).padStart(2, '0')} / {String(timelineEntries.length).padStart(2, '0')}
                </span>
              </div>

              <h3 className="text-2xl font-display text-foreground mb-2">{selectedEntry.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{selectedEntry.description}</p>

              <div className="text-xs text-foreground mb-4">
                <span className="font-semibold">{selectedEntry.role}</span>
                <span className="text-muted-foreground"> at </span>
                {selectedEntry.companyUrl ? (
                  <a
                    href={selectedEntry.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[var(--accent-warm)]"
                  >
                    {selectedEntry.company}
                  </a>
                ) : (
                  <span>{selectedEntry.company}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {selectedEntry.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] border border-border/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-3 flex items-center justify-between">
              <button
                className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5 border border-border/60 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => selectRelative(-1)}
                aria-label="Select previous role"
              >
                Prev
              </button>
              <button
                className="font-mono text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5 border border-border/60 text-muted-foreground hover:text-accent transition-colors"
                onClick={() => selectRelative(1)}
                aria-label="Select next role"
              >
                Next
              </button>
            </div>
          </motion.aside>

          <motion.div variants={staggerContainer} className="relative">
            <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-[2px] bg-[linear-gradient(180deg,hsl(199_92%_65%_/_0.35),hsl(26_98%_62%_/_0.35))]" />

            <div className="space-y-4">
              {timelineEntries.map((entry, index) => {
                const isActive = entry.id === selectedId;
                return (
                  <motion.button
                    key={entry.id}
                    variants={fadeInUp}
                    onClick={() => setSelectedId(entry.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'ArrowDown') {
                        event.preventDefault();
                        selectRelative(1);
                      }
                      if (event.key === 'ArrowUp') {
                        event.preventDefault();
                        selectRelative(-1);
                      }
                    }}
                    className={`group w-full text-left pl-8 sm:pl-12 pr-4 py-4 rounded-md border transition-all duration-250 ${
                      isActive
                        ? 'border-accent/75 bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_25%,transparent),0_14px_30px_-18px_color-mix(in_oklab,var(--accent)_38%,black)]'
                        : 'border-border/55 bg-card/65 hover:bg-card/85'
                    }`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`absolute left-[4px] sm:left-[8px] mt-[6px] inline-flex size-4 items-center justify-center rounded-full border ${
                        isActive ? 'border-accent bg-accent/18' : 'border-border bg-background'
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${isActive ? 'bg-accent' : 'bg-muted-foreground/70'}`}
                      />
                    </span>

                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-accent w-7 shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground shrink-0 md:w-36">
                        {entry.period}
                      </span>
                      <span className="text-sm font-semibold text-foreground flex-1">{entry.title}</span>
                      {entry.featured && (
                        <span className="font-mono text-[10px] tracking-[0.14em] uppercase border border-[var(--accent-warm)] px-2 py-0.5 text-[var(--accent-warm)]">
                          Current
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{entry.company}</p>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;
