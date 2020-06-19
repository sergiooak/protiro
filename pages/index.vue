<template>
  <div class="">
    <section class="overflow-hidden relative flex justify-center items-center" style="height: 350px;">
      <div class="slider absolute top-0 left-0">
      </div>
      <img src="/img/logo.png" class="relative z-10" alt="">
    </section>
    <section class="flex flex-wrap my-8 mx-4">
      <div class="w-full md:w-1/3 px-4">
        <div class="relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/PROTIRO-LOJA-FOTO.jpeg);">
          <nuxt-link to="/loja" class="link-home">
            Loja
          </nuxt-link>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4 my-4 md:my-0">
        <div class="relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/img.png)">
          <nuxt-link to="/cursos" class="link-home">
            Cursos
          </nuxt-link>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-4">
        <div class="relative overflow-hidden bg-cover bg-center" style="height: 250px; background-image: url(https://api.protiro.com.br/wp-content/uploads/2020/01/img2-1.png);">
          <nuxt-link to="/clube-de-tiro" class="link-home">
            Clube
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="text-gray-500 bg-gray-900 body-font relative overflow-hidden" style="height: 350px">
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
  .link-home{
    text-shadow: 0 2px 4px rgba(0,0,0,1);
    background: rgba(0,0,0,.6);
    @apply absolute inset-0 flex justify-center items-center text-white uppercase font-bold text-xl transition duration-300 ease-in;
  }

  .link-home:hover{
    background: rgba(0,0,0,.15);
  }

  .slider{
    height: 350px;
    background-image: url('/img/bg-multicamblack.png');
    animation-name: example;
    animation-duration: 6s;
    @apply w-screen bg-center flex items-center justify-center;
  }

  @keyframes example {
    from {
      background-size: 130% auto;
      transform: rotate(-3deg);
    }
    to {
      background-size: 100% auto;
      transform: rotate(0deg);
    }
  }
</style>
