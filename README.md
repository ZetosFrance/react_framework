# 项目名称

基于Vite + React构建的现代化Web应用

## 技术栈

- **框架**: React 19
- **构建工具**: Vite 6
- **状态管理**: Zustand
- **HTTP客户端**: Axios
- **路由管理**: React Router 7
- **样式方案**: 建议使用CSS Modules，也可使用styled-components
- **UI库**: Ant Design
- **包管理工具**: 建议使用pnpm
- **代码规范**: ESLint + Prettier

## 项目结构

```text
├── src
│   ├── apis/                  # 接口模块化
│   │   └── home.js           # 示例接口文件
│   ├── assets/               
│   │   ├── images/           # 图片资源（允许子目录）
│   │   └── svg/              # SVG图标资源
│   ├── components/           # 公共组件
│   │   └── SvgIcon.jsx       # SVG图标组件
│   ├── hooks/                
│   │   ├── useImage.js       # 图片加载Hook
│   │   └── ...               # 其他自定义Hook
│   ├── pages/                
│   │   └── Home/             # 页面组件
│   │       ├── index.jsx     # 页面主文件
│   │       └── index.module.css # 页面样式
│   ├── router/
│   │   ├── routes.jsx        # 路由配置
│   │   └── RouteGuard.jsx    # 路由守卫
│   ├── store/                # 状态管理
│   │   └── useUserStore.js   # Zustand Store示例
│   ├── utils/
│   │   └── http.js           # Axios实例配置
│   └── ...
```

## 安装
```bash
pnpm install
```
## 运行
```bash
pnpm dev
```
## 构建
```bash
pnpm build
```
## 代码规范
- 使用ESLint和Prettier进行代码格式化和检查,请安装eslint和prettier插件
- 请在提交代码前运行`pnpm lint`进行代码检查

## 图片使用方式
- 普通图片使用useImage Hook加载
- SVG图标使用SvgIcon组件
- 使用方式请参考示例代码pages/Home/index.jsx
