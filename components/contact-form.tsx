"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import axios from "axios"
import { toast } from "sonner"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      await axios.post("/api/email", data)
      toast.success("Message sent! I'll get back to you soon.")
      reset()
    } catch {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-300">
            NAME
          </label>
          <Input
            id="name"
            placeholder="Enter your name"
            {...register("name")}
            className="bg-zinc-900/50 border-emerald-900/50 focus:border-emerald-500 text-white"
          />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">
            EMAIL
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="bg-zinc-900/50 border-emerald-900/50 focus:border-emerald-500 text-white"
          />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-zinc-300">
          SUBJECT
        </label>
        <Input
          id="title"
          placeholder="Enter message subject"
          {...register("title")}
          className="bg-zinc-900/50 border-emerald-900/50 focus:border-emerald-500 text-white"
        />
        {errors.title && <p className="text-xs text-red-400">{errors.title.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-300">
          MESSAGE
        </label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          rows={6}
          {...register("message")}
          className="bg-zinc-900/50 border-emerald-900/50 focus:border-emerald-500 text-white resize-none"
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      </div>

      <div className="text-center">
        <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-emerald-500 to-pink-500">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-black hover:bg-black/80 text-white rounded-full px-8"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  )
}
