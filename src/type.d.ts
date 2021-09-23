/* eslint-disable @typescript-eslint/no-explicit-any */

declare const __PRODUCTION__: boolean;
declare const __PRD__: boolean;

declare module '*.less' {
  const resource: { [key: string]: string };
  export = resource;
}

interface IAction {
  type: string;
  payload?: any;

}

/**
 * @note: the interface with same name will be automatically merged.
 * this ability is called `interface merging`
 *  */
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: any;
}
