<script setup lang="ts">
const expandedExperience = ref<number | null>(0);
const previewImage = ref<string | null>(null);

useScrollReveal();

function toggleExperience(index: number) {
  expandedExperience.value = expandedExperience.value === index ? null : index;
}

function openPreview(image: string | null) {
  if (image) previewImage.value = image;
}

function closePreview() {
  previewImage.value = null;
}

const experiences = [
  {
    company: "Viettel Construction",
    period: "07/2024 - 05/2026",
    role: "UIUX Designer",
    description: [
      "Thiết kế UI/UX cho các hệ thống của công ty, đảm bảo tính trực quan và đáp ứng nhu cầu sử dụng thực tế của người dùng.",
      "Chịu trách nhiệm xây dựng và cải tiến Design System, đảm bảo tính nhất quán toàn hệ thống.",
      "Phối hợp với PM, BA, Dev từ giai đoạn Discovery đến Handoff để đảm bảo tính khả thi khi triển khai.",
      "Thực hiện user research: Interview, UT, Survey để thu thập insight",
      "Nghiên cứu sản phẩm đối thủ để đưa ra những giải pháp phù hợp với đặc thù của business.",
      "Đề xuất cải tiến dựa trên số liệu và phản hồi của người dùng và các bên liên quan.",
      "Đề xuất và thiết kế giải pháp Self-service cho hơn 11.000 nhân viên, số hóa các quy trình như đăng ký nghỉ dưỡng và nhận quà Tết, giúp giảm đáng kể khối lượng xử lý thủ công của HR.",
      "Dự án tiêu biểu: Super App AIO - Chuyển đổi số Việt Nam (Vietnam Digital Awards - VDA) năm 2023.",
      "Thành tích: Giải nhì cuộc thi Ngày sáng tạo năm 2025",
    ],
  },
  {
    company: "eHighway startup",
    period: "10/2022 - 06/2024",
    role: "UIUX Designer",
    description: [
      "Thiết kế trải nghiệm người dùng cho nền tảng thương mại điện tử phục vụ thị trường quốc tế, tập trung vào luồng mua hàng và quản lý đơn hàng.",
      "Xây dựng Wireframe, Hi-fi UI và Interactive Prototype bằng Figma, đảm bảo cân bằng giữa nhu cầu kinh doanh và trải nghiệm người dùng.",
      "Phân tích phản hồi người dùng và dữ liệu sử dụng để tối ưu các luồng quan trọng như thanh toán, quản lý đơn hàng và chuyển đổi.",
    ],
  },
  {
    company: "FPT IS",
    period: "10/2021 - 06/2022",
    role: "Fresser",
    description: [
      "Tham gia các dự án quy mô lớn như VNPost và SPRO, tích lũy kinh nghiệm thiết kế cho hệ thống nghiệp vụ và sản phẩm doanh nghiệp.",
      "Áp dụng các nguyên tắc về UX, Information Architecture và Responsive Design trong quá trình phát triển sản phẩm.",
      "Thực hiện benchmark các sản phẩm cùng lĩnh vực để tham chiếu, đánh giá và đề xuất các giải pháp phù hợp với định hướng sản phẩm.",
      "Phối hợp với DEV trước và sau khi triển khai, đảm bảo giao diện thực tế đúng với thiết kế.",
    ],
  },
];

const educations = [
  {
    institution: "UXFOUNDATION",
    year: "2025",
    program: "Psychology in UX Design",
    tag: "Best Team",
    image: "/uxfoundation2025.jpg",
  },
  {
    institution: "UXFOUNDATION",
    year: "2024",
    program: "User Experience Foundation",
    tag: "Best Team",
    image: "/uxfoundation2024.jpg",
  },
  {
    institution: "Arena multimedia",
    year: "2020 - 2022",
    program: "Specialization: Graphic, UI, Front-End",
    tag: null,
    image: "/arena-multimedia.jpg",
  },
  {
    institution: "Đại học Sư phạm kỹ thuật Vinh",
    year: "2016-2020",
    program: "Công nghệ thông tin",
    tag: null,
    image: "/vinh-university.jpg",
  },
];

function openFile() {
  window.open('https://drive.google.com/drive/u/0/folders/1uhZkKMwfjzuX_nanNUM_0K3LXEhKLCBu', '_blank');
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="border-b border-[#DDDDDD]">
      <div class="max-w-[1080px] mx-auto px-4 lg:px-0 py-16 lg:py-[100px] flex flex-col gap-6 lg:gap-8">
        <h1 class="text-[40px] font-bold leading-[60px] text-[#111827] scroll-reveal">
          Chao xìn
        </h1>

        <div class="flex flex-col-reverse lg:flex-row items-start gap-12 lg:gap-16">
          <!-- Left Column -->
          <div class="flex flex-col gap-8 flex-1 h-full lg:h-[450px] justify-between scroll-reveal">
            <div class="flex flex-col gap-4">
              <p class="text-[18px] leading-[24px] font-light text-[#525252]">
                <!-- Mình là <strong class="font-bold">Huy</strong> - Một chàng trai
                thích ngắm nhìn thế giới dưới góc độ hài hước -->
                <!-- <br />
                <br /> -->
                Từ nhỏ, mình đã luôn tò mò cách mọi thứ vận hành. Không chỉ là
                chúng trông như thế nào, mà là tại sao chúng hoạt động theo cách
                đó và liệu có cách nào có thể làm tốt hơn không. Nhờ đó, mình
                hình thành mindset "luôn có cách", và sẽ luôn có cách tốt hơn để
                thiết kế giải pháp và giải quyết vấn đề.
                <br />
                <br />
                Mình tin rằng thiết kế
                không chỉ tồn tại trên màn hình. Thiết kế hiện diện trong mọi
                trải nghiệm mà chúng ta tạo ra cho nhau trong cuộc sống mỗi ngày
              </p>

              <div class="text-[16px] text-[#7F7F7F] flex items-center gap-2 mt-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                    stroke="#7F7F7F" stroke-width="1.5" />
                  <path
                    d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                    stroke="#7F7F7F" stroke-width="1.5" />
                </svg>
                Thủ đô Hà Nội
              </div>
            </div>

            <!-- Stats -->
            <div class="flex items-center gap-[30px]">
              <div class="flex flex-col gap-3 pr-[30px] border-r border-[#EAEAEA] py-1.5">
                <span class="text-2xl font-extrabold tracking-[0.03em] text-[#FF9500]">4+</span>
                <span class="text-base font-semibold text-[#525252]">Kinh nghiệm</span>
              </div>
              <div class="flex flex-col gap-3 py-1.5">
                <span class="text-2xl font-extrabold tracking-[0.03em] text-[#FF9500]">20+</span>
                <span class="text-base font-semibold text-[#525252]">Dự án</span>
              </div>
            </div>

            <!-- Download CV Button -->
            <div @click="openFile"
              class="inline-flex items-center cursor-pointer justify-center gap-2 h-12 px-[24px] py-[12px] bg-[#2A2A2A] text-white text-base font-medium leading-6 rounded-[4px] w-full lg:w-fit mt-4 lg:mt-0">
              <img src="/images/icons/icon-download.svg" alt="" width="24" height="24" />
              TẢI XUỐNG CV
            </div>
          </div>

          <!-- Right Column - Profile Picture -->
          <div class="relative w-full lg:w-[360px] h-[360px] lg:h-[450px] shrink-0 scroll-reveal"
            style="transition-delay: 150ms">
            <img :src="'/new-about-profile.png'" alt="Huy Dang" class="w-full h-full object-cover rounded-[4px]" />
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
            <h2 class="text-[32px] font-bold leading-[1.25] text-black">
              Kinh nghiệm
            </h2>
            <p class="text-base leading-[1.5] text-[#525252]">
              Bạn có thể xem một số dự án của mình ở Portfolio. Nếu bạn cần
              thiết kế sản phẩm hiện đại, tối ưu. Hãy liên hệ với mình
            </p>
          </div>
          <a href="https://www.facebook.com/gabdol98/" target="_blank"
            class="inline-flex items-center justify-center h-12 px-6 border border-[#2A2A2A] text-[#2A2A2A] text-base font-medium rounded-[4px] w-full lg:w-fit">
            Liên hệ
          </a>
        </div>

        <!-- Right - Experience Items -->
        <div class="flex flex-col gap-4 lg:gap-5 flex-1">
          <div v-for="(exp, index) in experiences" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] p-4 lg:p-5 cursor-pointer scroll-reveal"
            :style="{ transitionDelay: `${index * 100}ms` }" @click="toggleExperience(index)">
            <div class="flex items-center justify-between gap-4" :class="expandedExperience === index
              ? 'pb-4 border-b border-[#EAEAEA]'
              : ''
              ">
              <div class="flex flex-col gap-2">
                <h3 class="text-xl font-bold uppercase tracking-[0.04em] text-[#404040]">
                  {{ exp.company }}
                </h3>
                <div class="flex items-center gap-2">
                  <span class="text-sm text-[#7F7F7F]">{{ exp.period }}</span>
                  <span class="text-sm text-[#7F7F7F]">•</span>
                  <span class="text-sm text-[#7F7F7F]">{{ exp.role }}</span>
                </div>
              </div>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="shrink-0 transition-transform duration-300 hidden lg:block"
                :class="expandedExperience !== index ? 'rotate-180' : ''">
                <path
                  d="M21.7935 16.31L18.0485 12.565L15.7618 10.2667C14.7935 9.29832 13.2185 9.29832 12.2502 10.2667L6.20683 16.31C5.4135 17.1033 5.98516 18.4567 7.0935 18.4567H13.6385H20.9068C22.0268 18.4567 22.5868 17.1033 21.7935 16.31Z"
                  fill="#535353" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="shrink-0 transition-transform duration-300 lg:hidden"
                :class="expandedExperience !== index ? 'rotate-180' : ''">
                <path
                  d="M18.6801 13.98L15.4701 10.77L13.5101 8.80999C12.6801 7.97999 11.3301 7.97999 10.5001 8.80999L5.32014 13.98C4.64014 14.66 5.13014 15.82 6.08014 15.82H11.6901H17.9201C18.8801 15.82 19.3601 14.66 18.6801 13.98Z"
                  fill="#535353" />
              </svg>
            </div>

            <!-- Expanded content -->
            <div v-if="exp.description.length > 0" class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :class="expandedExperience === index
                ? 'grid-rows-[1fr]'
                : 'grid-rows-[0fr]'
                ">
              <div class="overflow-hidden">
                <ul class="pt-6 text-base leading-[1.5] font-light text-[#525252] list-disc pl-5 space-y-1">
                  <li v-for="(line, i) in exp.description" :key="i">
                    {{ line }}
                  </li>
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
          <h2 class="text-[32px] font-bold leading-[1.25] text-black text-left">
            Trình độ học vấn
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row lg:flex-wrap gap-4">
          <div v-for="(edu, index) in educations" :key="index"
            class="bg-[#F8F8F8] rounded-[4px] py-6 px-4 lg:p-6 flex items-center justify-between w-full lg:w-[calc(50%-12px)] scroll-reveal"
            :style="{ transitionDelay: `${index * 100}ms` }">
            <div class="flex flex-col gap-4 flex-1">
              <div class="flex items-center gap-4 flex-wrap">
                <h3 class="text-xl lg:text-2xl font-bold uppercase tracking-[0.04em] text-[#404040]">
                  {{ edu.institution }}
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
