<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-neutral-200 shadow-sm">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center shadow-sm">
            <span class="text-white font-bold text-xl">U</span>
          </div>
          <span class="text-2xl font-bold text-primary-900">UNIO</span>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#inicio" class="text-neutral-700 hover:text-primary-600 transition-colors font-medium">Inicio</a>
          <a href="#servicios" class="text-neutral-700 hover:text-primary-600 transition-colors font-medium">Servicios</a>
          <a href="#tecnologia" class="text-neutral-700 hover:text-primary-600 transition-colors font-medium">Tecnología</a>
          <a href="#nosotros" class="text-neutral-700 hover:text-primary-600 transition-colors font-medium">Nosotros</a>
          <a href="#contacto" class="px-6 py-2.5 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 shadow-sm hover:shadow-md">
            Contacto
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-neutral-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 space-y-4 animate-fade-in"
      >
        <a href="#inicio" class="block text-neutral-700 hover:text-primary-600 transition-colors font-medium">Inicio</a>
        <a href="#servicios" class="block text-neutral-700 hover:text-primary-600 transition-colors font-medium">Servicios</a>
        <a href="#tecnologia" class="block text-neutral-700 hover:text-primary-600 transition-colors font-medium">Tecnología</a>
        <a href="#nosotros" class="block text-neutral-700 hover:text-primary-600 transition-colors font-medium">Nosotros</a>
        <a href="#contacto" class="block px-6 py-2.5 bg-primary-700 text-white font-semibold rounded-lg text-center hover:bg-primary-800 transition-all">
          Contacto
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

