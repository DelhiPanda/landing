<template>
  <section id="inicio" class="pt-32 pb-20 px-6 bg-gradient-to-br from-neutral-50 via-white to-primary-50 overflow-hidden">
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-block px-4 py-2 bg-white rounded-lg shadow-sm border border-primary-200">
            <span class="text-primary-800 font-semibold text-sm">✨ Inteligencia Artificial con Corazón Humano</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Software que
            <span class="gradient-text"> piensa </span>
            y
            <span class="gradient-text"> siente </span>
          </h1>
          
          <p class="text-xl text-neutral-600 leading-relaxed">
            En UNIO fusionamos la potencia de la inteligencia artificial con la calidez humana. 
            Creamos software que no solo resuelve problemas, sino que entiende a las personas.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contacto" class="btn-primary text-center">
              Comienza tu proyecto
              <span class="ml-2">→</span>
            </a>
            <a href="#servicios" class="btn-secondary text-center">
              Conoce más
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-700">+10 años</div>
              <div class="text-sm text-neutral-600 mt-1">de experiencia en el mercado</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-700">98%</div>
              <div class="text-sm text-neutral-600 mt-1">Satisfacción</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-primary-700">24/7</div>
              <div class="text-sm text-neutral-600 mt-1">Soporte</div>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="relative animate-fade-in">
          <div class="relative z-10">
            <!-- Main Card -->
            <div class="bg-white rounded-3xl shadow-2xl p-8 space-y-6">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div class="font-semibold text-neutral-800">IA en Acción</div>
                  <div class="text-sm text-neutral-500">Procesando con empatía</div>
                </div>
              </div>
              
              <!-- Progress Bars -->
              <div class="space-y-4">
                <div>
                  <div class="flex justify-between text-sm mb-2">
                    <span class="text-neutral-700">Análisis de Datos</span>
                    <span class="text-primary-600 font-semibold">95%</span>
                  </div>
                  <div class="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse-slow" style="width: 95%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-2">
                    <span class="text-neutral-700">Comprensión Humana</span>
                    <span class="text-primary-600 font-semibold">100%</span>
                  </div>
                  <div class="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full" style="width: 100%"></div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-sm mb-2">
                    <span class="text-neutral-700">Innovación</span>
                    <span class="text-primary-600 font-semibold">98%</span>
                  </div>
                  <div class="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-primary-600 to-primary-700 rounded-full animate-pulse-slow" style="width: 98%"></div>
                  </div>
                </div>
              </div>

              <!-- Icons Grid -->
              <div class="grid grid-cols-4 gap-4 pt-4">
                <div class="bg-primary-50 rounded-xl p-3 text-center">
                  <div class="text-2xl mb-1">🤖</div>
                  <div class="text-xs text-neutral-600">IA</div>
                </div>
                <div class="bg-accent-50 rounded-xl p-3 text-center">
                  <div class="text-2xl mb-1">❤️</div>
                  <div class="text-xs text-neutral-600">Humano</div>
                </div>
                <div class="bg-primary-50 rounded-xl p-3 text-center">
                  <div class="text-2xl mb-1">⚡</div>
                  <div class="text-xs text-neutral-600">Rápido</div>
                </div>
                <div class="bg-accent-50 rounded-xl p-3 text-center">
                  <div class="text-2xl mb-1">🎯</div>
                  <div class="text-xs text-neutral-600">Preciso</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating Elements -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-accent-200/30 rounded-full blur-3xl animate-float"></div>
          <div class="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-200/30 rounded-full blur-3xl animate-float" style="animation-delay: 1s"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

