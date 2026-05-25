<script setup lang="ts">
export interface ProjectAction {
  label: string
  href?: string
  link?: string
  active?: boolean
}

interface Props {
  image: string
  year: string
  name: string
  description: string
  actions?: ProjectAction[]
}

defineProps<Props>()
const emit = defineEmits<{ actionClick: [action: ProjectAction] }>()
</script>

<template>
  <div class="group relative rounded-[4px] overflow-hidden cursor-pointer">
    <img
      :src="image"
      :alt="name"
      class="w-full h-[262px] lg:h-[366px] object-cover"
    />

    <div
      class="absolute inset-0 bg-white/84 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:flex flex-col justify-between p-16 pb-10"
    >
      <div class="flex flex-col gap-3">
        <span class="text-sm leading-[1.43] text-[#404040]">{{ year }}</span>
        <h3 class="text-[26px] font-semibold leading-[1.54] text-black">{{ name }}</h3>
        <p class="text-base leading-[1.5] text-[#404040]">{{ description }}</p>
      </div>

      <div v-if="actions?.length" class="flex gap-2">
        <button
          v-for="action in actions"
          :key="action.label"
          type="button"
          class="inline-flex items-center justify-center h-8 px-4 rounded-full text-xs font-medium text-white transition-colors"
          :class="action.active ? 'bg-[#2A2A2A] hover:bg-white hover:text-[#2A2A2A]' : 'bg-[#2A2A2A]/50 pointer-events-none'"
          @click.stop="action.active && emit('actionClick', action)"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
  </div>
</template>
