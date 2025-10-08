<template>
  <section class="py-20 px-6 bg-white">
    <div class="container mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
          Construyamos juntos tu <span class="gradient-text">próximo proyecto</span>
        </h2>
        <p class="text-xl text-neutral-600 max-w-3xl mx-auto">
          Comienza tu transformación digital con un equipo que entiende tus necesidades
        </p>
      </div>

      <div class="max-w-5xl mx-auto">
        <!-- Contact Form -->
        <div class="bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-xl p-8 md:p-12 border border-neutral-200">
          <div class="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label class="block text-sm font-semibold text-neutral-700 mb-2">Nombre completo</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label class="block text-sm font-semibold text-neutral-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="tu@empresa.com" 
                class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold text-neutral-700 mb-2">Empresa</label>
            <input 
              type="text" 
              placeholder="Nombre de tu empresa" 
              class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold text-neutral-700 mb-2">¿En qué podemos ayudarte?</label>
            <textarea 
              rows="4" 
              placeholder="Cuéntanos sobre tu proyecto o idea..." 
              class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold text-neutral-700 mb-3">Servicios de interés</label>
            <div class="grid md:grid-cols-3 gap-3">
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">Desarrollo Web</span>
              </label>
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">Apps Móviles</span>
              </label>
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">Machine Learning</span>
              </label>
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">Cloud & Backend</span>
              </label>
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">UX/UI Design</span>
              </label>
              <label class="flex items-center p-3 border border-neutral-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 transition-all">
                <input type="checkbox" class="mr-3 text-primary-600 focus:ring-primary-500" />
                <span class="text-sm text-neutral-700">Consultoría IA</span>
              </label>
            </div>
          </div>

          <button class="w-full btn-primary text-lg">
            Enviar consulta
            <span class="ml-2">→</span>
          </button>

          <p class="text-center text-sm text-neutral-500 mt-6">
            Responderemos tu consulta en menos de 24 horas
          </p>
        </div>

        <!-- Trust Indicators -->
        <div class="grid md:grid-cols-3 gap-6 mt-12">
          <div class="text-center p-6">
            <div class="text-3xl mb-3">⚡</div>
            <div class="font-semibold text-neutral-800 mb-2">Respuesta Rápida</div>
            <div class="text-sm text-neutral-600">Contacto en menos de 24h</div>
          </div>
          <div class="text-center p-6">
            <div class="text-3xl mb-3">🔒</div>
            <div class="font-semibold text-neutral-800 mb-2">100% Confidencial</div>
            <div class="text-sm text-neutral-600">NDA disponible desde el día 1</div>
          </div>
          <div class="text-center p-6">
            <div class="text-3xl mb-3">💼</div>
            <div class="font-semibold text-neutral-800 mb-2">Sin Compromiso</div>
            <div class="text-sm text-neutral-600">Consulta y presupuesto gratuitos</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

