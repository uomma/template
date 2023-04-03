
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


        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="'https://image.tmdb.org/t/p/w342' + info.poster_path" v-if="info.poster_path" />
                </div>
                <div class="flip-card-back">
                    <h2>{{ title }}</h2>
                    <h3>{{ original_title }}</h3>
                    <div>{{ getLanguage }}</div>
                    <country-flag :country="getLanguage" size="small" />
                    <div class="getVote">{{ getVote }}</div>
                    <div class="fa">
                        <font-awesome-icon :icon="['fas', 'star']" v-for="n in getVote " />
                        <font-awesome-icon :icon="['far', 'star']" v-for="n in 5 - getVote " />
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss">
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 500px;
    perspective: 1000px;

}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    color: white;
}

/* Style the back side */
.flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);

}
h2{
    padding: 5px;
    font-weight: 700;
}
.getVote {
    color: red;
}

.fa {
    color: gold;
}
</style>

