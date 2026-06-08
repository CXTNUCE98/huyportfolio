<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative bg-[#F5F5F5]" style="box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)">
    <div
      class="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[118px] h-[90px] flex flex-col items-center cursor-pointer"
      @click="scrollToTop">
      <img src="/images/back-to-top-bg-5ac316.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
    </div>

    <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-6 lg:py-0 lg:h-[90px] lg:flex lg:items-center">
      <div class="hidden lg:flex items-center justify-between w-full">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
        <div class="flex items-center gap-6">
          <span class="text-sm text-[#7F7F7F]">Dangquochuy2406@gmail.com</span>
          <span class="text-sm text-[#7F7F7F]">0347.000.678</span>
        </div>
      </div>

      <div class="lg:hidden">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
      </div>
    </div>
  </footer>
</template>
