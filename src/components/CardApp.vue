
<script>
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'card',
    components: {
        CountryFlag,
    },
    props: {
        info: Object,
    },

    computed: {
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case 'he':
                    return 'il';
                default:
                    return this.info.original_language

            }

        },

        getVote(){
            return Math.ceil(this.info.vote_average /2);

        }
    }
}
</script>
<template>
    <article>
        <h2>{{ info.title }}</h2>
        <h3>{{ info.original_title }}</h3>
        <div>{{ getLanguage }}</div>
        <country-flag :country="getLanguage" size="small" />
        <div>{{ getVote }}</div>
        <font-awesome-icon :icon="['fas', 'star']"  v-for="n in getVote " />
        <font-awesome-icon :icon="['far', 'star']"  v-for="n in 5-getVote " />

    </article>
</template>

