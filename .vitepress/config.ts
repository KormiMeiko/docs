import { defineConfig } from 'vitepress'
import {sharedConfig} from "./sharedConfig";
import {zhConfig} from "./zhCN";
import {ruConfig} from "./ruRU";
import {zhtwConfig} from "./zhTW";

export default defineConfig({

    ...sharedConfig,

    title: 'CSKB',

    locales: {
        root: { label: '简体中文', lang: 'zh-CN', ...zhConfig },
        ruRU: { label: 'Русский', lang: 'ru-RU', ...ruConfig },
		zhTW: { label: '正體中文', lang: 'zh-TW', ...zhtwConfig }
    },
})
