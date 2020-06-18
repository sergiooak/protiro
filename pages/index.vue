<template>
  <div class="container mx-auto my-8">
    <section class="bg-gray-800 rounded-lg shadow-lg bg-cover bg-center flex items-center justify-center" style="height: 350px; background-image: url('/img/bg-multicamblack.png');">
      <img src="/img/logo.png" alt="">
    </section>
    <section class="flex flex-wrap my-8 -mx-4">
      <div class="w-full md:w-1/3 px-4">
        <div class="bg-gray-800 rounded-lg shadow-lg relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/PROTIRO-LOJA-FOTO.jpeg);">
          <nuxt-link to="/loja" class="absolute inset-0 flex justify-center items-center text-white uppercase font-bold text-lg" style="text-shadow: 0 2px 4px rgba(0,0,0,0.10); background: rgba(0,0,0,.75)">
            Loja
          </nuxt-link>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 my-4 md:my-0">
        <div class="bg-gray-800 rounded-lg shadow-lg relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/img.png)">
          <nuxt-link to="/cursos" class="absolute inset-0 flex justify-center items-center text-white uppercase font-bold text-lg" style="text-shadow: 0 2px 4px rgba(0,0,0,0.10); background: rgba(0,0,0,.75)">
            Cursos
          </nuxt-link>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4">
        <div class="bg-gray-800 rounded-lg shadow-lg relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/img2-1.png);">
          <nuxt-link to="/clube-de-tiro" class="absolute inset-0 flex justify-center items-center text-white uppercase font-bold text-lg" style="text-shadow: 0 2px 4px rgba(0,0,0,0.10); background: rgba(0,0,0,.75)">
            Clube
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="text-gray-500 bg-gray-900 body-font relative rounded-lg overflow-hidden shadow-lg border-4 border-yellow-600" style="height: 350px">
      <div class="absolute inset-0 bg-gray-900">
        <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Pro%20Tiro&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

</style>
