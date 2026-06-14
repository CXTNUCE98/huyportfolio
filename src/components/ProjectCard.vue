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
  title: string
  tags?: string[]
  domain?: string
  role?: string
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
      class="absolute inset-0 bg-white/[0.96] opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:flex flex-col gap-10 p-10"
    >
      <div class="flex-1 flex flex-col justify-between w-full">
        <!-- Top Content -->
        <div class="flex flex-col gap-3 items-start w-full">
          <span class="text-sm font-bold text-[#2A2A2A] uppercase">{{ name }}</span>
          <h3 class="text-2xl font-medium text-[#404040] leading-normal">{{ title }}</h3>
          <div v-if="tags?.length" class="flex flex-wrap gap-3">
            <span
              v-for="tag in tags"
              :key="tag"
              class="bg-[#8E8E93]/10 px-3 py-[3px] rounded-[2px] text-xs text-[#525252]"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Bottom Info -->
        <div class="flex gap-6 w-full">
          <div class="flex flex-col gap-1">
            <span class="text-xs font-semibold text-[#404040]">Thời gian</span>
            <span class="text-xs font-light text-[#525252]">{{ year }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-semibold text-[#404040]">Lĩnh vực</span>
            <span class="text-xs font-light text-[#525252]">{{ domain }}</span>
          </div>
          <div class="flex flex-col gap-1">
            <span class="text-xs font-semibold text-[#404040]">Vai trò</span>
            <span class="text-xs font-light text-[#525252]">{{ role }}</span>
          </div>
        </div>
      </div>

      <!-- Actions -->
      <div v-if="actions?.length" class="flex gap-2">
        <button
          v-for="action in actions"
          :key="action.label"
          type="button"
          class="inline-flex items-center justify-center h-8 px-4 rounded-[360px] text-xs font-medium text-white transition-all duration-200 border border-transparent"
          :class="action.active ? 'bg-[#2A2A2A] hover:bg-white hover:text-[#2A2A2A] hover:border-[#2A2A2A]' : 'bg-[#2A2A2A]/50 pointer-events-none'"
          @click.stop="action.active && emit('actionClick', action)"
        >
          {{ action.label }}
        </button>
      </div>
    </div>
  </div>
</template>
