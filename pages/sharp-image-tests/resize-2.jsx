#!/usr/bin/env node

const sharp = require('sharp')

sharp('source_images/horizontal-quick-brown-fox.png')
  .resize({ width: 100, height: 100 })
  .toFile('outputs/resize-2.png')
