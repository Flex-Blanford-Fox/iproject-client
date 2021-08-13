<template>
  <div>
    <!-- <h1 class="heading">Begin by searching your favourite Songs / artists</h1> -->
    <div class ="d-flex-column">
      <form class="search" @submit.prevent="search">
        <input v-model="songSearch" type="search" placeholder="Search here..." required>
        <button type="submit">Search</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    search () {
      this.$store.dispatch('search', this.songSearch)
    }
  },
  computed: {
    searchResult () {
      return this.$store.state('searchResult')
    }
  },
  data: function () {
    return {
      songSearch: ''
    }
  }
}
</script>

<style scoped>
body {
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/41294/hero.jpg) no-repeat center center fixed;
  background-size: cover;
}

.heading {
  width: 370px;
  padding: 10px 5px;
  float: left;
  color: #ccc;
  border: 0;
  background: transparent;
  border-radius: 3px 0 0 3px;
}

.search {
  width: 500px;
  height: 40px;
  margin: 150px auto;
  background: #444;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 1px solid #fff;
}
.search input {
  width: 370px;
  padding: 10px 5px;
  float: left;
  color: #ccc;
  border: 0;
  background: transparent;
  border-radius: 3px 0 0 3px;
}
.search input:focus {
  outline: 0;
  background: transparent;
}
.search button {
  position: relative;
  float: right;
  border: 0;
  padding: 0;
  cursor: pointer;
  height: 40px;
  width: 120px;
  color: #fff;
  background: transparent;
  border-left: 1px solid #fff;
  border-radius: 0 3px 3px 0;
}
.search button:hover {
  background: #fff;
  color: #444;
}
.search button:active {
  box-shadow: 0px 0px 12px 0px #e1e1e1;
}
.search button:focus {
  outline: 0;
}
</style>
