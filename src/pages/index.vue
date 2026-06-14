<script setup lang="ts">
export interface ProjectAction {
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
  title: string
  tags?: string[]
  domain?: string
  role?: string
  actions: ProjectAction[]
  passwordProtected?: boolean
  caseStudyPdfs?: string[]
}

const activeTab = ref('Tất cả')

const tabs = ['Tất cả', 'Website', 'Mobile', 'Case Studies']

const projects: Project[] = [
  {
    id: 1,
    image: '/images/projects/project-1.png',
    category: 'Website',
    year: '2026',
    name: 'SHBFINANCE',
    title: 'Tài chính tiêu dùng thông minh',
    tags: ['Revamp', 'UI Design', 'Responsive'],
    domain: 'Tài chính',
    role: 'Design',
    actions: [
      { label: 'Link Figma', active: false },
      { label: 'Case Study', active: false },
    ],
  },
  {
    id: 2,
    image: '/images/projects/project-3.png',
    category: 'Case Studies',
    year: '2024',
    name: 'QUIZLET',
    title: 'Giải pháp giúp người đi làm ôn luyện & ghi nhớ đúng nhu cầu cá nhân',
    tags: ['Research', 'UX Design'],
    domain: 'Giáo dục',
    role: 'Research, Design',
    actions: [
      { label: 'Link Figma', link: '', active: false },
      { label: 'Case Study', link: '', active: true },
    ],
    caseStudyPdfs: Array.from({ length: 44 }, (_, i) => `/slide-quizlet/${i + 1}.pdf`),
  },
  {
    id: 3,
    image: '/images/projects/project-2.png',
    category: 'Case Studies',
    year: '2025',
    name: 'SENDO FARM',
    title: 'Xây dựng chiến lược tạo thói quen mua sắm cho người dùng',
    tags: ['Business', 'Behavior Design', 'Research'],
    domain: 'E-commerce',
    role: 'Research, UIUX, Product',
    actions: [
      { label: 'Link Figma', link: '', active: false },
      { label: 'Case Study', link: 'https://uxfoundation.vn/case-study/sendo-farm-brings-produce-from-the-farm-to-your-kitchen', active: true },
    ],
  },
  {
    id: 4,
    image: '/images/projects/project-4.png',
    category: 'Website',
    year: '2024',
    name: 'INNOVATOR ACADEMY',
    title: 'Nền tảng bán khoá học trực tuyến',
    tags: ['Branding', 'UI Design', 'Responsive'],
    domain: 'Giáo dục',
    role: 'UIUX Design',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/weBC3oa7sb5qZHAzm1SQ9i/Innovator-Website-Ver-Final?node-id=48978-46043&t=kffqsFJ5gMYYFBPJ-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 5,
    image: '/images/projects/project-10.png',
    category: 'Mobile',
    year: '2024 - 2026',
    name: 'CHRM',
    title: 'Ứng dụng nội bộ cho nhân viên',
    tags: ['UIUX Design', 'Mobile App'],
    domain: 'Chuyển đổi số',
    role: 'UIUX, Product',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/CQwugvkVhfjCsqpLOuLyaW/App-H%E1%BB%93-s%C6%A1-%C4%91i%E1%BB%87n-t%E1%BB%AD-Ver3.0?node-id=6282-36122&t=VrpsBEAT86lUSeth-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
    passwordProtected: true,
  },
  {
    id: 6,
    image: '/images/projects/PMS.png',
    category: 'Website',
    year: '2025',
    name: 'PMS',
    title: 'Phần mềm đánh giá và quản lý hiệu suất công việc của nhân viên',
    tags: ['ERP', 'Web Design', 'Dashboard'],
    domain: 'ERP, Chuyển đổi số',
    role: 'UIUX Design',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/V58WebHMJh9L7DNXq2cVPU/PMS-WEBSITE-DEMO?node-id=50980-22476&t=uhtyuxcJadBO5Tqe-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
    passwordProtected: true,
  },
  {
    id: 7,
    image: '/images/projects/project-8.png',
    category: 'Mobile',
    year: '2022',
    name: 'VNPOST',
    title: 'Ứng dụng cho khách hàng quản lý vận đơn Bưu điện Việt Nam',
    tags: ['UIUX Design', 'Mobile App'],
    domain: 'Logistics',
    role: 'UIUX Design',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/V6ge9uIppJokY9zDR27SYn/VNPost--Portfolio-?node-id=0-1&t=RR6ybVM3Gj3t81A4-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 8,
    image: '/images/projects/project-12.png',
    category: 'Mobile',
    year: '2024',
    name: 'AIO',
    title: 'Hệ sinh thái siêu ứng dụng cung cấp các dịch vụ của Viettel Construction',
    tags: ['Super App', 'UIUX Design', 'Mobile App'],
    domain: 'E-commerce',
    role: 'UIUX, Research, Product',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/lDwQEbYp74V4fS8fEhJbt6/AIO-SUPER-APP?node-id=0-1&t=ECZFdnXbYOog78ra-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
    passwordProtected: true,
  },
  {
    id: 9,
    image: '/images/projects/project-11.png',
    category: 'Mobile',
    year: '2022',
    name: 'VIETJET',
    title: 'Ứng dụng đặt đồ ăn trên máy bay dành cho tiếp viên',
    tags: ['UI Design', 'Mobile App'],
    domain: 'Foodie',
    role: 'UI Design',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/hN4MJQSDTYD2bJosQr5kB5/Vietjet-Air--Public-?node-id=17639-391811&t=lJh0nHCMk5DpXC8U-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
  {
    id: 10,
    image: '/images/projects/project-9.png',
    category: 'Website',
    year: '2022',
    name: 'ETRADEVN',
    title: 'Nền tảng Blockchain về thư tín dụng nội địa tại Việt Nam',
    tags: ['Web Design', 'Visual Design'],
    domain: 'Fintech',
    role: 'UI Design',
    actions: [
      { label: 'Link Figma', link: 'https://www.figma.com/design/NLa8Obya1wEErhmQVa9M2B/LC-Website--Public-?node-id=2339-36467&t=eZidVVPSYbniVeEH-1', active: true },
      { label: 'Case Study', link: '', active: false },
    ],
  },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'Tất cả') return projects
  return projects.filter(p => p.category === activeTab.value)
})

const showPasswordDialog = ref(false)
const passwordDigits = ref(['', '', '', '', '', ''])
const passwordError = ref(false)
const pendingAction = ref<{ href: string } | null>(null)

const PASSWORD = '240206'

const showCaseStudyModal = ref(false)
const currentCaseStudyPdfs = ref<string[]>([])
const currentCaseStudyIndex = ref(0)

function openCaseStudy(pdfs: string[]) {
  if (pdfs && pdfs.length > 0) {
    currentCaseStudyPdfs.value = pdfs
    currentCaseStudyIndex.value = 0
    showCaseStudyModal.value = true
  }
}

function closeCaseStudy() {
  showCaseStudyModal.value = false
  setTimeout(() => {
    currentCaseStudyPdfs.value = []
  }, 300)
}

function nextCaseStudySlide() {
  if (currentCaseStudyIndex.value < currentCaseStudyPdfs.value.length - 1) {
    currentCaseStudyIndex.value++
  }
}

function prevCaseStudySlide() {
  if (currentCaseStudyIndex.value > 0) {
    currentCaseStudyIndex.value--
  }
}

function handleScreenClick(e: MouseEvent) {
  const { clientX } = e
  const { innerWidth } = window
  if (clientX < innerWidth / 2) {
    prevCaseStudySlide()
  } else {
    nextCaseStudySlide()
  }
}

function handleActionClick(project: Project, action: ProjectAction) {
  if (!action.active) return
  
  if (action.label === 'Case Study' && !action.link) {
    if (project.caseStudyPdfs && project.caseStudyPdfs.length > 0) {
      openCaseStudy(project.caseStudyPdfs)
    }
    return
  }
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
              Với hơn <strong>4 năm kinh nghiệm</strong> trong lĩnh vực thiết kế trải nghiệm người dùng. Theo đuổi phong
              cách <strong>tối giản, hiện đại</strong> và ưu tiên trải nghiệm người dùng thực tế. Thành thạo công cụ
              <strong>Figma</strong> và <strong>Design System</strong>, có kiến
              thức cơ bản về <strong>HTML/CSS</strong>, khả năng <strong>phối hợp tốt với BA, Developer</strong> và tinh
              thần <strong>trách nhiệm cao</strong> trong công việc. Luôn <strong>cập nhật xu hướng, ứng dụng
                AI</strong> vào work flow
              mới nhằm tạo ra các sản phẩm trực quan và chất
              lượng.
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
          <h2 class="text-[32px] font-bold leading-[1.25] text-[#2A2A2A] scroll-reveal">Một vài dự án tiêu biểu</h2>

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
              <ProjectCard :image="project.image" :year="project.year" :name="project.name" :title="project.title"
                :tags="project.tags" :domain="project.domain" :role="project.role" :actions="project.actions"
                @action-click="handleActionClick(project, $event)" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <PasswordDialog :show="showPasswordDialog" :error="passwordError" :digits="passwordDigits"
      @close="closePasswordDialog" @confirm="confirmPassword" @update:digits="passwordDigits = $event" />

    <!-- Case Study Preview Overlay -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showCaseStudyModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
          
          <!-- Full screen click overlay -->
          <div class="absolute inset-0 z-40 cursor-pointer" @click="handleScreenClick"></div>

          <button class="absolute top-6 right-6 text-white cursor-pointer z-50 p-2" @click="closeCaseStudy">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L24 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 8L8 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          
          <div class="relative z-30 w-full max-w-[95vw] lg:max-w-[1200px] aspect-video flex items-center justify-center bg-[#323639] rounded-xl shadow-2xl overflow-hidden">
            <iframe v-if="currentCaseStudyPdfs.length > 0" :src="currentCaseStudyPdfs[currentCaseStudyIndex] + '#toolbar=0&navpanes=0&scrollbar=0&view=Fit'" class="w-full h-full border-none pointer-events-none" title="Case Study PDF Preview"></iframe>
            
            <!-- Left Arrow Indicator -->
            <div class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white pointer-events-none transition-opacity duration-300 z-20" :class="currentCaseStudyIndex === 0 ? 'opacity-0' : 'opacity-100 lg:opacity-50'">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <!-- Right Arrow Indicator -->
            <div class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 rounded-full text-white pointer-events-none transition-opacity duration-300 z-20" :class="currentCaseStudyIndex === currentCaseStudyPdfs.length - 1 ? 'opacity-0' : 'opacity-100 lg:opacity-50'">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <!-- Slide Counter -->
            <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm pointer-events-none z-20">
              {{ currentCaseStudyIndex + 1 }} / {{ currentCaseStudyPdfs.length }}
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
