import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
    user:'tom',
    top:0
}

const mutations={
    setHomeListTop(state,top){
        state.top=top;
    }
}

const getters={
    home_list_top(state){
        return state.top;
    }
}

const actions={
    setHomeListTop({commit,state},top){
        commit('setHomeListTop',top);
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})