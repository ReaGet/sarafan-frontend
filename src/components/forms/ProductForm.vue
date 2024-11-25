<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
    <Input placeholder="Название товара" :error="isNameError" v-model="productValues.name" />
    <Textarea placeholder="Описание" v-model="productValues.description" :error="isDescError" />
    <Input placeholder="Цена" :error="isNameError" v-model="productValues.price" type="number" />
    <Input placeholder="Скидка" :error="isNameError" v-model="productValues.discount" type="number" />
    <Input placeholder="Количество" :error="isNameError" v-model="productValues.quantity" type="number" />
    <Input placeholder="Цвет" :error="isNameError" v-model="productValues.color" type="number" />
    <Input placeholder="Размер" :error="isNameError" v-model="productValues.size" type="number" />
    <Input placeholder="Высота" :error="isNameError" v-model="productValues.height" type="number" />
    <Input placeholder="Ширина" :error="isNameError" v-model="productValues.width" type="number" />
    <Input placeholder="Длина" :error="isNameError" v-model="productValues.length" type="number" />
    <Input placeholder="Вес" :error="isNameError" v-model="productValues.weight" type="number" />
    <Input placeholder="Единица измерения вес" :error="isNameError" v-model="productValues.weightUnit" />
    <Input placeholder="Единица измерения объема" :error="isNameError" v-model="productValues.volumeUnit" />
    <div v-if="errorText">Error: {{ errorText }}</div>
    <Button
      className="bg-primary hover:bg-primary-hover rounded-xl text-[1.4rem] text-white"
    >{{ submitButton }}</Button>
  </form>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, toRaw, watch } from 'vue'
import { CreateProductDto } from '@/core/repositories/Product/dto/createProductDto'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Textarea from '@/components/ui/Textarea.vue'

type FormFields = Omit<CreateProductDto, 'business'>

const defaultValues = {
  name: '',
  description: '',
  color: 0,
  discount: 0,
  height: 0,
  width: 0,
  length: 0,
  photos: [] as string[],
  price: 0,
  quantity: 0,
  size: '',
  volumeUnit: '',
  weight: 0,
  weightUnit: '',
}

const productValues = reactive<FormFields>(defaultValues)

const props = withDefaults(defineProps<Partial<FormFields> & {
  submitButton: string
}>(), {})

watch(props, () => {
  Object.keys(productValues).forEach((_key) => {
    const key = _key as keyof FormFields
    if (key in productValues && key in props) {
      productValues[key] = props[key]
    }
  })
})

const isFormDirty = ref(false),
  errorText = ref('')

const emits = defineEmits<{
  (e: 'submit', productData: Partial<Omit<CreateProductDto, 'businessId'>>): void
}>()

const handleSubmit = async (_event: Event) => {
  emits('submit', toRaw(productValues))
}

const isNameError = computed(() => {
  return isFormDirty.value && productValues.name.length === 0
})

const isDescError = computed(() => {
  return isFormDirty.value && productValues.description.length === 0
})

</script>
