/** PURE_IMPORTS_START tslib,.._Subscriber,.._util_EmptyError PURE_IMPORTS_END */
import * as tslib_1 from "tslib";
import { Subscriber } from '../Subscriber';
import { EmptyError } from '../util/EmptyError';
/**
 * Returns an Observable that emits only the last item emitted by the source Observable.
 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
 * the last item from the source Observable, the resulting Observable will emit the last item
 * from the source Observable that satisfies the predicate.
 *
 * <img src="./img/last.png" width="100%">
 *
 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
 * callback if the Observable completes before any `next` notification was sent.
 * @param {function} [predicate] - The condition any source emitted item has to satisfy.
 * @param {any} [defaultValue] - An optional default value to provide if last
 * predicate isn't met or no values were emitted.
 * @return {Observable} An Observable that emits only the last item satisfying the given condition
 * from the source, or an NoSuchElementException if no such items are emitted.
 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
 */
export function last(predicate, defaultValue) {
    return function (source) { return source.lift(new LastOperator(predicate, defaultValue, source)); };
}
var LastOperator = /*@__PURE__*/ (/*@__PURE__*/ function () {
    function LastOperator(predicate, defaultValue, source) {
        this.predicate = predicate;
        this.defaultValue = defaultValue;
        this.source = source;
    }
    LastOperator.prototype.call = function (observer, source) {
        return source.subscribe(new LastSubscriber(observer, this.predicate, this.defaultValue, this.source));
    };
    return LastOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var LastSubscriber = /*@__PURE__*/ (function (_super) {
    tslib_1.__extends(LastSubscriber, _super);
    function LastSubscriber(destination, predicate, defaultValue, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.defaultValue = defaultValue;
        _this.source = source;
        _this.hasValue = false;
        _this.index = 0;
        if (typeof defaultValue !== 'undefined') {
            _this.lastValue = defaultValue;
            _this.hasValue = true;
        }
        return _this;
    }
    LastSubscriber.prototype._next = function (value) {
        var index = this.index++;
        if (this.predicate) {
            this._tryPredicate(value, index);
        }
        else {
            this.lastValue = value;
            this.hasValue = true;
        }
    };
    LastSubscriber.prototype._tryPredicate = function (value, index) {
        var result;
        try {
            result = this.predicate(value, index, this.source);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.lastValue = value;
            this.hasValue = true;
        }
    };
    LastSubscriber.prototype._complete = function () {
        var destination = this.destination;
        if (this.hasValue) {
            destination.next(this.lastValue);
            destination.complete();
        }
        else {
            destination.error(new EmptyError);
        }
    };
    return LastSubscriber;
}(Subscriber));
//# sourceMappingURL=last.js.map
