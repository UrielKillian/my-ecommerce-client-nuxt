<template>
  <div v-for="product in products" :key="product.id">
    <ItemCardComponent
        :id="product.id"
        :name="product.name"
        :href="product.href"
        :price="product.price"
        :color="product.color"
        :imageSrc="product.imageSrc"
        :imageAlt="product.imageAlt"
    />
  </div>
</template>
<script setup lang="ts">
const products = [{
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },{
  id: 2,
  name: 'Basic Tee',
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
},{
  id: 3,
  name: 'Basic Tee',
  href: '#',
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
  imageAlt: "Front of men's Basic Tee in black.",
  price: '$35',
  color: 'Black',
}]

</script>