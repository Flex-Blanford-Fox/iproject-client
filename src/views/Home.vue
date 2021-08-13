<template>
  <div class="home">
    <Search />
    <SearchResult />
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '../components/Search.vue'
import SearchResult from '../components/SearchResult.vue'

export default {
  name: 'Home',
  components: { Search, SearchResult }
}
</script>
