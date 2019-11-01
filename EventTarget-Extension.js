*  Author: Buca Hajdini,
**  Github: https://github.com/buca,
**  Licence: The Unlicense.
*/

Object.assign( EventTarget.prototype, {

    _addEventListener: this.addEventListener,

    _removeEventListener: this.removeEventListener,

    addEventListener: function( type, listener, options ) {

        this._addEventListener( type, listener, options );

        if( this.eventListeners === undefined ) {

            this.eventListeners = {};

        }

        if( this.eventListeners[ type ] === undefined ) {
            
            this.eventListeners[ type ] = [];

        }

        this.eventListeners[ type ].push( {

            listener: listener,
            options: options

        } );

    },

    on: this.addEventListener,

    emit: this.dispatchEvent,

    removeEventListener: function( type, listener, options ) {

        this._removeEventListener( type, listener, options );

        if( this.eventListeners !== undefined &&
            this.eventListeners[ type ] !== undefined ) {
        
            for( var i = 0; i < this.eventListeners[ type ].length; i ++ ) {

                if( this.eventListeners[ type ][ i ].listener === listener &&
                    this.eventListeners[ type ][ i ].options === options ) {
                  
                    this.eventListeners[ type ].splice( i, 1 );

                    break;

                }

            }

            if( this.eventListeners[ type ].length === 0 ) {
        
                this.eventListeners[ type ] = undefined;

            }
            
        }
    
    },

    clearEventListeners: function() {

        if( this.eventListeners !== undefined ) {

            for( var type in this.eventListeners ) {

                for( var i = 0; i < this.eventListeners[ type ].length; i ++ ) {

                    this.removeEventListener(

                        type,
                        this.eventListeners[ type ][ i ].listener,
                        this.eventListeners[ type ][ i ].options
                    
                    );

                }

            }

        }

    },

    disableEventListeners: function() {

        if( this.eventListenersEnabled === undefined ||
            this.eventListenersEnabled === true ) {

            this.eventListenersEnabled = false;

            if( this.eventListeners !== undefined ) {

                for( var type in this.eventListeners ) {

                    for( var i = 0; i < this.eventListeners[ type ].length; i ++ ) {

                        this._removeEventListener(

                            type,
                            this.eventListeners[ type ][ i ].listener,
                            this.eventListeners[ type ][ i ].options

                        );

                    }

                }

            }

        }

    },

    enableEventListeners: function() {

        if( this.eventListenersEnabled === undefined ||
            this.eventListenersEnabled === false ) {

            this.eventListenersEnabled = true;

            if( this.eventListeners !== undefined ) {

                for( var type in this.eventListeners ) {

                    for( var i = 0; i < this.eventListeners[ type ].length; i ++ ) {

                        this._addEventListener(

                            type,
                            this.eventListeners[ type ][ i ].listener,
                            this.eventListeners[ type ][ i ].options

                        );

                    }

                }

            }

        }

    },
    
    hasEventListener: function( type, listener, options ) {

        if( this.eventListeners !== undefined &&
            this.eventListeners[ type ] !== undefined ) {

            for( var i = 0; i < this.eventListeners[ type ].length; i ++ ) {

                if( this.eventListeners[ type ][ i ].listener === listener &&
                    this.eventListeners[ type ][ i ].options === options ) {

                    return true;

                }

            }

            return false;

        }

        return false;

    },
    
    copyEventListeners: function( target ) {

        if( target.eventListeners !== undefined ) {

            for( var type in target.eventListeners ) {

                for( var i = 0; i < target.eventListeners[ type ].length; i ++ ) {

                    this.addEventListener(

                        type,
                        target.eventListeners[ type ][ i ].listener,
                        target.eventListeners[ type ][ i ].options

                    );

                }

            }

        }

    }

} );
