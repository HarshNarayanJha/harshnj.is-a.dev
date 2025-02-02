<template>
  <div
    class="w-full min-h-[50svh] flex flex-col content-center text-center justify-center place-items-center space-y-8 md:space-y-16 p-4 md:py-10 md:px-15 my-10 md:my-20">
    <h1 class="text-4xl md:text-6xl lg:text-8xl font-bold">Ready to Work With Me?</h1>
    <p class="text-lg md:text-2xl font-medium px-4 md:px-0">
      Grab my Resume and contact me. Let's create something Amazing together!
    </p>

    <button
      class="w-fit px-4 md:px-6 py-2 bg-transparent rounded-xl border-2 border-slate-500 border-opacity-40 shadow-lg md:shadow-2xl shadow-slate-600/75 hover:scale-105 transition-transform">
      <a href="/Resume.pdf" title="download my resume" download class="text-sm md:text-base">
        <DownloadIcon class="inline w-4 h-4 md:w-5 md:h-5" />
      </a>
      <span class="text-xl md:text-2xl mx-2 font-mono opacity-25">|</span>
      <a
        href="/Resume.pdf"
        target="_blank"
        title="open resume in new tab"
        class="text-sm md:text-base">
        GET MY <b>RESUME</b>
      </a>
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
    <div class="flex justify-center items-center pb-8 md:pb-12">
      <div class="text-zinc-500">
        <p class="text-center text-sm md:text-base">
          &copy; 2024 Harsh Narayan Jha.
          <br />
          <span class="text-xs md:text-sm"> Built with Vue.js & Nuxt </span>
        </p>
      </div>
    </div>
  </div>
</template>
