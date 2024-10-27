<script setup>
const props = defineProps(["label", "suggesion", "autoCorrection"]);
const emits = defineEmits(["search"]);
const inputId = ref(useId());
const suggestionBoxId = ref(useId());
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
  if (evt.target.id !== inputId.value && evt.target.id !== suggestionBoxId.value) {
    focused.value = false;

    if (props.autoCorrection) {
      model.value = lastSelectedItem;
      return;
    }

    if (!matchedItem.value.length) {
      model.value = "";
      return;
    }
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
    <label :for="inputId"> {{ label }} </label>
    <div class="py-2">
      <input
        v-model.trim="model"
        class="border-2 border-black border-solid"
        :id="inputId"
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
        :id="suggestionBoxId"
        @click="onItemSelection(item)"
        class="border-solid border-2"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>
