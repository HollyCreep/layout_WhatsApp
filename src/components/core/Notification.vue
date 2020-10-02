<template>
  <v-snackbar
    v-model="notification.snackbar"
    :timeout="notification.timeout"
    :color="notification.color"
  >
    {{ notification.text }}
    <v-btn
      color="#FFF"
      text
      @click="notification.snackbar = false"
    >
      Fechar
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState(['loading']),
      notification: {
        get () {
          return this.$store.state.notification
        },
        set (val) {
          this.$store.commit('SET_NOTIFICATION', val)
        },
      },
    },
  }
</script>
