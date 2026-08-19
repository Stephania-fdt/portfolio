import { motion, useReducedMotion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { getExperienceContent } from "@/content/experience"
import { fadeUp, transition } from "@/lib/motion"
import { useLanguage } from "@/i18n"

/**
 * Experience — trajectory and context, not a CV copy. The CV gives
 * exhaustive detail (`profileBody` below links to it); this page answers
 * four questions fast: where she's worked, on what kind of problems, with
 * what level of responsibility, and how that responsibility grew.
 *
 * Five beats, not nine (Sprint "Experience — Senior/Staff optimisation"):
 * Hero → Professional Experience → Education & Certifications → Skills →
 * CV CTA. Dropped from the previous version: a standalone philosophy
 * pull-quote (asserted a collaboration theme the real experience entries
 * already demonstrate), a three-column "Beyond project delivery" aside
 * (its one strong signal — co-founding UX Tribe — now lives as a one-line
 * note on the SPF entry it belongs to; its weakest one, a Figma meetup
 * mention, is dropped rather than kept for symmetry), and the closing
 * `<Contact />` section (redundant with the dedicated `/contact` page one
 * click away in the header, immediately after this page's own CV CTA).
 *
 * Title/meta description come from `<Seo />` alone (Sprint "SEO title race
 * fix") — this page used to set both itself too, racing `<Seo />`'s own
 * effect unpredictably.
 */
function Experience() {
  const { language } = useLanguage()
  const copy = getExperienceContent(language)
  const shouldReduceMotion = useReducedMotion()

  return (
    // `role="main"` — one `<main>` landmark per page (Sprint "Finalisation
    // — Lighthouse landmark-one-main").
    <article role="main">
      <header className="pt-16 pb-12 md:pt-20 md:pb-14 lg:pt-24 lg:pb-16">
        <Container size="content">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.slow}
            className="max-w-3xl"
          >
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {copy.eyebrow}
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl leading-[0.98] font-bold tracking-tightest md:text-6xl">
              {copy.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.5] text-muted-foreground md:text-xl">
              {copy.intro}
            </p>
          </motion.div>
        </Container>
      </header>

      <Section aria-label={copy.experienceKicker} spacing="sm">
        <SectionKicker>{copy.experienceKicker}</SectionKicker>
        <ol className="mt-12 border-t border-border">
          {copy.professionalExperience.map((experience, index) => (
            <motion.li
              key={`${experience.company}-${experience.period}`}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={fadeUp}
              className="grid gap-6 border-b border-border py-section-sm md:grid-cols-[12rem_1px_minmax(0,1fr)] md:gap-8"
            >
              <div className="md:pt-1">
                <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {experience.period}
                </p>
                {experience.location ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                ) : null}
              </div>
              <span aria-hidden="true" className="hidden bg-border md:block" />
              <div className="max-w-3xl">
                <h3 className="text-3xl font-bold md:text-4xl">
                  {experience.role}
                </h3>
                <p className="mt-3 text-lg font-medium text-foreground">
                  {experience.company}
                </p>
                {experience.consultancy ? (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.consultancy}
                  </p>
                ) : null}
                <p className="mt-6 max-w-2xl leading-relaxed text-foreground">
                  {experience.scope}
                </p>
                {experience.contribution ? (
                  <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
                    {experience.contribution}
                  </p>
                ) : null}
                {experience.contributions ? (
                  <div className="mt-8 grid gap-7 sm:grid-cols-2">
                    {experience.contributions.map((contribution) => (
                      <div key={contribution.label}>
                        <h4 className="font-mono text-2xs tracking-widest text-brand uppercase">
                          {contribution.label}
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {contribution.items.map((item) => (
                            <li key={item} className="flex gap-2">
                              <span aria-hidden="true" className="text-brand">
                                —
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
                {experience.outcome ? (
                  <p className="mt-6 border-l-2 border-brand pl-4 text-sm leading-relaxed text-foreground">
                    <span className="font-mono text-2xs tracking-widest text-brand uppercase">
                      {copy.outcomeLabel}
                    </span>{" "}
                    {experience.outcome}
                  </p>
                ) : null}
                {experience.note ? (
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {experience.note}
                  </p>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ol>
      </Section>

      <Section aria-label={copy.educationKicker} spacing="sm">
        <SectionKicker>{copy.educationKicker}</SectionKicker>

        <ol className="mt-12 divide-y divide-border border-t border-border">
          {copy.education.map((entry) => (
            <li
              key={entry.title}
              className="grid gap-3 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {entry.year}
              </p>
              <div>
                <h3 className="text-xl font-bold md:text-2xl">{entry.title}</h3>
                {entry.description ? (
                  <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-mono text-2xs tracking-widest text-brand uppercase">
          {copy.certificationsLabel}
        </p>
        <div className="mt-5 grid divide-y divide-border border-y border-border md:grid-cols-4 md:divide-x md:divide-y-0">
          {copy.certifications.map((certification) => (
            <div
              key={certification.title}
              className="py-5 md:px-5 md:first:pl-0"
            >
              <h4 className="text-base font-bold">{certification.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                {certification.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l border-brand pl-6">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {copy.languagesLabel}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {copy.languageLevels}
          </p>
        </div>
      </Section>

      <Section aria-label={copy.skillsKicker} spacing="sm">
        <SectionKicker>{copy.skillsKicker}</SectionKicker>
        <div className="mt-10 divide-y divide-border border-t border-border">
          {copy.expertiseGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 py-6 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-8"
            >
              <h3 className="text-lg font-bold">{group.title}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-relaxed text-muted-foreground">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section aria-labelledby="full-profile-title" spacing="sm">
        <div className="border-y border-border py-10 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {copy.profileEyebrow}
            </p>
            <h2
              id="full-profile-title"
              className="mt-5 text-4xl font-bold md:text-5xl"
            >
              {copy.profileTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {copy.profileBody}
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-7 border-muted-foreground/70 hover:border-muted-foreground md:mt-0"
          >
            <a
              href={copy.downloadHref}
              download={copy.downloadFilename}
              aria-label={copy.ariaDownload}
            >
              {copy.download}
            </a>
          </Button>
        </div>
      </Section>
    </article>
  )
}

export { Experience }
