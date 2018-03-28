const cam = require('raspberry-pi-camera-native')
const fs = require('fs')
const zbar = require('node-zbarimg')

cam.on('frame', frame => {
    const path = './images/image.jpg'
    var stream = fs.createWriteStream(path)
    stream.once('open', (fd) => {
        stream.write(frame)
        stream.end()
        // Now, tell zbar to process.
        zbar(path, (err, code) => {
            console.log('+', err, code)
        })
    })
})

cam.start({
    fps:5
})