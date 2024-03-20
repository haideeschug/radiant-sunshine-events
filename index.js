const mitt = require('mitt');
const { EventEmitter } = require('eventemitter3');

class RadiantSunshineEvents {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, ...args) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach(callback => {
        callback(...args);
      });
    }
  }

  off(eventName, callbackToRemove) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      this.events[eventName] = eventCallbacks.filter(callback => callback !== callbackToRemove);
    }
  }

  removeAllListeners(eventName) {
    delete this.events[eventName];
  }
}

module.exports = RadiantSunshineEvents;
