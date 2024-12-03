<template>
  <h1 class="text-center">Especies</h1>

  <div class="d-flex justify-content-center mb-1">
    <div class="col-md-6 text-center m-2">
      <button v-if="prev != null" class="btn btn-warning" @click="anterior()">
        Anterior
      </button>
    </div>
    <div class="col-md-6 text-center m-2">
      <button v-if="next != null" class="btn btn-warning" @click="siguiente()">
        Siguiente
      </button>
    </div>
  </div>

  <div class="row justify-content-center">
    <div
      v-for="especie in especies"
      :key="especie"
      class="col-md-3 mb-2 col-lg-2 col-sm-4"
      @click="seleccionado = especie"
      role="button"
      data-bs-toggle="modal"
      data-bs-target="#modalId"
    >
      <div class="card">
        <img
          class="card-img-top"
          :src="
            'https://starwars-visualguide.com/assets/img/species/' +
            especie.url.split('/')[5] +
            '.jpg'
          "
          alt="Aqui va la imagen de la especie :v"
          onerror="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ especie.name }}
          </h5>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="modalId"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    role="dialog"
    aria-labelledby="modalTitleId"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
      role="document"
    >
      <div v-if="seleccionado.name != null" class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitleId">
            {{ seleccionado.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="d-flex justify-content-center">
            <img
              class="card-img-top shadow"
              style="height: 200px; width: auto; border-radius: 5px"
              :src="
                'https://starwars-visualguide.com/assets/img/species/' +
                seleccionado.url.split('/')[5] +
                '.jpg'
              "
              alt="Aqui va la imagen de la especie :v"
              onerror="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
            />
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Nombre:</span>
            <p class="card-text">{{ seleccionado.name }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Clasificación:</span>
            <p class="card-text">{{ seleccionado.classification }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Designación:</span>
            <p class="card-text">{{ seleccionado.designation }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Altura promedio:</span>
            <p class="card-text">{{ seleccionado.average_height }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Color de piel:</span>
            <p class="card-text">{{ seleccionado.skin_colors }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Color de ojos:</span>
            <p class="card-text">{{ seleccionado.eye_colors }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const especies = ref([]);

const seleccionado = ref({});

const prev = ref([]);
const next = ref([]);
onMounted(() => {
  cargarEspecies();
});
const cargarEspecies = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/species");
    especies.value = data.results;
    console.log(especies.value);

    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};

const siguiente = async () => {
  try {
    const { data } = await axios.get(next.value);
    especies.value = data.results;
    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};

const anterior = async () => {
  try {
    const { data } = await axios.get(prev.value);
    especies.value = data.results;
    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style  scoped>
</style>