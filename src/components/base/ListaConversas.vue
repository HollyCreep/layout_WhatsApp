<template>
  <v-card elevation="0">
    <v-row>
      <v-col>
        <base-conversa-item
          v-for="(item, i) in listaConversas"
          :key="i"
          :conteudo="item"
        />
      </v-col>
      <v-col v-show="lendo">
        <base-mensagem-item />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'ListaConversas',
    components: {

    },
    props: {
      listaConversas: {
        type: Array,
        required: true,
      },
    },
    data () {
      return {
        search: '',
        pesquisa: false,
        expand: false,
        selecionado: true,
      }
    },
    computed: {
      ...mapGetters({ lendo: 'isLendoMensagem' }),
    },
  }
</script>
