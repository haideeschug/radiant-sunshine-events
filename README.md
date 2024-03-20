# radiant-sunshine-events

A library for managing events with radiant sunshine.

## Installation

You can install `radiant-sunshine-events` via npm:

```
npm install radiant-sunshine-events
```

## Usage

```javascript
const RadiantSunshineEvents = require('radiant-sunshine-events');

// Create a new instance of RadiantSunshineEvents
const events = new RadiantSunshineEvents();

// Define an event listener
function handleEvent(arg1, arg2) {
console.log('Event occurred with arguments:', arg1, arg2);
}

// Register the event listener
events.on('eventName', handleEvent);

// Emit the event
events.emit('eventName', 'arg1Value', 'arg2Value');

// Remove the event listener
events.off('eventName', handleEvent);

// Remove all listeners for a specific event
events.removeAllListeners('eventName');
```

## API

### `on(eventName, callback)`

Adds a listener function to the specified event.

- `eventName` (String): The name of the event.
- `callback` (Function): The function to be called when the event is triggered.

### `emit(eventName, ...args)`

Triggers the specified event and executes all listener functions associated with it.

- `eventName` (String): The name of the event.
- `...args` (Any): Any number of arguments to be passed to the listener functions.

### `off(eventName, callbackToRemove)`

Removes a specific listener function from the specified event.

- `eventName` (String): The name of the event.
- `callbackToRemove` (Function): The function to be removed from the event listeners.

### `removeAllListeners(eventName)`

Removes all listener functions associated with the specified event.

- `eventName` (String): The name of the event.

## License

This project is licensed under the MIT License - see the \[LICENSE\](LICENSE) file for details.

