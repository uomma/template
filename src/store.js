import { reactive } from "vue";

export const store = reactive({

    config: {
        urlAPI: 'https://api.themoviedb.org/3/',
        extendoMovie: '/search/movie',
        extendoTVShow: '/search/tv',
        apiKey: '405d078a1507c790b0d58c5f6bd87b5f',
        defaultLang: 'it-IT',
        imgBase:'https://image.tmdb.org/t/p/w342/'
    },
    movieList: [],
    TVList: [],
    
    searchKey: '',
});