<template>
  <div>
    <div>
      <navigation />
      <h1>Registro de Libros</h1>
    </div>
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="titulo"
              outlined
              label="Titulo del Libro"
              required
            ></v-text-field>
          </v-col>
          <br />
          <v-col cols="12" md="4">
            <v-text-field
              v-model="fechaPublicacion"
              label="Fecha de Publicación del Libro"
              outlined
              required
            ></v-text-field>
          </v-col>
          <br />
          <v-col cols="12" md="4">
            <v-btn depressed block outlined @click="Guardar" color="success">
              Registrar Libro
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
export default {
  data: () => ({
    valid: false,
    titulo: "",
    fechaPublicacion: new Date().toISOString(),
    //AutorLibro: VueUUID.v1(),
    alertMessage: null,
  }),
  methods: {
    async Guardar() {
      try {
        const autorLibro = uuidv4();
        const response = await fetch("https://localhost:44398/api/Libros", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo: this.titulo,
            fechaPublicacion: this.fechaPublicacion,
            AutorLibro: autorLibro
          }),
        });
        if (response.ok) {
          this.$router.push("/lista");
          alert("Libro Registrado");
        } else {
          alert("Error al registrar el libro");
        }
      } catch (error) {
        alert("Error al registrar el libro");
        console.error(error);
      }
    },
  },
};
</script>
