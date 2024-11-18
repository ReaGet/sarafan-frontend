<template>
  <Separator />
  <Section class="rounded-b-3xl">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
      <input
        :class="cn(
          'w-full h-[40px] px-6 rounded-xl border border-gray-dark placeholder:border-gray-dark text-[1.6rem] outline-none',
          { 'border-red-500': isNameError }
        )"
        placeholder="Название бизнеса"
        v-model="name"
      />
      <textarea
        :class="cn(
          'w-full px-6 py-5 rounded-xl border border-gray-dark placeholder:border-gray-dark text-[1.6rem] outline-none',
          { 'border-red-500': isDescError }
        )"
        rows="6"
        placeholder="Описание"
        v-model="description"
        ></textarea>
      <Button
        className="bg-primary hover:bg-primary-hover rounded-xl text-[1.4rem] text-white"
      >Создать бизнес</Button>
    </form>
  </Section>
  <Separator />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'
import Button from '@/components/ui/Button.vue'
import { cn } from '@/lib/cn'
import BusinessService from '@/services/BusinessService'

const router = useRouter()

const name = ref(''),
  description = ref(''),
  isFormDirty = ref(false),
  isLoading = ref(false)

const handleSubmit = async (_event: Event) => {
  if (!name.value.length || !description.value.length || isLoading.value) {
    return
  }

  isFormDirty.value = true
  isLoading.value = true

  await BusinessService.create({
    name: name.value,
    blocking: false,
    owner: 107324410
  }).then((res) => {
    if ('detail' in res) {
      return console.log('[error]', res.detail)
    }
    router.push({
      name: 'ProfileBusinessPage'
    })
  })
}

const isNameError = computed(() => {
  return isFormDirty.value && name.value.length === 0
})

const isDescError = computed(() => {
  return isFormDirty.value && description.value.length === 0
})


</script>