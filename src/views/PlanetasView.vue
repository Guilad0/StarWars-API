<template>
  <h1 class="text-center">Planetas</h1>

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
      v-for="planeta in planetas"
      :key="planeta"
      class="col-md-3 mb-2 col-lg-2 col-sm-4"
      @click="seleccionado = planeta"
      role="button"
      data-bs-toggle="modal"
      data-bs-target="#modalId"
    >
      <div class="card">
        <img
          class="card-img-top"
          :src="
            'https://starwars-visualguide.com/assets/img/planets/' +
            planeta.url.split('/')[5] +
            '.jpg'
          "
          alt="Aqui va la imagen de la planeta :v"
          onerror="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
        />
        <div class="card-body">
          <h5 class="card-title">
            {{ planeta.name }}
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
                'https://starwars-visualguide.com/assets/img/planets/' +
                seleccionado.url.split('/')[5] +
                '.jpg'
              "
              alt="Aqui va la imagen de la planeta :v"
              onerror="this.src='https://starwars-visualguide.com/assets/img/placeholder.jpg'"
            />
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Nombre:</span>
            <p class="card-text">{{ seleccionado.name }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Clima:</span>
            <p class="card-text">{{ seleccionado.climate }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Diametro:</span>
            <p class="card-text">{{ seleccionado.diameter }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Gravedad:</span>
            <p class="card-text">{{ seleccionado.gravity }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Poblacion:</span>
            <p class="card-text">{{ seleccionado.population }}</p>
          </div>

          <div class="d-flex justify-content-between mb-1 border-bottom py-2">
            <span class="fw-bolder badge bg-dark">Periodo de rotacion:</span>
            <p class="card-text">{{ seleccionado.rotation_period }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const planetas = ref([]);

const seleccionado = ref({});

const prev = ref([]);
const next = ref([]);
onMounted(() => {
  cargarPlanetas();
});
const cargarPlanetas = async () => {
  try {
    const { data } = await axios.get("https://swapi.dev/api/planets");
    planetas.value = data.results;
    console.log(planetas.value);

    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};

const siguiente = async () => {
  try {
    const { data } = await axios.get(next.value);
    planetas.value = data.results;
    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};

const anterior = async () => {
  try {
    const { data } = await axios.get(prev.value);
    planetas.value = data.results;
    prev.value = data.previous;
    next.value = data.next;
  } catch (error) {
    console.log(error);
  }
};
</script>

<style  scoped>
</style>