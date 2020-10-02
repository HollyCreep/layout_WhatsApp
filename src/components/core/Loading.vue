<template>
  <v-content>
    <v-dialog
      v-if="loading"
      v-model="loading"
      persistent
      retain-focus
      width="300"
    >
      <v-card
        color="primary"
        dark
      >
        <v-card-text>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            Carregando...
          </v-row>
          <v-row
            class="mt-2"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="white"
              class="mb-0"
            />
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['loading']),
      loading: {
        get () {
          return this.$store.state.loading
        },
        set (val) {
          this.$store.commit('SET_LOADING', val)
        },
      },
    },
  }
</script>
