<script setup lang="ts">
const work = await queryCollection('work').first()
</script>

<template>
  <h1 class="font-bold mb-8 text-4xl md:text-5xl">Work&nbsp;&nbsp; 🏢</h1>
  <p class="mb-4 mt-8 font-medium text-[1rem]">
    Here are some highlights of my professional experience and the impactful work I've done so far.
  </p>
  <div class="container flex flex-col-reverse items-end relative py-8 px-4 md:px-8">
    <div class="absolute right-0 top-8 h-full w-1 md:w-2 rounded-full bg-sky-400"></div>

    <WorkCard
      :bg="`bg-stone-50 dark:bg-gray-950`"
      class="w-full my-4 mx-8 relative"
      v-for="wrk in work.data">
      <template #image>
        <img
          :src="wrk.img"
          class="w-48 p-1" />
      </template>

      <template #title>
        <h3 class="font-semibold text-2xl">{{ wrk.name }}</h3>
        <h4 class="font-normal text-[0.8rem] mb-4">{{ wrk.location }}</h4>

        <h4 class="font-semibold text-sm mb-4">{{ wrk.duration }}</h4>
      </template>

      <template #text>
        <p class="leading-tight text-justify mb-8">
          {{ wrk.text }}
        </p>
      </template>
    </WorkCard>
  </div>
</template>
