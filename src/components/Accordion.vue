<script setup>
import { ref } from 'vue'
import ChevronDown from '@/assets/chevron-down.svg'

const props = defineProps({
  isMultipleOpen: Boolean
})

const list = ref([
  {
    id: 1,
    isOpen: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis libero, finibus sit amet aliquam quis, mollis laoreet turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer suscipit erat vitae nunc maximus maximus a eu nisi. Duis lacus erat, tempus id diam ac, sodales finibus mauris. Sed egestas nibh non nulla laoreet feugiat. Ut in dapibus leo, ut pellentesque purus. Pellentesque efficitur egestas orci'
  },
  {
    id: 2,
    isOpen: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis libero, finibus sit amet aliquam quis, mollis laoreet turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer suscipit erat vitae nunc maximus maximus a eu nisi. Duis lacus erat, tempus id diam ac, sodales finibus mauris. Sed egestas nibh non nulla laoreet feugiat. Ut in dapibus leo, ut pellentesque purus. Pellentesque efficitur egestas orci'
  },
  {
    id: 3,
    isOpen: false,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec turpis libero, finibus sit amet aliquam quis, mollis laoreet turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer suscipit erat vitae nunc maximus maximus a eu nisi. Duis lacus erat, tempus id diam ac, sodales finibus mauris. Sed egestas nibh non nulla laoreet feugiat. Ut in dapibus leo, ut pellentesque purus. Pellentesque efficitur egestas orci'
  }
])

function activate(item) {
  item.isOpen = !item.isOpen
  if (!props.isMultipleOpen) {
    list.value.forEach((obj) => {
      if (obj.id !== item.id) {
        obj.isOpen = false
      }
    })
  }
}
</script>

<template>
  <ul class="w-96 rounded-sm shadow-md divide-y divide-dashed">
    <li v-for="item in list" :key="item.id">
      <div
        class="py-2.5 px-6 flex justify-between cursor-pointer hover:bg-gray-100"
        @click="activate(item)"
        :class="{ 'bg-gray-100': item.isOpen }"
      >
        <p>{{ `Control ${item.id}` }}</p>

        <ChevronDown
          :class="{ 'rotate-180': item.isOpen }"
          class="transition duration-300 ease-in-out"
        />
      </div>
      <div
        class="text-black py-2.5 px-6 max-h-52 overflow-auto transform duration-300 ease-in-out"
        v-if="item.isOpen"
      >
        {{ item.content }}
      </div>
    </li>
  </ul>
</template>
