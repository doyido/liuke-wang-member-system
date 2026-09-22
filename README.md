# 「留客王」会员运营落地系统

> 「留客王」会员运营体系，让你的头回客变成回头客

纯前端内测版（Frontend-Only Prototype）。3分钟填写门店信息，一键生成专属会员运营方案书、SOP手册与效果评估工具包。

## 在线体验（GitHub Pages）

在仓库 **Settings → Pages → Source** 选择 `main` 分支后，访问：
**https://doyido.github.io/liuke-wang-member-system/**

## 本地运行

### 电脑
1. 克隆仓库：`git clone https://github.com/doyido/liuke-wang-member-system.git`
2. 双击 `index.html` 即可在浏览器中运行（无需安装任何东西）

### 手机
1. 电脑与手机连接同一WiFi
2. 在项目目录运行：`python -m http.server 8080`
3. 手机浏览器访问 `http://<电脑局域网IP>:8080`

## 技术栈

- 纯 HTML + CSS + 原生 JavaScript（无框架、无构建步骤）
- PDF生成：jsPDF + html2canvas（CDN加载）
- 数据持久化：localStorage（本地浏览器，不上传服务器）
- 无后端、无数据库、无真实支付

## 测试说明

- **内测版解锁**：输入任意6位数字（如 `123456`）即可解锁
- **生成PDF**：点击"生成并下载PDF"会根据您填写的数据实时生成A4排版PDF（页眉带留客王Logo、页脚带页码）
- **模拟下载样例**：如处于离线环境CDN加载失败，可使用此按钮下载预设样例（需本地assets目录）
- 填写数据保存在浏览器 localStorage，刷新不丢

## 目录结构

```
├── index.html          # 主页面（欢迎页/4步向导/结果页/弹窗）
├── styles.css         # 品牌样式（深蓝+尊贵金+活力橙）
├── app.js             # 业务逻辑（规则引擎/PDF生成/表单交互）
├── assets/            # 样例PDF与Logo（本地测试用）
└── README.md
```

## 核心功能

1. **4步向导**：基础信息 → 客户与产品 → 策略系数 → 确认生成
2. **动态系数+推荐值**：14项策略参数，每项带行业验证推荐值与实时预览
3. **价值塑造弹窗**：解锁前展示落地大礼包权益清单
4. **PDF生成**：方案书/SOP手册/评估工具包，页眉带Logo、页脚带页码
5. **新手引导**：3步图文弹窗，降低使用门槛

---

为「留客王·实体老板实战交流群」内测使用
