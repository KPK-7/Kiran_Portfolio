"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-[#25282b]">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border border-[#e8ecf4] rounded-md p-3 w-full focus:ring-2 focus:ring-[#fe5479] focus:border-transparent"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-[#25282b]">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-[#e8ecf4] rounded-md p-3 w-full focus:ring-2 focus:ring-[#fe5479] focus:border-transparent"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#25282b]">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="border border-[#e8ecf4] rounded-md p-3 w-full min-h-[150px] focus:ring-2 focus:ring-[#fe5479] focus:border-transparent"
          required
        />
      </div>

      <div className="flex justify-center">
        <Button
          type="submit"
          className="bg-[#fe5479] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
        >
          Send
        </Button>
      </div>
    </form>
  )
}

