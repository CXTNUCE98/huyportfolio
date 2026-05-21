<script setup lang="ts">
interface ProjectAction {
  label: string
  active: boolean
}

interface Project {
  id: number
  image: string
  category: string
  year: string
  name: string
  description: string
  actions: ProjectAction[]
}

const activeTab = ref('ALL')

const tabs = ['ALL', 'WEBSITE', 'MOBILE APP', 'CASE STUDY']

const projects: Project[] = [
  {
    id: 1,
    image: '/images/projects/project-1.png',
    category: 'WEBSITE',
    year: '2026',
    name: 'SHB Finance redesign',
    description: 'Coming soon...',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: false },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 2,
    image: '/images/projects/project-2.png',
    category: 'CASE STUDY',
    year: '2025',
    name: 'Sendo Farm',
    description: 'Solving business challenges, addressing user problems, and building habit-forming strategies.',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: false },
      { label: 'Case Study', active: true },
    ],
  },
  {
    id: 3,
    image: '/images/projects/project-3.png',
    category: 'CASE STUDY',
    year: '2024',
    name: 'Quizlet',
    description: 'Helping busy learners review and retain knowledge effectively based on their personal needs.',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: false },
      { label: 'Case Study', active: true },
    ],
  },
  {
    id: 4,
    image: '/images/projects/project-4.png',
    category: 'WEBSITE',
    year: '2024',
    name: 'Innovator Academy',
    description: 'Online learning platform designed to deliver an intuitive and engaging educational experience.',
    actions: [
      { label: 'Preview', active: true },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 5,
    image: '/images/projects/project-5.png',
    category: 'WEBSITE',
    year: '2023',
    name: 'eHighway',
    description: 'E-commerce theme management platform designed for entrepreneurs selling to international markets',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 6,
    image: '/images/projects/project-6.png',
    category: 'MOBILE APP',
    year: '2022',
    name: 'Vietjet Mobile App',
    description: 'In-flight food ordering app for Vietjet focused on intuitive interaction and seamless passenger experience',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 7,
    image: '/images/projects/project-7.png',
    category: 'MOBILE APP',
    year: '2022',
    name: 'Spo Mobile App',
    description: 'Internal mobile application for FPT employees focused on usability and workflow efficiency',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 8,
    image: '/images/projects/project-8.png',
    category: 'MOBILE APP',
    year: '2022',
    name: 'VnPost Mobile App',
    description: 'Mobile app design for VNPost focused on intuitive interaction and seamless user experience',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 9,
    image: '/images/projects/project-9.png',
    category: 'WEBSITE',
    year: '2022',
    name: 'eTradevn',
    description: 'Focusing on user experience, clear information architecture, and a modern interface system.',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 10,
    image: '/images/projects/project-10.png',
    category: 'WEBSITE',
    year: '2021',
    name: 'Chronos Website',
    description: 'Website project for a watch and jewelry brand featuring a minimalist, modern, and aesthetically refined design.',
    actions: [
      { label: 'Preview', active: false },
      { label: 'Link Figma', active: true },
      { label: 'Case Study', active: false },
    ],
  },
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
      <div class="max-w-[1080px] mx-auto py-6 pb-16 lg:py-[100px] lg:pb-[200px]">
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
                :alt="project.name"
                class="w-full h-[262px] lg:h-[366px] object-cover"
              />
              <!-- Hover overlay (desktop) -->
              <div class="absolute inset-0 bg-white/84 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden lg:flex flex-col justify-between p-16 pb-10">
                <div class="flex flex-col gap-3">
                  <span class="text-sm leading-[1.43] text-[#404040]">{{ project.year }}</span>
                  <h3 class="text-[26px] font-semibold leading-[1.54] text-black">{{ project.name }}</h3>
                  <p class="text-base leading-[1.5] text-[#404040]">{{ project.description }}</p>
                </div>
                <div class="flex gap-2">
                  <span
                    v-for="action in project.actions"
                    :key="action.label"
                    class="inline-flex items-center justify-center h-8 px-4 rounded-full text-xs font-medium text-white"
                    :class="action.active ? 'bg-[#2A2A2A]' : 'bg-[#2A2A2A]/50'"
                  >
                    {{ action.label }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
