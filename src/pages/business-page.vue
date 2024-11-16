<template>
  <Section class="rounded-b-3xl">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-36 h-36 rounded-xl overflow-hidden">
          <img class="h-full w-full object-cover" width="90" height="90" src="/images/profile.jpg" />
        </div>
        <div class="text-[2.2rem] font-medium">{{ business?.name }}</div>
      </div>
  
      <HeartIcon :size="24" />
    </div>

    <div class="mt-12 text-[1.6rem]">
      <p class="inline text-[#636363] line-clamp-5">
        description  
      </p>
      <button class="font-bold" type="button">Читать</button>
    </div>
  </Section>
  <Separator />
  <Section class="rounded-t-3xl">
    <div class="flex justify-between mb-12">
      <Button>
        <SortIcon :size="30" />
      </Button>
      <Button>
        <FilterIcon :size="24" />
      </Button>
    </div>
    <ProductList :products="[]" />
  </Section>
</template>

<script setup lang="ts">
import HeartIcon from '@/components/icons/HeartIcon.vue'
import ProductList from '@/components/ProductList.vue'
import Button from '@/components/ui/Button.vue'
import SortIcon from '@/components/icons/SortIcon.vue'
import FilterIcon from '@/components/icons/FilterIcon.vue'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'
import { onMounted, ref } from 'vue'
import { Business } from '@/core/entities/Business'
import BusinessService from '@/services/BusinessService'
import { useRouter } from 'vue-router'

const router = useRouter()

const business = ref<Business>()
const props = defineProps<{
  id: string
}>()

onMounted(async () => {
  const data = await BusinessService.getById(props.id)

  if (!data) {
    return router.push({
      name: 'NotFoundPage'
    })
  }

  business.value = data
})
</script>