import { reactive } from "vue";

export const store= reactive({

    config:{
        urlMovie:'https://api.themoviedb.org/3/search/movie',
        apiKey:'405d078a1507c790b0d58c5f6bd87b5f',
        defaultLang:'it-IT',
    },
    movieList:[],
    searchKey:'',
});