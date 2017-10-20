import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        num: 100
    },
    mutations: {
        add(state, payload) {
            // 变更状态
            state.num++
        },
        min(state) {
            // 变更状态
            state.num--
        }
    }
})
export default store