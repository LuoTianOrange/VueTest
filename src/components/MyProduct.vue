<template>
  <div class="product" @click="$emit('myclick', product.id)">
    <img :src="product.src" alt="">
    <div class="product-text">
      <span>{{ product.name }}</span>
      <span class="product-price">{{ product.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Myproduct',
  props: ['product'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  border: 1px solid #ccc;
  display: inline-block;
  margin: 10px;
}

.product-text {
  border-top: 1px solid #ccc;
  padding: 10px;
}

.product-price {
  float: right;
}</style>
