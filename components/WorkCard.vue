<template>
  <div class="p-2 border border-slate-900/15 dark:border-zinc-400/15 rounded-lg">
    <div
      :class="[
        'p-4 flex flex-col md:flex-row items-start justify-start h-full gap-4 md:gap-8 border-2 border-slate-300/50 dark:border-zinc-800/50 rounded-lg',
        bg || 'bg-white dark:bg-gray-900',
      ]">
      <div id="leading-image" class="self-center">
        <slot name="image" />
      </div>
      <div id="text-content" class="mt-2 sm:mt-4 w-full">
        <slot name="title" />
        <slot name="text" />
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
  },
}
</script>
