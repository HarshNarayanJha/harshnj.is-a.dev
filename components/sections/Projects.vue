<script setup lang="ts">
const project = await queryCollection('project').first()
</script>

<template>
  <h1 class="text-4xl font-bold"># Projects&nbsp;&nbsp;🛠</h1>
  <div class="grid grid-cols-3 py-10 px-15">
    <Card
      v-for="proj in project.data"
      :horizontal="false"
      :bg="`bg-stone-50 dark:bg-gray-800`"
      class="w-96 my-4 mx-8"
      :tags="proj.tags">
      <template #image>
        <img
          :src="proj.img"
          :alt="proj.name"
          class="w-full border-2 border-b-0 border-slate-200/50 dark:border-slate-600/50 rounded-2xl" />
      </template>
      <template #title>
        <div class="text-2xl font-semibold">{{ proj.name }}</div>
      </template>
      <template #text>
        <div class="mt-2 text-lg">
          {{ proj.text }}
        </div>
      </template>
    </Card>
  </div>
</template>
