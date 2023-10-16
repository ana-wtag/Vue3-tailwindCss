<script setup>
import Leaf from '@/assets/leaf.svg'
import Search from '@/assets/search.svg'
import Delete from '@/assets/delete.svg'
import Tick from '@/assets/tick.svg'
import Pencil from '@/assets/pencil.svg'
</script>

<template>
  <header class="border-b border-secondary">
    <nav class="h-18 bg-white flex justify-between 2xl:px-36 px-6 items-center">
      <div class="flex items-center">
        <Leaf />
        <a class="text-primary text-4xl font-semibold invisible lg:visible ml-3 cursor-pointer"
          >Todos</a
        >
      </div>
      <Search />
    </nav>
  </header>
  <main class="2xl:px-36 px-6 bg-background">
    <h1 class="font-semibold pt-12 text-3xl">Add Tasks</h1>
    <section class="my-6 flex justify-between items-center">
      <button class="bg-primary rounded-md px-4 py-0.5 text-white font-medium text-base">
        + Create
      </button>
      <div class="flex justify-between items-center">
        <button
          class="bg-white rounded-md px-3 py-2 font-medium text-base ring-1 ring-secondary mr-4"
        >
          All
        </button>
        <button
          class="bg-white rounded-md px-3 py-2 font-medium text-base ring-1 ring-secondary mr-4"
        >
          Incomplete
        </button>
        <button class="bg-white rounded-md px-3 py-2 font-medium text-base ring-1 ring-secondary">
          Complete
        </button>
      </div>
    </section>
    <section class="sm:flex sm:flex-wrap justify-center 2xl:justify-between items-center">
      <div
        v-for="i in 10"
        :key="i"
        class="bg-white w-96 ring-1 ring-secondary rounded-md px-4 py-2 my-5 mx-2 2xl:mx-0"
      >
        <h2 class="font-semibold text-2xl">Complete initial setup of the Todo App</h2>
        <small class="text-grey text-sm mt-3 font-semibold">Created At: 21.02.22</small>
        <div class="mb-2 mt-5 flex justify-between items-center">
          <div class="flex justify-between items-center">
            <Tick class="mr-5" />
            <Pencil class="mr-5" />
            <Delete />
          </div>
          <span class="text-white py-1 px-4 text-xs bg-primary rounded-md">Completd in 1 day</span>
        </div>
      </div>
    </section>
  </main>
</template>
