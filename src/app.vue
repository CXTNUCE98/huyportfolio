<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: #FFFFFF;
  color: #333333;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
