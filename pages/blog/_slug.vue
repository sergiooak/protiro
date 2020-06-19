<template lang="html">
  <section class="text-gray-500 bg-gray-900 body-font my-8">
    <div class="container px-5 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg overflow-hidden shadow-lg border-2 border-yellow-600 relative">
          <img alt="content" class="object-cover object-center h-full w-full" :src="post.better_featured_image.source_url">
          <div class="absolute bottom-0 left-0 h-20 bg-white w-full flex items-center justify-center" style="background: rgba(0,0,0,.5); backdrop-filter: blur(5px);">
            <h1 class="text-white uppercase font-medium text-lg" v-html="post.title.rendered">Título</h1>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="mt-4 pt-4">
            <p class="leading-relaxed text-lg mb-4 text-gray-300" v-html="post.content.rendered">Conteudo</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  asyncData({ params, $axios }){
    return $axios.$get(`https://api.protiro.com.br/wp-json/wp/v2/posts?slug=${params.slug}`)
    .then((res) => {
      return {post: res[0]}
    })
  }
}
</script>

<style lang="css" scoped>
</style>
