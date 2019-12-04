const Service = require('@ignitial/iio-services').Service
const config = require('./config')

class StreamProducer extends Service {
  constructor(options) {
    super(options)

    // creates automatically the stream
    if (options.autocreate) {
      this.create().catch(err => {
        this._dying(err)
      })
    }
  }

  // creates output stream
  // ***************************************************************************
  create() {
    /* @_PUT_ */
    return new Promise((resolve, reject) => {
      try {
        // that's an output stream
        this._streamName = 'stream:' + this._name + ':output'
        this._stream = this._addStream(name)
        resolve(this._streamName)
      } catch (err) {
        reject(err)
      }
    })
  }

  // destroys output stream
  // ***************************************************************************
  destroy(args) {
    /* @_DELETE_ */
    return new Promise((resolve, reject) => {
      try {
        this._removeStream(this._streamName)
        this._streamName = undefined
        this._stream = undefined
        resolve(name)
      } catch (err) {
        reject(err)
      }
    })
  }

  _destroy() {
    if (this._stream) {
      this._removeStream(this._streamName)
    }
    
    super.destroy()
  }
}

// instantiate service with its configuration
const streamproducer = new StreamProducer(config)

streamproducer._init().then(() => {
  console.log('service [' + streamproducer.name + '] initialization done with options ',
    streamproducer._options)
}).catch(err => {
  console.error('initialization failed', err)
  process.exit(1)
})
