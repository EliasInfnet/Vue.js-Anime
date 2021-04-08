<template>
  <b-card :title="nome" tag="article" style="max-width: 540px" class="mb-3">
    <b-row>
      <b-col md="6"><b-card-img :src="img"> </b-card-img></b-col>
      <b-col md="6"
        ><b-list-group>
          <b-list-group-item
            >N° de episódios : {{ nEpisodios }}</b-list-group-item
          >
          <b-list-group-item
            >Duração por episódio : {{ duracao }}</b-list-group-item
          >
        </b-list-group>

        <b-form-rating
          v-model="notaFinal"
          readonly
          show-value
          show-value-max
          precision="1"
        ></b-form-rating>
        <hr />

        <b-row align-h="around">
          <b-button
            variant="success"
            :to="{
              name: 'detalheComp',
              params: { id: idAnime, anime: animePronto },
            }"
            >Exibir</b-button
          >
          <b-button variant="outline-danger" @click="deletarAnime"
            >Deletar</b-button
          >
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "animeComp",
  props: {
    idAnime: String,
    nome: String,
    img: String,
    nEpisodios: Number,
    duracao: Number,
    nota: Number,
    endDate: String,
    startDate: String,
    averageRating: String,
    popularityRank: Number,
    ratingRank: Number,
    ageRatingGuide: String,
    synopsis: String,
  },
  data() {
    return {
      animePronto: {
        idAnime: this.idAnime,
        nome: this.nome,
        img: this.img,
        nEpisodios: this.nEpisodios,
        duracao: this.duracao,
        nota: this.nota,
        endDate: this.endDate,
        startDate: this.startDate,
        averageRating: this.averageRating,
        popularityRank: this.popularityRank,
        ratingRank: this.ratingRank,
        ageRatingGuide: this.ageRatingGuide,
        synopsis: this.synopsis,
      },
    };
  },
  computed: {
    ...mapGetters(["allAnimes"]),
    notaFinal: function () {
      return this.nota * 0.05;
    },
  },
  methods: {
    ...mapActions(["getAnimes"]),
    created() {
      this.getAnimes();
    },
    deletarAnime: function () {
      this.allAnimes.data = this.allAnimes.data.filter(
        (u) => u.id !== this.idAnime
      );
    },
  },
};
</script>

<style>
</style>