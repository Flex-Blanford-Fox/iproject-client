<template>
  <div>
    <h1 style="color: white">{{artist}}</h1>
    <img src="" alt="">
    <table class="table container">
        <thead>
          <tr>
            <th style="color: white" scope="col">#</th>
            <th style="color: white" scope="col">Cover</th>
            <th style="color: white" scope="col">Album</th>
          </tr>
        </thead>
        <tbody style="background-color:white">
          <tr v-for="(result, index) in results" :key="result.id">
            <td>{{index+1}}</td>
            <td>
              <img width="50" :src="result.cover" alt="">
            </td>
            <td @click="(searchAlbum(currentArtistId, result.id_album))"><u>{{result.album}}</u></td>
            <!-- <td>{{result.image_url}}</td> -->
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'SearchArtist',
  computed: {
    results () {
      return this.$store.state.searchArtistResult
    },
    artist () {
      return this.$store.state.currentArtist
    },
    currentArtistId () {
      return this.$store.state.currentArtistId
    }
  },
  methods: {
    searchAlbum (idArtist, idAlbum) {
      const payload = { id: idArtist, id2: idAlbum }
      return this.$store.dispatch('searchAlbum', payload)
    }
  }
}
</script>

<style>

</style>
