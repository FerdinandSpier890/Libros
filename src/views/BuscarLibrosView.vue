<template>
    <div>
      <div>
      <navigation/>
      <h1>Busqueda de Libros por GUID</h1>
    </div>
        <v-col cols="12" md="4">
            <v-text-field
            v-model="libreriaMateriaId"
            label="Escribe el Guid del Libro"
            outlined
            required></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn block outlined depressed @click="Buscar" color="success"> Buscar </v-btn>
        </v-col>
      <v-data-table
        v-if="record"
        :headers="headers"
        :items="record"
        :items-per-page="5"
      ></v-data-table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        libreriaMateriaId: "",
        record: null,
        headers: [
          { text: 'Id del Libro', value: 'libreriaMateriaId' },
          { text: 'Titulo del Libro', value: 'titulo' },
          { text: 'Fecha de Publicación del Libro', value: 'fechaPublicacion' },
          { text: 'Guid del Autor Libro', value: 'autorLibro' },
        ]
      };
    },
    methods: {
      async Buscar() {
        const response = await fetch(`https://localhost:44398/api/Libros/${this.libreriaMateriaId}`);
        if (!response.ok) {
          this.record = null;
          alert('GUID Incorrecta')
          return;
        }
        const data = await response.json();
        this.record = [data];
      }
    }
  };
  </script>