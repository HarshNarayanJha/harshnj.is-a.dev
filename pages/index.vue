<template>
  <section id="hero" class="py-8 bg-slate-50 dark:bg-gray-950">
    <Hero />
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
    <h1 class="text-4xl font-bold"># Projects&nbsp;&nbsp;🛠</h1>
    <div class="grid grid-cols-3 py-10 px-15">
      <Card
        v-for="_ in [1, 2, 3, 4, 5]"
        :horizontal="false"
        class="w-96 my-4 mx-8"
        :tags="['Vuejs', 'SocketIO', 'Javascript']">
        <template #image>
          <img
            src="https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=400&dpr=1"
            alt="Thumbnail for project 1"
            class="w-full border-2 border-b-0 border-slate-200/50 dark:border-slate-600/50 rounded-2xl" />
        </template>
        <template #title>
          <div class="text-2xl font-semibold">Echo - Notepad</div>
        </template>
        <template #text>
          <div class="mt-2 text-lg">
            Realtime private notepad for you and your friends to write in sync
          </div>
        </template>
      </Card>
    </div>
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
    <h1 class="text-4xl font-bold"># Education&nbsp;&nbsp;📚</h1>

    <p class="mb-4 mt-8 font-medium">Not been to a lot of places, but been to the best places.</p>
    <div class="container flex flex-col-reverse relative">
      <div class="absolute left-0 top-0 h-full w-3 rounded-full bg-green-400"></div>

      <div class="bg-sky-600 p-4 rounded-xl my-4 w-96 ml-8 shadow-md text-sky-50">
        <h3 class="font-semibold text-lg mb-1">First School Ever</h3>
        <p class="leading-tight text-justify">Rose Public School - Laheriasarai, Darbhanga</p>
      </div>

      <div class="bg-sky-600 p-4 rounded-xl my-4 w-96 ml-8 shadow-md text-sky-50">
        <h3 class="font-semibold text-lg mb-1">Then a new School</h3>
        <p class="leading-tight text-justify">Kendriya Vidyalaya No. 1, AFS, Darbhanga</p>
      </div>

      <div class="bg-sky-600 p-4 rounded-xl my-4 w-96 ml-8 shadow-md text-sky-50">
        <h3 class="font-semibold text-lg mb-1">Currently at</h3>
        <p class="leading-tight text-justify">Birla Institute of Technology</p>
      </div>
    </div>
  </section>
</template>
