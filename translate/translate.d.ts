import { TranslateName, TranslateOptions } from "../types/translate.type";
declare function translate<T extends (translateNem: TranslateName, opt?: TranslateOptions) => void>(): Promise<T>;
export default translate;
