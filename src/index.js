import StreamProducer from './components/StreamProducer.vue'

// function to be called when service loaded into web app:
// naming rule: iios_<service_unique_name>
//
global.iios_streamproducer = function(Vue) {
  // Warning: component name must be globally unique in your host app
  Vue.component('streamproducer', StreamProducer)

  let register = () => {
    // EXEAMPLE
    Vue.prototype.$services.emit('app:menu:add', [
      {
        path: '/service-streamproducer',
        title: 'Streamproducer Service view',
        svgIcon: '$$service(streamproducer)/assets/streamproducer.svg',
        section: 'Services',
        anonymousAccess: true,
        hideIfLogged: false,
        route: {
          name: 'Streamproducer',
          path: '/service-streamproducer',
          component: Streamproducer
        }
      }
    ])

    let onServiceDestroy = () => {
      Vue.prototype.$services.emit('app:menu:remove', [{
        path: '/service-streamproducer'
      }])

      Vue.prototype.$services.emit('service:destroy:streamproducer:done')
    }

    Vue.prototype.$services.once('service:destroy:streamproducer', onServiceDestroy)
  }

  if (Vue.prototype.$services.appReady) {
    register()
  } else {
    Vue.prototype.$services.once('app:ready', register)
  }
}
