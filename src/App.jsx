import React from 'react'

function Nav() {
  return (
    <header className="glass sticky top-0 z-20">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-pink-300 flex items-center justify-center text-white font-bold">EK</div>
          <div className="font-semibold">EkiZR</div>
        </div>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#about" className="hover:underline">About</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">Hi, I'm Eki Zulfar Rachman</h1>
          <p className="text-gray-600">Frontend developer — I build beautiful, accessible web apps and admin dashboards.</p>
          <div className="flex gap-3">
            <a className="px-4 py-2 bg-indigo-600 text-white rounded" href="#projects">See projects</a>
            <a className="px-4 py-2 border rounded" href="#contact">Contact</a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-72 h-72 rounded-xl card-shadow overflow-hidden">
            <img src="/public/assets/profile.svg" alt="profile" className="w-full h-full object-cover bg-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const items = [1,2,3,4]
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(i => (
            <article key={i} className="p-4 bg-white rounded-lg card-shadow">
              <div className="h-40 bg-gradient-to-br from-indigo-50 to-pink-50 rounded mb-3 flex items-center justify-center overflow-hidden">
                <img src="/public/assets/project.svg" alt="project" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold">Project Title {i}</h3>
              <p className="text-sm text-gray-600 mb-2">Short description of the project. Tech stack, link, and details.</p>
              <div className="flex flex-wrap gap-2">
                <span className="badge-tech">React</span>
                <span className="badge-tech">Tailwind</span>
                <span className="badge-tech">Vite</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Certificates(){
  const certs=[1,2,3]
  return (
    <section id="certificates" className="py-12">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Certificates</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {certs.map(c=> (
            <div key={c} className="p-2 bg-white rounded card-shadow flex items-center justify-center">
              <img src="/public/assets/certificate.svg" alt="certificate" className="w-full h-28 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700">This is a simplified but visually similar version of Portofolio V5. It uses React + Tailwind CSS and replaces Supabase with static content for easy local testing.</p>
      </div>
    </section>
  )
}

export default function App(){
  return (
    <div className="font-sans text-gray-900">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Certificates />
        <About />
      </main>
      <footer className="border-t mt-12">
        <div className="max-w-4xl mx-auto p-6 text-sm text-gray-600">© 2026 Eki Zulfar — Simplified clone</div>
      </footer>
    </div>
  )
}
