import SpaceBackground from "@/components/space-background"
import GridBackground from "@/components/grid-background"
import BinaryRain from "@/components/binary-rain"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/section-header"
import ContactForm from "@/components/contact-form"
import CopyToClipboard from "@/components/copy-to-clipboard"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Mail, MessageSquare } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <SpaceBackground />
      <Navbar />

      <main className="relative z-10 pt-16">
        <GridBackground />
        <BinaryRain />
        <CustomCursor />

        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              title="INITIATE_CONTACT"
              subtitle="Let's discuss how we can elevate your product."
              gradientFrom="from-pink-400"
              gradientTo="to-emerald-500"
              className="mb-10"
              align="left"
            />

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-black/60 border border-emerald-900/50 p-8 backdrop-blur-md rounded-lg">
                <ContactForm />

                <div className="mt-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="a1">
                      <AccordionTrigger className="text-zinc-300">What is your typical project timeline?</AccordionTrigger>
                      <AccordionContent className="text-zinc-400">
                        Timelines vary with scope. Typical MVPs take 2–6 weeks. Enterprise features are delivered in ongoing sprints.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="a2">
                      <AccordionTrigger className="text-zinc-300">Do you work with design teams?</AccordionTrigger>
                      <AccordionContent className="text-zinc-400">
                        Yes — comfortable with Figma handoff, design systems, and cross-functional product squads.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="a3">
                      <AccordionTrigger className="text-zinc-300">What technologies do you specialise in?</AccordionTrigger>
                      <AccordionContent className="text-zinc-400">
                        Next.js, TypeScript, React, Tailwind CSS, Node.js, and MongoDB. I also handle UI/UX design with Figma.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="a4">
                      <AccordionTrigger className="text-zinc-300">Are you available for full-time roles?</AccordionTrigger>
                      <AccordionContent className="text-zinc-400">
                        Currently open to both contract and full-time opportunities. Reach out and let's talk.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>

              <aside className="space-y-4">
                <div className="rounded border border-cyan-500/30 bg-zinc-900/60 p-5">
                  <div className="flex items-center justify-between gap-2 text-cyan-300 mb-1">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">Email</span>
                    </div>
                    <CopyToClipboard text="denovanrex@gmail.com" label="email" />
                  </div>
                  <p className="text-zinc-400 text-sm">denovanrex@gmail.com</p>
                </div>

                <div className="rounded border border-cyan-500/30 bg-zinc-900/60 p-5">
                  <div className="flex items-center justify-between gap-2 text-cyan-300 mb-1">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">Discord</span>
                    </div>
                    <CopyToClipboard text="denovan6k" label="Discord handle" />
                  </div>
                  <p className="text-zinc-400 text-sm">denovan6k</p>
                </div>

                <div className="rounded border border-emerald-900/50 bg-black/50 p-5">
                  <div className="text-zinc-300 font-medium mb-1">Availability</div>
                  <div className="text-sm text-zinc-400">Currently accepting new engagements.</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    <span className="text-xs text-green-400">Open to work</span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 py-6 backdrop-blur-sm bg-black/40">
        <div className="max-w-6xl mx-auto px-4 text-center text-zinc-500 text-sm">
          <p>© 2026. Made by Denovan</p>
        </div>
      </footer>
    </div>
  )
}
