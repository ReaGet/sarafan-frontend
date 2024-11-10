<template>
  <div class="bg-white rounded-b-3xl text-black">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-36 h-36 rounded-xl overflow-hidden">
          <img class="h-full w-full object-cover" width="90" height="90" src="/images/profile.jpg" />
        </div>
        <div class="text-[2.2rem] text-black font-medium">Hugoboss</div>
      </div>
  
      <HeartIcon :size="24" />
    </div>

    <div class="mt-12 text-[1.6rem] text-black">
      <p class="inline text-[#636363] line-clamp-5">
        Huawei - китайский производитель и ведущий мировой поставщик интеллектуальных устройств и инфраструктуры в области информационно-коммуникационных технологий...
      </p>
      <button class="font-bold" type="button">Читать</button>
    </div>
  </div>

  <!-- TODO: сделать визуальное разделение серым цветом -->
  <div class="mt-20 bg-white rounded-t-3xl">
    <div class="flex justify-between mb-12 text-black">
      <Button>
        <SortIcon :size="30" />
      </Button>
      <Button>
        <FilterIcon :size="24" />
      </Button>
    </div>
    <ProductList />
  </div>
</template>

<script setup lang="ts">
import HeartIcon from '../components/icons/HeartIcon.vue'
import ProductList from '../components/ProductList.vue'
import Button from '../components/ui/Button.vue'
import SortIcon from '../components/icons/SortIcon.vue'
import FilterIcon from '../components/icons/FilterIcon.vue'
</script>