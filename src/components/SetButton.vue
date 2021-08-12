<template>
  <ion-button @click="onSelect()" :color="color" shape="round">{{
    counter
  }}</ion-button>
</template>

<script lang="ts">
import { IonButton } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonButton,
  },
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const color = ref("primary");
    const completed = ref(false);
    const repCount = ref(props.exercise.reps);
    const counter = ref(+repCount.value);

    const onSelect = () => {
      if (completed.value === false) {
        completed.value = true;
        color.value = "danger";
        context.emit("completed", props.exercise.id);
      } else if (counter.value === 0) {
        completed.value = false;
        counter.value = repCount.value;
        color.value = "primary";
        context.emit("reset", props.exercise.id);
      } else {
        counter.value--;
      }
    };
    return { completed, repCount, color, onSelect, counter };
  },
});
</script>
