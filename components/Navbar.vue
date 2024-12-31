<template>
  <header
    class="w-full sticky top-0 backdrop-blur-sm bg-gradient-to-b from-slate-200 dark:from-slate-950"
    style="mask: linear-gradient(black 55%, transparent)">
    <nav
      class="w-4/5 m-auto p-4 pt-8 grid grid-cols-3 grid-rows-1 place-content-stretch place-items-center">
      <div class="place-self-start"></div>
      <p class="place-self-center text-xl font-bold opacity-85 tracking-wide">harshnj.is-a.dev</p>
      <div class="place-self-end space-x-4">
        <button
          title="Toggle Theme"
          aria-title="Toggle Theme"
          onclick="document.documentElement.classList.toggle('dark');">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="1.8em"
            height="1.8em"
            class="inline-flex"
            fill="currentColor"
            viewBox="0 0 32 32">
            <path
              d="M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7"
              class="transition-transform duration-300 rotate-0 dark:rotate-180 origin-center" />
            <path
              d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z"
              class="transition-transform duration-300 rotate-0 dark:-rotate-180 origin-center" />
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
    </nav>
  </header>
</template>
