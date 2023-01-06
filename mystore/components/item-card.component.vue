<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div  :key="id" class="group relative">
          <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img :src="imageSrc" :alt="imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ name }}
                </a>
              </h3>
              <p class="mt-1 text-sm text-gray-500">{{ color }}</p>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {PropType} from 'vue';
const props = defineProps({
  id: Number,
  name: String,
  href: String,
  price: String,
  color: String,
  imageSrc: String,
  imageAlt: String
})
</script>
