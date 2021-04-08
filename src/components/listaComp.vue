<template>
  <b-container>
    <headerComp />
    <hr />
    <b-row class="ml-auto space-between">
      <b-alert variant="danger" v-if="allAnimes.data.length == 0" show>
        Você deletou todos os animes
      </b-alert>
      <anime-comp
        v-for="anime in allAnimes.data"
        :key="anime.id"
        :idAnime="anime.id"
        :nome="anime.attributes.titles.en_jp"
        :img="anime.attributes.posterImage.small"
        :nEpisodios="anime.attributes.episodeCount"
        :duracao="anime.attributes.episodeLength"
        :nota="anime.attributes.averageRating"
        :endDate="anime.attributes.endDate"
        :startDate="anime.attributes.startDate"
        :averageRating="anime.attributes.averageRating"
        :popularityRank="anime.attributes.popularityRank"
        :ratingRank="anime.attributes.ratingRank"
        :ageRatingGuide="anime.attributes.ageRatingGuide"
        :synopsis="anime.attributes.synopsis"
      />
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
import animeComp from "./animeComp";
import headerComp from "./headerComp";

export default {
  name: "listaComp",
  components: { animeComp, headerComp },
  computed: mapGetters(["allAnimes"]),
  methods: mapActions(["getAnimes"]),
  created() {
    this.getAnimes();
  },
};
</script>

<style>
</style>