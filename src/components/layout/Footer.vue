<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative bg-[#F5F5F5]" style="box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)">
    <!-- Back to top button -->
    <div
      class="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[118px] h-[90px] flex flex-col items-center cursor-pointer"
      @click="scrollToTop">
      <img src="/images/back-to-top-bg-5ac316.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
      <span class="relative text-[15.6px] opacity-0 hover:opacity-100 text-[#757575] mt-auto mb-4">Back to top</span>
    </div>

    <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-10">
      <!-- Desktop -->
      <div class="hidden lg:flex items-center justify-between">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">About</a>
          <a href="#" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">Learn</a>
          <a href="#" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">Portfolio</a>
          <a href="#" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">Contact</a>
        </div>
      </div>

      <!-- Mobile -->
      <div class="lg:hidden flex flex-col items-center">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
      </div>
    </div>
  </footer>
</template>
