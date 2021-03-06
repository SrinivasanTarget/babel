module.exports = {
  builtins: {
    Symbol: "symbol",
    Promise: "promise",
    Map: "map",
    WeakMap: "weak-map",
    Set: "set",
    WeakSet: "weak-set",
    setImmediate: "set-immediate",
    clearImmediate: "clear-immediate"
  },

  methods: {
    Array: {
      copyWithin: "array/copy-within",
      entries: "array/entries",
      fill: "array/fill",
      findIndex: "array/find-index",
      find: "array/find",
      from: "array/from",
      includes: "array/includes",
      keys: "array/keys",
      of: "array/of",
      values: "array/values"
    },

    JSON: {
      stringify: "json/stringify"
    },

    Object: {
      assign: "object/assign",
      create: "object/create",
      defineProperties: "object/define-properties",
      defineProperty: "object/define-property",
      entries: "object/entries",
      freeze: "object/freeze",
      getOwnPropertyDescriptor: "object/get-own-property-descriptor",
      getOwnPropertyDescriptors: "object/get-own-property-descriptors",
      getOwnPropertyNames: "object/get-own-property-names",
      getOwnPropertySymbols: "object/get-own-property-symbols",
      getPrototypeOf: "object/get-prototype-of",
      isExtensible: "object/is-extensible",
      isFrozen: "object/is-frozen",
      isSealed: "object/is-sealed",
      is: "object/is",
      keys: "object/keys",
      preventExtensions: "object/prevent-extensions",
      seal: "object/seal",
      setPrototypeOf: "object/set-prototype-of",
      values: "object/values"
    },

    Math: {
      acosh: "math/acosh",
      asinh: "math/asinh",
      atanh: "math/atanh",
      cbrt: "math/cbrt",
      clz32: "math/clz32",
      cosh: "math/cosh",
      expm1: "math/expm1",
      fround: "math/fround",
      hypot: "math/hypot",
      imul: "math/imul",
      log10: "math/log10",
      log1p: "math/log1p",
      log2: "math/log2",
      sign: "math/sign",
      sinh: "math/sinh",
      tanh: "math/tanh",
      trunc: "math/trunc",
      iaddh: "math/iaddh",
      isubh: "math/isubh",
      imulh: "math/imulh",
      umulh: "math/umulh"
    },

    Symbol: {
      for: "symbol/for",
      hasInstance: "symbol/has-instance",
      isConcatSpreadable: "symbol/is-concat-spreadable",
      iterator: "symbol/iterator",
      keyFor: "symbol/key-for",
      match: "symbol/match",
      replace: "symbol/replace",
      search: "symbol/search",
      species: "symbol/species",
      split: "symbol/split",
      toPrimitive: "symbol/to-primitive",
      toStringTag: "symbol/to-string-tag",
      unscopables: "symbol/unscopables"
    },

    String: {
      at: "string/at",
      codePointAt: "string/code-point-at",
      endsWith: "string/ends-with",
      fromCodePoint: "string/from-code-point",
      includes: "string/includes",
      padStart: "string/pad-start",
      padEnd: "string/pad-end",
      raw: "string/raw",
      repeat: "string/repeat",
      startsWith: "string/starts-with",
      trim: "string/trim",
      trimLeft: "string/trim-left",
      trimRight: "string/trim-right",
      trimStart: "string/trim-left",
      trimEnd: "string/trim-right"
    },

    Number: {
      EPSILON: "number/epsilon",
      isFinite: "number/is-finite",
      isInteger: "number/is-integer",
      isNaN: "number/is-nan",
      isSafeInteger: "number/is-safe-integer",
      MAX_SAFE_INTEGER: "number/max-safe-integer",
      MIN_SAFE_INTEGER: "number/min-safe-integer",
      parseFloat: "number/parse-float",
      parseInt: "number/parse-int"
    },

    Reflect: {
      apply: "reflect/apply",
      construct: "reflect/construct",
      defineProperty: "reflect/define-property",
      deleteProperty: "reflect/delete-property",
      enumerate: "reflect/enumerate",
      getOwnPropertyDescriptor: "reflect/get-own-property-descriptor",
      getPrototypeOf: "reflect/get-prototype-of",
      get: "reflect/get",
      has: "reflect/has",
      isExtensible: "reflect/is-extensible",
      ownKeys: "reflect/own-keys",
      preventExtensions: "reflect/prevent-extensions",
      setPrototypeOf: "reflect/set-prototype-of",
      set: "reflect/set"
    },

    System: {
      global: "system/global"
    },

    Error: {
      isError: "error/is-error"
    }
  }
};
