<script setup lang="ts">
const route = useRoute()
const showMobileMenu = ref(false)

const navItems = [
  { label: 'Portfolio', href: '/' },
  { label: 'About', href: '/about' },
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full bg-[#111111]">
    <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-3 lg:py-4 flex items-center justify-between">
      <a href="/" class="block w-10 h-10 lg:w-12 lg:h-12">
        <img src="/images/logo.svg" alt="Hyu Logo" class="w-full h-full" />
      </a>

      <nav class="hidden lg:flex items-center">
        <ul class="flex gap-4">
          <li v-for="item in navItems" :key="item.label">
            <NuxtLink
              :to="item.href"
              class="px-4 text-base leading-6 text-center transition-colors"
              :class="route.path === item.href ? 'text-[#7F7F7F]' : 'text-white'"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <button
        class="lg:hidden w-10 h-10 flex items-center justify-center"
        aria-label="Toggle menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0" width="32" height="3" rx="1.5" fill="white"/>
          <rect y="11.5" width="32" height="3" rx="1.5" fill="white"/>
          <rect y="23" width="32" height="3" rx="1.5" fill="white"/>
        </svg>
      </button>
    </div>

    <div
      class="lg:hidden bg-[#111111] overflow-hidden transition-all duration-300 ease-in-out"
      :style="{
        maxHeight: showMobileMenu ? '300px' : '0px',
        opacity: showMobileMenu ? 1 : 0,
        borderTop: showMobileMenu ? '1px solid #333' : 'none'
      }"
    >
      <div class="px-4 pb-4">
        <NuxtLink
          v-for="item in navItems"
          :key="item.label"
          :to="item.href"
          class="block py-3 text-lg text-white transition-transform duration-300"
          :style="{ transform: showMobileMenu ? 'translateY(0)' : 'translateY(-8px)' }"
          @click="showMobileMenu = false"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </div>
  </header>
</template>
