
<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'card',
    components: {
        CountryFlag,
    },
    props: {
        info: Object
    }
}
</script>
<template>
    <article>
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <div>{{ info.original_lenguage }}</div>
        <div>{{ info.vote_average }}</div>
    </article>
</template>

