<template>
  <Separator />
  <Section className="rounded-b-3xl">
    <ProductForm @submit="handleSubmit" submitButton="Сохранить" v-bind="productValues" />
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
import { onMounted, reactive, ref } from 'vue'
import { Product } from '@/core/entities/Product'

const isLoading = ref(false)

const router = useRouter()
const props = defineProps<{
  productId: string
  businessId: string
}>()

let productValues = ref<Product|null>()

onMounted(() => {
  ProductService.getById(props.productId).then((data) => {
    console.log(data)
    productValues.value = data
  })
})

const handleSubmit = (productData: any) => {
  if (isLoading.value) return

  isLoading.value = true

  ProductService.update(props.productId, {
    ...productData,
    business: props.businessId
  }).then((res) => {
    // FIXME: сделать обработку ошибок
    console.log('[updateProduct]:', res)
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