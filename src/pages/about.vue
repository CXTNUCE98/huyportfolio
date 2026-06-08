<script setup lang="ts">
const expandedExperience = ref<number | null>(0)
const previewImage = ref<string | null>(null)

useScrollReveal()

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
    description: [
      'Contributed to the development of an e-commerce product for international markets in a startup environment.',
      'Designed shopping experiences and optimized checkout flows to improve overall user experience.',
      'Improved the product interface based on user feedback and business requirements.',
    ],
  },
  {
    company: 'FPT IS',
    period: '10/2021 - 06/2022',
    role: 'Fresser',
    description: [
      'Gained hands-on experience with Design Systems and contributed to building and maintaining them throughout the product development process.',
      'Supported the creation of wireframes, mockups, and prototypes using Figma.',
      'Had the opportunity to contribute to several large-scale projects such as VNPost and Spro.',
    ],
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
          <div class="flex flex-col gap-12 flex-1 scroll-reveal">
            <!-- Content -->
            <div class="flex flex-col gap-4">
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
              class="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#2A2A2A] text-white text-base font-medium leading-6 rounded-[4px] w-full lg:w-fit">
              <img src="/images/icons/icon-download.svg" alt="" width="24" height="24" />
              Download My CV
            </a>
          </div>

          <!-- Right Column - Profile Picture -->
          <div class="relative w-full lg:w-[320px] h-[430px] lg:h-[360px] shrink-0 scroll-reveal" style="transition-delay: 150ms">
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
        <div class="flex flex-col gap-6 w-full lg:w-[402px] shrink-0 scroll-reveal">
          <div class="flex flex-col gap-4">
            <h2 class="text-[32px] font-bold leading-[1.25] text-black">My Experience</h2>
            <p class="text-base leading-[1.5] text-[#525252]">
              You can find some of my works in my portfolio. If you need a product design moderm, simple &amp; trending.
              Please contact me!
            </p>
          </div>
          <a href="https://www.facebook.com/gabdol98/" target="_blank"
            class="inline-flex items-center justify-center h-12 px-6 border border-[#2A2A2A] text-[#2A2A2A] text-base font-medium rounded-[4px] w-full lg:w-fit">
            Contact Me
          </a>
        </div>

        <!-- Right - Experience Items -->
        <div class="flex flex-col gap-4 lg:gap-6 flex-1">
          <div v-for="(exp, index) in experiences" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] p-4 lg:p-6 cursor-pointer scroll-reveal"
            :style="{ transitionDelay: `${index * 100}ms` }" @click="toggleExperience(index)">
            <div class="flex items-center justify-between gap-4"
              :class="expandedExperience === index ? 'pb-4 border-b border-[#EAEAEA]' : ''">
              <div class="flex flex-col gap-2">
                <h3 class="text-xl font-bold uppercase tracking-[0.04em] text-[#404040]">{{ exp.company }}</h3>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-[#7F7F7F]">{{ exp.period }}</span>
                  <span class="text-sm text-[#7F7F7F]">•</span>
                  <span class="text-sm text-[#7F7F7F]">{{ exp.role }}</span>
                </div>
              </div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="shrink-0 transition-transform duration-300 hidden lg:block"
                :class="expandedExperience === index ? 'rotate-180' : ''">
                <path d="M6.81 16.13L12.6 10.34C13.37 9.57 14.63 9.57 15.4 10.34L21.19 16.13" fill="#535353" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="shrink-0 transition-transform duration-300 lg:hidden"
                :class="expandedExperience === index ? 'rotate-180' : ''">
                <path d="M5.84 13.82L10.8 8.86C11.46 8.2 12.54 8.2 13.2 8.86L18.16 13.82" fill="#535353" />
              </svg>
            </div>

            <!-- Expanded content -->
            <div v-if="exp.description.length > 0"
              class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :class="expandedExperience === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
              <div class="overflow-hidden">
                <ul class="pt-6 text-base leading-[1.5] text-[#525252] list-disc pl-5 space-y-1">
                  <li v-for="(line, i) in exp.description" :key="i">{{ line }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px] flex flex-col gap-16">
        <div class="flex gap-4 scroll-reveal">
          <h2 class="text-[32px] font-bold leading-[1.25] text-black text-left">Take a look at my
            Education
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row lg:flex-wrap gap-4">
          <div v-for="(edu, index) in educations" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] py-6 px-4 lg:p-6 flex items-center justify-between w-full lg:w-[calc(50%-12px)] scroll-reveal"
            :style="{ transitionDelay: `${index * 100}ms` }">
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
                  d="M14.0014 16.8148C15.5608 16.8148 16.8356 15.5477 16.8356 13.9978C16.8356 12.4366 15.5608 11.1696 14.0014 11.1696C13.8648 11.1696 13.7282 11.1809 13.603 11.2035C13.5575 12.4479 12.5331 13.4435 11.2697 13.4435H11.2128C11.1786 13.6245 11.1559 13.8055 11.1559 13.9978C11.1559 15.5477 12.4307 16.8148 14.0014 16.8148Z"
                  fill="#7F7F7F" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M20.6927 7.05406C22.6846 8.59265 24.3805 10.844 25.5984 13.6609C25.6895 13.8759 25.6895 14.1248 25.5984 14.3284C23.1626 19.9623 18.8261 23.3337 14 23.3337H13.9887C9.17403 23.3337 4.83744 19.9623 2.40167 14.3284C2.31061 14.1248 2.31061 13.8759 2.40167 13.6609C4.83744 8.02699 9.17403 4.66699 13.9887 4.66699H14C16.413 4.66699 18.7009 5.50416 20.6927 7.05406ZM9.4472 14.0003C9.4472 16.4892 11.4846 18.5143 14 18.5143C16.5041 18.5143 18.5415 16.4892 18.5415 14.0003C18.5415 11.5001 16.5041 9.47507 14 9.47507C11.4846 9.47507 9.4472 11.5001 9.4472 14.0003Z"
                  fill="#7F7F7F" />
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
