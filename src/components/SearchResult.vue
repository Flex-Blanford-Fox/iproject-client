<template>
  <div>
    <h1 style="color: white">Search Result</h1>
    <table class="table container">
        <thead>
          <tr>
            <th style="color: white" scope="col">#</th>
            <th style="color: white" scope="col">Cover</th>
            <th style="color: white" scope="col">Title</th>
            <th style="color: white" scope="col">Artist</th>
            <th style="color: white" scope="col">Album</th>
            <th style="color: white" scope="col">BPM</th>
            <th style="color: white" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody style="background-color:white">
          <tr v-for="(result, index) in results" :key="result.id">
            <td>{{index+1}}</td>
            <td>
              <img width="50" :src="result.cover" alt="">
            </td>
            <td>{{result.track}}</td>
            <td @click="(searchArtist(result.id_artist))"><u>{{result.artist}}</u></td>
            <td @click="(searchAlbum(result.id_artist, result.id_album))"><u>{{result.album}}</u></td>
            <td><u>{{result.bpm}}</u></td>
            <!-- <td>{{result.image_url}}</td> -->
            <td>
              <!-- <div> -->
                <button class="btn btn-outline-primary">Add to playlist</button>
              <!-- </div> -->
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  computed: {
    results () {
      return this.$store.state.searchResult
    }
  },
  methods: {
    searchArtist (idArtist) {
      return this.$store.dispatch('searchArtist', idArtist)
    },

    searchAlbum (idArtist, idAlbum) {
      const payload = { id: idArtist, id2: idAlbum }
      return this.$store.dispatch('searchAlbum', payload)
    }
  }
}
</script>

<style>

</style>
