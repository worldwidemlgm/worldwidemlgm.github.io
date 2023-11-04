import { DefaultTheme } from "vitepress";

const sidebarConfig: DefaultTheme.Sidebar = {
  "/About/": [
    {
      text: "关于",
      items: [
        { text: "关于我们", link: "/About/" },
      ],
    },
  ],
  "/articles/": [
    {
      text: "文章",
      items: [
        { text: "吴玉泽（MlgmXyysd）的行为：道德分析与解决方案", link: "/articles/1" },
    ],
    },
  ],
};

export default sidebarConfig;
