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
        <v-img  :src=" alvo.foto ? require(`@/assets/imagens/${alvo.foto}`) :  ''" />
      </v-avatar>
      <v-card-title
        class="headline fill-height"
        v-text="alvo.nome"
      />
      <v-spacer />
      <div class="fill-height d-flex align-center">
        <v-btn
          icon
          large
        >
          <v-icon @click="mudaAlvoConversa()">
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-card-text>
      <v-timeline dense>
        <v-timeline-item
          v-for="(item,index) in mensagem"
          :key="index"
          :color="item.autor == `self` ? '#CCFF90' : 'primary'"
          :left="item.autor == 'self'"
          :right="item.autor != 'self'"
        >
          <v-card :color="item.autor == `self` ? '#CCFF90' : 'primary'">
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
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'MensagemItem',
    computed: {
      ...mapGetters({ mensagem: 'getMensagemAtual', alvo: 'getAlvoConversa' }),
    },
    methods: {
      ...mapActions({ mudaAlvoConversa: 'mudaAlvoConversa' }),
    },
  }
</script>
