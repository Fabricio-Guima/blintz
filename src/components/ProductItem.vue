<template>
  <div class="product">
    <div class="image"></div>

    <div class="product-info">
      <span class="product-address">{{ product.address }}</span>
      <div class="product-property-address">
        {{ propertyAddress }}
      </div>
      <span class="product-price">{{ product.asking_price | priceBRL }}</span>
      <span class="product-bedroom-suite-parkingspot">{{
        bedroomSuiteParkingspot
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    propertyAddress() {
      if (this.product.building) {
        return `${this.product.property_type} ${this.product.building} - ${this.product.region} `;
      }
      return `${this.product.property_type} - ${this.product.region} `;
    },
    bedroomSuiteParkingspot() {
      return `${this.product.bedrooms}QT ${this.product.suites}ST  ${this.product.parking_spots}VG `;
    }
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 40px;
  position: relative;
  border: 1px solid red;
}

.product-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px 16px 5px;
}

.product-address {
  margin-top: 1rem;
  font-weight: bold;
  text-align: center;
}

.product-property-address {
  margin-top: 1rem;
  text-align: center;
}

.product-price {
  margin-top: 1rem;
  font-weight: bold;
  text-align: center;
}

.product-bedroom-suite-parkingspot {
  margin-top: 1rem;
  text-align: center;
}

.image {
  width: 100%;
  max-width: 100%;
  background: red;
  min-height: 85px;
}
</style>
