<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/vue'
import {
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import MNavbar from '~/components/MNavbar.vue'
import ANavbarArrow from '~/components/ui/atoms/ANavbarArrow.vue'
import ALogo from '~/components/ui/atoms/ALogo.vue'
import ANavButton from '~/components/ui/atoms/ANavButton.vue'
import ACrossButton from '~/components/ui/atoms/ACrossButton.vue'
import ANavMagnifier from '~/components/ui/atoms/ANavMagnifier.vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <ALogo />
      </div>
      <div class="flex lg:hidden">
        <ACrossButton @button-click="mobileMenuOpen = true" />
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-4">
        <MNavbar title="Home">
          <ANavbarArrow />
        </MNavbar>
        <MNavbar title="TeeSpace">
          <ANavbarArrow />
        </MNavbar>
        <MNavbar title="Shop">
          <ANavbarArrow />
        </MNavbar>
        <MNavbar title="Blog">
          <ANavbarArrow />
        </MNavbar>
        <MNavbar title="Pages">
          <ANavbarArrow />
        </MNavbar>
        <MNavbar>
          <ANavMagnifier />
        </MNavbar>
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <div class="relative mr-6">
          <div class="absolute left-3 top-0">
            <p class="flex size-2 items-center justify-center rounded-full bg-primary p-3 text-xs text-white">
              0
            </p>
          </div>
          <a href="#" class="transition hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16" stroke="currentColor"
              class="file: mt-4 size-6"
            >
              <path
                d="M2.42383 3.5H15.041C15.1973 3.5 15.347 3.52604 15.4902 3.57812C15.6335 3.63021 15.7637 3.70833 15.8809 3.8125C15.998 3.91667 16.0924 4.03711 16.1641 4.17383C16.2357 4.31055 16.278 4.45052 16.291 4.59375C16.291 4.60677 16.291 4.61328 16.291 4.61328L17.4043 14.6133C17.4173 14.7044 17.4173 14.7923 17.4043 14.877C17.3913 14.9616 17.3717 15.043 17.3457 15.1211C17.3197 15.2122 17.2871 15.2936 17.248 15.3652C17.209 15.4368 17.1569 15.5052 17.0918 15.5703C17.0397 15.6484 16.9779 15.7135 16.9062 15.7656C16.8346 15.8177 16.7598 15.8568 16.6816 15.8828C16.5905 15.9219 16.5026 15.9512 16.418 15.9707C16.3333 15.9902 16.252 16 16.1738 16H1.29102C1.21289 16 1.13151 15.9902 1.04688 15.9707C0.96224 15.9512 0.874349 15.9219 0.783203 15.8828C0.705078 15.8568 0.630208 15.8177 0.558594 15.7656C0.486979 15.7135 0.42513 15.6484 0.373047 15.5703C0.307943 15.5052 0.255859 15.4368 0.216797 15.3652C0.177734 15.2936 0.145182 15.2122 0.119141 15.1211C0.093099 15.043 0.0735677 14.9616 0.0605469 14.877C0.047526 14.7923 0.047526 14.7044 0.0605469 14.6133L1.17383 4.61328C1.17383 4.61328 1.17383 4.60677 1.17383 4.59375C1.18685 4.45052 1.22917 4.31055 1.30078 4.17383C1.3724 4.03711 1.4668 3.91667 1.58398 3.8125C1.70117 3.70833 1.83138 3.63021 1.97461 3.57812C2.11784 3.52604 2.26758 3.5 2.42383 3.5ZM15.041 4.75H2.42383L1.31055 14.75H16.1543L15.041 4.75ZM8.73242 1.625C8.4069 1.625 8.08789 1.68685 7.77539 1.81055C7.46289 1.93425 7.18945 2.11328 6.95508 2.34766C6.7207 2.58203 6.54167 2.85547 6.41797 3.16797C6.29427 3.48047 6.23242 3.79948 6.23242 4.125V6.625C6.23242 6.79427 6.17057 6.94075 6.04688 7.06445C5.92318 7.18815 5.77669 7.25 5.60742 7.25C5.43815 7.25 5.29167 7.18815 5.16797 7.06445C5.04427 6.94075 4.98242 6.79427 4.98242 6.625V4.125C4.98242 3.63021 5.07682 3.15169 5.26562 2.68945C5.45443 2.22721 5.72461 1.82031 6.07617 1.46875C6.42773 1.11719 6.83464 0.847005 7.29688 0.658203C7.75911 0.469401 8.23763 0.375 8.73242 0.375C9.22721 0.375 9.70573 0.469401 10.168 0.658203C10.6302 0.847005 11.0371 1.11719 11.3887 1.46875C11.7402 1.82031 12.0104 2.22721 12.1992 2.68945C12.388 3.15169 12.4824 3.63021 12.4824 4.125V6.625C12.4824 6.79427 12.4206 6.94075 12.2969 7.06445C12.1732 7.18815 12.0267 7.25 11.8574 7.25C11.6882 7.25 11.5417 7.18815 11.418 7.06445C11.2943 6.94075 11.2324 6.79427 11.2324 6.625V4.125C11.2324 3.79948 11.1706 3.48047 11.0469 3.16797C10.9232 2.85547 10.7441 2.58203 10.5098 2.34766C10.2754 2.11328 10.002 1.93425 9.68945 1.81055C9.37695 1.68685 9.05794 1.625 8.73242 1.625Z"
                fill="black"
              />
            </svg>
          </a>
        </div>
        <div class="mr-6">
          <p class="text-sm font-medium text-gray-500">
            HOTLINE:
          </p>
          <p class="text-sm font-bold text-black">
            0019008188
          </p>
        </div>
        <ANavButton title="Sign up" />
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="/public/images/logo_tee_space.png" alt="logo">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Features</a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Marketplace</a>
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Company</a>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Log
                in</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<style scoped>
</style>
