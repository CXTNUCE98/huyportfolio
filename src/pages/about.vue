<script setup lang="ts">
const expandedExperience = ref<number | null>(0)
const previewImage = ref<string | null>(null)

function toggleExperience(index: number) {
  expandedExperience.value = expandedExperience.value === index ? null : index
}

function openPreview(image: string | null) {
  if (image) previewImage.value = image
}

function closePreview() {
  previewImage.value = null
}

const experiences = [
  {
    company: 'Viettel Construction',
    period: '07/2024 - 05/2026',
    role: 'UIUX Designer',
    description: [
      'Designed website interfaces, mobile applications, and internal management systems for enterprise operations.',
      'Collaborated with Product Managers, Business Analysts, and Developers to analyze requirements and create user-centered experiences.',
      'Built and maintained Design Systems to ensure consistency across the company\'s digital products.',
      'Optimized user flows and improved usability for internal operational systems.',
      'Designed dashboards and data-driven interfaces to support management and daily operations.',
    ],
  },
  {
    company: 'eHighway startup',
    period: '10/2022 - 06/2024',
    role: 'UIUX Designer',
    description: [],
  },
  {
    company: 'FPT IS',
    period: '10/2021 - 06/2022',
    role: 'Fresser',
    description: [],
  },
]

const educations = [
  {
    institution: 'UXFOUNDATION',
    year: '2025',
    program: 'Psychology in UX Design',
    tag: 'Best Team',
    image: '/uxfoundation2025.jpg',
  },
  {
    institution: 'UXFOUNDATION',
    year: '2024',
    program: 'User Experience Foundation',
    tag: 'Best Team',
    image: '/uxfoundation2024.jpg',
  },
  {
    institution: 'Arena multimedia',
    year: '2020 - 2022',
    program: 'Specialization: Graphic, UI, Front-End',
    tag: null,
    image: '/arena-multimedia.jpg',
  },
  {
    institution: 'Vinh University of Technical',
    year: '2016-2020',
    program: 'Specialization: Information technology',
    tag: null,
    image: '/vinh-university.jpg',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px]">
        <div class="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-end gap-12 lg:gap-12 flex-wrap">
          <!-- Left Column -->
          <div class="flex flex-col gap-12 flex-1">
            <!-- Content -->
            <div class="flex flex-col gap-6">
              <h1
                class="text-[40px] lg:text-[60px] font-bold leading-[1.8] lg:leading-[1.2] tracking-[-0.02em] text-[#111827]">
                Hi, I'm Huy Dang
              </h1>
              <div class="flex flex-col gap-12">
                <div class="flex flex-col gap-4">
                  <!-- Location -->
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
                        stroke="#525252" stroke-width="1.5" />
                      <path
                        d="M3.62 8.49C5.59 -0.169998 18.42 -0.159998 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
                        stroke="#525252" stroke-width="1.5" />
                    </svg>
                    <span class="text-base text-[#525252]">Ha Noi Capital, VietNam</span>
                  </div>
                </div>

                <p class="text-base leading-[1.5] text-[#4B5563]">
                  I started my UI/UX journey in an enterprise environment, where I was introduced to design systems and
                  real-world product development processes. Later, I had the opportunity to work at an international
                  e-commerce startup, which strengthened my ownership mindset and end-to-end product design
                  experience.<br><br>Today, I focus on designing web and mobile products with a minimalist and modern
                  approach—prioritizing user experience while keeping development feasibility in mind.
                </p>

                <!-- Stats -->
                <div class="flex items-center gap-[30px] pt-6">
                  <div class="flex flex-col gap-3 pr-[30px] border-r border-[#EAEAEA]">
                    <span class="text-2xl font-extrabold tracking-[0.03em] text-[#FD6F00]">4+</span>
                    <span class="text-base font-semibold text-[#525252]">Experiences</span>
                  </div>
                  <div class="flex flex-col gap-3">
                    <span class="text-2xl font-extrabold tracking-[0.03em] text-[#FD6F00]">20+</span>
                    <span class="text-base font-semibold text-[#525252]">Project done</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Download CV Button -->
            <a href="/CV.pdf" download="HuyDang_CV.pdf" target="_blank"
              class="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#2A2A2A] text-white text-base font-medium rounded-[4px] w-full lg:w-auto">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11V17L11 15" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M9 17L7 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="white"
                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
              Download My CV
            </a>
          </div>

          <!-- Right Column - Profile Picture -->
          <div class="relative w-full lg:w-[320px] h-[430px] lg:h-[360px] shrink-0">
            <div
              class="absolute top-[48px] lg:top-[40px] left-[48px] lg:left-[40px] w-[calc(100%-48px)] lg:w-[280px] h-[382px] lg:h-[320px] bg-[#F8F8F8]">
            </div>
            <img :src="'/about-profile.png'" alt="Huy Dang"
              class="absolute top-0 left-0 w-[calc(100%-48px)] lg:w-[280px] h-[382px] lg:h-[320px] object-cover border-8 border-white" />
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px] flex flex-col lg:flex-row gap-16">
        <!-- Left -->
        <div class="flex flex-col gap-6 w-full lg:w-[402px] shrink-0">
          <div class="flex flex-col gap-4">
            <h2 class="text-[32px] font-bold leading-[1.25] text-black">My Experience</h2>
            <p class="text-base leading-[1.5] text-[#525252]">
              You can find some of my works in my portfolio. If you need a product design moderm, simple &amp; trending.
              Please contact me!
            </p>
          </div>
          <a href="#"
            class="inline-flex items-center justify-center h-12 px-6 border border-[#2A2A2A] text-[#2A2A2A] text-base font-medium rounded-[4px] w-full lg:w-auto">
            Contact Me
          </a>
        </div>

        <!-- Right - Experience Items -->
        <div class="flex flex-col gap-6 flex-1">
          <div v-for="(exp, index) in experiences" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] p-4 lg:p-6 cursor-pointer" @click="toggleExperience(index)">
            <div class="flex items-center justify-between gap-4">
              <div class="flex flex-col gap-4 flex-1">
                <h3 class="text-xl lg:text-2xl font-bold uppercase tracking-[0.04em] text-[#404040]">{{ exp.company }}
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span class="text-sm lg:text-lg text-[#7F7F7F]">{{ exp.period }}</span>
                  <span class="text-sm lg:text-lg text-[#7F7F7F]">{{ exp.role }}</span>
                </div>
              </div>
            </div>

            <!-- Expanded content -->
            <div v-if="expandedExperience === index && exp.description.length > 0"
              class="mt-6 pt-4 border-t border-[#EAEAEA]">
              <p class="text-lg lg:text-xl font-light leading-[1.7] text-[#525252]">
                <template v-for="(line, i) in exp.description" :key="i">
                  {{ line }}<br v-if="i < exp.description.length - 1" />
                </template>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px] flex flex-col gap-16">
        <div class="flex gap-6">
          <h2 class="text-[32px] font-bold leading-[1.25] text-black text-left lg:text-center">Take a look at my
            Education
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row lg:flex-wrap gap-6">
          <div v-for="(edu, index) in educations" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] p-4 lg:p-6 flex items-center justify-between w-full lg:w-[calc(50%-12px)]">
            <div class="flex flex-col gap-4 flex-1">
              <div class="flex items-center gap-4 flex-wrap">
                <h3 class="text-xl lg:text-2xl font-bold uppercase tracking-[0.04em] text-[#404040]">{{ edu.institution
                  }}
                </h3>
                <span v-if="edu.tag"
                  class="inline-flex items-center px-3 py-[3px] rounded-[6px] text-xs text-[#28CD40] bg-[rgba(40,205,64,0.1)]">
                  {{ edu.tag }}
                </span>
              </div>
              <div class="flex flex-col gap-2">
                <span class="text-lg text-[#7F7F7F]">{{ edu.year }}</span>
                <span class="text-lg text-[#525252]">{{ edu.program }}</span>
              </div>
            </div>
            <button class="shrink-0 cursor-pointer" @click="openPreview(edu.image)">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.1767 14.0002C18.1767 16.3069 16.3067 18.1769 14.0001 18.1769C11.6934 18.1769 9.82339 16.3069 9.82339 14.0002C9.82339 11.6936 11.6934 9.82361 14.0001 9.82361C16.3067 9.82361 18.1767 11.6936 18.1767 14.0002Z"
                  stroke="#535353" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M14.0001 23.6017C18.1301 23.6017 21.9801 21.2017 24.6167 17.2017C25.6667 15.5867 25.6667 12.4017 24.6167 10.7867C21.9801 6.78669 18.1301 4.38669 14.0001 4.38669C9.87006 4.38669 6.02006 6.78669 3.38339 10.7867C2.33339 12.4017 2.33339 15.5867 3.38339 17.2017C6.02006 21.2017 9.87006 23.6017 14.0001 23.6017Z"
                  stroke="#535353" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Image Preview Overlay -->
        <Teleport to="body">
          <div v-if="previewImage" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            @click="closePreview">
            <button class="absolute top-6 right-6 text-white cursor-pointer" @click.stop="closePreview">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L24 24" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <img :src="previewImage" alt="Preview" class="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              @click.stop />
          </div>
        </Teleport>
      </div>
    </section>
  </div>
</template>
