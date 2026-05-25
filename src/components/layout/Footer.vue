<script setup lang="ts">
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative bg-[#F5F5F5]" style="box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.1)">
    <div
      class="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[118px] h-[90px] flex flex-col items-center cursor-pointer"
      @click="scrollToTop"
    >
      <img src="/images/back-to-top-bg-5ac316.png" alt="" class="absolute inset-0 w-full h-full object-cover" />
      <span class="relative text-[15.6px] text-[#757575] mt-auto mb-4">Back to top</span>
    </div>

    <div class="max-w-[1080px] mx-auto px-4 lg:px-0 pt-10 lg:pt-10 pb-6 lg:pb-10">
      <div class="hidden lg:flex items-center justify-between">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
        <div class="flex items-center gap-6">
          <a href="mailto:Dangquochuy2406@gmail.com" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">Dangquochuy2406@gmail.com</a>
          <a href="tel:0347000678" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">0347.000.678</a>
          <a href="#" class="text-sm text-[#7F7F7F] hover:text-[#333] transition-colors">Facebook</a>
        </div>
      </div>

      <div class="lg:hidden flex flex-col gap-6">
        <p class="text-sm text-[#7F7F7F]">&copy; 2026 Portfolio's Hyu</p>
      </div>
    </div>
  </footer>
</template>
