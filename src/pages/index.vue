<script setup lang="ts">
const activeTab = ref('ALL')

const tabs = ['ALL', 'Website', 'Mobile', 'Case study']

const projects = [
  { id: 1, image: '/images/projects/project-1.png', category: 'Website' },
  { id: 2, image: '/images/projects/project-2.png', category: 'Website' },
  { id: 3, image: '/images/projects/project-3.png', category: 'Mobile' },
  { id: 4, image: '/images/projects/project-4.png', category: 'Website' },
  { id: 5, image: '/images/projects/project-5.png', category: 'Mobile' },
  { id: 6, image: '/images/projects/project-6.png', category: 'Case study' },
  { id: 7, image: '/images/projects/project-7.png', category: 'Website' },
  { id: 8, image: '/images/projects/project-8.png', category: 'Mobile' },
  { id: 9, image: '/images/projects/project-9.png', category: 'Website' },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'ALL') return projects
  return projects.filter(p => p.category === activeTab.value)
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px]">
        <div class="flex flex-col gap-6">
          <!-- Portfolio Title SVG -->
          <img
            src="/images/portfolio-title.svg"
            alt="Portfolio."
            class="hidden lg:block w-[351px] h-[72px]"
          />
          <img
            src="/images/portfolio-title-mobile.svg"
            alt="Portfolio."
            class="lg:hidden w-[312px] h-[64px]"
          />

          <!-- Description -->
          <div class="pt-[17px]">
            <p class="text-base lg:text-lg leading-[1.5] lg:leading-[1.56] text-[#525252]">
              With over 4 years of experience in UX Design, I specialize in creating minimalist, modern, and user-centered experiences. I have worked on enterprise systems, e-commerce products, and Design Systems, with a solid understanding of HTML/CSS and strong collaboration skills with BAs and Developers. I'm always eager to explore new design trends to build intuitive and effective products.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="px-4 lg:px-0">
      <div class="max-w-[1080px] mx-auto py-6 lg:py-[100px] lg:pb-[200px]">
        <div class="flex flex-col gap-6">
          <!-- Title -->
          <h2 class="text-[32px] font-bold leading-[1.25] text-[#2A2A2A]">My Project</h2>

          <!-- Tabs -->
          <div class="flex gap-6">
            <button
              v-for="tab in tabs"
              :key="tab"
              class="h-[44px] flex items-center justify-center text-sm font-medium leading-[1.43] transition-colors"
              :class="activeTab === tab
                ? 'text-[#2A2A2A] border-b-2 border-[#2A2A2A]'
                : 'text-[#7F7F7F]'"
              @click="activeTab = tab"
            >
              {{ tab }}
            </button>
          </div>

          <!-- Project Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div
              v-for="project in filteredProjects"
              :key="project.id"
              class="group relative rounded-[4px] overflow-hidden cursor-pointer"
            >
              <img
                :src="project.image"
                :alt="`Project ${project.id}`"
                class="w-full h-[262px] lg:h-[366px] object-cover"
              />
              <!-- Hover overlay (desktop) -->
              <div class="absolute inset-0 bg-white/84 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:flex flex-col justify-between p-16 pb-10">
                <div class="flex flex-col gap-3">
                  <span class="text-sm text-[#404040]">2023</span>
                  <h3 class="text-[26px] font-semibold leading-[1.54] text-black">Project Name</h3>
                  <p class="text-base leading-[1.5] text-[#404040]">Content</p>
                </div>
                <div class="flex gap-3">
                  <span class="inline-flex items-center justify-center h-6 px-3 bg-[#2A2A2A] rounded-full text-[10px] font-medium text-white">Preview</span>
                  <span class="inline-flex items-center justify-center h-6 px-3 bg-[#2A2A2A] rounded-full text-[10px] font-medium text-white">Link Figma</span>
                  <span class="inline-flex items-center justify-center h-6 px-3 bg-[#2A2A2A]/50 rounded-full text-[10px] font-medium text-white">Case Study</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
