export default {
	state: {
		message: ''
	},
	mutations: {
		setMessage(state, payload) {
			state.message = payload;
		}
	},
	actions: {
		setMessage({commit}, payload) { // можно передать и getters
			// let a = getters.getMessage;
			commit('setMessage', payload)
		}
	},
	getters: {
		getMessage(state) { // можно и второй параметр
			return state.message;
		}
	}
}