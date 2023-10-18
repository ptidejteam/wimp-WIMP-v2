'use strict';

const fs = require('fs');
const path = require('path');

module.exports = security;

function security() {
  // Use path.join to create the correct relative path
  const privateKeyPath = path.join(__dirname, '../private.key');
  try {
    return fs.readFileSync(privateKeyPath, { encoding: 'utf-8' });
  } catch (error) {
    // Handle any errors that might occur during file reading, e.g., the file doesn't exist.
    console.error('Error reading private.key:', error.message);
    return null; // You can choose to return an appropriate value or throw an error here.
  }
}
