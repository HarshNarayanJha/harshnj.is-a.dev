<template>
  <div
    class="w-full h-full flex flex-col content-center text-center justify-center place-items-center space-y-16 py-10 px-15 my-20">
    <h1 class="text-8xl font-bold">Ready to Work With Me?</h1>
    <p class="text-2xl font-medium">
      Grab my Resume and contact me. Let's create something Amazing together!
    </p>

    <button
      class="w-fit px-6 py-2 bg-transparent rounded-xl border-2 border-slate-500 border-opacity-40 shadow-2xl shadow-slate-600/75">
      <a href="/resume.md" title="download my resume" download> <DownloadIcon class="inline" /></a>
      <span class="text-2xl mx-2 font-mono opacity-25">|</span>
      <a href="/resume.md" target="_blank" title="open resume in new tab"> GET MY <b>RESUME</b> </a>
    </button>
  </div>
  <div class="wave-divider bg-zinc-200 dark:bg-gray-900">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M0,60 C150,80 250,50 400,70 C550,90 650,40 800,60 C950,80 1050,40 1200,60 L1200,0 L0,0 Z"
        class="fill-slate-50 dark:fill-gray-950"></path>
    </svg>
  </div>

  <div class="bg-zinc-200 dark:bg-gray-900">
    <div class="flex justify-center items-center pb-12">
      <div class="text-zinc-500">
        <p class="text-center">
          &copy; 2024 Harsh Narayan Jha.
          <br />
          <span class="text-sm"> Built with Vue.js & Nuxt </span>
        </p>
      </div>
    </div>
  </div>
</template>
