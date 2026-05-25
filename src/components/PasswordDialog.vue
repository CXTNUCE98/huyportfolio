<script setup lang="ts">
interface Props {
  show: boolean
  error: boolean
  digits: string[]
}

const props = defineProps<Props>()
const emit = defineEmits<{
  close: []
  confirm: []
  'update:digits': [digits: string[]]
}>()

function onInput(index: number, event: Event) {
  const input = event.target as HTMLInputElement
  const value = input.value.replace(/\D/g, '')
  const newDigits = [...props.digits]
  newDigits[index] = value.slice(-1)
  emit('update:digits', newDigits)

  if (value && index < 5) {
    const inputs = input.closest('.otp-container')?.querySelectorAll('input')
    inputs?.[index + 1]?.focus()
  }
}

function onKeydown(index: number, event: KeyboardEvent) {
  const input = event.target as HTMLInputElement
  if (event.key === 'Backspace' && !input.value && index > 0) {
    const inputs = input.closest('.otp-container')?.querySelectorAll('input')
    inputs?.[index - 1]?.focus()
  }
}

function onPaste(event: ClipboardEvent) {
  event.preventDefault()
  const text = event.clipboardData?.getData('text') || ''
  const chars = text.replace(/\D/g, '').slice(0, 6).split('')
  const newDigits = Array(6).fill('')
  chars.forEach((c, i) => { newDigits[i] = c })
  emit('update:digits', newDigits)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="emit('close')">
        <div class="relative bg-white rounded-lg p-6 w-[376px] flex flex-col gap-6">
          <button type="button"
            class="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#7F7F7F] hover:text-[#2A2A2A]"
            @click="emit('close')">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>

          <div class="flex flex-col gap-4">
            <div class="w-14 h-14 rounded-full bg-[#2A2A2A]/10 flex items-center justify-center">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28Z"
                  fill="#2A2A2A" fill-opacity="0.1" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M35.5171 21.7335V23.8205C37.8615 24.5523 39.5696 26.6745 39.5696 29.2092V35.9289C39.5696 39.0669 36.968 41.6111 33.7606 41.6111H22.241C19.0322 41.6111 16.4307 39.0669 16.4307 35.9289V29.2092C16.4307 26.6745 18.1401 24.5523 20.4831 23.8205V21.7335C20.4969 17.6757 23.8578 14.3889 27.9794 14.3889C32.1563 14.3889 35.5171 17.6757 35.5171 21.7335ZM28.007 16.7559C30.8147 16.7559 33.0967 18.9877 33.0967 21.7335V23.527H22.9035V21.7064C22.9173 18.9742 25.1994 16.7559 28.007 16.7559ZM29.2103 34.0637C29.2103 34.7265 28.6709 35.254 27.9932 35.254C27.3293 35.254 26.7899 34.7265 26.7899 34.0637V31.0609C26.7899 30.4117 27.3293 29.8842 27.9932 29.8842C28.6709 29.8842 29.2103 30.4117 29.2103 31.0609V34.0637Z"
                  fill="#2A2A2A" />
              </svg>

            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-[#2A2A2A]">Enter Password</h3>
              <p class="text-sm text-[#525252]">This project is protected due to confidentiality.</p>
            </div>

            <div class="otp-container flex gap-2" @paste="onPaste">
              <input v-for="(digit, index) in digits" :key="index" type="text" inputmode="numeric" maxlength="1"
                :value="digit"
                class="w-12 h-14 border rounded-md text-center text-[22px] outline-none transition-colors"
                :class="error ? 'border-[#FF3B30]' : digit ? 'border-[#E0E0E0]' : 'border-[#E0E0E0] focus:border-[#007AFF]'"
                @input="onInput(index, $event)" @keydown="onKeydown(index, $event)" />
            </div>

            <p v-if="error" class="text-sm text-[#FF3B30]">The password is incorrect. Please try again.</p>
          </div>

          <div class="flex flex-col gap-3">
            <button type="button"
              class="w-full h-10 rounded flex items-center justify-center text-sm font-medium transition-colors"
              :class="digits.every(d => d) ? 'bg-[#2A2A2A] text-white' : 'bg-[#2A2A2A]/50 text-white pointer-events-none'"
              @click="emit('confirm')">
              Confirm
            </button>
            <button type="button"
              class="w-full h-10 rounded flex items-center justify-center text-sm font-medium bg-[#8E8E93]/10 text-[#404040] hover:bg-[#8E8E93]/20 transition-colors">
              Get Password
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
