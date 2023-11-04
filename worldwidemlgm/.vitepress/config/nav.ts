import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  { text: "主页", link: "/" },
  { 
    text: "了解本站",
    items:[
      {text: "关于我们", link: "/About/" },
      { text: "常见问题", link: "/FAQ/" },
    ]
  },
];

export default navConfig;
