<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList
  }
};
</script>

<style>
.home {
  margin: 16px;
}
</style>
