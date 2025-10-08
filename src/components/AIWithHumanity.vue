<template>
  <section class="py-20 px-6 bg-gradient-to-br from-neutral-50 via-white to-primary-50">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Visual -->
        <div class="relative order-2 lg:order-1">
          <div class="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
            <div class="flex items-center space-x-4 mb-8">
              <div class="text-5xl">🤖</div>
              <div class="text-4xl">+</div>
              <div class="text-5xl">❤️</div>
              <div class="text-4xl">=</div>
              <div class="text-5xl">✨</div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start space-x-3 bg-primary-50 p-4 rounded-xl">
                <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-neutral-800 mb-1">Machine Learning Ético</div>
                  <div class="text-sm text-neutral-600">Algoritmos entrenados con valores humanos</div>
                </div>
              </div>

              <div class="flex items-start space-x-3 bg-accent-50 p-4 rounded-xl">
                <div class="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-neutral-800 mb-1">UX Centrado en Personas</div>
                  <div class="text-sm text-neutral-600">Interfaces intuitivas y accesibles para todos</div>
                </div>
              </div>

              <div class="flex items-start space-x-3 bg-primary-50 p-4 rounded-xl">
                <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-neutral-800 mb-1">Automatización Inteligente</div>
                  <div class="text-sm text-neutral-600">Liberamos tiempo para lo que realmente importa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="space-y-6 order-1 lg:order-2">
          <div class="inline-block px-4 py-2 bg-white rounded-lg shadow-sm border border-primary-200">
            <span class="text-primary-800 font-semibold text-sm">🎯 Nuestra Filosofía</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-bold leading-tight">
            IA con <span class="gradient-text">alma humana</span>
          </h2>

          <p class="text-lg text-neutral-600 leading-relaxed">
            En un mundo donde la tecnología puede sentirse fría y distante, nosotros elegimos un camino diferente. 
            Creemos que la verdadera innovación sucede cuando la inteligencia artificial amplifica lo mejor de la 
            humanidad: la empatía, la creatividad y la comprensión.
          </p>

          <p class="text-lg text-neutral-600 leading-relaxed">
            Nuestro equipo combina expertos en IA con diseñadores UX, psicólogos y especialistas en experiencia 
            del usuario para crear software que no solo funciona perfectamente, sino que se siente natural, 
            intuitivo y humano.
          </p>

          <div class="grid grid-cols-2 gap-6 pt-4">
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="text-3xl font-bold text-primary-700 mb-2">100%</div>
              <div class="text-sm text-neutral-600">Centrado en ti</div>
            </div>
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="text-3xl font-bold text-primary-700 mb-2">∞</div>
              <div class="text-sm text-neutral-600">Innovación</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

