<template>
  <nav>
    <h1>Site de animes</h1>
    <b-input-group>
      <b-form-select v-model="selected" :options="options" />
      <b-button variant="outline-primary" @click="mostrarAnimes"
        >Atualizar</b-button
      >
    </b-input-group>
    <hr />
    <div></div>
    <b-card
      :title="tituloAnimeNovo"
      img-src="https://m.leitura.com.br/resizer/view/373/373/false/true/33788.jpg"
      img-alt="Image"
      img-left
      tag="article"
      class="mb-2"
    >
      <hr />
      <b-form-input
        id="input-1"
        v-model="tituloAnimeNovo"
        type="text"
        placeholder="Entre com o nome do anime"
      ></b-form-input>
      <hr />
      <b-button href="#" variant="primary" @click="adicionarAnime"
        >Criar anime</b-button
      >
    </b-card>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "headerComp",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Escolha a faixa etária" },
        { value: "Children", text: "Infantil" },
        { value: "Teens 13 or older", text: "Acima dos 13 anos" },
        { value: "17+ (violence & profanity)", text: "Acima de 17 anos" },
        { value: "Mild Nudity", text: "Acima dos 19 anos" },
      ],
      tituloAnimeNovo: "",
      novoAnime: {
        id: 11,
        attributes: {
          titles: {
            en_jp: "",
          },
          posterImage: {
            small:
              "https://m.leitura.com.br/resizer/view/373/373/false/true/33788.jpg",
          },
          episodeCount: 90,
          episodeLength: 25,
          averageRating: "80",
          endDate: "2010-02-09",
          startDate: "2009-02-09",
          popularityRank: 300,
          ratingRank: 20,
          ageRatingGuide: "Teens 13 or older",
          synopsis:
            "Recapping the anime's synopsis: The Promised Neverland follows three protagonists, Emma, Norman, and Ray, along with a cast of orphans who live together. Their lives have been full of joy, that is until the protagonists learn the orphanage is really a farm where children are raised and given to demons to be eaten.",
        },
      },
    };
  },
  computed: mapGetters(["allAnimes"]),
  methods: {
    ...mapActions(["getAnimes"]),
    created() {
      this.getAnimes();
    },
    mostrarAnimes: function () {
      if (this.selected != null) {
        this.allAnimes.data = this.allAnimes.data.filter(
          (u) => u.attributes.ageRatingGuide == this.selected
        );
      }
    },
    adicionarAnime: function () {
      this.novoAnime.attributes.titles.en_jp = this.tituloAnimeNovo;
      this.allAnimes.data.push(this.novoAnime);
    },
  },
};
</script>

<style>
h1 {
  font-family: "yu gothic light";
  font-size: 60px;
  text-align: center;
}
</style>