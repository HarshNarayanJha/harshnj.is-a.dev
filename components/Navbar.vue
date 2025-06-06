<script setup lang="ts">
import { animate, stagger } from 'animejs'
import { useAnime, useAnimeController } from 'v-anime'

const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
}

const root = ref(null)
const scope = ref(null)

const navbarAnimation = () => {
  animate('#nav-lead', {
    translateY: [{ from: -50, ease: 'outCubic', duration: 300, delay: 100 }],
    opacity: [{ from: 0, ease: 'outCubic', duration: 200, delay: 100 }],
  })

  animate('#nav-links svg', {
    rotate: [
      {
        from: 360,
        ease: 'outCubic',
        duration: 500,
        delay: stagger(100, { start: 500, ease: 'outQuad' }),
      },
    ],
    scale: [
      {
        from: 0,
        ease: 'outCubic',
        duration: 500,
        delay: stagger(100, { start: 500, ease: 'outQuad' }),
      },
    ],
    opacity: [
      {
        from: 0,
        ease: 'outCubic',
        duration: 500,
        delay: stagger(100, { start: 500, ease: 'outQuad' }),
      },
    ],
  })
}

useAnime({
  root: root,
  scope: scope,
  animeFunctions: [navbarAnimation],
})
</script>

<template>
  <header
    class="w-full md:sticky md:top-0 md:backdrop-blur-sm bg-gradient-to-b from-slate-200 dark:from-slate-950"
    style="mask: linear-gradient(black 80%, transparent)" ref="root">
    <nav
      class="w-full m-auto p-2 md:p-4 pt-8 flex flex-col md:grid md:grid-cols-5 md:grid-rows-1 space-y-4 md:space-y-[unset] place-content-stretch place-items-center">
      <p id="nav-lead" class="md:place-self-center md:col-start-3 text-xl font-bold opacity-85 tracking-wide">
        harshnj.is-a.dev
      </p>
      <div id="nav-links" class="md:place-self-end md:col-span-1 space-x-4">
        <button title="Toggle Theme" aria-title="Toggle Theme" @click="toggleColorMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1.7em"
            height="1.7em"
            class="inline-flex will-change-transform"
            fill="currentColor"
            viewBox="0 0 32 32">
            <path
              d="M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7"
              class="transition-transform duration-300 rotate-0 dark:rotate-180 origin-center will-change-transform" />
            <path
              d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"
              class="transition-transform duration-300 rotate-0 dark:-rotate-180 origin-center will-change-transform" />
          </svg>
        </button>
        <a href="https://github.com/HarshNarayanJha" target="_blank">
          <GithubIcon class="inline-block" />
        </a>
        <a href="https://linkedin.com/in/HarshNarayanJha" target="_blank">
          <LinkedinIcon class="inline-block" />
        </a>
        <a href="https://leetcode.com/u/HarshNarayanJha" target="_blank">
          <CodeIcon class="inline-block" />
        </a>
      </div>
      <button
        class="place-self-center md:col-span-1 px-4 py-1 bg-transparent bg-gradient-to-b from-transparent to-neutral-200 dark:to-neutral-900 rounded-xl border-2 border-neutral-500 border-opacity-40 group">
        <a href="/Resume_Simple.pdf" title="download my resume" download>
          <DownloadIcon class="inline translate-y-0 group-hover:translate-y-1 transition-transform duration-200" />
        </a>
        <span class="text-xl mx-2 font-mono opacity-25">|</span>
        <a href="/Resume_Simple.pdf" target="_blank" title="open resume in new tab"> RESUME </a>
      </button>
    </nav>
  </header>
</template>
