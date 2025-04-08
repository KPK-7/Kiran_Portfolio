import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f9faff]">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-[#25282b] text-xl font-medium">Kiran Sekhon</h1>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <a href="#about" className="text-[#25282b] border-b-2 border-[#fe5479] pb-1">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-[#828282]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#828282]">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#25282b] mb-6">About me</h2>
              <p className="text-[#828282] leading-relaxed mb-8">
                Hi, I&apos;m Kiranpreet Kaur Sekhon, a Computer Science student at Thapar Institute of Engineering and
                Technology, blending technology and creativity to build impactful solutions. Skilled in HTML, CSS, C,
                Python, Docker, AWS, GitHub Actions and design tools like Figma, I love solving challenges and crafting
                meaningful digital experiences. Let&apos;s create something amazing together!
              </p>
              <a
                href="../resume.pdf"
                className="inline-block bg-[#fe5479] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Resume
              </a>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src="/Kiran-piccc.jpeg"
                alt="Kiran Sekhon"
                width={400}
                height={500}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25282b] text-center mb-2">Contact</h2>
          <div className="w-20 h-1 bg-[#fe5479] mx-auto mb-12"></div>

          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-12 mb-6">
            <a
              href="https://instagram.com"
              className="p-2 rounded-full bg-[#e8ecf4] text-[#25282b] hover:bg-[#fe5479] hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 rounded-full bg-[#e8ecf4] text-[#25282b] hover:bg-[#fe5479] hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-2 rounded-full bg-[#e8ecf4] text-[#25282b] hover:bg-[#fe5479] hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-center text-[#828282] mt-4">Kiran Sekhon 2025</p>
        </section>
      </main>

      {/* Wave Footer */}
      <div className="w-full h-40 md:h-64 bg-[#fc5550] mt-12 relative">
        <svg
          className="absolute -top-24 md:-top-32 w-full"
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,192L80,181.3C160,171,320,149,480,154.7C640,160,800,192,960,197.3C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="#fc5550"
          />
        </svg>
      </div>
    </div>
  )
}

