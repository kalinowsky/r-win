module.exports = {
    transform: { '.(ts|tsx)': 'ts-jest' },
    moduleNameMapper: { '\\.(css|less)$': 'jest-transform-stub' },
    testMatch: ['<rootDir>/**/*.spec.(ts|tsx)'],
    moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](build|node_modules|docs|lib|dist|.next)[/\\\\]'],
    roots: ['<rootDir>/src'],
    setupFiles: ['./jest.setup.ts'],
};
