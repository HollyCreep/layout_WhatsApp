<template>
  <v-card
    outlined
    :class="$vuetify.breakpoint.smAndUp && 'mt-2'"
    color="brown lighten-5"
  >
    <v-toolbar
      dense
      prominent
      color="#1F7087"
      dark
    >
      <v-avatar
        class="ma-3"
        size="75"
      >
        <v-img :src=" alvo.foto ? require(`@/assets/imagens/${alvo.foto}`) : ''" />
      </v-avatar>
      <v-card-title
        class="headline fill-height"
      >
        {{ alvo ? alvo.nome : '' }}
      </v-card-title>
      <v-spacer />
      <div class="fill-height d-flex align-center">
        <v-btn
          icon
          large
          @click="mudaAlvoConversa()"
        >
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </div>
    </v-toolbar>
    <v-card-text style="max-height: 64vh; overflow: auto">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
          v-for="(item,index) in mensagem"
          :key="index"
          :color="item.autor == `self` ? 'send' : 'received'"
          hide-dot
          :left="item.autor != 'self'"
          :right="item.autor == 'self'"
        >
          <v-card :color="item.autor == `self` ? 'send' : 'received'">
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
    <v-card-actions>
      <v-text-field
        v-model="novaMensagem"
        filled
        rounded
        dense
        clearable
        hide-details=""
        label="Digite uma mensagem"
        append-icon="far fa-paper-plane"
        @keyup.enter="enviaMensagem(novaMensagem); novaMensagem = ''"
        @click:append="enviaMensagem(novaMensagem); novaMensagem = ''"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'MensagemItem',
    data () {
      return {
        novaMensagem: '',
      }
    },
    computed: {
      ...mapGetters({ mensagem: 'getMensagemAtual', alvo: 'getAlvoConversa' }),
    },
    methods: {
      ...mapActions({ mudaAlvoConversa: 'mudaAlvoConversa', enviaMensagem: 'enviaMensagem' }),
    },
  }
</script>
