const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // Base Colors
                            // '@primary-color': '@blue-6',
                            // '@info-color': '@primary-color',
                            // '@success-color': '@green-6',
                            // '@processing-color': '@blue-6',
                            // '@error-color': '@red-5',
                            // '@highlight-color': '@red-5',
                            // '@warning-color': '@gold-6',
                            // '@normal-color': '#d9d9d9',
                            // '@white': '#fff',
                            // '@black': '#000',
                            '@primary-color': '@red-3',
                            '@info-color': '@primary-color',
                            '@success-color': '@green-5',
                            '@processing-color': '@red-2',
                            '@error-color': '@gold-6',
                            '@highlight-color': '@gold-6',
                            '@warning-color': '@gold-7',
                            '@normal-color': '#d9d9d9',
                            '@white': '#fff',
                            '@black': '#000',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
