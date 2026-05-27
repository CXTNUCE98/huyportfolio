<script setup lang="ts">
interface ProjectAction {
  label: string
  href?: string
  link?: string
  active?: boolean
}

interface Project {
  id: number
  image: string
  category: string
  year: string
  name: string
  description: string
  actions: ProjectAction[]
  passwordProtected?: boolean
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
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: '', active: false },
      { label: 'Case Study', link: 'https://uxfoundation.vn/case-study/sendo-farm-brings-produce-from-the-farm-to-your-kitchen', active: true },
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
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: '', active: false },
      { label: 'Case Study', link: 'https://www.figma.com/deck/2cJs9MSkmBu9PPccSZtnTQ/Team-3-H2Q?node-id=97-473&viewport=-240%2C-215%2C1.07&t=6XFB5tNNDtPWkuzE-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', active: true },
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
      { label: 'Preview', link: '', active: true },
      { label: 'Link Figma', link: 'https://www.figma.com/design/weBC3oa7sb5qZHAzm1SQ9i/Innovator-Website-Ver-Final?node-id=48978-46043&t=kffqsFJ5gMYYFBPJ-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 5,
    image: '/images/projects/project-10.png',
    category: 'MOBILE APP ',
    year: '2024',
    name: 'CHRM',
    description: 'An internal employee app for payroll management, leave requests, holiday gift registration, and company retreat booking...',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/CHRM-placeholder', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
    passwordProtected: true,
  },
  {
    id: 6,
    image: '/images/projects/project-6.png',
    category: 'WEBSITE',
    year: '2024',
    name: 'Bdesign',
    description: 'A fashion brand website for showcasing and selling women\'s clothing collections with a modern and elegant shopping experience.',
    actions: [
      { label: 'Preview', link: 'https://bapwdesign.vercel.app/', active: true },
      { label: 'Link Figma', link: 'https://www.figma.com/design/mBQAH7ltUWCzJlEtIH86g3/B-Design-Demo?node-id=1-5&t=DFSxbMeWdxOV10E2-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 7,
    image: '/images/projects/project-7.png',
    category: 'MOBILE APP',
    year: '2024',
    name: 'Super App AIO',
    description: 'Internal mobile application for FPT employees focused on usability and workflow efficiency',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/eJN6IGcYzRIgSxJDXBdOBp/Spro-mobile--GD-?node-id=0-1&t=Mf43NkLy9Yfa2N2D-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },

  {
    id: 8,
    image: '/images/projects/project-12.png',
    category: 'MOBILE APP',
    year: '2024',
    name: 'Super App AIO',
    description: 'An all-in-one platform for shopping electronics, home appliances, smart home devices, and home maintenance services in a single app.',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: '', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
    passwordProtected: true,
  },
  {
    id: 9,
    image: '/images/projects/project-5.png',
    category: 'WEBSITE',
    year: '2023',
    name: 'eHighway',
    description: 'E-commerce theme management platform designed for entrepreneurs selling to international markets',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/5AioPT6MCFF3KaUQ052lfL/eHighway?node-id=4703-96208&t=8i7x7K8R9OVFMIrr-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 10,
    image: '/images/projects/project-8.png',
    category: 'MOBILE APP',
    year: '2022',
    name: 'VnPost Mobile App',
    description: 'Mobile app design for VNPost focused on intuitive interaction and seamless user experience',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/V6ge9uIppJokY9zDR27SYn/VNPost--Portfolio-?node-id=0-1&t=RR6ybVM3Gj3t81A4-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 11,
    image: '/images/projects/project-11.png',
    category: 'MOBILE APP',
    year: '2022',
    name: 'Vietjet Mobile App',
    description: 'In-flight food ordering app for Vietjet focused on intuitive interaction and seamless passenger experience',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/hN4MJQSDTYD2bJosQr5kB5/Vietjet-Air--Public-?node-id=17639-391811&t=lJh0nHCMk5DpXC8U-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 12,
    image: '/images/projects/project-9.png',
    category: 'WEBSITE',
    year: '2022',
    name: 'eTradevn',
    description: 'Focusing on user experience, clear information architecture, and a modern interface system.',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/NLa8Obya1wEErhmQVa9M2B/LC-Website--Public-?node-id=2339-36467&t=eZidVVPSYbniVeEH-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 13,
    image: '/images/projects/project-13.png',
    category: 'WEBSITE',
    year: '2021',
    name: 'Chronos Website',
    description: 'Website project for a watch and jewelry brand featuring a minimalist, modern, and aesthetically refined design.',
    actions: [
      { label: 'Preview', link: '', active: false },
      { label: 'Link Figma', link: 'https://www.figma.com/design/8vD20IwQAfpFQmo9n6N2uG/Web-Chronos?node-id=101-2&t=AWqPisXgMe0uuJqJ-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 14,
    image: '/images/projects/project-14.png',
    category: 'WEBSITE',
    year: '2026',
    name: 'Evo Gaming',
    description: 'A gaming e-commerce platform for buying discounted games, game accounts, and digital gaming products.',
    actions: [
      { label: 'Preview', link: 'https://evo-gaming.vercel.app/', active: true },
      { label: 'Link Figma', link: 'https://www.figma.com/design/hvuozAjzZ0v8HVLS6QxGIo/Evo-Gaming-Demo?node-id=33-101&t=G1AhM0uBowH0vsjk-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },

]

const filteredProjects = computed(() => {
  if (activeTab.value === 'ALL') return projects
  return projects.filter(p => p.category === activeTab.value)
})

const showPasswordDialog = ref(false)
const passwordDigits = ref(['', '', '', '', '', ''])
const passwordError = ref(false)
const pendingAction = ref<{ href: string } | null>(null)

const PASSWORD = '240206'

function handleActionClick(project: Project, action: ProjectAction) {
  if (!action.active) return
  if (project.passwordProtected) {
    pendingAction.value = { href: action.link || '' }
    passwordDigits.value = ['', '', '', '', '', '']
    passwordError.value = false
    showPasswordDialog.value = true
  } else {
    if (!action.link) return
    window.open(action.link, '_blank')
  }
}


function confirmPassword() {
  const entered = passwordDigits.value.join('')
  console.log('confirmPassword called, entered:', entered, 'pending:', pendingAction.value)
  if (entered === PASSWORD) {
    const href = pendingAction.value?.href
    console.log('Password correct, href:', href)
    showPasswordDialog.value = false
    pendingAction.value = null
    if (href) {
      console.log('Opening:', href)
      const w = window.open(href, '_blank')
      if (!w) {
        window.location.href = href
      }
    }
  } else {
    passwordError.value = true
  }
}

function closePasswordDialog() {
  showPasswordDialog.value = false
  pendingAction.value = null
}

useScrollReveal()
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px]">
        <div class="flex flex-col gap-6 scroll-reveal">
          <!-- Portfolio Title SVG -->
          <img src="/images/portfolio-title.svg" alt="Portfolio." class="hidden lg:block w-[351px] h-[72px]" />
          <img src="/images/portfolio-title-mobile.svg" alt="Portfolio." class="lg:hidden w-[312px] h-[64px]" />

          <!-- Description -->
          <div class="pt-[17px]">
            <p class="text-base lg:text-lg leading-[1.5] lg:leading-[1.56] text-[#525252]">
              With over 4 years of experience in UX Design, I specialize in creating minimalist, modern, and
              user-centered experiences. I have worked on enterprise systems, e-commerce products, and Design Systems,
              with a solid understanding of HTML/CSS and strong collaboration skills with BAs and Developers. I'm always
              eager to explore new design trends to build intuitive and effective products.
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
          <h2 class="text-[32px] font-bold leading-[1.25] text-[#2A2A2A] scroll-reveal">My Project</h2>

          <!-- Tabs -->
          <div class="flex gap-6 scroll-reveal" style="transition-delay: 100ms">
            <button v-for="tab in tabs" :key="tab"
              class="h-[44px] flex items-center justify-center text-sm font-medium leading-[1.43] transition-colors"
              :class="activeTab === tab
                ? 'text-[#2A2A2A] border-b-2 border-[#2A2A2A]'
                : 'text-[#7F7F7F]'" @click="activeTab = tab">
              {{ tab }}
            </button>
          </div>

          <!-- Project Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="(project, index) in filteredProjects" :key="project.id" class="scroll-reveal"
              :style="{ transitionDelay: `${index * 100}ms` }">
              <ProjectCard :image="project.image" :year="project.year" :name="project.name"
                :description="project.description" :actions="project.actions"
                @action-click="handleActionClick(project, $event)" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <PasswordDialog :show="showPasswordDialog" :error="passwordError" :digits="passwordDigits"
      @close="closePasswordDialog" @confirm="confirmPassword" @update:digits="passwordDigits = $event" />
  </div>
</template>
