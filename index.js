const cam = require('raspberry-pi-camera-native')
const fs = require('fs')
const zbar = require('node-zbarimg')
const _ = require('lodash')

let i = 0

cam.on('frame', frame => {
    
        // Pause the camera recording to process the QR code.
        cam.pause(() => {

            const path = `./images/image.jpg`
            var stream = fs.createWriteStream(path)
            stream.once('open', (fd) => {
                stream.write(frame)
                stream.end()
            
                // Tell zbar to process.
                zbar(path, (err, code) => {
                    if (!err) {
                        console.log('code', code)
                    } else {
                        process.stdout.write('.')
                    }
                    // cam.resume()
                })
            })
    })
})

cam.start({
    fps: 10,
    quality: 75,
    width: 840,
    height: 616,
})