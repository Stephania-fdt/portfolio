import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { useLanguage } from "@/i18n"

const content = {
  en: {
    title: "This page doesn’t exist.",
    description:
      "The link may be incorrect or the page may have moved. You can return to the homepage or explore my work.",
    home: "Back to homepage",
    work: "View my work",
  },
  fr: {
    title: "Cette page n’existe pas.",
    description:
      "Le lien est peut-être incorrect ou la page a été déplacée. Vous pouvez revenir à l’accueil ou consulter mes projets.",
    home: "Retour à l’accueil",
    work: "Voir mes projets",
  },
} as const

function NotFound() {
  const { language } = useLanguage()
  const copy = content[language]

  return (
    <main className="flex min-h-dvh items-center pt-16 lg:pt-20">
      <Container size="content" className="py-section">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-brand uppercase">
            404
          </p>
          <h1 className="text-5xl leading-[0.95] font-bold tracking-tightest md:text-7xl">
            {copy.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {copy.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/">{copy.home}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link to="/work">{copy.work}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  )
}

export { NotFound }
