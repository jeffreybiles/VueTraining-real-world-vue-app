<template>
  <div>
    <h1>{{name1}} says hello to {{name2}}. {{name2}} says hello back.</h1>

    <h3>Name 1 Choices</h3>

    <router-link v-for="name in names"
                 :to="`/hello/${name}/${name2}`">
      <li>{{name}}</li>
    </router-link>

    <h3>Name 2 Choices</h3>

    <router-link v-for="name in names"
                 :to="`/hello/${name1}/${name}`">
      <li>{{name}}</li>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: ['name1', 'name2'],
    data(){
      return {
        names: [
          'Jeffrey',
          'Gregg',
          'Evan',
          'Adam'
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>