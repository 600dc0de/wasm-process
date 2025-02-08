"use strict";(self["webpackChunkwasm_pm"]=self["webpackChunkwasm_pm"]||[]).push([[844,8772],{8772:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});const s=Object.freeze(JSON.parse('{"displayName":"PostCSS","fileTypes":["pcss","postcss"],"foldingStartMarker":"/\\\\*|^#|^\\\\*|^\\\\b|^\\\\.","foldingStopMarker":"\\\\*/|^\\\\s*$","name":"postcss","patterns":[{"begin":"/\\\\*","end":"\\\\*/","name":"comment.block.postcss","patterns":[{"include":"#comment-tag"}]},{"include":"#double-slash"},{"include":"#double-quoted"},{"include":"#single-quoted"},{"include":"#interpolation"},{"include":"#placeholder-selector"},{"include":"#variable"},{"include":"#variable-root-css"},{"include":"#numeric"},{"include":"#unit"},{"include":"#flag"},{"include":"#dotdotdot"},{"begin":"@include","captures":{"0":{"name":"keyword.control.at-rule.css.postcss"}},"end":"(?=\\\\n|\\\\(|{|;)","name":"support.function.name.postcss.library"},{"begin":"@mixin|@function","captures":{"0":{"name":"keyword.control.at-rule.css.postcss"}},"end":"$\\\\n?|(?=\\\\(|{)","name":"support.function.name.postcss.no-completions","patterns":[{"match":"[\\\\w-]+","name":"entity.name.function"}]},{"match":"(?<=@import)\\\\s[\\\\w/.*-]+","name":"string.quoted.double.css.postcss"},{"begin":"@","end":"$\\\\n?|\\\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\\\s|,))|(?=;)","name":"keyword.control.at-rule.css.postcss"},{"begin":"#","end":"$\\\\n?|(?=\\\\s|,|;|\\\\(|\\\\)|\\\\.|\\\\[|{|>)","name":"entity.other.attribute-name.id.css.postcss","patterns":[{"include":"#interpolation"},{"include":"#pseudo-class"}]},{"begin":"\\\\.|(?<=&)(-|_)","end":"$\\\\n?|(?=\\\\s|,|;|\\\\(|\\\\)|\\\\[|{|>)","name":"entity.other.attribute-name.class.css.postcss","patterns":[{"include":"#interpolation"},{"include":"#pseudo-class"}]},{"begin":"\\\\[","end":"\\\\]","name":"entity.other.attribute-selector.postcss","patterns":[{"include":"#double-quoted"},{"include":"#single-quoted"},{"match":"\\\\^|\\\\$|\\\\*|~","name":"keyword.other.regex.postcss"}]},{"match":"(?<=\\\\]|\\\\)|not\\\\(|\\\\*|>|>\\\\s):[a-z:-]+|(::|:-)[a-z:-]+","name":"entity.other.attribute-name.pseudo-class.css.postcss"},{"begin":":","end":"$\\\\n?|(?=;|\\\\s\\\\(|and\\\\(|{|}|\\\\),)","name":"meta.property-list.css.postcss","patterns":[{"include":"#double-slash"},{"include":"#double-quoted"},{"include":"#single-quoted"},{"include":"#interpolation"},{"include":"#variable"},{"include":"#rgb-value"},{"include":"#numeric"},{"include":"#unit"},{"include":"#flag"},{"include":"#function"},{"include":"#function-content"},{"include":"#function-content-var"},{"include":"#operator"},{"include":"#parent-selector"},{"include":"#property-value"}]},{"include":"#rgb-value"},{"include":"#function"},{"include":"#function-content"},{"begin":"(?<!\\\\-|\\\\()\\\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|x)\\\\b(?!-|\\\\)|:\\\\s)|&","end":"(?=\\\\s|,|;|\\\\(|\\\\)|\\\\.|\\\\[|{|>|-|_)","name":"entity.name.tag.css.postcss.symbol","patterns":[{"include":"#interpolation"},{"include":"#pseudo-class"}]},{"include":"#operator"},{"match":"[a-z-]+((?=:|#{))","name":"support.type.property-name.css.postcss"},{"include":"#reserved-words"},{"include":"#property-value"}],"repository":{"comment-tag":{"begin":"{{","end":"}}","name":"comment.tags.postcss","patterns":[{"match":"[\\\\w-]+","name":"comment.tag.postcss"}]},"dotdotdot":{"match":"\\\\.{3}","name":"variable.other"},"double-quoted":{"begin":"\\"","end":"\\"","name":"string.quoted.double.css.postcss","patterns":[{"include":"#quoted-interpolation"}]},"double-slash":{"begin":"//","end":"$","name":"comment.line.postcss","patterns":[{"include":"#comment-tag"}]},"flag":{"match":"!(important|default|optional|global)","name":"keyword.other.important.css.postcss"},"function":{"match":"(?<=[\\\\s|\\\\(|,|:])(?!url|format|attr)[\\\\w-][\\\\w-]*(?=\\\\()","name":"support.function.name.postcss"},"function-content":{"match":"(?<=url\\\\(|format\\\\(|attr\\\\().+?(?=\\\\))","name":"string.quoted.double.css.postcss"},"function-content-var":{"match":"(?<=var\\\\()[\\\\w-]+(?=\\\\))","name":"variable.parameter.postcss"},"interpolation":{"begin":"#{","end":"}","name":"support.function.interpolation.postcss","patterns":[{"include":"#variable"},{"include":"#numeric"},{"include":"#operator"},{"include":"#unit"},{"include":"#double-quoted"},{"include":"#single-quoted"}]},"numeric":{"match":"(-|\\\\.)?[0-9]+(\\\\.[0-9]+)?","name":"constant.numeric.css.postcss"},"operator":{"match":"\\\\+|\\\\s-\\\\s|\\\\s-(?=\\\\$)|(?<=\\\\()-(?=\\\\$)|\\\\s-(?=\\\\()|\\\\*|/|%|=|!|<|>|~","name":"keyword.operator.postcss"},"parent-selector":{"match":"&","name":"entity.name.tag.css.postcss"},"placeholder-selector":{"begin":"(?<!\\\\d)%(?!\\\\d)","end":"$\\\\n?|\\\\s|(?=;|{)","name":"entity.other.attribute-name.placeholder-selector.postcss"},"property-value":{"match":"[\\\\w-]+","name":"meta.property-value.css.postcss, support.constant.property-value.css.postcss"},"pseudo-class":{"match":":[a-z:-]+","name":"entity.other.attribute-name.pseudo-class.css.postcss"},"quoted-interpolation":{"begin":"#{","end":"}","name":"support.function.interpolation.postcss","patterns":[{"include":"#variable"},{"include":"#numeric"},{"include":"#operator"},{"include":"#unit"}]},"reserved-words":{"match":"\\\\b(false|from|in|not|null|through|to|true)\\\\b","name":"support.type.property-name.css.postcss"},"rgb-value":{"match":"(#)([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\\\\b","name":"constant.other.color.rgb-value.css.postcss"},"single-quoted":{"begin":"\'","end":"\'","name":"string.quoted.single.css.postcss","patterns":[{"include":"#quoted-interpolation"}]},"unit":{"match":"(?<=[\\\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|%)","name":"keyword.other.unit.css.postcss"},"variable":{"match":"\\\\$[\\\\w-]+","name":"variable.parameter.postcss"},"variable-root-css":{"match":"(?<!&)--[\\\\w-]+","name":"variable.parameter.postcss"}},"scopeName":"source.css.postcss"}')),a=[s]},844:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var s=n(3772),a=n(8268),i=n(2330),c=n(8772);const r=Object.freeze(JSON.parse('{"displayName":"Svelte","fileTypes":["svelte"],"injections":{"L:(meta.script.svelte | meta.style.svelte) (meta.lang.js | meta.lang.javascript) - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.js","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.js"}]}]},"L:(meta.script.svelte | meta.style.svelte) (meta.lang.ts | meta.lang.typescript) - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.ts","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.ts"}]}]},"L:(meta.script.svelte | meta.style.svelte) meta.lang.coffee - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.coffee","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.coffee"}]}]},"L:(source.ts, source.js, source.coffee)":{"patterns":[{"match":"(?<![_$./\'\\"[:alnum:]])\\\\$(?=[_[:alpha:]][_$[:alnum:]]*)","name":"punctuation.definition.variable.svelte"},{"match":"(?<![_$./\'\\"[:alnum:]])(\\\\$\\\\$)(?=props|restProps|slots)","name":"punctuation.definition.variable.svelte"}]},"L:meta.script.svelte - meta.lang - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.js","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.js"}]}]},"L:meta.style.svelte - meta.lang - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.css","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.css"}]}]},"L:meta.style.svelte meta.lang.css - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.css","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.css"}]}]},"L:meta.style.svelte meta.lang.less - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.css.less","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.css.less"}]}]},"L:meta.style.svelte meta.lang.postcss - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.css.postcss","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.css.postcss"}]}]},"L:meta.style.svelte meta.lang.sass - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.sass","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.sass"}]}]},"L:meta.style.svelte meta.lang.scss - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.css.scss","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.css.scss"}]}]},"L:meta.style.svelte meta.lang.stylus - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"source.stylus","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"source.stylus"}]}]},"L:meta.template.svelte - meta.lang - (meta source)":{"patterns":[{"begin":"(?<=>)\\\\s","end":"(?=</template)","patterns":[{"include":"#scope"}]}]},"L:meta.template.svelte meta.lang.pug - (meta source)":{"patterns":[{"begin":"(?<=>)(?!</)","contentName":"text.pug","end":"(?=</)","name":"meta.embedded.block.svelte","patterns":[{"include":"text.pug"}]}]}},"name":"svelte","patterns":[{"include":"#scope"}],"repository":{"attributes":{"patterns":[{"include":"#attributes-directives"},{"include":"#attributes-keyvalue"},{"include":"#attributes-interpolated"}]},"attributes-directives":{"begin":"(?<!<)(on|use|bind|transition|in|out|animate|let|class|style)(:)(?:((?:--)?[_$[:alpha:]][_\\\\-$[:alnum:]]*(?=\\\\s*=))|((?:--)?[_$[:alpha:]][_\\\\-$[:alnum:]]*))((\\\\|\\\\w+)*)","beginCaptures":{"1":{"patterns":[{"include":"#attributes-directives-keywords"}]},"2":{"name":"punctuation.definition.keyword.svelte"},"3":{"patterns":[{"include":"#attributes-directives-types-assigned"}]},"4":{"patterns":[{"include":"#attributes-directives-types"}]},"5":{"patterns":[{"match":"\\\\w+","name":"support.function.svelte"},{"match":"\\\\|","name":"punctuation.separator.svelte"}]}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.directive.$1.svelte","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.svelte"}},"end":"(?<=[^\\\\s=])(?!\\\\s*=)|(?=/?>)","patterns":[{"include":"#attributes-value"}]}]},"attributes-directives-keywords":{"patterns":[{"match":"on|use|bind","name":"keyword.control.svelte"},{"match":"transition|in|out|animate","name":"keyword.other.animation.svelte"},{"match":"let","name":"storage.type.svelte"},{"match":"class|style","name":"entity.other.attribute-name.svelte"}]},"attributes-directives-types":{"patterns":[{"match":"(?<=(on):).*$","name":"entity.name.type.svelte"},{"match":"(?<=(bind):).*$","name":"variable.parameter.svelte"},{"match":"(?<=(use|transition|in|out|animate):).*$","name":"variable.function.svelte"},{"match":"(?<=(let|class|style):).*$","name":"variable.parameter.svelte"}]},"attributes-directives-types-assigned":{"patterns":[{"match":"(?<=(bind):)this$","name":"variable.language.svelte"},{"match":"(?<=(bind):).*$","name":"entity.name.type.svelte"},{"match":"(?<=(class):).*$","name":"entity.other.attribute-name.class.svelte"},{"match":"(?<=(style):).*$","name":"support.type.property-name.svelte"},{"include":"#attributes-directives-types"}]},"attributes-generics":{"begin":"(generics)(=)([\\"\'])","beginCaptures":{"1":{"name":"entity.other.attribute-name.svelte"},"2":{"name":"punctuation.separator.key-value.svelte"},"3":{"name":"punctuation.definition.string.begin.svelte"}},"contentName":"meta.embedded.expression.svelte source.ts","end":"(\\\\3)","endCaptures":{"1":{"name":"punctuation.definition.string.end.svelte"}},"patterns":[{"include":"#type-parameters"}]},"attributes-interpolated":{"begin":"(?<!:|=)\\\\s*({)","captures":{"1":{"name":"entity.other.attribute-name.svelte"}},"contentName":"meta.embedded.expression.svelte source.ts","end":"(\\\\})","patterns":[{"include":"source.ts"}]},"attributes-keyvalue":{"begin":"((?:--)?[_$[:alpha:]][_\\\\-$[:alnum:]]*)","beginCaptures":{"0":{"patterns":[{"match":"--.*","name":"support.type.property-name.svelte"},{"match":".*","name":"entity.other.attribute-name.svelte"}]}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.svelte","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.svelte"}},"end":"(?<=[^\\\\s=])(?!\\\\s*=)|(?=/?>)","patterns":[{"include":"#attributes-value"}]}]},"attributes-value":{"patterns":[{"include":"#interpolation"},{"captures":{"1":{"name":"punctuation.definition.string.begin.svelte"},"2":{"name":"constant.numeric.decimal.svelte"},"3":{"name":"punctuation.definition.string.end.svelte"},"4":{"name":"constant.numeric.decimal.svelte"}},"match":"(?:([\'\\"])([0-9._]+[\\\\w%]{,4})(\\\\1))|(?:([0-9._]+[\\\\w%]{,4})(?=\\\\s|/?>))"},{"match":"([^\\\\s\\"\'=<>`/]|/(?!>))+","name":"string.unquoted.svelte","patterns":[{"include":"#interpolation"}]},{"begin":"([\'\\"])","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.svelte"}},"end":"\\\\1","endCaptures":{"0":{"name":"punctuation.definition.string.end.svelte"}},"name":"string.quoted.svelte","patterns":[{"include":"#interpolation"}]}]},"comments":{"begin":"\x3c!--","captures":{"0":{"name":"punctuation.definition.comment.svelte"}},"end":"--\x3e","name":"comment.block.svelte","patterns":[{"begin":"(@)(component)","beginCaptures":{"1":{"name":"punctuation.definition.keyword.svelte"},"2":{"name":"storage.type.class.component.svelte keyword.declaration.class.component.svelte"}},"contentName":"comment.block.documentation.svelte","end":"(?=--\x3e)","patterns":[{"captures":{"0":{"patterns":[{"include":"text.html.markdown"}]}},"match":".*?(?=--\x3e)"},{"include":"text.html.markdown"}]},{"match":"\\\\G-?>|\x3c!--(?!>)|<!-(?=--\x3e)|--!>","name":"invalid.illegal.characters-not-allowed-here.svelte"}]},"destructuring":{"patterns":[{"begin":"(?={)","end":"(?<=})","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts#object-binding-pattern"}]},{"begin":"(?=\\\\[)","end":"(?<=\\\\])","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts#array-binding-pattern"}]}]},"destructuring-const":{"patterns":[{"begin":"(?={)","end":"(?<=})","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts#object-binding-pattern-const"}]},{"begin":"(?=\\\\[)","end":"(?<=\\\\])","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts#array-binding-pattern-const"}]}]},"interpolation":{"patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.svelte"}},"contentName":"meta.embedded.expression.svelte source.ts","end":"\\\\}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.svelte"}},"patterns":[{"begin":"\\\\G\\\\s*(?={)","end":"(?<=})","patterns":[{"include":"source.ts#object-literal"}]},{"include":"source.ts"}]}]},"scope":{"patterns":[{"include":"#comments"},{"include":"#special-tags"},{"include":"#tags"},{"include":"#interpolation"},{"begin":"(?<=>|})","end":"(?=<|{)","name":"text.svelte"}]},"special-tags":{"patterns":[{"include":"#special-tags-void"},{"include":"#special-tags-block-begin"},{"include":"#special-tags-block-end"}]},"special-tags-block-begin":{"begin":"({)\\\\s*(#([a-z]*))","beginCaptures":{"1":{"name":"punctuation.definition.block.begin.svelte"},"2":{"patterns":[{"include":"#special-tags-keywords"}]}},"end":"(})","endCaptures":{"0":{"name":"punctuation.definition.block.end.svelte"}},"name":"meta.special.$3.svelte meta.special.start.svelte","patterns":[{"include":"#special-tags-modes"}]},"special-tags-block-end":{"begin":"({)\\\\s*(/([a-z]*))","beginCaptures":{"1":{"name":"punctuation.definition.block.begin.svelte"},"2":{"patterns":[{"include":"#special-tags-keywords"}]}},"end":"(})","endCaptures":{"1":{"name":"punctuation.definition.block.end.svelte"}},"name":"meta.special.$3.svelte meta.special.end.svelte"},"special-tags-keywords":{"captures":{"1":{"name":"punctuation.definition.keyword.svelte"},"2":{"patterns":[{"match":"if|else\\\\s+if|else","name":"keyword.control.conditional.svelte"},{"match":"each|key","name":"keyword.control.svelte"},{"match":"await|then|catch","name":"keyword.control.flow.svelte"},{"match":"snippet","name":"keyword.control.svelte"},{"match":"html","name":"keyword.other.svelte"},{"match":"render","name":"keyword.other.svelte"},{"match":"debug","name":"keyword.other.debugger.svelte"},{"match":"const","name":"storage.type.svelte"}]}},"match":"([#@/:])(else\\\\s+if|[a-z]*)"},"special-tags-modes":{"patterns":[{"begin":"(?<=(if|key|then|catch|snippet|html|render).*?)\\\\G","end":"(?=})","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts"}]},{"begin":"(?<=const.*?)\\\\G","end":"(?=})","patterns":[{"include":"#destructuring-const"},{"begin":"\\\\G\\\\s*([_$[:alpha:]][_$[:alnum:]]+)\\\\s*","beginCaptures":{"1":{"name":"variable.other.constant.svelte"}},"end":"(?=\\\\=)"},{"begin":"(?=\\\\=)","end":"(?=})","name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts"}]}]},{"begin":"(?<=each.*?)\\\\G","end":"(?=})","patterns":[{"begin":"\\\\G\\\\s*?(?=\\\\S)","contentName":"meta.embedded.expression.svelte source.ts","end":"(?=(?:(?:^\\\\s*|\\\\s+)(as))|\\\\s*(}|,))","patterns":[{"include":"source.ts"}]},{"begin":"(as)|(?=}|,)","beginCaptures":{"1":{"name":"keyword.control.as.svelte"}},"end":"(?=})","patterns":[{"include":"#destructuring"},{"begin":"\\\\(","captures":{"0":{"name":"meta.brace.round.svelte"}},"contentName":"meta.embedded.expression.svelte source.ts","end":"\\\\)|(?=})","patterns":[{"include":"source.ts"}]},{"captures":{"1":{"name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts"}]}},"match":"(\\\\s*([_$[:alpha:]][_$[:alnum:]]*)\\\\s*)"},{"match":",","name":"punctuation.separator.svelte"}]}]},{"begin":"(?<=await.*?)\\\\G","end":"(?=})","patterns":[{"begin":"\\\\G\\\\s*?(?=\\\\S)","contentName":"meta.embedded.expression.svelte source.ts","end":"\\\\s+(then)|(?=})","endCaptures":{"1":{"name":"keyword.control.flow.svelte"}},"patterns":[{"include":"source.ts"}]},{"begin":"(?<=then\\\\b)","contentName":"meta.embedded.expression.svelte source.ts","end":"(?=})","patterns":[{"include":"source.ts"}]}]},{"begin":"(?<=debug.*?)\\\\G","end":"(?=})","patterns":[{"captures":{"0":{"name":"meta.embedded.expression.svelte source.ts","patterns":[{"include":"source.ts"}]}},"match":"[_$[:alpha:]][_$[:alnum:]]*"},{"match":",","name":"punctuation.separator.svelte"}]}]},"special-tags-void":{"begin":"({)\\\\s*((?:[@:])(else\\\\s+if|[a-z]*))","beginCaptures":{"1":{"name":"punctuation.definition.block.begin.svelte"},"2":{"patterns":[{"include":"#special-tags-keywords"}]}},"end":"\\\\}","endCaptures":{"0":{"name":"punctuation.definition.block.end.svelte"}},"name":"meta.special.$3.svelte","patterns":[{"include":"#special-tags-modes"}]},"tags":{"patterns":[{"include":"#tags-lang"},{"include":"#tags-void"},{"include":"#tags-general-end"},{"include":"#tags-general-start"}]},"tags-end-node":{"captures":{"1":{"name":"meta.tag.end.svelte punctuation.definition.tag.begin.svelte"},"2":{"name":"meta.tag.end.svelte","patterns":[{"include":"#tags-name"}]},"3":{"name":"meta.tag.end.svelte punctuation.definition.tag.end.svelte"},"4":{"name":"meta.tag.start.svelte punctuation.definition.tag.end.svelte"}},"match":"(</)(.*?)\\\\s*(>)|(/>)"},"tags-general-end":{"begin":"(</)([^/\\\\s>]*)","beginCaptures":{"1":{"name":"meta.tag.end.svelte punctuation.definition.tag.begin.svelte"},"2":{"name":"meta.tag.end.svelte","patterns":[{"include":"#tags-name"}]}},"end":"(>)","endCaptures":{"1":{"name":"meta.tag.end.svelte punctuation.definition.tag.end.svelte"}},"name":"meta.scope.tag.$2.svelte"},"tags-general-start":{"begin":"(<)([^/\\\\s>/]*)","beginCaptures":{"0":{"patterns":[{"include":"#tags-start-node"}]}},"end":"(/?>)","endCaptures":{"1":{"name":"meta.tag.start.svelte punctuation.definition.tag.end.svelte"}},"name":"meta.scope.tag.$2.svelte","patterns":[{"include":"#tags-start-attributes"}]},"tags-lang":{"begin":"<(script|style|template)","beginCaptures":{"0":{"patterns":[{"include":"#tags-start-node"}]}},"end":"</\\\\1\\\\s*>|/>","endCaptures":{"0":{"patterns":[{"include":"#tags-end-node"}]}},"name":"meta.$1.svelte","patterns":[{"begin":"\\\\G(?=\\\\s*[^>]*?(type|lang)\\\\s*=\\\\s*([\'\\"]|)(?:text/)?(\\\\w+)\\\\2)","end":"(?=</|/>)","name":"meta.lang.$3.svelte","patterns":[{"include":"#tags-lang-start-attributes"}]},{"include":"#tags-lang-start-attributes"}]},"tags-lang-start-attributes":{"begin":"\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.svelte"}},"name":"meta.tag.start.svelte","patterns":[{"include":"#attributes-generics"},{"include":"#attributes"}]},"tags-name":{"patterns":[{"captures":{"1":{"name":"keyword.control.svelte"},"2":{"name":"punctuation.definition.keyword.svelte"},"3":{"name":"entity.name.tag.svelte"}},"match":"(svelte)(:)([a-z][\\\\w:-]*)"},{"match":"slot","name":"keyword.control.svelte"},{"captures":{"1":{"patterns":[{"match":"\\\\w+","name":"support.class.component.svelte"},{"match":"\\\\.","name":"punctuation.definition.keyword.svelte"}]},"2":{"name":"support.class.component.svelte"}},"match":"([\\\\w]+(?:\\\\.[\\\\w]+)+)|([A-Z][\\\\w]+)"},{"match":"[a-z][\\\\w0-9:]*-[\\\\w0-9:-]*","name":"meta.tag.custom.svelte entity.name.tag.svelte"},{"match":"[a-z][\\\\w0-9:-]*","name":"entity.name.tag.svelte"}]},"tags-start-attributes":{"begin":"\\\\G","end":"(?=/?>)","name":"meta.tag.start.svelte","patterns":[{"include":"#attributes"}]},"tags-start-node":{"captures":{"1":{"name":"punctuation.definition.tag.begin.svelte"},"2":{"patterns":[{"include":"#tags-name"}]}},"match":"(<)([^/\\\\s>/]*)","name":"meta.tag.start.svelte"},"tags-void":{"begin":"(<)(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.svelte"},"2":{"name":"entity.name.tag.svelte"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.begin.svelte"}},"name":"meta.tag.void.svelte","patterns":[{"include":"#attributes"}]},"type-parameters":{"name":"meta.type.parameters.ts","patterns":[{"include":"source.ts#comment"},{"match":"(?<![_$[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![_$[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},{"include":"source.ts#type"},{"include":"source.ts#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.ts"}]}},"scopeName":"source.svelte","embeddedLangs":["javascript","typescript","css","postcss"],"embeddedLangsLazy":["coffee","stylus","sass","scss","less","pug","markdown"]}')),o=[...s["default"],...a["default"],...i["default"],...c["default"],r]}}]);
//# sourceMappingURL=844.b5c74ef5.js.map