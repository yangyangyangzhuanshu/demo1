<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'APP',
  created () {
    this.$router.push({
      name: 'login'
    })
  }
}
</script>

<style lang="scss"></style>
