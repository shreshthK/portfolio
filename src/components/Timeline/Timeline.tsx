import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { timelineEntries } from '@/data/timeline';
import TimelineRailScene from '@/components/Timeline/TimelineRailScene';
import { SectionCanvas } from '@/components/scene/SectionCanvas';
import { useSceneConfig } from '@/lib/performance';

function Timeline() {
  const sceneConfig = useSceneConfig();
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
      className="py-24 md:py-28 bg-secondary/20 border-y border-border/35"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="mb-12 md:mb-14" variants={fadeInUp}>
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-4 block">
            Execution Rail
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">Experience</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-start">
          <motion.div
            variants={fadeInUp}
            className="rounded-md border border-border/60 overflow-hidden bg-card/75"
          >
            <div className="relative h-[420px] border-b border-border/60 overflow-hidden">
              <SectionCanvas
                className="absolute inset-0"
                config={sceneConfig}
                qualityPolicy={{ allowOnLow: true, disableInteractionOnLow: true }}
                camera={{ position: [0.9, 0, 6], fov: 38 }}
                fallback={
                  <div className="h-full bg-[radial-gradient(circle_at_75%_18%,hsl(211_80%_62%_/_0.16),transparent_45%),radial-gradient(circle_at_24%_72%,hsl(33_90%_62%_/_0.13),transparent_40%),linear-gradient(180deg,var(--card),var(--background))]" />
                }
              >
                <TimelineRailScene entries={timelineEntries} selectedId={selectedId} config={sceneConfig} />
              </SectionCanvas>

              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--background)_84%,transparent)_100%)]" />

              <div className="absolute left-5 top-4 z-10">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-accent">
                  Journey Map
                </span>
              </div>

              <div className="absolute left-5 right-5 top-12 bottom-6 pointer-events-none">
                <div className="absolute left-[7px] top-1 bottom-1 w-px bg-border/80" />
                <div className="h-full flex flex-col justify-between">
                  {timelineEntries.map((entry) => {
                    const isActive = entry.id === selectedId;
                    const year = entry.period.slice(0, 4);

                    return (
                      <div key={`rail-marker-${entry.id}`} className="flex items-center gap-2.5">
                        <span
                          className={`relative size-4 rounded-full border ${
                            isActive ? 'border-accent bg-accent/20' : 'border-border bg-background/70'
                          }`}
                        >
                          <span
                            className={`absolute inset-[3px] rounded-full ${
                              isActive ? 'bg-accent' : 'bg-muted-foreground/70'
                            }`}
                          />
                        </span>
                        <span
                          className={`font-mono text-[10px] tracking-[0.14em] uppercase ${
                            isActive ? 'text-accent' : 'text-muted-foreground'
                          }`}
                        >
                          {year}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="p-3 flex items-center justify-between border-t border-border/60">
              <button
                className="font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 border border-border/60 text-muted-foreground hover:text-accent"
                onClick={() => selectRelative(-1)}
                aria-label="Select previous role"
              >
                Prev
              </button>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
                {String(selectedIndex + 1).padStart(2, '0')} / {String(timelineEntries.length).padStart(2, '0')}
              </span>
              <button
                className="font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 border border-border/60 text-muted-foreground hover:text-accent"
                onClick={() => selectRelative(1)}
                aria-label="Select next role"
              >
                Next
              </button>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
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
                  className={`w-full text-left border px-4 py-4 transition-colors duration-200 ${
                    isActive
                      ? 'border-accent/80 bg-accent/10'
                      : 'border-border/50 bg-card/60 hover:bg-card/80'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span className="font-mono text-[10px] tracking-[0.16em] text-accent w-7 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted-foreground shrink-0 md:w-36">
                      {entry.period}
                    </span>
                    <span className="text-sm font-semibold text-foreground flex-1">{entry.title}</span>
                  </div>
                </motion.button>
              );
            })}

            <motion.article
              variants={fadeInUp}
              className="mt-6 border border-border/70 bg-card/85 p-5"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--accent-warm)]">
                  Active Context
                </span>
                {selectedEntry.featured && (
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase border border-[var(--accent-warm)] px-2 py-0.5 text-[var(--accent-warm)]">
                    Current
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-display text-foreground mb-2">{selectedEntry.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{selectedEntry.description}</p>

              <div className="text-xs text-foreground mb-3">
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
            </motion.article>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Timeline;
