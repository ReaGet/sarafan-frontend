<template>
  <Section class="rounded-b-3xl">
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-4">
        <div class="w-[44px] h-[44px] rounded-xl overflow-hidden">
          <img class="h-full w-full object-cover" width="44" height="44" src="/images/profile.jpg" />
        </div>
        <div class="text-[1.6rem] font-medium">Hugoboss</div>
      </div>
  
      <ArrowIcon :size="24" className="text-gray-dark" />
    </div>

    <div class="grid grid-cols-3 gap-6 mt-10 text-gray-dark">
      <div
        v-for="feature in featuresInfo"
        :key="feature.title"
        class="flex flex-col p-6 bg-gray rounded-xl"
      >
        <component :is="feature.icon" />
        <div class="mt-4 text-[1.6rem] text-black font-bold">{{ feature.title }}</div>
        <div class="text-[1.4rem]">{{ feature.count }}</div>
      </div>
    </div>
  </Section>
  <Separator className="h-8" />
  <Section class="pt-2 rounded-t-3xl">
    <nav class="text-[1.4rem] divide-y divide-gray">
      <RouterLink
        v-for="item in profileNavigation"
        class="flex justify-between items-center h-16"
        :key="item.title"
        :to="item.to"
      >
        <div class="flex items-center gap-4">
          {{ item.title }}
          <div
            v-if="item.count !== undefined"
            class="px-4 py-2 text-gray-dark bg-gray rounded-xl font-medium"
          >{{ item.count }}</div>
        </div>

        <ArrowIcon className="text-gray-dark" />
      </RouterLink>
    </nav>
  </Section>
</template>

<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue'
import ReferalsIcon from '@/components/icons/ReferalsIcon.vue'
import HeartFilledIcon from '@/components/icons/HeartFilledIcon.vue'
import PurchaseIcon from '@/components/icons/PurchaseIcon.vue'
import Section from '@/components/ui/Section.vue'
import Separator from '@/components/ui/Separator.vue'

type ToParam = {
  name: string
}

type ProfileLink = {
  title: string
  to: ToParam
  count?: number
}

const getToParam = (pageName: string): ToParam => ({
  name: pageName
})

const profileNavigation: ProfileLink[] = [
  { title: 'Личная информация', to: getToParam('HomePage'), },
  { title: 'Бизнесы', to: getToParam('ProfileBusinessPage'), count: 2 },
  { title: 'Реферальная система', to: getToParam('HomePage'), },
  { title: 'Избранное', to: getToParam('HomePage'), count: 16 },
  { title: 'Покупки', to: getToParam('HomePage'), count: 32 },
  { title: 'Отзывы', to: getToParam('HomePage'), },
  { title: 'Настройки', to: getToParam('HomePage'), },
]

const featuresInfo = [
  { title: 'Рефералы', icon: ReferalsIcon, to: '/', count: '7 рефералов' },
  { title: 'Избранное', icon: HeartFilledIcon, to: '/', count: '16 товаров' },
  { title: 'Покупки', icon: PurchaseIcon, to: '/', count: '32 покупки' },
]
</script>