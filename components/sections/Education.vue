<script setup lang="ts">
const education = await queryCollection('education').first()
</script>

<template>
  <h1 class="font-bold mb-8 text-4xl md:text-5xl">Education&nbsp;&nbsp;📚</h1>

  <p class="mb-4 mt-8 font-medium text-[1rem]">
    Not been to a lot of places, but for sure to the best places.
  </p>
  <div class="container flex flex-col-reverse relative py-8 px-4 md:px-8 mx-auto">
    <div class="absolute left-0 top-8 h-full w-1 md:w-2 rounded-full bg-green-400"></div>

    <EducationCard
      class="w-full my-4 mx-4 sm:mx-4 relative transition-all hover:scale-102"
      v-for="edu in education.data">
      <template #image>
        <img
          :src="edu.img"
          :alt="edu.name"
          loading="lazy"
          class="w-48 rounded-full border-2 border-stone-300 dark:border-stone-700 hover:border-green-500 hover:border-4 p-1 transition-transform hover:scale-105" />
      </template>

      <template #title>
        <h3 class="font-semibold text-xl sm:text-2xl">{{ edu.name }}</h3>
        <h4 class="font-normal text-base sm:text-[1.1rem] mb-1 text-gray-600 dark:text-gray-300">
          {{ edu.loc }}
        </h4>
        <h4 class="font-semibold text-sm mb-4 text-gray-500">{{ edu.dur }}</h4>
      </template>

      <template #text>
        <p class="leading-relaxed text-justify text-gray-700 dark:text-gray-200">
          {{ edu.text }}
        </p>
      </template>
    </EducationCard>
  </div>
</template>
