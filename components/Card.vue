<template>
  <div
    :class="[
      'p-4 flex items-start justify-start gap-8 bg-white dark:bg-gray-900 border-2 border-slate-300/50 dark:border-zinc-800/50 shadow-md shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-md rounded-lg hover:rounded-xl',
      horizontal ? 'flex-row' : 'flex-col',
    ]">
    <div id="leading-image">
      <slot name="image" />
    </div>
    <div id="text-content" class="mt-4">
      <div class="text-4xl font-semibold"><slot name="title" /></div>
      <div class="mt-2 text-lg"><slot name="text" /></div>
    </div>

    <div v-if="tags" class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        class="rounded-full font-mono font-semibold text-green-50 bg-green-600 dark:text-slate-50 dark:bg-slate-700 px-3 py-1">
        {{ tag }}
      </span>
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
    tags: {
      type: Array[String],
      default: [],
    },
  },
}
</script>
