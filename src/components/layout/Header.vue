<script setup lang="ts">
const showMobileMenu = ref(false)

const navItems = [
  { label: 'Portfolio', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Learn', href: '#' },
  { label: 'Contact', href: '#' },
]
</script>

<template>
  <header class="w-full bg-[#111111]">
    <div class="max-w-[1080px] mx-auto px-4 lg:px-0 flex items-center justify-between h-[80px]">
      <!-- Logo -->
      <a href="/" class="block w-12 h-12">
        <img src="/images/logo.svg" alt="Hyu Logo" class="w-12 h-12" />
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center">
        <ul class="flex">
          <li v-for="item in navItems" :key="item.label">
            <a
              :href="item.href"
              class="px-[18px] text-lg leading-[1.56] text-center transition-colors"
              :class="item.label === 'Portfolio' ? 'text-[#7F7F7F]' : 'text-white'"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="lg:hidden w-12 h-12 flex items-center justify-center"
        aria-label="Toggle menu"
        @click="showMobileMenu = !showMobileMenu"
      >
        <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0" width="23" height="3" rx="1.5" fill="white"/>
          <rect y="8" width="23" height="3" rx="1.5" fill="white"/>
          <rect y="16" width="23" height="3" rx="1.5" fill="white"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="lg:hidden bg-[#111111] overflow-hidden transition-all duration-300 ease-in-out"
      :style="{
        maxHeight: showMobileMenu ? '300px' : '0px',
        opacity: showMobileMenu ? 1 : 0,
        borderTop: showMobileMenu ? '1px solid #333' : 'none'
      }"
    >
      <div class="px-4 pb-4">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="block py-3 text-lg text-white transition-transform duration-300"
          :style="{ transform: showMobileMenu ? 'translateY(0)' : 'translateY(-8px)' }"
          @click="showMobileMenu = false"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </header>
</template>
