/** PURE_IMPORTS_START .._.._observable_zip PURE_IMPORTS_END */
import { zip as zipStatic } from '../../observable/zip';
/* tslint:enable:max-line-length */
/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
export function zipProto() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i] = arguments[_i];
    }
    return this.lift.call(zipStatic.apply(void 0, [this].concat(observables)));
}
//# sourceMappingURL=zip.js.map
