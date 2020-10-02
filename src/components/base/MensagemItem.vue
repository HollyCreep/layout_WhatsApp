<template>
  <v-card
    outlined
    class="fill-height mx-4"
    color="brown lighten-5"
  >
    <v-toolbar
      dense
      prominent
      color="primary"
      dark
    >
      <v-avatar
        class="ma-3"
        size="75"
      >
        <v-img :src="alvo.foto" />
      </v-avatar>
      <v-card-title
        class="headline fill-height"
        v-text="alvo.nome"
      />
      <v-spacer />
      <div class="fill-height d-flex align-center">
      <v-btn icon large><v-icon>mdi-close</v-icon></v-btn>
      </div>
    </v-toolbar>
    <v-card-text>
      <v-timeline dense>
        <v-timeline-item
          v-for="(item,index) in mensagem"
          :key="index"
          color="primary"
          :left="item.autor == 'self'"
          :right="item.autor != 'self'"
        >
          <v-card>
            <v-card-title class="primary">
              <h2 class="display-1 white--text font-weight-light">
                Title 1
              </h2>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                >
                  {{ item.texto }}
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'MensagemItem',
    computed: {
      ...mapGetters({ mensagem: 'getMensagemAtual', alvo: 'getAlvoConversa' }),
    },
  }
</script>
