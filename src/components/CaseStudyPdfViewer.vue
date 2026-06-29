<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

interface Props {
  show: boolean
  pdfUrl: string | string[]
}

const props = defineProps<Props>()
const emit = defineEmits<{ close: [] }>()

const isLoading = ref(true)
const contentRef = ref<HTMLElement | null>(null)
const renderWidth = ref(1200)

let loadedCount = 0

function updateWidth() {
  if (contentRef.value) {
    // Render at the actual pixel width of the container so the canvas stays sharp
    renderWidth.value = Math.round(contentRef.value.clientWidth)
  }
}

function handleLoaded() {
  if (Array.isArray(props.pdfUrl)) {
    loadedCount++
    if (loadedCount >= props.pdfUrl.length) {
      isLoading.value = false
    }
  } else {
    isLoading.value = false
  }
}

watch(() => props.show, (val) => {
  if (val) {
    isLoading.value = true
    loadedCount = 0
    document.body.style.overflow = 'hidden'
    nextTick(updateWidth)
  } else {
    document.body.style.overflow = ''
  }
})

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.addEventListener('resize', updateWidth)
  updateWidth()
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.removeEventListener('resize', updateWidth)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
      enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div v-if="show" class="fixed inset-0 z-[60] bg-black/70 overflow-y-auto">
        <!-- Close button fixed top right -->
        <button
          class="fixed top-5 right-6 z-[70] w-8 h-8 flex items-center justify-center text-white/80 hover:text-white transition-colors"
          aria-label="Close"
          @click="emit('close')"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L16 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            <path d="M16 4L4 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
        </button>

        <!-- Loading indicator -->
        <div v-if="isLoading" class="flex items-center justify-center py-20">
          <div class="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>

        <!-- PDF content centered -->
        <div ref="contentRef" class="max-w-[1200px] mx-auto pt-[60px] pb-10">
          <ClientOnly>
            <template v-if="Array.isArray(pdfUrl)">
              <VuePdfEmbed
                v-for="(url, index) in pdfUrl"
                :key="index"
                :source="url"
                :width="renderWidth"
                class="pdf-pages"
                @loaded="handleLoaded"
              />
            </template>
            <template v-else>
              <VuePdfEmbed
                :source="pdfUrl"
                :width="renderWidth"
                class="pdf-pages"
                @loaded="handleLoaded"
              />
            </template>
          </ClientOnly>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.pdf-pages :deep(canvas) {
  display: block;
  width: 100% !important;
  height: auto !important;
}

.pdf-pages :deep(.vue-pdf-embed__page) {
  margin-bottom: 0;
}
</style>
