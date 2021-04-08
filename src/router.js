import Vue from 'vue';
import VueRouter from 'vue-router';
import detalheComp from'./components/detalheComp.vue'
import listaComp from'./components/listaComp.vue'
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'listaComp',
            component: listaComp
        },
        {
            path: '/detalhe/:id',
            name: 'detalheComp',
            component: detalheComp
        },
    ]
});