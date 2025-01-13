<template>
  <h1 class="text-4xl font-bold"># Projects&nbsp;&nbsp;🛠</h1>
  <div class="grid grid-cols-3 py-10 px-15">
    <Card
      v-for="_ in [1, 2, 3, 4, 5]"
      :horizontal="false"
      :bg="`bg-stone-50 dark:bg-gray-800`"
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
</template>
