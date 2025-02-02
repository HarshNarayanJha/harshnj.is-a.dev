<script setup lang="ts">
const project = await queryCollection('project').first()
</script>

<template>
  <h1 class="text-4xl font-bold mb-8 sm:text-5xl">Projects&nbsp;&nbsp;🛠</h1>
  <div class="flex flex-wrap md:flex-row flex-col py-10 px-15 justify-center">
    <ProjectCard
      v-for="proj in project.data"
      :bg="`bg-stone-50 dark:bg-gray-800`"
      class="w-full md:w-96 my-4 m-auto md:mx-8"
      :tags="proj.tags">
      <template #image>
        <img
          :src="proj.img"
          :alt="proj.name"
          class="border-2 border-b-0 border-slate-200/50 dark:border-slate-600/50 rounded-2xl" />
      </template>
      <template #title>
        <div class="text-2xl font-semibold">{{ proj.name }}</div>
      </template>
      <template #text>
        <div class="mt-2 text-[1rem]">
          {{ proj.text }}
        </div>
      </template>
      <template #button>
        <a :href="proj.url" target="_blank">
          <button class="w-full bg-cyan-500 dark:bg-slate-700 py-2 rounded-md font-semibold">
            Explore
          </button>
        </a>
      </template>
    </ProjectCard>
  </div>
</template>
