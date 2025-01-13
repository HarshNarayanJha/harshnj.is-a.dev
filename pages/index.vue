<template>
  <section id="hero" class="py-8 bg-slate-50 dark:bg-gray-950">
    <SectionsHero />
    <Card class="w-9/12 m-auto my-8">
      <template #image>
        <img
          src="~/assets/img/me.png"
          class="w-52 aspect-square border-t-2 border-s-2 border-slate-200/50 dark:border-slate-600/50 rounded-[3.8rem] rounded-br-3xl -rotate-6 origin-top-right"
          alt="picture of the website owner"
          style="mask-image: radial-gradient(circle at 85% 15%, transparent 5%, black 5%)" />
      </template>
      <template #title>
        <div class="text-4xl font-semibold">Hey</div>
      </template>
      <template #text>
        <div class="mt-2 text-lg">
          This is my little island on the internet. I design it, develop it, plan it, program it,
          code it, and enjoy making it.
        </div>
      </template>
    </Card>
  </section>

  <div class="wave-divider bg-stone-100 dark:bg-gray-900">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-slate-50 dark:fill-gray-950"></path>
    </svg>
  </div>

  <section id="projects" class="py-8 px-40 bg-stone-100 dark:bg-gray-900">
    <SectionsProjects />
  </section>

  <div class="wave-divider bg-slate-50 dark:bg-gray-950">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-stone-100 dark:fill-gray-900"></path>
    </svg>
  </div>

  <section id="education" class="py-8 px-40 bg-slate-50 dark:bg-gray-950">
    <SectionsEducation />
  </section>

  <div class="wave-divider bg-stone-100 dark:bg-gray-900">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-slate-50 dark:fill-gray-950"></path>
    </svg>
  </div>

  <section id="work" class="py-8 px-40 bg-stone-100 dark:bg-gray-900">
    <SectionsWork />
  </section>

  <div class="wave-divider bg-slate-50 dark:bg-gray-950">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none">
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="fill-stone-100 dark:fill-gray-900"></path>
    </svg>
  </div>

  <section id="footer" class="pt-8 px-40 bg-slate-50 dark:bg-gray-950">
    <Footer />
  </section>
</template>
