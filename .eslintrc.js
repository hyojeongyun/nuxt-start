// module.exports = {
//     root: true,
//     env: {
//         node: true,
//     },
//     extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//     parserOptions: {
//         parser: "babel-eslint",
//     },
//     rules: {
//         // 0 : 무시
//         // 1 : Warring
//         // 2 : Error
//         "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//         "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
//         "vue/no-side-effects-in-computed-properties": 0,
//         "vue/return-in-computed-property": 0,
//         "no-case-declarations": 0,
//         "no-constant-condition": 0, // 반복문 문법 검사 ex ) Unexpected constant condition
//         "no-prototype-builtins": 0,
//         "no-empty": 0,
//         "no-redeclare": 0, // 변수 중복 사용 여부 ex) 'i' is already defined
//         "no-unused-vars": 1, // 선언 후 사용하지 않는 변수 체크
//         "no-unreachable": 1, // return,throw,continue,break 다음에 실행되는 코드가 있는지 체크 ( 의미 없는 코드 )
//         "vue/no-unused-components": 1, // 선언해 놓고 사용하지 않는 컴포넌트 체크 ex) The "ageBox1" component has been registered but not used
//         "vue/require-prop-type-constructor": 1, // prop 선언시 변수에 대한 타입 미표기시 발생
//         "no-undef": 2, // 변수 선언 안함 ex) 'res' is not defined
//         "no-irregular-whitespace": 2,
//         "no-dupe-keys": 2, // 중복 선언 ex) Duplicate key 'created'
//         "no-useless-escape": 2, // 역슬래시 비정상 사용에 대한 체크
//         "prettier/prettier": ["error", { tabWidth: 4 }],
//     },
// };

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended", "eslint:recommended"],
    // parserOptions: {
    //     parser: "babel-eslint",
    // },
    rules: {
        // 0 : 무시
        // 1 : Warring
        // 2 : Error
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/no-side-effects-in-computed-properties": 0,
        "vue/no-use-v-if-with-v-for": "off",
        "vue/return-in-computed-property": 0,
        "no-case-declarations": 0,
        "no-constant-condition": 0, // 반복문 문법 검사 ex ) Unexpected constant condition
        "no-prototype-builtins": 0,
        "no-empty": 0,
        "no-redeclare": 0, // 변수 중복 사용 여부 ex) 'i' is already defined
        "no-unused-vars": 1, // 선언 후 사용하지 않는 변수 체크
        "no-unreachable": 1, // return,throw,continue,break 다음에 실행되는 코드가 있는지 체크 ( 의미 없는 코드 )
        "vue/no-unused-components": 1, // 선언해 놓고 사용하지 않는 컴포넌트 체크 ex) The "ageBox1" component has been registered but not used
        "vue/require-prop-type-constructor": 1, // prop 선언시 변수에 대한 타입 미표기시 발생
        "no-undef": 2, // 변수 선언 안함 ex) 'res' is not defined
        "no-irregular-whitespace": 2,
        "no-dupe-keys": 2, // 중복 선언 ex) Duplicate key 'created'
        "no-useless-escape": 2, // 역슬래시 비정상 사용에 대한 체크
        "prettier/prettier": ["error", { tabWidth: 4 }],
    },
};
