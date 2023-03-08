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
        { text: 'Guid del Libro', value: 'libreriaMateriaId' },
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
  async created () {
    await this.mostrarLibros()
  },
  methods: {
    async mostrarLibros () {
      try {
        const response = await fetch('https://localhost:44398/api/Libros/');
        const data = await response.json();
        this.libros = data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>