<template>
  <v-card
    :color="conteudo.color"
    dark
    class="pa-2 ma-2"
    @click="setAlvoMensagem(conteudo)"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar
        class="ma-3"
        size="75"
      >
        <v-img :src="conteudo.foto" />
      </v-avatar>
      <div class="flex-grow-1 d-flex flex-column justify-center hidden-sm-and-down">
        <v-card-title
          class="headline"
          v-text="conteudo.nome"
        />
        <v-card-subtitle v-text="conteudo.ultima_mensagem" />
      </div>
    </div>
  </v-card>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
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
      ...mapGetters({ lendo: 'isLendoMensagem' }),
    },
    methods: {
      ...mapMutations({
        setAlvoMensagem: 'SET_ALVO_CONVERSA',
      }),
    },
  }
</script>
