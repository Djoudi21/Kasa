const config = {
    testEnvironment: 'jsdom',
    verbose: true,
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!.*\\.js$)"
    ]
};

module.exports = config;
