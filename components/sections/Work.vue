<script setup lang="ts">
const work = await queryCollection('work').first()
</script>

<template>
  <h1 class="text-4xl font-bold"># Work&nbsp;&nbsp; 🏢</h1>
  <p class="mb-4 mt-8 font-medium">
    Don't have any real work experience yet. Care to give me one?, I won't disappoint you...
  </p>
  <div class="container flex flex-col-reverse items-end relative py-8 px-8">
    <div class="absolute right-0 top-8 h-full w-4 rounded-full bg-sky-400"></div>

    <Card
      :bg="`bg-stone-50 dark:bg-gray-800`"
      class="w-full my-4 mx-8 relative"
      v-for="wrk in work.data">
      <template #image>
        <div class="absolute -right-10 top-1/2 w-28 h-0.5 bg-zinc-400 opacity-40"></div>
        <img
          :src="wrk.img"
          class="w-48 rounded-full border-2 border-stone-300 dark:border-stone-700 p-1" />
      </template>

      <template #title>
        <h3 class="font-semibold text-2xl">{{ wrk.name }}</h3>
        <h4 class="font-normal text-[1.1rem] mb-1">{{ wrk.loc }}</h4>

        <h4 class="font-semibold text-sm mb-4">{{ wrk.dur }}</h4>
      </template>

      <template #text>
        <p class="leading-tight text-justify">
          {{ wrk.text }}
        </p>
      </template>
    </Card>
  </div>
</template>
