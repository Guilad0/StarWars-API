<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Star Wars</a>
      <button
        class="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/personajes" class="nav-link"
              >Personajes</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/naves" class="nav-link">Naves</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/vehiculos" class="nav-link">Vehiculos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/especies" class="nav-link">Especies</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/planetas" class="nav-link">Planetas</RouterLink>
          </li>
        </ul>
        <form class="d-flex my-2 my-lg-0">
          <input
            class="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container my-5">
    <RouterView />
  </div>
</template>

<style scoped></style>
