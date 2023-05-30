<template>
  <div class="product">
    <MyProduct v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import MyProduct from '@/components/MyProduct.vue';
export default {
  name: 'ProductView',
  components: {
    MyProduct
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          src: 'https://via.placeholder.com/150',
          price: '$100'
        },
        {
          id: 2,
          name: 'Product 2',
          src: 'https://via.placeholder.com/150',
          price: '$200'
        }
      ]
    }
  }
}
</script>