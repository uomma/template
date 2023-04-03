
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

        getVote() {
            return Math.ceil(this.info.vote_average / 2);

        },
        title() {
            return this.info.title || this.info.name
        },
        original_title() {
            return this.info.original_title || this.info.original_name
        }
    }
}
</script>
<template>
    <article>
        <h2>{{ title }}</h2>
        <h3>{{ original_title }}</h3>
        <div>{{ getLanguage }}</div>
        <country-flag :country="getLanguage" size="small" />
        <div>{{ getVote }}</div>
        <font-awesome-icon :icon="['fas', 'star']" v-for="n in getVote " />
        <font-awesome-icon :icon="['far', 'star']" v-for="n in 5 - getVote " />
        <img :src="'https://image.tmdb.org/t/p/w342' + info.poster_path" v-if="info.poster_path" />
    </article>
</template>

