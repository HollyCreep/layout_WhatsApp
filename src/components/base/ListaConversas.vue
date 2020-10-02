<template>
  <v-card elevation="0">
    <v-row>
      <v-col :class="$vuetify.breakpoint.smAndDown && 'pt-0'">
        <base-conversa-item
          v-for="(item, i) in listaConversas"
          v-show=" $vuetify.breakpoint.smAndUp || !alvo.id "
          :key="i"
          :conteudo="item"
        />
        <base-mensagem-item v-show="alvo.id && $vuetify.breakpoint.smAndDown" />
      </v-col>
      <v-col
        v-show="alvo.id && $vuetify.breakpoint.smAndUp"
        cols="8"
      >
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
    computed: {
      ...mapGetters({ alvo: 'getAlvoConversa' }),
    },
  }
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
