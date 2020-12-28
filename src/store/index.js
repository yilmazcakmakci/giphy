import Vue from 'vue'
import Vuex from 'vuex'
import { fetchGifs } from '../utils'

Vue.use(Vuex)

const state = {
    gifs: [],
    total_count: '',
    searchTerm: ''
}

const getters = {
    header(state, getters) {
        
        const isTrending = getters.contentType === 'trending'
        
        return {
            title: isTrending ? 'Trending' : 'Search Results',
            icon: isTrending ? 'fire' : 'file-alt'
        }
    },
    showingCount(state) {
        const { gifs, total_count } = state
        return `Showing 1-${gifs.length} in ${total_count} results`
    },
    contentType(state) {
        return state.searchTerm.length > 1 ? 'search' : 'trending'
    }
}

const mutations = {
    setGifs(state, gifs) {
        state.gifs = gifs
    },
    setTotal(state, total) {
        state.total_count = total
    },
    loadMore(state, gifs) {
        state.gifs = [...state.gifs, ...gifs]
    },
    updateSearchTerm(state, value) {
        state.searchTerm = value
    }
}

const actions = {
    async getGifs({ commit, getters, state }, params) {
        const data = await fetchGifs(process.env.VUE_APP_API_BASE + getters.contentType, { 
            offset: params.offset || 0,
            q: state.searchTerm,
        })

        if (params.loadType === 'first') {
            commit('setGifs', data.gifs)
            commit('setTotal', data.total_count)
        }

        else if (params.loadType === 'more') {
            commit('loadMore', data.gifs)
        }

        else {
            console.error('Wrong load type.')
        }

    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})