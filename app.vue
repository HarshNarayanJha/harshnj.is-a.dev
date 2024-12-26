<script setup lang="ts">
useHead({
  title: 'Harsh Narayan Jha',
  script: [
    {
      innerHTML: "document.addEventListener('keydown', e => {\
        if (e.shiftKey && e.key === 'D') {\
          document.documentElement.classList.toggle('dark')\
        }\
      })"
    }
  ]
})

useSeoMeta({
  title: 'Harsh Narayan Jha',
  ogTitle: 'Harsh Narayan Jha',
  description: "Harsh Narayan Jha's Personal Portfolio",
  ogDescription: "Harsh Narayan Jha's Personal Portfolio",
})
</script>
<template>
  <div class="min-h-svh min-w-full bg-slate-50 text-neutral-800 dark:bg-gray-950 dark:text-slate-100">
    <Navbar />
    <NuxtPage />
  </div>
</template>
