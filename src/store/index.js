import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		message: 'hello vuex!'
	},
	mutations: {
		setMessage(state, payload) {
			state.message = payload;
		}
	},
	actions: {
		setMessage({commit}) { // можно передать и getters
			// let a = getters.getMessage;
			let data = setTimeout(()=>'another text', 1000) // like API
			commit('setMessage', data)
		}
	},
	getters: {
		getMessage(state) { // можно и второй параметр
			return state.message;
		}
	}
})