<template lang="html">
  <header class="bg-black border-b-4 border-protiro shadow-lg">
    <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center h-24">
      <nuxt-link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img src="/img/logo.png" alt="Pro Tiro" class="w-283px -ml-4">
      </nuxt-link>
      <nav class="md:ml-auto h-full flex flex-wrap items-center text-base justify-center -mb-1px">
        <nuxt-link to="/missao" class="item-menu">Missão</nuxt-link>
        <nuxt-link to="/blog" class="item-menu">Blog</nuxt-link>
        <nuxt-link to="/loja" class="item-menu">Loja</nuxt-link>
        <nuxt-link to="/cursos" class="item-menu">Cursos</nuxt-link>
        <nuxt-link to="/despachante" class="item-menu">Despachante</nuxt-link>
        <nuxt-link to="/videos" class="item-menu">Vídeos</nuxt-link>
        <nuxt-link to="/contato" class="item-menu">Contato</nuxt-link>
        <nuxt-link to="/clube-de-tiro" class="item-menu">Clube de Tiro</nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="css">
  .item-menu{
    @apply h-full font-bold uppercase text-lg px-3 flex items-center text-white transition duration-300;
  }

  .item-menu:hover{
    @apply bg-protiro;
  }

  header nav .nuxt-link-active{
    @apply bg-protiro;
  }
</style>
