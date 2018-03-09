/**
 * Subscribes to an ArrayLike with a subscriber
 * @param array The array or array-like to subscribe to
 * @param subscriber The subscriber to subscribe with.
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
export var subscribeToArray = function (array) {
    return function (subscriber) {
        for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        if (!subscriber.closed) {
            subscriber.complete();
        }
    };
};
//# sourceMappingURL=subscribeToArray.js.map
