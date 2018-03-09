import { SchedulerLike } from '../types';
import { Observable } from '../Observable';
export declare function bindCallback(callbackFunc: (callback: () => any) => any, scheduler?: SchedulerLike): () => Observable<void>;
export declare function bindCallback<R>(callbackFunc: (callback: (result: R) => any) => any, scheduler?: SchedulerLike): () => Observable<R>;
export declare function bindCallback<T, R>(callbackFunc: (v1: T, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T) => Observable<R>;
export declare function bindCallback<T, T2, R>(callbackFunc: (v1: T, v2: T2, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T, v2: T2) => Observable<R>;
export declare function bindCallback<T, T2, T3, R>(callbackFunc: (v1: T, v2: T2, v3: T3, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T, v2: T2, v3: T3) => Observable<R>;
export declare function bindCallback<T, T2, T3, T4, R>(callbackFunc: (v1: T, v2: T2, v3: T3, v4: T4, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T, v2: T2, v3: T3, v4: T4) => Observable<R>;
export declare function bindCallback<T, T2, T3, T4, T5, R>(callbackFunc: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => Observable<R>;
export declare function bindCallback<T, T2, T3, T4, T5, T6, R>(callbackFunc: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, callback: (result: R) => any) => any, scheduler?: SchedulerLike): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => Observable<R>;
export declare function bindCallback<T>(callbackFunc: Function, scheduler?: SchedulerLike): (...args: any[]) => Observable<T>;
