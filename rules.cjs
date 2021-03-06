"use strict";
const rules = require("./js/rules.cjs");

module.exports = {
    ...rules,

    // ---- TypeScript Errors ----
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": [
        "error",
        {
            extendDefaults: false,
            types: {
                BigInt: "Don't use boxed types, use bigint instead",
                Number: "Don't use boxed types, use number instead",
                Boolean: "Don't use boxed types, use boolean instead",
                String: "Don't use boxed types, use string instead",
                Symbol: "Don't use boxed types, use symbol instead",
                Function: "Don't use the plain Function type, use (...args: any[]) => any instead",
            },
        },
    ],
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": ["error", {
        allow: [
            "arrowFunctions",
            "private-constructors",
        ],
    }],
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-floating-promises": ["error", {
        ignoreVoid: true,
    }],
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": ["error", {
        checksVoidReturn: false,
    }],
    "@typescript-eslint/no-namespace": [
        "error",
        {
            allowDeclarations: true,
            allowDefinitionFiles: true,
        },
    ],
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            varsIgnorePattern: "^_",
            argsIgnorePattern: "^_",
        },
    ],
    "@typescript-eslint/no-use-before-define": [
        "error",
        { classes: false, functions: false },
    ],
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/require-array-sort-compare": ["error", {
        ignoreStringArrays: true,
    }],
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/restrict-template-expressions": ["error", {
        allowNumber: true,
        allowBoolean: false,
        allowNullable: false,
    }],
    "@typescript-eslint/prefer-nullish-coalescing": ["error", {
        ignoreConditionalTests: true,
        ignoreMixedLogicalExpressions: true,
    }],
    "@typescript-eslint/return-await": ["error", "always"],
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/explicit-module-boundary-types": ["error", {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowHigherOrderFunctions: true,
        allowDirectConstAssertionInArrowFunctions: true,
    }],
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/no-implicit-any-catch": ["error", {
        allowExplicitAny: true,
    }],
    "@typescript-eslint/consistent-type-imports": ["error", {
        prefer: "type-imports",
        disallowTypeAnnotations: true,
    }],
    "@typescript-eslint/no-confusing-void-expression": ["error", {
        ignoreArrowShorthand: false,
        ignoreVoidOperator: true,
    }],

    // ---- TypeScript Styles ----
    "@typescript-eslint/naming-convention": ["error",
        {
            selector: "default",
            format: ["camelCase"],
        },
        {
            selector: ["variable", "parameter"],
            types: ["function"],
            format: ["camelCase", "PascalCase"],
            trailingUnderscore: "allow",
        },
        {
            selector: ["variable", "parameter"],
            modifiers: ["unused"],
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "require",
        },
        {
            selector: "variable",
            modifiers: ["const", "unused"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "require",
        },
        {
            selector: "variable",
            modifiers: ["const"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
            selector: "typeLike",
            format: ["PascalCase"],
        },
        {
            selector: "property",
            modifiers: ["readonly", "static"],
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        {
            selector: "objectLiteralProperty",
            format: null,
        }
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
        "error",
        { default: "generic" },
    ],
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/member-delimiter-style": [
        "error",
        {
            multiline: {
                delimiter: "comma",
                requireLast: true,
            },
            singleline: {
                delimiter: "comma",
                requireLast: false,
            },
            overrides: {
                interface: {
                    multiline: {
                        delimiter: "semi",
                        requireLast: true,
                    },
                    singleline: {
                        delimiter: "semi",
                        requireLast: false,
                    },
                },
            },
        },
    ],
    "@typescript-eslint/member-ordering": [
        "error",
        {
            default: [
                "static-field",

                "static-method",

                "instance-field",

                "private-constructor",
                "constructor",

                "instance-method",
            ],
        },
    ],
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/semi": "error",
    "@typescript-eslint/type-annotation-spacing": [
        "error",
        {
            before: false,
            after: true,
            overrides: {
                arrow: { before: true, after: true },
            },
        },
    ],
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow",
        },
    ],
    "@typescript-eslint/brace-style": [
        "error",
        "1tbs",
        { allowSingleLine: true },
    ],
    "@typescript-eslint/space-before-function-paren": [
        "error",
        {
            anonymous: "never",
            named: "never",
            asyncArrow: "always",
        },
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-extra-semi": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-extra-parens": "error",
    "@typescript-eslint/quotes": ["error", "double", {
        allowTemplateLiterals: true,
    }],
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/comma-spacing": ["error", {
        before: false,
        after: true,
    }],
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/ban-ts-comment": ["error", {
        "ts-ignore": false,
    }],
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/keyword-spacing": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/lines-between-class-members": ["error",
        "always",
        { exceptAfterSingleLine: true },
    ],
    "@typescript-eslint/comma-dangle": ["error", {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "always-multiline",
        enums: "always-multiline",
        generics: "always-multiline",
        tuples: "always-multiline",
    }],
    "@typescript-eslint/consistent-indexed-object-style": [
        "error",
        "record",
    ],
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/object-curly-spacing": [
        "error",
        "always",
    ],

    // ---- TypeScript disabled ----
    "@typescript-eslint/no-invalid-this": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/promise-function-async": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/prefer-readonly-parameter-types": "off",
    // TODO: Reenable when fixed
    "@typescript-eslint/strict-boolean-expressions": ["off", {
        allowNullable: true,
        ignoreRhs: false,
    }],
    // TODO: Reconsider if can handle default values
    "@typescript-eslint/no-unnecessary-condition": ["off", {
        ignoreRhs: false,
        allowConstantLoopConditions: true,
    }],
    // TODO: Consider
    "@typescript-eslint/no-untyped-public-signature": "off",
    // TODO: Reconsider if allow customizing for type/interface seperately
    "@typescript-eslint/method-signature-style": "off",
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/prefer-ts-expect-error": "off",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    // Not well supported
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            SwitchCase: 1,
            FunctionExpression: {
                parameters: 1,
            },
            ignoredNodes: ["ConditionalExpression"],
            flatTernaryExpressions: true,
        },
    ],

    // Disable other rules that will handled by typescript-eslint
    semi: "off",
    "no-undef": "off",
    "brace-style": "off",
    "no-unused-expressions": "off",
    "space-before-function-paren": "off",
    camelcase: "off",
    "no-empty-functions": "off",
    "no-extra-parens": "off",
    "no-dupe-class-members": "off",
    "no-extra-semi": "off",
    "no-throw-literal": "off",
    "default-param-last": "off",
    "func-call-spacing": "off",
    "no-array-constructor": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    quotes: "off",
    "require-await": "off",
    "return-await": "off",
    "no-empty-function": "off",
    "no-void": "off",
    "keyword-spacing": "off",
    "dot-notation": "off",
    "lines-between-class-members": "off",
    "no-loss-of-precision": "off",
    indent: "off",
    "no-duplicate-imports": "off",
    "comma-dangle": "off",
    "object-curly-spacing": "off",

    "import/no-duplicates": "off",
    "import/no-duplicates": "off",
    "import/named": "off",
    "import/default": "off",
    "import/namespace": "off",
    "import/export": "off",
    "import/no-unresolved": "off",
    "import/no-named-as-default-member": "off",
};
