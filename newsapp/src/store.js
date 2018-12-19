import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      Articles:null,
    },
    getters:{
      getAllArticles : state => { return state.Articles; },
    },
    actions: {
      fetchArticles: ({commit}) => {
        setTimeout(() => {
            fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f94f6f909c7f40ed88350cf8b005c467').then(function (response) {
                return response.json();
            }).then(function (json) {
                console.log(json);
                commit('setArticles',json);
            }).catch(function (error) {
                console.error("an error has occured :", error);
            });
        }, 500)
      },
    },
    mutations: {
      setArticles(state,a){
        state.Articles = a.articles 
      },
    },
})

// 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=f94f6f909c7f40ed88350cf8b005c467'