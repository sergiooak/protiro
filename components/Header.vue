<template lang="html">
  <header class="bg-gray-900 text-gray-700 body-font border-b-4 border-yellow-700 shadow-lg">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nuxt-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/img/logo.png" alt="Pro Tiro" class="h-16">
      </nuxt-link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <nuxt-link to="/missao" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Missão</nuxt-link>
        <nuxt-link to="/blog" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Blog</nuxt-link>
        <nuxt-link to="/loja" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Loja</nuxt-link>
        <nuxt-link to="/cursos" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Cursos</nuxt-link>
        <nuxt-link to="/despachante" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Despachante</nuxt-link>
        <nuxt-link to="/videos" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Vídeos</nuxt-link>
        <nuxt-link to="/contato" class="mr-5 text-yellow-600 hover:text-yellow-500 font-medium">Contato</nuxt-link>
      </nav>
      <nuxt-link to="/clube-de-tiro" class="inline-flex items-center bg-yellow-900 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-300 rounded text-base mt-4 md:mt-0 text-yellow-300 hover:text-yellow-900 font-medium">
        Clube de Tiro
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css" scoped>
</style>
