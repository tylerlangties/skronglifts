<template>
  <ion-button @click="onSelect()" :color="color" shape="round">{{
    repCount
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
    },
  },
  setup(props) {
    const color = ref("primary");
    const complete = ref(false);
    const repCount = ref(5);

    const onSelect = () => {
      if (complete.value === false) {
        complete.value = true;
        color.value = "danger";
      } else if (repCount.value === 0) {
        complete.value = false;
        repCount.value = 5;
        color.value = "primary";
      } else {
        repCount.value--;
      }
    };
    return { complete, repCount, color, onSelect };
  },
});
</script>
