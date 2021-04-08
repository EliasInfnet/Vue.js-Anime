import vuex from "vuex";
import Vue from "vue";
import anime from "./modules/anime"
Vue.use(vuex);

export default new vuex.Store({
    modules: {
        anime
     }
});