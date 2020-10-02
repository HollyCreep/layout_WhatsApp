<template>
  <v-card
    :color="alvo.id == conteudo.id ? 'primary' : conteudo.color"
    dark
    class="pa-2 ma-2"
    @click="mudaAlvoConversa(conteudo)"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar
        class="ma-3"
        size="75"
      >
        <v-img :src=" conteudo.foto ? require(`@/assets/imagens/${conteudo.foto}`) : ''" />
      </v-avatar>
      <div class="flex-grow-1 d-flex flex-column justify-center hidden-sm-and-down">
        <v-card-title
          class="headline"
        >
          {{ conteudo ? conteudo.nome : '' }}
        </v-card-title>
        <v-card-subtitle v-text="conteudo.ultima_mensagem" />
      </div>
    </div>
  </v-card>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'ListaConversas',
    components: {

    },
    props: {
      conteudo: {
        type: Object,
        required: true,
      },
    },
    computed: {
      ...mapGetters({ alvo: 'getAlvoConversa' }),
    },
    methods: {
      ...mapActions({ mudaAlvoConversa: 'mudaAlvoConversa' }),
    },
  }
</script>
