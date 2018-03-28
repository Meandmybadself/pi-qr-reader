# pi-qr-reader

A node application to read QR codes from a NoIR camera

A QR hand scanner costs ~$100 and requires hardwiring to a computer.
Can a comparable device be made using a Raspberry Pi Zero W ($14), a NoIR camera & a IR LED?

Not yet, but that's the purpose of this experiment.

## What's working

* Camera connected, reading @ 1fps
* zbar evaluating imagery, processing @ 3s/ image

## TODO

* Evaluate camera capture software options.
* Get zbar to function a little more reliably.
* Read in .env file to facilitate a REST endpoint once we have a QR code reading
