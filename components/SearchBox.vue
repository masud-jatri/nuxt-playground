<script setup>
const props = defineProps(["label", "suggesion"]);
const emits = defineEmits(["search"]);
const id = ref(useId());
const model = defineModel();
const focused = ref(false);
let lastSelectedItem = "";

const matchedItem = computed(() =>
  props.suggesion.filter((item) => {
    return item.toLowerCase().includes(model.value.toLowerCase());
  })
);

const onFocus = () => {
  focused.value = true;
};

const onInput = (evt) => {
  emits("search", evt);
};

const onItemSelection = (item) => {
  model.value = item;
  focused.value = false;
  lastSelectedItem = item;
};

const clickoutsideHandler = (evt) => {
  if (evt.target.id !== id.value) {
    focused.value = false;
    model.value = lastSelectedItem;
  }
};

onMounted(() => {
  window.addEventListener("click", clickoutsideHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("click", clickoutsideHandler);
});
</script>

<template>
  <div class="p-5">
    <label :for="id"> {{ label }} </label>
    <div class="py-2">
      
      <input
        v-model.trim="model"
        class="border-2 border-black border-solid"
        :id="id"
        @input="onInput"
        @focus="onFocus"
      />
    </div>
    <div
      v-if="model && focused && matchedItem.length"
      class="border-solid border-2 border-black"
    >
      <div
        v-for="item in matchedItem"
        @click="onItemSelection(item)"
        class="border-solid border-2"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
