module.exports = {
    base: '/gulu-vueUI/',
    title: '轱辘 UI',
    description: '一个好用的 UI 框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '码云', link: 'https://gitee.com/panyuanfeng/gulu-vue-ui'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/tabs',
                    '/components/grid',
                    '/components/button',
                    '/components/layout',
                    '/components/input',
                    '/components/popover',
                    '/components/toast',
                    '/components/collapse',
                ]
            },
        ]
    },
}