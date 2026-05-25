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
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="emit('close')"
      >
        <div class="relative bg-white rounded-lg p-6 w-[376px] flex flex-col gap-6">
          <button
            type="button"
            class="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-[#7F7F7F] hover:text-[#2A2A2A]"
            @click="emit('close')"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="flex flex-col gap-4">
            <div class="w-14 h-14 rounded-full bg-[#2A2A2A]/10 flex items-center justify-center">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 10V7C6 3.686 8.686 1 12 1C15.314 1 18 3.686 18 7V10M4 10H20C21.1 10 22 10.9 22 12V25C22 26.1 21.1 27 20 27H4C2.9 27 2 26.1 2 25V12C2 10.9 2.9 10 4 10Z" stroke="#2A2A2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold text-[#2A2A2A]">Enter Password</h3>
              <p class="text-sm text-[#525252]">This project is protected due to confidentiality.</p>
            </div>

            <div class="otp-container flex gap-2" @paste="onPaste">
              <input
                v-for="(digit, index) in digits"
                :key="index"
                type="text"
                inputmode="numeric"
                maxlength="1"
                :value="digit"
                class="w-12 h-14 border rounded-md text-center text-[22px] outline-none transition-colors"
                :class="error ? 'border-[#FF3B30]' : digit ? 'border-[#E0E0E0]' : 'border-[#E0E0E0] focus:border-[#007AFF]'"
                @input="onInput(index, $event)"
                @keydown="onKeydown(index, $event)"
              />
            </div>

            <p v-if="error" class="text-sm text-[#FF3B30]">The password is incorrect. Please try again.</p>
          </div>

          <div class="flex flex-col gap-3">
            <button
              type="button"
              class="w-full h-10 rounded flex items-center justify-center text-sm font-medium transition-colors"
              :class="digits.every(d => d) ? 'bg-[#2A2A2A] text-white' : 'bg-[#2A2A2A]/50 text-white pointer-events-none'"
              @click="emit('confirm')"
            >
              Confirm
            </button>
            <button
              type="button"
              class="w-full h-10 rounded flex items-center justify-center text-sm font-medium bg-[#8E8E93]/10 text-[#404040] hover:bg-[#8E8E93]/20 transition-colors"
            >
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
