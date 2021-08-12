<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button>Back</ion-back-button>
        </ion-buttons>
        <ion-title>Squat</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-list-header>
          <ion-label>Edit Squat</ion-label>
        </ion-list-header>

        <ion-item>
          <ion-label position="floating">Exercise Weight</ion-label>
          <ion-input type="number" value="45"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>Gay level</ion-label>
          <ion-select value="5x5" ok-text="Okay" cancel-text="Dismiss">
            <ion-select-option value="5x5">Mild</ion-select-option>
            <ion-select-option value="3x5">Moderate</ion-select-option>
            <ion-select-option value="1x5">Super</ion-select-option>
            <ion-select-option value="3x8">Ultra</ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonItem,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonContent,
  IonPage,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonInput,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    IonItem,
    IonLabel,
    IonBackButton,
    IonButtons,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonPage,
    IonList,
    IonListHeader,
    IonSelect,
    IonSelectOption,
    IonInput,
  },
});
</script>

<style>
.exercise__header {
  display: flex;
  justify-content: flex-end;
}
</style>