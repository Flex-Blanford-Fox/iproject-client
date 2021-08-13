<template>
  <div class="home">
    <Search />
    <SearchAlbum />
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import SearchAlbum from '../components/SearchAlbum.vue'

export default {
  name: 'Home',
  components: { SearchAlbum, Search }
}
</script>
