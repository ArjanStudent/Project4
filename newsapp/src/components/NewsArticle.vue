<template>
    <div class="c-article">
        <h2 class="c-article-headline">{{article.title}}</h2>
        <p class="c-article-content">{{article.description}}</p>
    </div>
</template>

<script>
export default {
    name:'Article',

    props:{
        article:{
            type: Object,
        }
    },
}
</script>

