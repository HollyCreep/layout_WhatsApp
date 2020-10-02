<template>
  <v-container
    fluid
  >
    <v-app-bar
      dark
      color="primary"
    >
      <v-app-bar-nav-icon />

      <v-toolbar-title class="text-h5">
        Minhas Conversas
      </v-toolbar-title>

      <v-spacer />
      <div class="d-flex">
        <v-expand-x-transition>
          <v-text-field
            v-show="pesquisa"
            v-model="search"
            label="Pesquisa"
            clearable
          />
        </v-expand-x-transition>
        <v-btn
          icon
          @click="pesquisa = !pesquisa"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-data-iterator
      :items="items"
      :search="search"
      item-key="title"
      :items-per-page="10"
      hide-default-footer
      no-data-text="Nenhuma conversa encontrada."
    >
      <template v-slot:default="{ items }">
        <base-lista-conversas :lista-conversas="items" />
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Home',
    components: {

    },
    data () {
      return {
        search: '',
        pesquisa: false,
        expand: false,
      }
    },
    computed: {
      ...mapGetters({ items: 'getConversas' }),
    },
  }
</script>

<style lang="scss" scoped>
</style>
