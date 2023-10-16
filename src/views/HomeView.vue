<script setup>
import { ref } from 'vue'
import Leaf from '@/assets/leaf.svg'
import Search from '@/assets/search.svg'
import Delete from '@/assets/delete.svg'
import Tick from '@/assets/tick.svg'
import Pencil from '@/assets/pencil.svg'

const showDropdown = ref(false)
const list = ref([
  {
    id: 1,
    isCompleted: true
  },
  {
    id: 2,
    isCompleted: false
  },
  {
    id: 3,
    isCompleted: true
  },
  {
    id: 4,
    isCompleted: false
  },
  {
    id: 5,
    isCompleted: true
  },
  {
    id: 6,
    isCompleted: true
  },
  {
    id: 7,
    isCompleted: true
  }
])
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
  <main class="2xl:px-40 xl:px-36 px-6 bg-background h-screen">
    <h1 class="font-semibold pt-12 text-3xl">Add Tasks</h1>
    <section class="my-6 flex justify-between items-center">
      <button class="btn-primary">+ Create</button>
      <div class="sm:flex sm:justify-between sm:items-center hidden">
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
      <div class="sm:hidden">
        <div class="relative inline-block text-left">
          <div>
            <button type="button" class="btn-primary" @click="showDropdown = !showDropdown">
              Options
            </button>
          </div>

          <div
            class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            v-if="showDropdown"
          >
            <div class="py-1" role="none">
              <a href="#" class="link">All</a>
              <a href="#" class="link">Complete</a>
              <a href="#" class="link">Incomplete</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-wrap justify-center 2xl:justify-between items-center">
      <div
        v-for="item in list"
        :key="item.id"
        class="bg-white w-96 ring-1 ring-secondary rounded-md px-4 py-2 my-5 mx-5 2xl:mx-0"
      >
        <h2
          class="font-semibold sm:text-2xl text-lg"
          :class="{ 'line-through text-green-500': item.isCompleted }"
        >
          Complete initial setup of the Todo App
        </h2>
        <small class="text-grey text-sm mt-3 font-semibold">Created At: 21.02.22</small>
        <div class="mb-2 mt-5 flex justify-between items-center">
          <div class="flex justify-between items-center">
            <Tick class="mr-5" v-if="!item.isCompleted" />
            <Pencil class="mr-5" v-if="!item.isCompleted" />
            <Delete />
          </div>
          <span class="text-white py-1 px-4 text-xs bg-primary rounded-md" v-if="item.isCompleted"
            >Completd in 1 day</span
          >
        </div>
      </div>
    </section>
  </main>
</template>
