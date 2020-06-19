<template>
  <div class="flex min-h-screen flex-col overflow-x-hidden">
    <Header />
    <transition name="fade">
      <nuxt class="flex-1" />
    </transition>
    <Footer />
  </div>
</template>
<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
    name: 'DefaultLayout',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  body{
    @apply bg-black;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
