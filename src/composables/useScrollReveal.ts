import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = ref<IntersectionObserver | null>(null)
  const mutationObserver = ref<MutationObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    )

    const observeElements = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.revealed)')
      elements.forEach((el) => {
        observer.value?.observe(el)
      })
    }

    observeElements()

    mutationObserver.value = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.value.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
    mutationObserver.value?.disconnect()
  })
}
