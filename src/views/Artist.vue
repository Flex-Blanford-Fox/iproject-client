<template>
  <div class="home">
    <Search />
    <SearchArtist />
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import SearchArtist from '../components/SearchArtist.vue'

export default {
  name: 'Home',
  components: { SearchArtist, Search }
}
</script>
