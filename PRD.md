# 🎯 PROJECT BRIEF

**Project Type**: 3-page website website
**Design Direction**: modern with professional mood
**Brand Personality**: professional
**Target Audience**: general users
**Key Differentiator**: To be defined
**Website Domain**: To be configured

# 🎨 BRAND FOUNDATION

## Visual Identity
- **Design Trend**: minimalist - 現代設計
- **Mood**: professional - 專業感受
- **Color Strategy**: trust-blue - 平衡色彩
- **Animation**: subtle - 適度動畫
- **Layout**: grid-based - 靈活佈局

## Brand Personality Expression
- **Core Traits**: professional
- **Values**: To be defined
- **Differentiation**: Unique value proposition to be defined

# ⚡ TECHNICAL REQUIREMENTS

請確保響應式設計和基本的性能優化

# 🏗️ COMPONENT DESIGN RULES

請根據整體風格和品牌需求設計組件

# 🔍 SEO & SITEMAP CONFIGURATION

## 網站域名設定
**域名**: 待設定（請在部署時更新）

## 必須實作的 SEO 功能
- [ ] **Sitemap.xml 生成**: 自動生成包含所有頁面的 sitemap.xml
- [ ] **Robots.txt**: 配置搜尋引擎爬蟲規則
- [ ] **Meta Tags**: 每個頁面都要有完整的 meta 標籤
  - title, description, keywords
  - Open Graph tags (og:title, og:description, og:image, og:url)
  - Twitter Card tags
- [ ] **Canonical URLs**: 每個頁面設定正確的 canonical URL
- [ ] **結構化資料**: 使用 JSON-LD 格式的結構化資料
- [ ] **語言標籤**: 設定正確的 lang 屬性

## Sitemap 結構要求
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/corporate</loc>
    <lastmod>2025-07-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/tech-store</loc>
    <lastmod>2025-07-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://yourdomain.com/portfolio</loc>
    <lastmod>2025-07-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## Google Search Console 準備
- [ ] 在 public 目錄下生成 sitemap.xml
- [ ] 在 robots.txt 中指向 sitemap 位置
- [ ] 設定 Google Analytics 追蹤代碼（如需要）
- [ ] 準備 Google Search Console 驗證檔案
- [ ] 實作結構化資料以提升搜尋結果顯示

## 技術實作指南
```typescript
// app/sitemap.ts - Next.js 13+ 自動 sitemap 生成
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourdomain.com'
  
  return [
    {
      url: `${baseUrl}/corporate`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tech-store`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
```

```typescript
// app/robots.ts - 自動 robots.txt 生成
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yourdomain.com/sitemap.xml',
  }
}
```

# 📄 PAGE SPECIFICATIONS
# 📄 PAGE SPECIFICATIONS

**Total Pages**: 3
**Navigation Required**: Multi-page navigation system with clear hierarchy

## Page 1: 現代企業官網
**Route**: /corporate
**Sections**: 7 sections

### Section 1: 透明導航
- **Type**: navigation
- **Purpose**: 導航系統，頁面連結

### Section 2: 漸層主視覺
- **Type**: hero
- **Purpose**: 首屏展示，吸引注意

### Section 3: 成就數據
- **Type**: stats
- **Purpose**: 數據展示，成果證明

### Section 4: 核心優勢
- **Type**: features
- **Purpose**: 功能介紹，價值展示

### Section 5: 客戶見證
- **Type**: testimonials
- **Purpose**: 客戶見證，建立信任

### Section 6: 行動呼籲
- **Type**: cta
- **Purpose**: 行動呼籲，轉換引導

### Section 7: 現代頁尾
- **Type**: footer
- **Purpose**: 頁尾資訊，補充內容

## Page 2: 科技產品商店
**Route**: /tech-store
**Sections**: 4 sections

### Section 1: 科技導航
- **Type**: navigation
- **Purpose**: 導航系統，頁面連結

### Section 2: 產品主打
- **Type**: hero
- **Purpose**: 首屏展示，吸引注意

### Section 3: 產品特色
- **Type**: features
- **Purpose**: 功能介紹，價值展示

### Section 4: 熱門商品
- **Type**: pricing
- **Purpose**: 價格方案，購買決策

## Page 3: 設計師作品集
**Route**: /portfolio
**Sections**: 4 sections

### Section 1: 創意導航
- **Type**: navigation
- **Purpose**: 導航系統，頁面連結

### Section 2: 設計師介紹
- **Type**: hero
- **Purpose**: 首屏展示，吸引注意

### Section 3: 設計服務
- **Type**: features
- **Purpose**: 功能介紹，價值展示

### Section 4: 設計作品
- **Type**: gallery
- **Purpose**: 作品展示，視覺呈現

# ✅ DELIVERY CHECKLIST

## 必須包含的功能
- [ ] 完整的 3 個頁面，每個頁面都要完整實作
- [ ] 響應式設計，支援手機、平板、桌面
- [ ] 統一的導航系統，包含所有頁面連結
- [ ] 品牌一致的視覺設計
- [ ] 優化的性能和載入速度
- [ ] 基本的 SEO 優化（meta tags, 語義化 HTML）

## 設計品質標準
- [ ] 符合 professional 品牌個性
- [ ] 實現 modern 設計風格
- [ ] 色彩方案基於 trust-blue 策略
- [ ] 動畫效果為 subtle 風格
- [ ] 佈局採用 grid-based 原則

## 技術實作要求
- [ ] 使用 Next.js 14+ App Router
- [ ] 使用 Tailwind CSS 進行樣式設計
- [ ] 使用 TypeScript 確保代碼品質
- [ ] 實作 basic 等級的無障礙支援
- [ ] 優化至 balanced 性能等級
- [ ] 針對 balanced 設備優化

## SEO 優化標準
- [ ] 每個頁面都有獨特的 title 和 description
- [ ] 所有圖片都有 alt 屬性
- [ ] 使用語義化的 HTML 標籤 (h1, h2, nav, main, article, section)
- [ ] 實作 sitemap.xml 和 robots.txt
- [ ] 設定正確的 canonical URLs
- [ ] 加入 Open Graph 和 Twitter Card meta 標籤
- [ ] 實作結構化資料 (JSON-LD)
- [ ] 準備域名配置變數以便部署時更新

## Google 提交準備
- [ ] sitemap.xml 可通過 /sitemap.xml 訪問
- [ ] robots.txt 可通過 /robots.txt 訪問  
- [ ] 所有頁面返回正確的 HTTP 狀態碼
- [ ] 網站在 Google PageSpeed Insights 獲得良好評分
- [ ] 準備 Google Search Console 驗證和提交流程

## 重要提醒
🚨 **請務必生成完整的 3 個頁面**，不要只生成首頁！
🚨 **每個頁面都需要包含所有指定的區塊**
🚨 **確保導航系統能正確連結到所有頁面**
🚨 **保持所有頁面的設計一致性**
