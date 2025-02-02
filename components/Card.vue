<template>
  <div class="p-2 border border-slate-900/15 dark:border-zinc-400/15 rounded-lg">
    <div
      :class="[
        'p-8 md:p-4 flex flex-col md:flex-row items-center justify-start h-full gap-8 border-2 border-slate-300/50 dark:border-zinc-800/50 rounded-lg bg-white dark:bg-gray-900 drop-shadow-lg',
      ]">
      <div id="leading-image">
        <slot name="image" />
      </div>
      <div id="text-content" class="mt-4">
        <slot name="title" />
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
