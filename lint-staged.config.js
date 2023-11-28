module.exports = {
    "src/**/**/*.{ts,tsx}": [
        "eslint --fix",
        () => "tsc --noEmit"
    ],
    "src/**/**/*.{ts,tsx,css,scss}": [
        "prettier --write"
    ]
}
