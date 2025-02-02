<template>
  <div class="p-2 border border-slate-900/15 dark:border-zinc-400/15 rounded-lg">
    <div
      :class="[
        'p-4 flex flex-col items-start justify-start h-full gap-4 sm:gap-8 border-2 border-slate-300/50 dark:border-zinc-800/50 rounded-lg drop-shadow-lg transition-all',
        bg || 'bg-white dark:bg-gray-900',
      ]">
      <div id="leading-image" class="flex-1 mx-auto">
        <slot name="image" />
      </div>
      <div id="text-content" class="mt-2 sm:mt-4 w-full">
        <slot name="title" />
        <slot name="text" />
      </div>

      <div v-if="tags" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          class="rounded-full text-xs sm:text-sm font-mono font-semibold text-green-50 bg-green-600 dark:text-slate-50 dark:bg-stone-700 px-2 sm:px-3 py-1 transition-colors">
          {{ tag }}
        </span>
      </div>
      <div class="w-full">
        <slot name="button" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: '',
    },
    tags: {
      type: Array[String],
      default: [],
    },
  },
}
</script>
