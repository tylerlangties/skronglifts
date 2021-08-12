<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>SkrongLifts</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>
      <!-- could eventually loop over the next 3 workouts here -->
      <Card :source="nextWorkout" />
      <!-- <ion-button
        @click="$router.push('/workout')"
        size="large"
        color="danger"
        class="ml-1 mr-1 pt-2"
        expand="block"
        >Start Workout</ion-button
      > -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  // IonButton,
} from "@ionic/vue";
import Card from "../components/Card.vue";
import { getCurrentWorkout } from "@/services/index";

export default defineComponent({
  name: "Home",
  components: {
    Card,
    // IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const nextWorkout = getCurrentWorkout();
    return { nextWorkout };
  },
});
</script>
