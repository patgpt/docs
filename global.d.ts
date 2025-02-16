
import * as en from './src/app/i18n/dictionary/en';
export type Dictionary = typeof en;

declare module '*.json' {
    const content: Dictionary;
    export default content;
}