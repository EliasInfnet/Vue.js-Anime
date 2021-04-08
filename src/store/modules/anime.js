import axios from 'axios'

const state = {
    animes:[]
};
const getters = {
    allAnimes: state => state.animes
};
const actions = {
    getAnimes({ commit }){
        axios.get(
          "https://kitsu.io/api/edge/anime" 
        ).then((response) =>{
          commit('getAnimes', response.data);
        });
      },
      deleteAnime({ commit }, id){
        //axios.delete...then()
        commit('deleteAnime', id);
      },
      
};
const mutations = {
    getAnimes: (state, data) => (state.animes = data),
    deleteAnime: (state, id) => (state.animes = state.animes.filter(u => u.id !== id)),
  }
export default {
    state,
    getters,
    actions,
    mutations
};