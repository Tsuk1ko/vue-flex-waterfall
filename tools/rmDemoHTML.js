const { unlinkSync } = require('fs');
const { resolve } = require('path');

unlinkSync(resolve(__dirname, '../dist/demo.html'));
