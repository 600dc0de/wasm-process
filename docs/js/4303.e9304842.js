"use strict";(self["webpackChunkwasm_pm"]=self["webpackChunkwasm_pm"]||[]).push([[1536,4303,4731,4830],{1536:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(1258);const i=Object.freeze(JSON.parse('{"displayName":"HTML (Derivative)","injections":{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{"comment":"Uses R: to ensure this matches after any other injections.","patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"html-derivative","patterns":[{"include":"text.html.basic#core-minus-invalid"},{"begin":"(</?)(\\\\w[^\\\\s>]*)(?<!/)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"((?: ?/)?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.unrecognized.html.derivative","patterns":[{"include":"text.html.basic#attribute"}]}],"scopeName":"text.html.derivative","embeddedLangs":["html"]}')),u=[...a["default"],i]},4731:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});const a=Object.freeze(JSON.parse('{"displayName":"JSON","name":"json","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json"}},"end":"\\\\]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json"}},"name":"meta.structure.array.json","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json"},{"match":"[^\\\\s\\\\]]","name":"invalid.illegal.expected-array-separator.json"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.documentation.json"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.json"},{"captures":{"1":{"name":"punctuation.definition.comment.json"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[eE][+-]?\\\\d+)?)?","name":"constant.numeric.json"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json"}},"end":"\\\\}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json"}},"name":"meta.structure.dictionary.json","patterns":[{"comment":"the JSON object key","include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json"}},"end":"(,)|(?=\\\\})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json"}},"name":"meta.structure.dictionary.value.json","patterns":[{"comment":"the JSON object value","include":"#value"},{"match":"[^\\\\s,]","name":"invalid.illegal.expected-dictionary-separator.json"}]},{"match":"[^\\\\s\\\\}]","name":"invalid.illegal.expected-dictionary-separator.json"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json"}},"name":"string.json support.type.property-name.json","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json"}},"name":"string.quoted.double.json","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"\\\\\\\\/bfnrt]|u[0-9a-fA-F]{4})","name":"constant.character.escape.json"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json"}')),i=[a]},4303:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(4830),i=n(3772);const u=Object.freeze(JSON.parse('{"displayName":"Vue HTML","fileTypes":[],"name":"vue-html","patterns":[{"include":"source.vue#vue-interpolations"},{"begin":"(<)([A-Z][a-zA-Z0-9:-]*)(?=[^>]*></\\\\2>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"support.class.component.html"}},"end":"(>)(<)(/)(\\\\2)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"},"2":{"name":"punctuation.definition.tag.begin.html meta.scope.between-tag-pair.html"},"3":{"name":"punctuation.definition.tag.begin.html"},"4":{"name":"support.class.component.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(<)([a-z][a-zA-Z0-9:-]*)(?=[^>]*></\\\\2>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(>)(<)(/)(\\\\2)(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"},"2":{"name":"punctuation.definition.tag.begin.html meta.scope.between-tag-pair.html"},"3":{"name":"punctuation.definition.tag.begin.html"},"4":{"name":"entity.name.tag.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(<\\\\?)(xml)","captures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.xml.html"}},"end":"(\\\\?>)","name":"meta.tag.preprocessor.xml.html","patterns":[{"include":"#tag-generic-attribute"},{"include":"#string-double-quoted"},{"include":"#string-single-quoted"}]},{"begin":"\x3c!--","captures":{"0":{"name":"punctuation.definition.comment.html"}},"end":"--\x3e","name":"comment.block.html"},{"begin":"<!","captures":{"0":{"name":"punctuation.definition.tag.html"}},"end":">","name":"meta.tag.sgml.html","patterns":[{"begin":"(?i:DOCTYPE)","captures":{"1":{"name":"entity.name.tag.doctype.html"}},"end":"(?=>)","name":"meta.tag.sgml.doctype.html","patterns":[{"match":"\\"[^\\">]*\\"","name":"string.quoted.double.doctype.identifiers-and-DTDs.html"}]},{"begin":"\\\\[CDATA\\\\[","end":"]](?=>)","name":"constant.other.inline-data.html"},{"match":"(\\\\s*)(?!--|>)\\\\S(\\\\s*)","name":"invalid.illegal.bad-comments-or-CDATA.html"}]},{"begin":"(</?)([A-Z][a-zA-Z0-9:-]*\\\\b)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"support.class.component.html"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.block.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(</?)([a-z][a-zA-Z0-9:-]*\\\\b)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.block.any.html"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.block.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(</?)((?i:body|head|html)\\\\b)","captures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.structure.any.html"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(</?)((?i:address|blockquote|dd|div|dl|dt|fieldset|form|frame|frameset|h1|h2|h3|h4|h5|h6|iframe|noframes|object|ol|p|ul|applet|center|dir|hr|menu|pre)(?!-)\\\\b)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.block.any.html"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.block.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(</?)((?i:a|abbr|acronym|area|b|base|basefont|bdo|big|br|button|caption|cite|code|col|colgroup|del|dfn|em|font|head|html|i|img|input|ins|isindex|kbd|label|legend|li|link|map|meta|noscript|optgroup|option|param|q|s|samp|script|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|title|tr|tt|u|var)(?!-)\\\\b)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.inline.any.html"}},"end":"(/?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.any.html","patterns":[{"include":"#tag-stuff"}]},{"begin":"(</?)([a-zA-Z0-9:-]+)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.other.html"}},"end":"(/?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.html","patterns":[{"include":"#tag-stuff"}]},{"include":"#entities"},{"match":"<>","name":"invalid.illegal.incomplete.html"},{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}],"repository":{"entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)","name":"constant.character.entity.html"},{"match":"&","name":"invalid.illegal.bad-ampersand.html"}]},"string-double-quoted":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.double.html","patterns":[{"include":"source.vue#vue-interpolations"},{"include":"#entities"}]},"string-single-quoted":{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.single.html","patterns":[{"include":"source.vue#vue-interpolations"},{"include":"#entities"}]},"tag-generic-attribute":{"match":"(?<=[^=])\\\\b([a-zA-Z0-9:\\\\-_]+)","name":"entity.other.attribute-name.html"},"tag-id-attribute":{"begin":"\\\\b(id)\\\\b\\\\s*(=)","captures":{"1":{"name":"entity.other.attribute-name.id.html"},"2":{"name":"punctuation.separator.key-value.html"}},"end":"(?!\\\\G)(?<=\'|\\"|[^\\\\s<>/])","name":"meta.attribute-with-value.id.html","patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"meta.toc-list.id.html","end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.double.html","patterns":[{"include":"source.vue#vue-interpolations"},{"include":"#entities"}]},{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"meta.toc-list.id.html","end":"\'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.single.html","patterns":[{"include":"source.vue#vue-interpolations"},{"include":"#entities"}]},{"captures":{"0":{"name":"meta.toc-list.id.html"}},"match":"(?<==)(?:[^\\\\s<>/\'\\"]|/(?!>))+","name":"string.unquoted.html"}]},"tag-stuff":{"patterns":[{"include":"#vue-directives"},{"include":"#tag-id-attribute"},{"include":"#tag-generic-attribute"},{"include":"#string-double-quoted"},{"include":"#string-single-quoted"},{"include":"#unquoted-attribute"}]},"unquoted-attribute":{"match":"(?<==)(?:[^\\\\s<>/\'\\"]|/(?!>))+","name":"string.unquoted.html"},"vue-directives":{"begin":"(?:\\\\b(v-)|(:|@|#))([a-zA-Z0-9\\\\-_]+)(?:\\\\:([a-zA-Z\\\\-_]+))?(?:\\\\.([a-zA-Z\\\\-_]+))*\\\\s*(=)","captures":{"1":{"name":"entity.other.attribute-name.html"},"2":{"name":"punctuation.separator.key-value.html"},"3":{"name":"entity.other.attribute-name.html"},"4":{"name":"entity.other.attribute-name.html"},"5":{"name":"entity.other.attribute-name.html"},"6":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=\'|\\")|(?=[\\\\s<>`])","name":"meta.directive.vue","patterns":[{"begin":"`","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"`","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"source.directive.vue","patterns":[{"include":"source.js#expression"}]},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"source.directive.vue","patterns":[{"include":"source.js#expression"}]},{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"source.directive.vue","patterns":[{"include":"source.js#expression"}]}]}},"scopeName":"text.html.vue-html","embeddedLangs":["vue","javascript"],"embeddedLangsLazy":[]}')),s=[...a["default"],...i["default"],u]},4830:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var a=n(1258),i=n(2330),u=n(3772),s=n(8268),m=n(4731),r=n(1536);const o=Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["text.html.markdown"],"injectionSelector":"L:text.html.markdown","name":"markdown-vue","patterns":[{"include":"#vue-code-block"}],"repository":{"vue-code-block":{"begin":"(^|\\\\G)(\\\\s*)(`{3,}|~{3,})\\\\s*(?i:(vue)((\\\\s+|:|,|\\\\{|\\\\?)[^`~]*)?$)","beginCaptures":{"3":{"name":"punctuation.definition.markdown"},"4":{"name":"fenced_code.block.language.markdown"},"5":{"name":"fenced_code.block.language.attributes.markdown","patterns":[]}},"end":"(^|\\\\G)(\\\\2|\\\\s{0,3})(\\\\3)\\\\s*$","endCaptures":{"3":{"name":"punctuation.definition.markdown"}},"name":"markup.fenced_code.block.markdown","patterns":[{"include":"source.vue"}]}},"scopeName":"markdown.vue.codeblock"}')),c=[o],l=Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue","text.html.markdown","text.html.derivative","text.pug"],"injectionSelector":"L:meta.tag -meta.attribute -meta.ng-binding -entity.name.tag.pug -attribute_value -source.tsx -source.js.jsx, L:meta.element -meta.attribute","name":"vue-directives","patterns":[{"include":"source.vue#vue-directives"}],"scopeName":"vue.directives"}')),d=[l],p=Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue","text.html.markdown","text.html.derivative","text.pug"],"injectionSelector":"L:text.pug -comment -string.comment, L:text.html.derivative -comment.block, L:text.html.markdown -comment.block","name":"vue-interpolations","patterns":[{"include":"source.vue#vue-interpolations"}],"scopeName":"vue.interpolations"}')),g=[p],b=Object.freeze(JSON.parse('{"fileTypes":[],"injectTo":["source.vue"],"injectionSelector":"L:source.css -comment, L:source.postcss -comment, L:source.sass -comment, L:source.stylus -comment","name":"vue-sfc-style-variable-injection","patterns":[{"include":"#vue-sfc-style-variable-injection"}],"repository":{"vue-sfc-style-variable-injection":{"begin":"\\\\b(v-bind)\\\\s*\\\\(","beginCaptures":{"1":{"name":"entity.name.function"}},"end":"\\\\)","name":"vue.sfc.style.variable.injection.v-bind","patterns":[{"begin":"(\'|\\")","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"}},"end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"source.ts.embedded.html.vue","patterns":[{"include":"source.js"}]},{"include":"source.js"}]}},"scopeName":"vue.sfc.style.variable.injection","embeddedLangs":["javascript"]}')),h=[...u["default"],b],v=Object.freeze(JSON.parse('{"displayName":"Vue","name":"vue","patterns":[{"include":"#vue-comments"},{"include":"text.html.basic#comment"},{"include":"#self-closing-tag"},{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html.vue"}},"patterns":[{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)md\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"text.html.markdown","patterns":[{"include":"text.html.markdown"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)html\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"text.html.derivative","patterns":[{"include":"#html-stuff"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)pug\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"text.pug","patterns":[{"include":"text.pug"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)stylus\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.stylus","patterns":[{"include":"source.stylus"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)postcss\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.postcss","patterns":[{"include":"source.postcss"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)sass\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.sass","patterns":[{"include":"source.sass"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)css\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.css","patterns":[{"include":"source.css"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)scss\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.css.scss","patterns":[{"include":"source.css.scss"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)less\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.css.less","patterns":[{"include":"source.css.less"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)js\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.js","patterns":[{"include":"source.js"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)ts\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.ts","patterns":[{"include":"source.ts"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)jsx\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.js.jsx","patterns":[{"include":"source.js.jsx"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)tsx\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.tsx","patterns":[{"include":"source.tsx"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)coffee\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.coffee","patterns":[{"include":"source.coffee"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)json\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.json","patterns":[{"include":"source.json"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)jsonc\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.json.comments","patterns":[{"include":"source.json.comments"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)json5\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.json5","patterns":[{"include":"source.json5"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)yaml\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.yaml","patterns":[{"include":"source.yaml"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)toml\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.toml","patterns":[{"include":"source.toml"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)(gql|graphql)\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.graphql","patterns":[{"include":"source.graphql"}]}]},{"begin":"([a-zA-Z0-9:-]+)\\\\b(?=[^>]*\\\\blang\\\\s*=\\\\s*([\'\\"]?)vue\\\\b\\\\2)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"source.vue","patterns":[{"include":"source.vue"}]}]},{"begin":"(template)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/template\\\\b)","name":"text.html.derivative","patterns":[{"include":"#html-stuff"}]}]},{"begin":"(script)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/script\\\\b)","name":"source.js","patterns":[{"include":"source.js"}]}]},{"begin":"(style)\\\\b","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/style\\\\b)","name":"source.css","patterns":[{"include":"source.css"}]}]},{"begin":"([a-zA-Z0-9:-]+)","beginCaptures":{"1":{"name":"entity.name.tag.$1.html.vue"}},"end":"(</)(\\\\1)\\\\s*(?=>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"patterns":[{"include":"#tag-stuff"},{"begin":"(?<=>)","end":"(?=<\\\\/)","name":"text"}]}]}],"repository":{"html-stuff":{"patterns":[{"include":"#template-tag"},{"include":"text.html.derivative"},{"include":"text.html.basic"}]},"self-closing-tag":{"begin":"(<)([a-zA-Z0-9:-]+)(?=([^>]+/>))","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"end":"(/>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html.vue"}},"name":"self-closing-tag","patterns":[{"include":"#tag-stuff"}]},"tag-stuff":{"begin":"\\\\G","end":"(?=/>)|(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html.vue"}},"name":"meta.tag-stuff","patterns":[{"include":"#vue-directives"},{"include":"text.html.basic#attribute"}]},"template-tag":{"patterns":[{"include":"#template-tag-1"},{"include":"#template-tag-2"}]},"template-tag-1":{"begin":"(<)(template)\\\\b(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"},"3":{"name":"punctuation.definition.tag.end.html.vue"}},"end":"(/?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html.vue"}},"name":"meta.template-tag.start","patterns":[{"begin":"\\\\G","end":"(?=/>)|((</)(template)\\\\b)","endCaptures":{"2":{"name":"punctuation.definition.tag.begin.html.vue"},"3":{"name":"entity.name.tag.$3.html.vue"}},"name":"meta.template-tag.end","patterns":[{"include":"#html-stuff"}]}]},"template-tag-2":{"begin":"(<)(template)\\\\b","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html.vue"},"2":{"name":"entity.name.tag.$2.html.vue"}},"end":"(/?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html.vue"}},"name":"meta.template-tag.start","patterns":[{"begin":"\\\\G","end":"(?=/>)|((</)(template)\\\\b)","endCaptures":{"2":{"name":"punctuation.definition.tag.begin.html.vue"},"3":{"name":"entity.name.tag.$3.html.vue"}},"name":"meta.template-tag.end","patterns":[{"include":"#tag-stuff"},{"include":"#html-stuff"}]}]},"vue-comments":{"patterns":[{"include":"#vue-comments-key-value"}]},"vue-comments-key-value":{"begin":"(\x3c!--)\\\\s*(@)([\\\\w$]+)(?=\\\\s)","beginCaptures":{"1":{"name":"punctuation.definition.comment.vue"},"2":{"name":"punctuation.definition.block.tag.comment.vue"},"3":{"name":"storage.type.class.comment.vue"}},"end":"(--\x3e)","endCaptures":{"1":{"name":"punctuation.definition.comment.vue"}},"name":"comment.block.vue","patterns":[{"include":"source.json#value"}]},"vue-directives":{"patterns":[{"include":"#vue-directives-control"},{"include":"#vue-directives-style-attr"},{"include":"#vue-directives-original"},{"include":"#vue-directives-generic-attr"}]},"vue-directives-control":{"begin":"(v-for)|(v-if|v-else-if|v-else)","captures":{"1":{"name":"keyword.control.loop.vue"},"2":{"name":"keyword.control.conditional.vue"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.directive.control.vue","patterns":[{"include":"#vue-directives-expression"}]},"vue-directives-expression":{"patterns":[{"begin":"(=)\\\\s*(\'|\\"|`)","beginCaptures":{"1":{"name":"punctuation.separator.key-value.html.vue"},"2":{"name":"punctuation.definition.string.begin.html.vue"}},"end":"(\\\\2)","endCaptures":{"1":{"name":"punctuation.definition.string.end.html.vue"}},"patterns":[{"begin":"(?<=(\'|\\"|`))","end":"(?=\\\\1)","name":"source.ts.embedded.html.vue","patterns":[{"include":"source.ts#expression"}]}]},{"begin":"(=)\\\\s*(?=[^\'\\"`])","beginCaptures":{"1":{"name":"punctuation.separator.key-value.html.vue"}},"end":"(?=(\\\\s|>|\\\\/>))","patterns":[{"begin":"(?=[^\'\\"`])","end":"(?=(\\\\s|>|\\\\/>))","name":"source.ts.embedded.html.vue","patterns":[{"include":"source.ts#expression"}]}]}]},"vue-directives-generic-attr":{"begin":"\\\\b(generic)\\\\s*(=)","captures":{"1":{"name":"entity.other.attribute-name.html.vue"},"2":{"name":"punctuation.separator.key-value.html.vue"}},"end":"(?<=\'|\\")","name":"meta.attribute.generic.vue","patterns":[{"begin":"(\'|\\")","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.html.vue"}},"comment":"https://github.com/microsoft/vscode/blob/fd4346210f59135fad81a8b8c4cea7bf5a9ca6b4/extensions/typescript-basics/syntaxes/TypeScript.tmLanguage.json#L4002-L4020","end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.string.end.html.vue"}},"name":"meta.type.parameters.vue","patterns":[{"include":"source.ts#comment"},{"match":"(?<![_$[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out)(?![_$[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},{"include":"source.ts#type"},{"include":"source.ts#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.ts"}]}]},"vue-directives-original":{"begin":"(?:(?:(v-[\\\\w-]+)(:)?)|([:\\\\.])|(@)|(#))(?:(?:(\\\\[)([^\\\\]]*)(\\\\]))|([\\\\w-]+))?","beginCaptures":{"1":{"name":"entity.other.attribute-name.html.vue"},"2":{"name":"punctuation.separator.key-value.html.vue"},"3":{"name":"punctuation.attribute-shorthand.bind.html.vue"},"4":{"name":"punctuation.attribute-shorthand.event.html.vue"},"5":{"name":"punctuation.attribute-shorthand.slot.html.vue"},"6":{"name":"punctuation.separator.key-value.html.vue"},"7":{"name":"source.ts.embedded.html.vue","patterns":[{"include":"source.ts#expression"}]},"8":{"name":"punctuation.separator.key-value.html.vue"},"9":{"name":"entity.other.attribute-name.html.vue"}},"end":"(?=\\\\s*[^=\\\\s])","endCaptures":{"1":{"name":"punctuation.definition.string.end.html.vue"}},"name":"meta.attribute.directive.vue","patterns":[{"1":{"name":"punctuation.separator.key-value.html.vue"},"2":{"name":"entity.other.attribute-name.html.vue"},"match":"(\\\\.)([\\\\w-]*)"},{"include":"#vue-directives-expression"}]},"vue-directives-style-attr":{"begin":"\\\\b(style)\\\\s*(=)","captures":{"1":{"name":"entity.other.attribute-name.html.vue"},"2":{"name":"punctuation.separator.key-value.html.vue"}},"end":"(?<=\'|\\")","name":"meta.attribute.style.vue","patterns":[{"begin":"(\'|\\")","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.html.vue"}},"comment":"Copy from source.css#rule-list-innards","end":"(\\\\1)","endCaptures":{"1":{"name":"punctuation.definition.string.end.html.vue"}},"name":"source.css.embedded.html.vue","patterns":[{"include":"source.css#comment-block"},{"include":"source.css#escapes"},{"include":"source.css#font-features"},{"match":"(?<![\\\\w-])--(?:[-a-zA-Z_]|[^\\\\x00-\\\\x7F])(?:[-a-zA-Z0-9_]|[^\\\\x00-\\\\x7F]|\\\\\\\\(?:[0-9a-fA-F]{1,6}|.))*","name":"variable.css"},{"begin":"(?<![-a-zA-Z])(?=[-a-zA-Z])","end":"$|(?![-a-zA-Z])","name":"meta.property-name.css","patterns":[{"include":"source.css#property-names"}]},{"begin":"(:)\\\\s*","beginCaptures":{"1":{"name":"punctuation.separator.key-value.css"}},"comment":"Modify end to fix #199. TODO: handle \' character.","contentName":"meta.property-value.css","end":"\\\\s*(;)|\\\\s*(?=\'|\\")","endCaptures":{"1":{"name":"punctuation.terminator.rule.css"}},"patterns":[{"include":"source.css#comment-block"},{"include":"source.css#property-values"}]},{"match":";","name":"punctuation.terminator.rule.css"}]}]},"vue-interpolations":{"patterns":[{"begin":"(\\\\{\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.interpolation.begin.html.vue"}},"end":"(\\\\}\\\\})","endCaptures":{"1":{"name":"punctuation.definition.interpolation.end.html.vue"}},"name":"expression.embedded.vue","patterns":[{"begin":"\\\\G","end":"(?=\\\\}\\\\})","name":"source.ts.embedded.html.vue","patterns":[{"include":"source.ts#expression"}]}]}]}},"scopeName":"source.vue","embeddedLangs":["html","css","javascript","typescript","json","html-derivative","markdown-vue","vue-directives","vue-interpolations","vue-sfc-style-variable-injection"],"embeddedLangsLazy":["markdown","pug","stylus","sass","scss","less","jsx","tsx","coffee","jsonc","json5","yaml","toml","graphql"]}')),f=[...a["default"],...i["default"],...u["default"],...s["default"],...m["default"],...r["default"],...c,...d,...g,...h,v]}}]);
//# sourceMappingURL=4303.e9304842.js.map