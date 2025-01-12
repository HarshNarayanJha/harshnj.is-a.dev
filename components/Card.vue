<template>
  <div class="p-2 border border-slate-900/15 dark:border-zinc-400/15 rounded-lg">
    <div
      :class="[
        'p-4 flex items-start justify-start gap-8 border-2 border-slate-300/50 dark:border-zinc-800/50 rounded-lg',
        horizontal ? 'flex-row' : 'flex-col',
        bg || 'bg-white dark:bg-gray-900',
      ]">
      <div id="leading-image">
        <slot name="image" />
      </div>
      <div id="text-content" class="mt-4">
        <slot name="title" />
        <slot name="text" />
      </div>

      <div v-if="tags" class="flex flex-wrap gap-2">
        <span
          v-for="tag in tags"
          class="rounded-full font-mono font-semibold text-green-50 bg-green-600 dark:text-slate-50 dark:bg-slate-700 px-3 py-1">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: true,
    },
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
