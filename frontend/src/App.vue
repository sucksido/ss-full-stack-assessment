<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/icon.jpg">


    <EmployeeList msg="Welcome to the Employees App"/>
  </div>
</template>

<script>
import EmployeeList from './components/EmployeeList.vue'

export default {
  name: 'App',
  components: {
    EmployeeList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
