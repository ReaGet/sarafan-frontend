<template>
  <Section class="rounded-b-3xl">
    <div class="flex justify-between items-center">
      <h2 class="text-[2rem] font-bold">Бизнесы</h2>
      <Button class="h-auto py-2 text-[1.4rem] rounded-xl">
        <PlusIcon className="mr-2" :size="16" />
        Добавить
      </Button>
    </div>

    <RouterLink
      v-for="business in businesses"
      :key="business.id"
      to="/"
      class="flex flex-col mt-12"
    >
      <div class="flex items-center">
        <div class="w-[48px] h-[48px] rounded-xl overflow-hidden">
          <img class="w-full h-full object-cover" src="/images/profile.jpg" alt="" width="48" height="48">
        </div>
        <span class="ml-6 text-[1.6rem]">{{ business.name }}</span>
        <ArrowIcon className="ml-auto text-gray-dark" />
      </div>
    </RouterLink>
  </Section>
  <Separator />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Section from '../../components/Section.vue'
import Button from '../../components/ui/Button.vue'
import PlusIcon from '../../components/icons/PlusIcon.vue'
import ArrowIcon from '../../components/icons/ArrowIcon.vue'
import Separator from '../../components/Separator.vue'
import { Business } from '../../core/entities/Business'
import BusinessService from '../../services/BusinessService'

const businesses = ref<Business[]>([])

onMounted(async () => {
  businesses.value = (await BusinessService.getAll()).results
})

</script>