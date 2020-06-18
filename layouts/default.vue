<template>
  <div class="flex min-h-screen flex-col">
    <Header />
    <nuxt class="flex-1" />
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
    @apply bg-gray-900;
  }
</style>
