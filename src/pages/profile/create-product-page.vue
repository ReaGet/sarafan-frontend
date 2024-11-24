<template>
  <Separator />
  <Section class="rounded-b-3xl">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <Input placeholder="Название товара" :error="isNameError" v-model="name" />
      <Textarea placeholder="Описание" v-model="description" :error="isDescError" />
      <Input placeholder="Цена" :error="isNameError" v-model="price" type="number" />
      <Input placeholder="Скидка" :error="isNameError" v-model="discount" type="number" />
      <Input placeholder="Количество" :error="isNameError" v-model="quantity" type="number" />
      <Input placeholder="Цвет" :error="isNameError" v-model="color" type="number" />
      <Input placeholder="Размер" :error="isNameError" v-model="size" type="number" />
      <Input placeholder="Высота" :error="isNameError" v-model="height" type="number" />
      <Input placeholder="Ширина" :error="isNameError" v-model="width" type="number" />
      <Input placeholder="Длина" :error="isNameError" v-model="length" type="number" />
      <Input placeholder="Вес" :error="isNameError" v-model="weight" type="number" />
      <Input placeholder="Единица измерения вес" :error="isNameError" v-model="weightUnit" />
      <Input placeholder="Единица измерения объема" :error="isNameError" v-model="volumeUnit" />
      <div v-if="errorText">Error: {{ errorText }}</div>
      <Button
        className="bg-primary hover:bg-primary-hover rounded-xl text-[1.4rem] text-white"
      >Создать товар</Button>
    </form>
  </Section>
  <Separator />
  <Separator />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'
import ProductService from '@/services/ProductService'
import { CreateProductDto } from '@/core/repositories/Product/dto/createProductDto'

const router = useRouter()
const props = defineProps<{
  businessId: string
}>()

const name = ref(''),
  description = ref(''),
  color = ref(''),
  discount = ref(''),
  height = ref(''),
  length = ref(''),
  width = ref(''),
  quantity = ref(''),
  size = ref(''),
  price = ref(''),
  volumeUnit = ref(''),
  weight = ref(''),
  weightUnit = ref(''),
  isFormDirty = ref(false),
  isLoading = ref(false),
  errorText = ref('')

const handleSubmit = async (_event: Event) => {
  if (!name.value.length || !description.value.length || isLoading.value) {
    return
  }

  isFormDirty.value = true
  isLoading.value = true

  await ProductService.create(createDto()).then((res) => {
    if ('detail' in res) {
      errorText.value = res.detail as string
      return console.log('[error]', res.detail)
    }
    // router.push({
    //   name: 'ProfileBusinessPage'
    // })
    errorText.value = ''
  })
}

const createDto = (): CreateProductDto => ({
  business: props.businessId,
  name: name.value,
  description: description.value,
  color: color.value,
  discount: discount.value,
  height: height.value,
  width: width.value,
  length: length.value,
  photos: [],
  price: price.value,
  quantity: quantity.value,
  size: size.value,
  volume_unit: volumeUnit.value,
  weight: weight.value,
  weight_unit: weightUnit.value
})

const isNameError = computed(() => {
  return isFormDirty.value && name.value.length === 0
})

const isDescError = computed(() => {
  return isFormDirty.value && description.value.length === 0
})


</script>