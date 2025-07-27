import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vibe Template | 現代專業網站解決方案',
  description: '探索我們精心設計的3頁面網站模板，包含企業服務、科技產品商店和設計師作品集，採用現代專業設計風格。',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vibe Template
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-700 hover:text-blue-600 transition-colors">企業服務</Link>
              <Link href="/tech-store" className="text-gray-700 hover:text-blue-600 transition-colors">科技商店</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">設計作品</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              現代專業
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                網站模板
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              精心設計的3頁面網站模板，結合企業服務、科技產品商店和設計師作品集，
              採用信賴藍色調與現代簡約風格，為您的業務提供專業形象。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/corporate">探索企業服務</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                <Link href="/tech-store">查看科技商店</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">三種風格，一次滿足</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              每個頁面都採用不同的設計風格和配色方案，展現多樣化的設計可能性
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate Card */}
            <Card className="hover:shadow-lg transition-all group border-blue-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white text-2xl font-bold">C</div>
                </div>
                <CardTitle className="text-gray-900">企業服務頁面</CardTitle>
                <CardDescription>
                  專業的企業形象設計，展現信賴與權威感
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full" asChild>
                  <Link href="/corporate">查看頁面</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tech Store Card */}
            <Card className="hover:shadow-lg transition-all group border-purple-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white text-2xl font-bold">T</div>
                </div>
                <CardTitle className="text-gray-900">科技商店頁面</CardTitle>
                <CardDescription>
                  未來感十足的科技風格，展現創新與前衛
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/tech-store">查看頁面</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Portfolio Card */}
            <Card className="hover:shadow-lg transition-all group border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-white text-2xl font-bold">P</div>
                </div>
                <CardTitle className="text-gray-900">設計作品集</CardTitle>
                <CardDescription>
                  溫暖的創意風格，展現藝術與美學品味
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600" asChild>
                  <Link href="/portfolio">查看頁面</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">技術特色</h2>
            <p className="text-gray-600">採用最新技術標準，確保性能與可維護性</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Next.js 15+</h3>
              <p className="text-sm text-gray-600">最新的 React 框架</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-sm text-gray-600">型別安全的開發</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">現代 CSS 框架</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Shadcn/UI</h3>
              <p className="text-sm text-gray-600">高品質元件庫</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始使用？</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            立即探索我們的三個精心設計的頁面模板，為您的專案找到最適合的風格
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href="/corporate">企業服務</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/tech-store">科技商店</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Vibe Template
              </div>
              <p className="text-sm">
                現代專業的網站模板解決方案，為您的業務提供完美的數位形象
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">頁面導覽</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">首頁</Link></li>
                <li><Link href="/corporate" className="hover:text-white transition-colors">企業服務</Link></li>
                <li><Link href="/tech-store" className="hover:text-white transition-colors">科技商店</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">設計作品</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">技術特色</h3>
              <ul className="space-y-2 text-sm">
                <li>響應式設計</li>
                <li>SEO 優化</li>
                <li>現代化架構</li>
                <li>高效性能</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">聯絡資訊</h3>
              <ul className="space-y-2 text-sm">
                <li>GitHub: /vibe-template</li>
                <li>文檔: /docs</li>
                <li>支援: support@vibe.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Vibe Template. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
