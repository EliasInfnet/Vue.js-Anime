<template>
  <div>
    <b-card
      :title="anime.nome"
      :sub-title="anime.ageRatingGuide"
      :img-src="anime.img"
      img-left
      class="mb-3"
    >
      <b-card-text>{{ anime.synopsis }}</b-card-text>
    </b-card>
    <hr />
    <b-row align-h="around">
      <b-card class="col-5" title="Informações">
        <b-card-text>
          Data de lançamento :
          {{ anime.startDate }}</b-card-text
        >
        <b-card-text>
          Data de término :
          {{ anime.endDate }}</b-card-text
        >
        <b-card-text>
          Quantidade de episódios :
          {{ anime.nEpisodios }}</b-card-text
        >
        <b-card-text>
          Duração de cada episódio :
          {{ anime.duracao }}
          min</b-card-text
        >
      </b-card>
      <b-card class="col-5" title="Avaliações">
        <b-card-text>
          Rating médio :
          {{ anime.averageRating }}</b-card-text
        >
        <b-card-text>
          Ranking de popularidade :
          {{ anime.popularityRank }}°</b-card-text
        >
        <b-card-text>
          Rating do rank :
          {{ anime.ratingRank }}°</b-card-text
        >
      </b-card>
    </b-row>
    <hr />
    <b-row align-h="around">
      <b-form class="col-8" @submit="onSubmit">
        <b-form-group label="Título" id="input-group-1">
          <b-form-input
            id="input-1"
            v-model="anime.nome"
            placeholder="Entre com o título"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Data de lançamento" id="input-group-2">
          <b-form-input
            id="input-2"
            v-model="anime.startDate"
            placeholder="Entre com a data de lançamento"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Data de término" id="input-group-3">
          <b-form-input
            id="input-3"
            v-model="anime.endDate"
            placeholder="Entre com a data de término"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Quantidade de episódios" id="input-group-4">
          <b-form-input
            id="input-4"
            v-model="anime.nEpisodios"
            placeholder="Entre com quantidade de episódios"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Duração de cada episódio" id="input-group-5">
          <b-form-input
            id="input-5"
            v-model="anime.duracao"
            placeholder="Entre com duração de cada episódio"
          ></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
    </b-row>

    <hr />

    <router-link to="/"
      ><b-button variant="success">Voltar</b-button></router-link
    >
    <hr />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "detalheComp",
  data() {
    return {
      anime: this.$route.params.anime,
    };
  },
  computed: mapGetters(["allAnimes"]),
  methods: {
    ...mapActions(["getAnimes"]),
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.anime));
    },
    created() {
      this.getAnimes();
    },
  },
};
</script>

<style>
</style>