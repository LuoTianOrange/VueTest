<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyProductTest :product="product" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyProductTest from '@/components/MyProduct.vue'

export default {
  name: 'MyProduct',
  components: {
    MyProductTest,
  },
  data() {
    return {
      product: {
        id: 1,
        name: 'Product 1',
        price: 100,
        src: 'https://via.placeholder.com/150'
      }
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
