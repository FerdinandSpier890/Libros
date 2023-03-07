<template>
    <div>
      <navigation/>
      <h1>Libros Registrados</h1>
      <v-data-table
        :headers="headers"
        :items="libros"
        class="elevation-2"
      ></v-data-table>
    </div>
  </template>
  <script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Id del Libro', value: 'libreriaMateriaId' },
          { text: 'Titulo del Libro', value: 'titulo' },
          { text: 'Fecha de Publicación del Libro', value: 'fechaPublicacion' },
          { text: 'Guid del Autor Libro', value: 'autorLibro' },
        ],
        libros: [],
        search: '',
        pagination: {},
        selected: []
      }
    },
    created () {
      this.mostrarLibros()
    },
    methods: {
      mostrarLibros () {
        fetch('https://localhost:44398/api/Libros/')
          .then((response) => response.json())
          .then((data) => (this.libros = data))
      }
    }
  }
  </script>