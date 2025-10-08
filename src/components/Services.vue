<template>
  <section id="servicios" class="py-20 px-6 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          Nuestros <span class="gradient-text">Servicios</span>
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Soluciones completas de software con IA, diseñadas para transformar tu negocio
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">Desarrollo Web</h3>
          <p class="text-neutral-600 mb-4">
            Aplicaciones web modernas, rápidas y escalables. Desde landing pages hasta plataformas empresariales complejas.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Angular, React, Vue
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Progressive Web Apps
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> SEO & Performance
            </li>
          </ul>
        </div>

        <!-- Service 2 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">Apps Móviles</h3>
          <p class="text-neutral-600 mb-4">
            Experiencias móviles híbridas que tus usuarios amarán. iOS, Android y Escritorio.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> iOS & Android & Escritorio
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Ionic, Capacitor, Lynx
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Diseño Mobile-First
            </li>
          </ul>
        </div>

        <!-- Service 3 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">Machine Learning</h3>
          <p class="text-neutral-600 mb-4">
            Integramos IA en tu software para automatizar, predecir y optimizar. Desde chatbots hasta análisis predictivo.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> NLP & Chatbots
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Computer Vision
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Análisis Predictivo
            </li>
          </ul>
        </div>

        <!-- Service 4 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">Cloud & Backend</h3>
          <p class="text-neutral-600 mb-4">
            Arquitecturas cloud escalables y APIs robustas. Tu infraestructura en las mejores manos.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> AWS, Azure, GCP
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Microservicios
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> APIs RESTful & GraphQL
            </li>
          </ul>
        </div>

        <!-- Service 5 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">UX/UI Design</h3>
          <p class="text-neutral-600 mb-4">
            Diseños que enamoran. Interfaces hermosas, intuitivas y basadas en investigación de usuarios.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Research & Testing
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Design Systems
            </li>
            <li class="flex items-center">
              <span class="text-primary-600 mr-2">✓</span> Prototipos Interactivos
            </li>
          </ul>
        </div>

        <!-- Service 6 -->
        <div class="group bg-white border-2 border-neutral-100 rounded-2xl p-8 card-hover">
          <div class="w-14 h-14 bg-gradient-to-br from-accent-100 to-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg class="w-7 h-7 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-neutral-800">Consultoría IA</h3>
          <p class="text-neutral-600 mb-4">
            Te ayudamos a identificar dónde y cómo la IA puede transformar tu negocio. Estrategia y ejecución.
          </p>
          <ul class="space-y-2 text-sm text-neutral-600">
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Auditoría Tecnológica
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Roadmap de IA
            </li>
            <li class="flex items-center">
              <span class="text-accent-600 mr-2">✓</span> Formación de Equipos
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

