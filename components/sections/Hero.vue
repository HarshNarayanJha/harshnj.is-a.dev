<script setup lang="ts">
import { animate } from 'animejs'
import { useAnime, useAnimeController } from 'v-anime'

const root = ref(null)
const scope = ref(null)

const heroAnimation = () => {
  animate('#hero-blob', {
    scale: [{ from: 0.1, ease: 'outCubic', duration: 2000, delay: 1500 }],
  })

  animate('#hero-name', {
    translateY: [{ from: 50, ease: 'outCubic', duration: 300, delay: 500 }],
    opacity: [{ from: 0, ease: 'outCubic', duration: 500, delay: 500 }],
  })

  animate('#hero-tags', {
    opacity: [{ from: 0, ease: 'inQuad', duration: 500, delay: 500 }],
  })
}

useAnime({
  root: root,
  scope: scope,
  animeFunctions: [heroAnimation],
})
</script>

<template>
  <main
    class="w-full h-[50svh] flex flex-col justify-start items-center text-center mt-24 md:mt-[15em] p-8"
    ref="root"
  >
    <div
      id="hero-blob"
      class="absolute top-0 bottom-0 m-auto bg-teal-500 opacity-30 md:opacity-20 w-4/6 md:w-2/6 aspect-square rounded-full blur-xl md:blur-[96px]"
    ></div>
    <h1
      id="hero-name"
      class="mt-30 z-10 text-7xl md:text-8xl py-4 md:backdrop-blur-sm font-mono font-black tracking-tighter bg-gradient-to-r bg-clip-text text-transparent from-zinc-200 via-slate-600 via-40% dark:from-stone-700 dark:via-zinc-200 dark:via-30% dark:to-zinc-50 transform-gpu"
      style="mask: linear-gradient(transparent, black 15%, black 85%, transparent)"
    >
      This is
      <span
        class="bg-gradient-to-r from-green-500 to-sky-500 text-transparent bg-clip-text md:drop-shadow-[0_0_8px_lightblue] dark:drop-shadow-[0_0_8px_black]"
      >
        Harsh Narayan Jha
      </span>
    </h1>
    <h2
      id="hero-tags"
      class="z-10 md:backdrop-blur py-4 text-xl md:text-2xl opacity-90 font-semibold mt-4 md:mt-8 text-slate-700 dark:text-slate-300 animate-pulse"
      style="mask: linear-gradient(transparent, black 25%, black 75%, transparent)"
    >
      Developer <br />
      Problem Solver <br />
      Open-Source contributor <br />
    </h2>
  </main>
</template>
