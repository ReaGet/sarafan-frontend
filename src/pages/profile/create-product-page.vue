<template>
  <Separator />
  <Section class="rounded-b-3xl">
    <ProductForm @submit="handleSubmit" submitButton="Создать товар" />
  </Section>
  <Separator />
  <Separator />
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'
import ProductForm from '@/components/forms/ProductForm.vue'
import ProductService from '@/services/ProductService'
import { ref } from 'vue'

const isLoading = ref(false)

const router = useRouter()
const props = defineProps<{
  businessId: string
}>()

const handleSubmit = (productData: any) => {
  if (isLoading.value) return

  isLoading.value = true

  ProductService.create({
    ...productData,
    business: props.businessId
  }).then((res) => {
    // FIXME: сделать обработку ошибок
    console.log('[createProduct]:', res)
    router.push({
      name: 'ProfileBusinessPage'
    })
  }).catch((e) => {
    console.log(123, e)
  }).finally(() => {
    isLoading.value = false
  })
}

</script>