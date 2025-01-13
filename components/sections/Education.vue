<script setup lang="ts">
const education = await queryContent('/education').findOne()
</script>

<template>
  <h1 class="text-4xl font-bold"># Education&nbsp;&nbsp;📚</h1>

  <p class="mb-4 mt-8 font-medium">Not been to a lot of places, but for sure to the best places.</p>
  <div class="container flex flex-col-reverse relative py-8 px-8">
    <div class="absolute left-0 top-8 h-full w-4 rounded-full bg-green-400"></div>

    <Card class="w-full my-4 mx-8 relative" v-for="edu in education.body">
      <template #image>
        <div class="absolute -left-10 top-1/2 w-28 h-0.5 bg-zinc-400 opacity-40"></div>
        <img
          :src="edu.img"
          class="w-48 rounded-full border-2 border-stone-300 dark:border-stone-700 p-1" />
      </template>

      <template #title>
        <h3 class="font-semibold text-2xl">{{ edu.name }}</h3>
        <h4 class="font-normal text-[1.1rem] mb-1">{{ edu.loc }}</h4>

        <h4 class="font-semibold text-sm mb-4">{{ edu.dur }}</h4>
      </template>

      <template #text>
        <p class="leading-tight text-justify">
          {{ edu.text }}
        </p>
      </template>
    </Card>
  </div>
</template>
