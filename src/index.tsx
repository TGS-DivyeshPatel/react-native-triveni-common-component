import ReactNativeCommonComponent from './NativeTriveniCommonComponent';

export function multiply(a: number, b: number): number {
  return ReactNativeCommonComponent.multiply(a, b);
}
export * from './Config';
export * from './Components';
export * from './networking/APIFunctions';
export * from './utils/LogConfig';
export * from './customHooks';