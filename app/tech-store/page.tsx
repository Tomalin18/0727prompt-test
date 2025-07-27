import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '科技產品商店 | 最新科技產品專賣店',
  description: '探索最新的科技產品，從智能裝置到創新配件，為您的數位生活帶來更多便利與樂趣。',
  keywords: ['科技產品', '智能裝置', '數位配件', '創新科技'],
  openGraph: {
    title: '科技產品商店 | 最新科技產品專賣店',
    description: '探索最新的科技產品，從智能裝置到創新配件，為您的數位生活帶來更多便利與樂趣。',
    type: 'website',
    images: ['/og-tech-store.jpg'],
  },
}

// Product interface based on API structure
interface Product {
  id: number
  name: string
  price_in_cents: number
  image_url: string
}

// Format price function
function formatPrice(priceInCents: number): string {
  return `NT$ ${(priceInCents / 100).toLocaleString()}`
}

async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch('http://localhost:3000/api/products', {
      cache: 'no-store'
    })
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    return await response.json()
  } catch {
    // Fallback for build/development when API is not available
    return []
  }
}

export default async function TechStorePage() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Section 1: 科技導航 */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-purple-400">TechStore</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-300 hover:text-purple-400 transition-colors">企業服務</Link>
              <Link href="/tech-store" className="text-gray-300 hover:text-purple-400 transition-colors">科技商店</Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-purple-400 transition-colors">設計作品</Link>
            </div>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
              購物車
            </Button>
          </div>
        </div>
      </nav>

      {/* Section 2: 產品主打 */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">最新科技</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              未來科技
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent block">
                觸手可及
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              發掘最前沿的科技產品，從智能穿戴到創新配件，
              讓科技為您的生活帶來無限可能。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                探索產品
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-black">
                查看優惠
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 產品特色 */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">產品特色</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              我們精選每一款產品，確保為您提供最優質的科技體驗
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  創新設計
                </CardTitle>
                <CardDescription className="text-gray-300">
                  每款產品都經過精心設計，融合美學與實用性，為您提供卓越的使用體驗
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  前沿技術
                </CardTitle>
                <CardDescription className="text-gray-300">
                  採用最新的技術標準，確保產品性能卓越且具備未來相容性
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded"></div>
                  </div>
                  品質保證
                </CardTitle>
                <CardDescription className="text-gray-300">
                  嚴格的品質控制流程，提供完整的售後服務和技術支援
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: 熱門商品 */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">熱門商品</h2>
            <p className="text-gray-300">精選最受歡迎的科技產品</p>
          </div>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all group">
                  <CardHeader className="p-0">
                    <div className="aspect-square bg-gray-700 rounded-t-lg overflow-hidden">
                      <Image 
                        src={product.image_url} 
                        alt={product.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-white mb-2">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-purple-400">
                        {formatPrice(product.price_in_cents)}
                      </div>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        加入購物車
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">暫時無法載入產品資訊</p>
              <Button variant="outline" className="border-gray-300 text-gray-300">
                重新載入
              </Button>
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black">
              查看所有產品
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-purple-400 mb-4">TechStore</div>
              <p className="text-sm">
                致力於為科技愛好者提供最新、最優質的科技產品
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">產品分類</h3>
              <ul className="space-y-2 text-sm">
                <li>智能裝置</li>
                <li>穿戴科技</li>
                <li>配件周邊</li>
                <li>生活科技</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">客戶服務</h3>
              <ul className="space-y-2 text-sm">
                <li>購物指南</li>
                <li>退換貨政策</li>
                <li>技術支援</li>
                <li>常見問題</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">聯絡我們</h3>
              <ul className="space-y-2 text-sm">
                <li>客服專線: 0800-123-456</li>
                <li>信箱: support@techstore.com</li>
                <li>營業時間: 24/7 線上服務</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 TechStore. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}