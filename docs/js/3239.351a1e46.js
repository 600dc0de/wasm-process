"use strict";(self["webpackChunkwasm_pm"]=self["webpackChunkwasm_pm"]||[]).push([[3239],{3239:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});const a=Object.freeze(JSON.parse('{"displayName":"Solidity","fileTypes":["sol"],"name":"solidity","patterns":[{"include":"#natspec"},{"include":"#declaration-userType"},{"include":"#comment"},{"include":"#operator"},{"include":"#global"},{"include":"#control"},{"include":"#constant"},{"include":"#primitive"},{"include":"#type-primitive"},{"include":"#type-modifier-extended-scope"},{"include":"#declaration"},{"include":"#function-call"},{"include":"#assembly"},{"include":"#punctuation"}],"repository":{"assembly":{"patterns":[{"match":"\\\\b(assembly)\\\\b","name":"keyword.control.assembly"},{"match":"\\\\b(let)\\\\b","name":"storage.type.assembly"}]},"comment":{"patterns":[{"include":"#comment-line"},{"include":"#comment-block"}]},"comment-block":{"begin":"/\\\\*","end":"\\\\*/","name":"comment.block","patterns":[{"include":"#comment-todo"}]},"comment-line":{"begin":"(?<!tp:)//","end":"$","name":"comment.line","patterns":[{"include":"#comment-todo"}]},"comment-todo":{"match":"(?i)\\\\b(FIXME|TODO|CHANGED|XXX|IDEA|HACK|NOTE|REVIEW|NB|BUG|QUESTION|COMBAK|TEMP|SUPPRESS|LINT|\\\\w+-disable|\\\\w+-suppress)\\\\b(?-i)","name":"keyword.comment.todo"},"constant":{"patterns":[{"include":"#constant-boolean"},{"include":"#constant-time"},{"include":"#constant-currency"}]},"constant-boolean":{"match":"\\\\b(true|false)\\\\b","name":"constant.language.boolean"},"constant-currency":{"match":"\\\\b(ether|wei|gwei|finney|szabo)\\\\b","name":"constant.language.currency"},"constant-time":{"match":"\\\\b(seconds|minutes|hours|days|weeks|years)\\\\b","name":"constant.language.time"},"control":{"patterns":[{"include":"#control-flow"},{"include":"#control-using"},{"include":"#control-import"},{"include":"#control-pragma"},{"include":"#control-underscore"},{"include":"#control-unchecked"},{"include":"#control-other"}]},"control-flow":{"patterns":[{"match":"\\\\b(if|else|for|while|do|break|continue|try|catch|finally|throw|return|global)\\\\b","name":"keyword.control.flow"},{"begin":"\\\\b(returns)\\\\b","beginCaptures":{"1":{"name":"keyword.control.flow.return"}},"end":"(?=\\\\))","patterns":[{"include":"#declaration-function-parameters"}]}]},"control-import":{"patterns":[{"begin":"\\\\b(import)\\\\b","beginCaptures":{"1":{"name":"keyword.control.import"}},"end":"(?=\\\\;)","patterns":[{"begin":"((?=\\\\{))","end":"((?=\\\\}))","patterns":[{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.type.interface"}]},{"match":"\\\\b(from)\\\\b","name":"keyword.control.import.from"},{"include":"#string"},{"include":"#punctuation"}]},{"match":"\\\\b(import)\\\\b","name":"keyword.control.import"}]},"control-other":{"match":"\\\\b(new|delete|emit)\\\\b","name":"keyword.control"},"control-pragma":{"captures":{"1":{"name":"keyword.control.pragma"},"2":{"name":"entity.name.tag.pragma"},"3":{"name":"constant.other.pragma"}},"match":"\\\\b(pragma)(?:\\\\s+([A-Za-z_]\\\\w+)\\\\s+([^\\\\s]+))?\\\\b"},"control-unchecked":{"match":"\\\\b(unchecked)\\\\b","name":"keyword.control.unchecked"},"control-underscore":{"match":"\\\\b(_)\\\\b","name":"constant.other.underscore"},"control-using":{"patterns":[{"captures":{"1":{"name":"keyword.control.using"},"2":{"name":"entity.name.type.library"},"3":{"name":"keyword.control.for"},"4":{"name":"entity.name.type"}},"match":"\\\\b(using)\\\\b\\\\s+\\\\b([A-Za-z\\\\d_]+)\\\\b\\\\s+\\\\b(for)\\\\b\\\\s+\\\\b([A-Za-z\\\\d_]+)"},{"match":"\\\\b(using)\\\\b","name":"keyword.control.using"}]},"declaration":{"patterns":[{"include":"#declaration-contract"},{"include":"#declaration-userType"},{"include":"#declaration-interface"},{"include":"#declaration-library"},{"include":"#declaration-function"},{"include":"#declaration-modifier"},{"include":"#declaration-constructor"},{"include":"#declaration-event"},{"include":"#declaration-storage"},{"include":"#declaration-error"}]},"declaration-constructor":{"patterns":[{"begin":"\\\\b(constructor)\\\\b","beginCaptures":{"1":{"name":"storage.type.constructor"}},"end":"(?=\\\\{)","patterns":[{"begin":"\\\\G\\\\s*(?=\\\\()","end":"(?=\\\\))","patterns":[{"include":"#declaration-function-parameters"}]},{"begin":"(?<=\\\\))","end":"(?=\\\\{)","patterns":[{"include":"#type-modifier-access"},{"include":"#function-call"}]}]},{"captures":{"1":{"name":"storage.type.constructor"}},"match":"\\\\b(constructor)\\\\b"}]},"declaration-contract":{"patterns":[{"begin":"\\\\b(contract)\\\\b\\\\s+(\\\\w+)\\\\b\\\\s+\\\\b(is)\\\\b\\\\s+","beginCaptures":{"1":{"name":"storage.type.contract"},"2":{"name":"entity.name.type.contract"},"3":{"name":"storage.modifier.is"}},"end":"(?=\\\\{)","patterns":[{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.type.contract.extend"}]},{"captures":{"1":{"name":"storage.type.contract"},"2":{"name":"entity.name.type.contract"}},"match":"\\\\b(contract)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"}]},"declaration-enum":{"patterns":[{"begin":"\\\\b(enum)\\\\s+(\\\\w+)\\\\b","beginCaptures":{"1":{"name":"storage.type.enum"},"2":{"name":"entity.name.type.enum"}},"end":"(?=\\\\})","patterns":[{"match":"\\\\b(\\\\w+)\\\\b","name":"variable.other.enummember"},{"include":"#punctuation"},{"include":"#comment"}]},{"captures":{"1":{"name":"storage.type.enum"},"3":{"name":"entity.name.type.enum"}},"match":"\\\\b(enum)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"}]},"declaration-error":{"captures":{"1":{"name":"storage.type.error"},"3":{"name":"entity.name.type.error"}},"match":"\\\\b(error)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"},"declaration-event":{"patterns":[{"begin":"\\\\b(event)\\\\b(?:\\\\s+(\\\\w+)\\\\b)?","beginCaptures":{"1":{"name":"storage.type.event"},"2":{"name":"entity.name.type.event"}},"end":"(?=\\\\))","patterns":[{"include":"#type-primitive"},{"captures":{"1":{"name":"storage.type.modifier.indexed"},"2":{"name":"variable.parameter.event"}},"match":"\\\\b(?:(indexed)\\\\s)?(\\\\w+)(?:,\\\\s*|)"},{"include":"#punctuation"}]},{"captures":{"1":{"name":"storage.type.event"},"3":{"name":"entity.name.type.event"}},"match":"\\\\b(event)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"}]},"declaration-function":{"patterns":[{"begin":"\\\\b(function)\\\\s+(\\\\w+)\\\\b","beginCaptures":{"1":{"name":"storage.type.function"},"2":{"name":"entity.name.function"}},"end":"(?=\\\\{|;)","patterns":[{"include":"#natspec"},{"include":"#global"},{"include":"#declaration-function-parameters"},{"include":"#type-modifier-access"},{"include":"#type-modifier-payable"},{"include":"#type-modifier-immutable"},{"include":"#type-modifier-extended-scope"},{"include":"#control-flow"},{"include":"#function-call"},{"include":"#modifier-call"},{"include":"#punctuation"}]},{"captures":{"1":{"name":"storage.type.function"},"2":{"name":"entity.name.function"}},"match":"\\\\b(function)\\\\s+([A-Za-z_]\\\\w*)\\\\b"}]},"declaration-function-parameters":{"begin":"\\\\G\\\\s*(?=\\\\()","end":"(?=\\\\))","patterns":[{"include":"#type-primitive"},{"include":"#type-modifier-extended-scope"},{"captures":{"1":{"name":"storage.type.struct"}},"match":"\\\\b([A-Z]\\\\w*)\\\\b"},{"include":"#variable"},{"include":"#punctuation"},{"include":"#comment"}]},"declaration-interface":{"patterns":[{"begin":"\\\\b(interface)\\\\b\\\\s+(\\\\w+)\\\\b\\\\s+\\\\b(is)\\\\b\\\\s+","beginCaptures":{"1":{"name":"storage.type.interface"},"2":{"name":"entity.name.type.interface"},"3":{"name":"storage.modifier.is"}},"end":"(?=\\\\{)","patterns":[{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.type.interface.extend"}]},{"captures":{"1":{"name":"storage.type.interface"},"2":{"name":"entity.name.type.interface"}},"match":"\\\\b(interface)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"}]},"declaration-library":{"captures":{"1":{"name":"storage.type.library"},"3":{"name":"entity.name.type.library"}},"match":"\\\\b(library)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"},"declaration-modifier":{"patterns":[{"begin":"\\\\b(modifier)\\\\b\\\\s*(\\\\w+)","beginCaptures":{"1":{"name":"storage.type.function.modifier"},"2":{"name":"entity.name.function.modifier"}},"end":"(?=\\\\{)","patterns":[{"include":"#declaration-function-parameters"},{"begin":"(?<=\\\\))","end":"(?=\\\\{)","patterns":[{"include":"#declaration-function-parameters"},{"include":"#type-modifier-access"},{"include":"#type-modifier-payable"},{"include":"#type-modifier-immutable"},{"include":"#type-modifier-extended-scope"},{"include":"#function-call"},{"include":"#modifier-call"},{"include":"#control-flow"}]}]},{"captures":{"1":{"name":"storage.type.modifier"},"3":{"name":"entity.name.function"}},"match":"\\\\b(modifier)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"}]},"declaration-storage":{"patterns":[{"include":"#declaration-storage-mapping"},{"include":"#declaration-struct"},{"include":"#declaration-enum"},{"include":"#declaration-storage-field"}]},"declaration-storage-field":{"patterns":[{"include":"#comment"},{"include":"#control"},{"include":"#type-primitive"},{"include":"#type-modifier-access"},{"include":"#type-modifier-immutable"},{"include":"#type-modifier-extend-scope"},{"include":"#type-modifier-payable"},{"include":"#type-modifier-constant"},{"include":"#primitive"},{"include":"#constant"},{"include":"#operator"},{"include":"#punctuation"}]},"declaration-storage-mapping":{"patterns":[{"begin":"\\\\b(mapping)\\\\b","beginCaptures":{"1":{"name":"storage.type.mapping"}},"end":"(?=\\\\))","patterns":[{"include":"#declaration-storage-mapping"},{"include":"#type-primitive"},{"include":"#punctuation"},{"include":"#operator"}]},{"match":"\\\\b(mapping)\\\\b","name":"storage.type.mapping"}]},"declaration-struct":{"patterns":[{"captures":{"1":{"name":"storage.type.struct"},"3":{"name":"entity.name.type.struct"}},"match":"\\\\b(struct)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"},{"begin":"\\\\b(struct)\\\\b\\\\s*(\\\\w+)?\\\\b\\\\s*(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.struct"},"2":{"name":"entity.name.type.struct"}},"end":"(?=\\\\})","patterns":[{"include":"#type-primitive"},{"include":"#variable"},{"include":"#punctuation"},{"include":"#comment"}]}]},"declaration-userType":{"captures":{"1":{"name":"storage.type.userType"},"2":{"name":"entity.name.type.userType"},"3":{"name":"storage.modifier.is"}},"match":"\\\\b(type)\\\\b\\\\s+(\\\\w+)\\\\b\\\\s+\\\\b(is)\\\\b"},"function-call":{"captures":{"1":{"name":"entity.name.function"},"2":{"name":"punctuation.parameters.begin"}},"match":"\\\\b([A-Za-z_]\\\\w*)\\\\s*(\\\\()"},"global":{"patterns":[{"include":"#global-variables"},{"include":"#global-functions"}]},"global-functions":{"patterns":[{"match":"\\\\b(require|assert|revert)\\\\b","name":"keyword.control.exceptions"},{"match":"\\\\b(selfdestruct|suicide)\\\\b","name":"keyword.control.contract"},{"match":"\\\\b(addmod|mulmod|keccak256|sha256|sha3|ripemd160|ecrecover)\\\\b","name":"support.function.math"},{"match":"\\\\b(unicode)\\\\b","name":"support.function.string"},{"match":"\\\\b(blockhash|gasleft)\\\\b","name":"variable.language.transaction"},{"match":"\\\\b(type)\\\\b","name":"variable.language.type"}]},"global-variables":{"patterns":[{"match":"\\\\b(this)\\\\b","name":"variable.language.this"},{"match":"\\\\b(super)\\\\b","name":"variable.language.super"},{"match":"\\\\b(abi)\\\\b","name":"variable.language.builtin.abi"},{"match":"\\\\b(msg\\\\.sender|msg|block|tx|now)\\\\b","name":"variable.language.transaction"},{"match":"\\\\b(tx\\\\.origin|tx\\\\.gasprice|msg\\\\.data|msg\\\\.sig|msg\\\\.value)\\\\b","name":"variable.language.transaction"}]},"modifier-call":{"patterns":[{"include":"#function-call"},{"match":"\\\\b(\\\\w+)\\\\b","name":"entity.name.function.modifier"}]},"natspec":{"patterns":[{"begin":"/\\\\*\\\\*","end":"\\\\*/","name":"comment.block.documentation","patterns":[{"include":"#natspec-tags"}]},{"begin":"///","end":"$","name":"comment.block.documentation","patterns":[{"include":"#natspec-tags"}]}]},"natspec-tag-author":{"match":"(@author)\\\\b","name":"storage.type.author.natspec"},"natspec-tag-custom":{"match":"(@custom:\\\\w*)\\\\b","name":"storage.type.dev.natspec"},"natspec-tag-dev":{"match":"(@dev)\\\\b","name":"storage.type.dev.natspec"},"natspec-tag-inheritdoc":{"match":"(@inheritdoc)\\\\b","name":"storage.type.author.natspec"},"natspec-tag-notice":{"match":"(@notice)\\\\b","name":"storage.type.dev.natspec"},"natspec-tag-param":{"captures":{"1":{"name":"storage.type.param.natspec"},"3":{"name":"variable.other.natspec"}},"match":"(@param)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"},"natspec-tag-return":{"captures":{"1":{"name":"storage.type.return.natspec"},"3":{"name":"variable.other.natspec"}},"match":"(@return)(\\\\s+([A-Za-z_]\\\\w*))?\\\\b"},"natspec-tag-title":{"match":"(@title)\\\\b","name":"storage.type.title.natspec"},"natspec-tags":{"patterns":[{"include":"#comment-todo"},{"include":"#natspec-tag-title"},{"include":"#natspec-tag-author"},{"include":"#natspec-tag-notice"},{"include":"#natspec-tag-dev"},{"include":"#natspec-tag-param"},{"include":"#natspec-tag-return"},{"include":"#natspec-tag-custom"},{"include":"#natspec-tag-inheritdoc"}]},"number":{"patterns":[{"include":"#number-decimal"},{"include":"#number-hex"},{"include":"#number-scientific"}]},"number-decimal":{"match":"\\\\b([0-9_]+(\\\\.[0-9_]+)?)\\\\b","name":"constant.numeric.decimal"},"number-hex":{"match":"\\\\b(0[xX][a-fA-F0-9]+)\\\\b","name":"constant.numeric.hexadecimal"},"number-scientific":{"match":"\\\\b(?:0\\\\.(?:0\\\\d|\\\\d[0-9_]?)|\\\\d[0-9_]*(?:\\\\.\\\\d{1,2})?)(?:e[+-]?[0-9_]+)?","name":"constant.numeric.scientific"},"operator":{"patterns":[{"include":"#operator-logic"},{"include":"#operator-mapping"},{"include":"#operator-arithmetic"},{"include":"#operator-binary"},{"include":"#operator-assignment"}]},"operator-arithmetic":{"match":"(\\\\+|-|\\\\/|\\\\*)","name":"keyword.operator.arithmetic"},"operator-assignment":{"match":"(:?=)","name":"keyword.operator.assignment"},"operator-binary":{"match":"(\\\\^|\\\\&|\\\\||<<|>>)","name":"keyword.operator.binary"},"operator-logic":{"match":"(==|!=|<(?!<)|<=|>(?!>)|>=|\\\\&\\\\&|\\\\|\\\\||:(?!=)|\\\\?|!)","name":"keyword.operator.logic"},"operator-mapping":{"match":"(=>)","name":"keyword.operator.mapping"},"primitive":{"patterns":[{"include":"#number-decimal"},{"include":"#number-hex"},{"include":"#number-scientific"},{"include":"#string"}]},"punctuation":{"patterns":[{"match":";","name":"punctuation.terminator.statement"},{"match":"\\\\.","name":"punctuation.accessor"},{"match":",","name":"punctuation.separator"},{"match":"\\\\{","name":"punctuation.brace.curly.begin"},{"match":"\\\\}","name":"punctuation.brace.curly.end"},{"match":"\\\\[","name":"punctuation.brace.square.begin"},{"match":"\\\\]","name":"punctuation.brace.square.end"},{"match":"\\\\(","name":"punctuation.parameters.begin"},{"match":"\\\\)","name":"punctuation.parameters.end"}]},"string":{"patterns":[{"match":"\\\\\\"(?:\\\\\\\\\\"|[^\\\\\\"])*\\\\\\"","name":"string.quoted.double"},{"match":"\\\\\'(?:\\\\\\\\\'|[^\\\\\'])*\\\\\'","name":"string.quoted.single"}]},"type-modifier-access":{"match":"\\\\b(internal|external|private|public)\\\\b","name":"storage.type.modifier.access"},"type-modifier-constant":{"match":"\\\\b(constant)\\\\b","name":"storage.type.modifier.readonly"},"type-modifier-extended-scope":{"match":"\\\\b(pure|view|inherited|indexed|storage|memory|virtual|calldata|override|abstract)\\\\b","name":"storage.type.modifier.extendedscope"},"type-modifier-immutable":{"match":"\\\\b(immutable)\\\\b","name":"storage.type.modifier.readonly"},"type-modifier-payable":{"match":"\\\\b(nonpayable|payable)\\\\b","name":"storage.type.modifier.payable"},"type-primitive":{"patterns":[{"begin":"\\\\b(address|string\\\\d*|bytes\\\\d*|int\\\\d*|uint\\\\d*|bool|hash\\\\d*)\\\\b(?:\\\\[\\\\])(\\\\()","beginCaptures":{"1":{"name":"support.type.primitive"}},"end":"(\\\\))","patterns":[{"include":"#primitive"},{"include":"#punctuation"},{"include":"#global"},{"include":"#variable"}]},{"match":"\\\\b(address|string\\\\d*|bytes\\\\d*|int\\\\d*|uint\\\\d*|bool|hash\\\\d*)\\\\b","name":"support.type.primitive"}]},"variable":{"patterns":[{"captures":{"1":{"name":"variable.parameter.function"}},"match":"\\\\b(_\\\\w+)\\\\b"},{"captures":{"1":{"name":"support.variable.property"}},"match":"(?:\\\\.)(\\\\w+)\\\\b"},{"captures":{"1":{"name":"variable.parameter.other"}},"match":"\\\\b(\\\\w+)\\\\b"}]}},"scopeName":"source.solidity"}')),c=[a]}}]);
//# sourceMappingURL=3239.351a1e46.js.map