<template>
  <div :id="id" class="streamproducer-layout">
    {{ $t('Insert here your own UI components') }}
  </div>
</template>

<script>
export default {
  props: [ ],
  data: () => {
    return {
      id: 'streamproducer_' + Math.random().toString(36).slice(2)
    }
  },
  computed: {

  },
  methods: {
  },
  mounted() {
    // dev
    // refresh service UI on hot reload
    this.$services.once('service:up', service => {
      if (service.name === 'streamproducer') {
        localStorage.setItem('HR_PATH', '/service-streamproducer')
        window.location.reload()
      }
    })
  },
  beforeDestroy() {

  }
}
</script>

<style>
  .streamproducer-layout {
    width: 100%;
    height: calc(100% - 0px);
  }
</style>
