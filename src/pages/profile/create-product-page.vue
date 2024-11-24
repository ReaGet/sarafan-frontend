<template>
  <Separator />
  <Section class="rounded-b-3xl">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <Input placeholder="Название товара" :error="isNameError" v-model="name" />
      <Textarea placeholder="Описание" v-model="description" :error="isDescError" />
      <div v-if="errorText">Error: {{ errorText }}</div>
      <Button
        className="bg-primary hover:bg-primary-hover rounded-xl text-[1.4rem] text-white"
      >Создать бизнес</Button>
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
import BusinessService from '@/services/BusinessService'
import { useTelegram } from '@/hooks/useTelegram'

const router = useRouter()
const props = defineProps<{
  businessId: string
}>()

const { tg } = useTelegram()

const name = ref(''),
  description = ref(''),
  isFormDirty = ref(false),
  isLoading = ref(false),
  errorText = ref('')

const handleSubmit = async (_event: Event) => {
  if (!name.value.length || !description.value.length || isLoading.value) {
    return
  }

  isFormDirty.value = true
  isLoading.value = true

  await BusinessService.create({
    name: name.value,
    blocking: false,
    owner: tg.initDataUnsafe?.user?.id || 107324410
  }).then((res) => {
    if ('detail' in res) {
      errorText.value = res.detail as string
      return console.log('[error]', res.detail)
    }
    router.push({
      name: 'ProfileBusinessPage'
    })
    errorText.value = ''
  })
}

const isNameError = computed(() => {
  return isFormDirty.value && name.value.length === 0
})

const isDescError = computed(() => {
  return isFormDirty.value && description.value.length === 0
})


</script>