<template>
  <div class="p-2 border border-slate-900/15 dark:border-zinc-400/15 rounded-lg">
    <div
      :class="[
        'p-4 flex flex-col items-start justify-start h-full gap-8 border-2 border-slate-300/50 dark:border-zinc-800/50 rounded-lg',
        bg || 'bg-white dark:bg-gray-900',
      ]">
      <div id="leading-image" class="self-center flex-1">
        <slot name="image" />
      </div>
      <div id="text-content" class="mt-4">
        <slot name="title" />
        <slot name="text" />
      </div>

      <div v-if="tags" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          class="rounded-full text-sm font-mono font-semibold text-green-50 bg-green-600 dark:text-slate-50 dark:bg-stone-700 px-3 py-1">
          {{ tag }}
        </span>
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
