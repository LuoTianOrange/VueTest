<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyProduct msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyProduct from '@/components/MyProduct.vue'

export default {
  name: 'MyProduct',
  components: {
    MyProduct
  }
}
</script>
