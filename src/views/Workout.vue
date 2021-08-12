<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-text slot="end"><h6 class="pr-2 m-0">Workout A</h6></ion-text>
        <ion-title>Back</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <!-- Exercise Rows -->
        <ion-row v-for="exercise in currentExercises" :key="exercise.id">
          <ion-col>
            <ion-text>
              <h6 class="m-0">
                {{ exercise.name }} {{ exercise.sets }} X {{ exercise.reps }}
              </h6>
            </ion-text>
          </ion-col>
          <!-- Set Rows -->
          <ion-row>
            <ion-col
              v-for="(sets, index) in exercise.sets"
              :key="index"
              class="center"
            >
              <SetButton :exercise="exercise" />
            </ion-col>
          </ion-row>
          <ion-col class="exercise__header">
            <ion-button @click="$router.push('/edit-exercise')"
              >Edit <ion-icon :icon="arrowForwardOutline"></ion-icon
            ></ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonGrid,
  IonText,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/vue";
import SetButton from "../components/SetButton.vue";
import { arrowForwardOutline } from "ionicons/icons";
import { defineComponent } from "vue";
import { getCurrentWorkout } from "@/services/index";

export default defineComponent({
  name: "Home",
  components: {
    SetButton,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonButton,
    IonRow,
    IonGrid,
    IonCol,
    IonText,
    IonPage,
    IonTitle,
    IonToolbar,
  },
  setup() {
    const currentWorkout = getCurrentWorkout();
    const currentExercises = currentWorkout.exercises;
    return { arrowForwardOutline, currentWorkout, currentExercises };
  },
});
</script>

<style>
.exercise__header {
  display: flex;
  justify-content: flex-end;
}
.center {
  display: flex;
  justify-content: center;
}
</style>
