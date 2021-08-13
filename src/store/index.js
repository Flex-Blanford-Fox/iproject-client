import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'
import router from '../router/index.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResult: [],
    searchArtistResult: [],
    searchAlbumResult: [],
    currentArtist: '',
    currentAlbum: '',
    currentArtistId: ''
  },
  mutations: {
    SEARCH (state, payload) {
      state.searchResult = payload
    },
    SEARCHARTIST (state, payload) {
      state.searchArtistResult = payload.albums
      state.currentArtist = payload.artist
      state.currentArtistId = payload.id_artist
    },
    SEARCHALBUM (state, payload) {
      state.searchAlbumResult = payload.tracks
      state.currentAlbum = payload.album
    }
  },
  actions: {
    submitLogin (context, payload) {
      axios.post('/login', payload)
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in',
            showConfirmButton: false,
            timer: 1000
          })
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/home')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            text: 'Username/password salah'
          })
          console.log(err)
        })
    },
    submitRegister (context, payload) {
      axios.post('/register', payload)
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Account created, please sign in',
            showConfirmButton: false,
            timer: 1000
          })
          router.push('/login')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            text: 'Registration Failed'
          })
          router.push('/register')
          console.log(err)
        })
    },
    search (context, payload) {
      router.push('/')
      console.log(payload)
      axios.get(`/api/search?q=${payload}`, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          console.log(data.data)
          context.commit('SEARCH', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    searchArtist (context, idArtist) {
      axios.get(`api/searchArtist?id=${idArtist}`, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          console.log(data.data)
          context.commit('SEARCHARTIST', data.data)
          router.push('/artist')
        })
        .catch(err => {
          console.log(err)
        })
    },

    searchAlbum (context, payload) {
      const { id, id2 } = payload
      axios.get(`api/searchAlbum?id=${id}&id2=${id2}`, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          console.log(data.data)
          context.commit('SEARCHALBUM', data.data)
          router.push('/album')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
