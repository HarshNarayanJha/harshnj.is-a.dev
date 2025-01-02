<template>
  <section id="hero" class="mb-20 py-8">
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

  <section id="projects" class="mb-20 py-8 px-40">
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
</template>
