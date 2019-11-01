# EventTarget-Extension
An extension for the native EventTarget. Adds an event listener list and some methods like: clearEventListeners, enableEventListeners,  disableEventListeners, hasEventListener and copyEventListeners.

## Usage Guide

#### `EventTarget.addEventListener( type, listener, ?options )`
This works the same as the native implementation of `.addEventListener`. There is a method `.on` too, which just proxies the `.addEventListener` method i.e. it is used as a shorthand.
You may also use the native method by adding an underscore before the method name: `._addEventListener`.


#### `EventTarget.removeEventListener( type, listener, ?options )`
Like `.addEventListener`, this works the same as the native implementation of `.removeEventListener`. You may also use the native method by adding an underscore before the method name: `._removeEventListener`.


#### `EventTarget.clearEventListeners()`
This method will remove any and all event listeners of the node.

#### `EventTarget.disableEventListeners()`
If the event listeners are enabled, this will disable ( and not remove ) all events on the node. So if you trigger any event on the node nothing should happen.

#### `EventTarget.enableEventListeners()`
If the event listeners are disabled on the node this will re-enable all events on the node.

#### `EventTarget.hasEventListeners( type, listener, ?options )`
This will check if a matching event listener can be found. Returns boolean `true` if the listener can be found, `false` otherwise.

*Note*: if events are disabled this will still return `true` if the event was added and not removed at some point. As this would be the expected behaviour 

#### `EventTarget.copyEventListeners( target )`
This will copy all event listeners of the target node supplied into the method argument.
