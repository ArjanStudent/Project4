<template>
    <div class="o-grid">
        <news-article v-for="a in this.getAllArticles" :key="a.title" :article="a"/>
    </div>
</template>

<script>

import NewsArticle from '@/components/NewsArticle'
export default {
    name:'Grid',
    components:{
        NewsArticle
    },
    computed:{
        getAllArticles () {
            return this.$store.getters.getAllArticles
        }
    },
}
</script>
