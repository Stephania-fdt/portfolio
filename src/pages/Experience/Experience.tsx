import { useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"

import { Contact } from "@/components/sections/Contact/Contact"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  certifications,
  education,
  expertiseGroups,
  professionalExperience,
  tools,
} from "@/content/experience"
import { fadeUp, transition } from "@/lib/motion"

function Experience() {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    document.title = "Experience — Stéphania Fordant | Product Designer"

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    if (!description) {
      description = document.createElement("meta")
      description.name = "description"
      document.head.appendChild(description)
    }
    description.content =
      "Product Designer with 6+ years of experience across UX/UI, Design Systems, accessibility, UX Research and digital product design."
  }, [])

  return (
    <article>
      <header className="pt-section pb-section-sm">
        <Container size="content">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition.slow}
            className="max-w-4xl"
          >
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Experience — Career & expertise
            </p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[0.95] font-bold tracking-tightest md:text-7xl">
              Experience built across products, systems and people.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
              6+ years working across Product Design, UX/UI, research,
              accessibility and Design Systems — from understanding complex
              problems to building scalable digital experiences with product and
              technical teams.
            </p>
            <p className="mt-8 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              Product Design · UX Research · Design Systems · Accessibility
            </p>
          </motion.div>
        </Container>
      </header>

      <Section aria-label="Professional Experience" spacing="sm">
        <SectionKicker>Professional Experience</SectionKicker>
        <ol className="mt-12 border-t border-border">
          {professionalExperience.map((experience, index) => (
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
                  {experience.context}
                </p>
                {experience.highlight ? (
                  <p className="mt-5 border-l-2 border-brand pl-4 text-sm leading-relaxed text-muted-foreground">
                    {experience.highlight}
                  </p>
                ) : null}
                {experience.contributions ? (
                  <div className="mt-8 grid gap-7 sm:grid-cols-2">
                    {experience.contributions.map((contribution) => (
                      <div key={contribution.label}>
                        <h3 className="font-mono text-2xs tracking-widest text-brand uppercase">
                          {contribution.label}
                        </h3>
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
              </div>
            </motion.li>
          ))}
        </ol>

        <aside className="mt-section-sm max-w-3xl border-l border-brand pl-6">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Beyond project delivery
          </p>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="block font-medium text-foreground">
                UX Tribe — Cream Consulting
              </strong>
              Co-Founder. An internal UX community for knowledge sharing, UX
              training, workshops and peer learning.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="block font-medium text-foreground">
                Figma Community — Brussels
              </strong>
              Three years of participation, knowledge sharing and training.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="block font-medium text-foreground">
                Interaction Design Foundation
              </strong>
              Two years of continuous online learning and professional
              development.
            </p>
          </div>
        </aside>
      </Section>

      <Section aria-label="Design philosophy" spacing="sm">
        <motion.blockquote
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={fadeUp}
          className="max-w-3xl border-y border-border py-10 text-3xl leading-tight font-medium italic md:text-4xl"
        >
          Design is rarely a solo discipline.
        </motion.blockquote>
      </Section>

      <Section aria-label="Education and continuous learning" spacing="sm">
        <SectionKicker>Education & continuous learning</SectionKicker>
        <ol className="mt-12 divide-y divide-border border-t border-border">
          {education.map((entry) => (
            <li
              key={entry.title}
              className="grid gap-3 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8"
            >
              <p className="font-mono text-xs tracking-widest text-muted-foreground">
                {entry.year}
              </p>
              <div>
                <h3 className="text-2xl font-bold md:text-3xl">
                  {entry.title}
                </h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section aria-label="Skills and expertise" spacing="sm">
        <SectionKicker>Skills & expertise</SectionKicker>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground md:text-2xl">
          Product design shaped by research, systems thinking and a practical
          understanding of how ideas become real products.
        </p>
        <div className="mt-12 divide-y divide-border border-t border-border">
          {expertiseGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-5 py-7 md:grid-cols-[5rem_minmax(13rem,0.7fr)_minmax(0,1.3fr)] md:gap-8"
            >
              <span
                aria-hidden="true"
                className="font-mono text-xs tracking-widest text-muted-foreground"
              >
                {group.number}
              </span>
              <h3 className="text-2xl font-bold md:text-3xl">{group.title}</h3>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm leading-relaxed text-muted-foreground">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-3xl font-mono text-2xs leading-relaxed tracking-wider text-muted-foreground uppercase">
          Tools: {tools.join(" · ")}
        </p>
      </Section>

      <Section aria-label="Certifications and development" spacing="sm">
        <SectionKicker>Certifications & development</SectionKicker>
        <div className="mt-10 grid divide-y divide-border border-y border-border md:grid-cols-3 md:divide-x md:divide-y-0">
          {certifications.map((certification) => (
            <div
              key={certification.title}
              className="py-6 md:px-6 md:first:pl-0"
            >
              <h3 className="text-xl font-bold">{certification.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {certification.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-l border-brand pl-6">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Languages
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            English — C1&nbsp;&nbsp;·&nbsp;&nbsp;German — B2
          </p>
        </div>
      </Section>

      <Section aria-labelledby="full-profile-title" spacing="sm">
        <div className="border-y border-border py-10 md:flex md:items-end md:justify-between md:gap-10">
          <div className="max-w-2xl">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Full profile
            </p>
            <h2
              id="full-profile-title"
              className="mt-5 text-4xl font-bold md:text-5xl"
            >
              Want the complete version?
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              For the full timeline, education and professional background, you
              can download my CV.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="mt-7 border-muted-foreground/70 hover:border-muted-foreground md:mt-0"
          >
            <a
              href="/stephania-fordant-product-designer-cv.pdf"
              download
              aria-label="Download Stéphania Fordant's Product Designer CV as a PDF"
            >
              Download my CV ↓
            </a>
          </Button>
        </div>
      </Section>

      <Contact />
    </article>
  )
}

export { Experience }
