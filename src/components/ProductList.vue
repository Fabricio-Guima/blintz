<template>
  <section class="product-container">
    <h1>Imóveis</h1>

    <form>
      <input
        name="search"
        id="search"
        type="text"
        v-model="search"
        placeholder="Search..."
      />

      <input
        type="submit"
        id="lupa"
        value="Filtrar"
        @click.prevent="filterArray"
      />
    </form>

    <select class="select" name="price" id="price" v-model="selected">
      <option disabled value="">Escolha uma opção</option>
      <option value="0">Mais caros</option>
      <option value="1">Mais baratos</option>
    </select>

    <transition mode="out-in">
      <div v-if="products && products.length" class="products" key="products">
        <div v-for="(product, index) in products" :key="index" class="products">
          <ProductItem :product="product" class="product" />
        </div>
      </div>

      <div v-else-if="products && products.length === 0" key="no-results">
        <h4 class="no-results">Não há imovéis a serem mostrados no momento.</h4>
      </div>

      <Loading v-else key="loading" />
    </transition>
  </section>
</template>

<script>
import { api } from "@/services.js";
import ProductItem from "@/components/ProductItem";
export default {
  name: "ProductList",
  components: {
    ProductItem
  },
  data() {
    return {
      products: [],
      products2: [],
      search: "",
      selected: ""
    };
  },
  computed: {
    formatedSearch() {
      return this.search
        .normalize("NFD")
        .replace(/[^a-zA-Z0-9s]/g, "")
        .toLowerCase();
    }
  },

  methods: {
    fetchProducts() {
      this.products = null;
      api.get().then((response) => {
        this.products = response.data;
        this.products2 = response.data;
        console.log(response.data);
      });
    },
    filterArray() {
      this.products = this.products2;

      const total = this.products.filter((item) => {
        let keys = ["address", "region", "building"];

        if (
          item[keys[0]]
            .normalize("NFD")
            .replace(/[^a-zA-Z0-9s]/g, "")
            .toLowerCase()
            .indexOf(this.formatedSearch) != -1 ||
          item[keys[1]]
            .normalize("NFD")
            .replace(/[^a-zA-Z0-9s]/g, "")
            .toLowerCase()
            .indexOf(this.formatedSearch) != -1 ||
          (item[keys[2]]
            ? item[keys[2]]
                .normalize("NFD")
                .replace(/[^a-zA-Z0-9s]/g, "")
                .toLowerCase()
                .indexOf(this.formatedSearch) != -1
            : false)
        ) {
          return item;
        }
      });

      return (this.products = total);
    }
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    selected(newValue) {
      console.log("change", newValue);
      this.products.sort((a, b) => {
        if (newValue == 0) {
          return a.asking_price > b.asking_price
            ? -1
            : a.asking_price < b.asking_price
            ? 1
            : 0;
        } else {
          return a.asking_price < b.asking_price
            ? -1
            : a.asking_price > b.asking_price
            ? 1
            : 0;
        }
      });
    }
  }
};
</script>

<style scoped>
.product-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 30px;
}

.product {
}

h1 {
  text-align: center;
}

.no-results {
  text-align: center;
}

form {
  max-width: 485px;
  margin: 16px auto 16px 0;
  display: inline-block;
  position: relative;
}

#search {
  width: 485px;
  padding: 20px;
  border: none;
}
#search:focus,
#search:hover {
  outline: none;
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

.select {
  display: inline-block;
  margin-left: 30px;
  width: 225px;
}

#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  box-shadow: none;
}

@media screen and (max-width: 788px) {
  form {
    display: block;
    max-width: 100%;
  }
  #search {
    width: 100%;
  }
  .select {
    width: 100%;
    margin-left: 0;
  }
}
</style>
