import { parser } from "./syntax.grammar";
import { LRLanguage, LanguageSupport } from "@codemirror/language";
import { styleTags, tags as t } from "@lezer/highlight";

export const abapLanguage = LRLanguage.define({
  name: "abap",
  parser: parser.configure({
    props: [
      styleTags({
        LineComment: t.lineComment,
        IntegerLiteral: t.number,
        FloatingLiteral: t.float,
        BooleanLiteral: t.bool,
      }),
    ],
  }),
  languageData: {
    commentTokens: { line: "//" },
  },
});

export function abap() {
  return new LanguageSupport(abapLanguage);
}
