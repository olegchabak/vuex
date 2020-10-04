import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

import message from './message' // импортируем тот стор (модуль), с которым будем работать
// import cart from './cart' // и прочие любые модули со своими actions, mutations, state, getters...

export default new Vuex.Store({
	modules: {
		message,
		// cart // и прочие любые модули со своими actions, mutations, state, getters...
	}
})