<template>
  <footer class="bg-neutral-900 text-white py-12 px-6">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <div class="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">U</span>
            </div>
            <span class="text-2xl font-bold">UNIO</span>
          </div>
          <p class="text-neutral-400 text-sm leading-relaxed">
            Software con IA y corazón humano. Transformando ideas en realidad, un proyecto a la vez.
          </p>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-bold text-lg mb-4">Servicios</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li><a href="#servicios" class="hover:text-white transition-colors">Desarrollo Web</a></li>
            <li><a href="#servicios" class="hover:text-white transition-colors">Apps Móviles</a></li>
            <li><a href="#servicios" class="hover:text-white transition-colors">Machine Learning</a></li>
            <li><a href="#servicios" class="hover:text-white transition-colors">UX/UI Design</a></li>
            <li><a href="#servicios" class="hover:text-white transition-colors">Consultoría IA</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="font-bold text-lg mb-4">Empresa</h4>
          <ul class="space-y-2 text-sm text-neutral-400">
            <li><a href="#nosotros" class="hover:text-white transition-colors">Sobre nosotros</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Casos de éxito</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Carreras</a></li>
            <li><a href="#contacto" class="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-bold text-lg mb-4">Newsletter</h4>
          <p class="text-sm text-neutral-400 mb-4">
            Recibe tips, insights y novedades sobre IA y desarrollo.
          </p>
          <div class="flex">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              class="flex-1 px-4 py-2 rounded-l-lg bg-neutral-800 border border-neutral-700 text-white text-sm focus:outline-none focus:border-primary-500"
            />
            <button class="px-4 py-2 bg-primary-700 rounded-r-lg hover:bg-primary-800 transition-all">
              ✓
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
        <p>&copy; 2025 UNIO. Todos los derechos reservados.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white transition-colors">Privacidad</a>
          <a href="#" class="hover:text-white transition-colors">Términos</a>
          <a href="#" class="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

