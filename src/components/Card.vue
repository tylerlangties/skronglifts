<template>
  <ion-card class="Card" @click="$router.push('/workout')">
    <ion-item>
      <ion-card-subtitle slot="start"
        >Workout {{ source.cycle }}</ion-card-subtitle
      >
      <ion-card-subtitle slot="end">{{ source.date }}</ion-card-subtitle>
    </ion-item>

    <ion-item
      v-for="(exercise, key) in source.exercises"
      :key="key"
      class="ion-activated"
    >
      <ion-label slot="start">{{ exercise.name }}</ion-label>
      <ion-label class="right" slot="end"
        >{{ `${exercise.sets}x${exercise.reps}` }}
        {{ exercise.weight }}lb</ion-label
      >
    </ion-item>
  </ion-card>
</template>

<script>
import { IonCard, IonItem, IonLabel, IonCardSubtitle } from "@ionic/vue";
import { warning } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonCard,
    IonItem,
    IonLabel,
    IonCardSubtitle,
  },
  props: {
    source: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { warning };
  },
});
</script>

<style>
.right {
  text-align: right;
}

.Card {
  border-left: 5px solid red;
}
</style>
