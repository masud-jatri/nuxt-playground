<script setup lang="ts">
const cityList = ["Dhaka", "Dinajpur", "Rajshahi", "Rangpur", "Sylhet", "Shariatpur"];
const pickup = ref("");
const drop = ref("");

const onPickSearch = (evt: Event) => {
  console.log("pick search evt fired", evt);
};

const onDropOffSearch = (evt: Event) => {
  console.log("drop search evt fired", evt);
};
</script>

<template>
  <div class="p-5">
    <div>
      {{ "pickup: " + pickup }}
    </div>
    <div>
      {{ "drop: " + drop }}
    </div>
    <SearchBox
      v-model="pickup"
      label="Pickup Location(Auto Correction -> On)"
      :suggesion="cityList"
      :autoCorrection="true"
      @search="onPickSearch"
    />
    <SearchBox
      v-model="drop"
      label="Drop Off Location(Auto Correction -> Off)"
      :suggesion="cityList"
      :autoCorrection="false"
      @search="onDropOffSearch"
    />
  </div>
</template>
