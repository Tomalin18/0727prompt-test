import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: '設計師作品集 | 創意無限的視覺設計',
  description: '探索專業設計師的創意作品集，從品牌設計到數位體驗，展現無限創意與專業技能。',
  keywords: ['設計作品集', '創意設計', '視覺設計', '品牌設計', 'UI/UX設計'],
  openGraph: {
    title: '設計師作品集 | 創意無限的視覺設計',
    description: '探索專業設計師的創意作品集，從品牌設計到數位體驗，展現無限創意與專業技能。',
    type: 'website',
    images: ['/og-portfolio.jpg'],
  },
}

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: '品牌識別設計',
      category: '品牌設計',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&auto=format&fit=crop',
      description: '為新創公司打造全方位品牌識別系統'
    },
    {
      id: 2,
      title: '電商網站設計',
      category: '網頁設計',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&auto=format&fit=crop',
      description: '現代化電商平台的使用者介面設計'
    },
    {
      id: 3,
      title: '移動應用設計',
      category: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&auto=format&fit=crop',
      description: '直觀易用的移動應用程式介面設計'
    },
    {
      id: 4,
      title: '海報設計系列',
      category: '平面設計',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&auto=format&fit=crop',
      description: '創意海報設計展現視覺衝擊力'
    },
    {
      id: 5,
      title: '包裝設計',
      category: '產品設計',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&auto=format&fit=crop',
      description: '環保理念與美學結合的包裝設計'
    },
    {
      id: 6,
      title: '數位藝術創作',
      category: '數位藝術',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&auto=format&fit=crop',
      description: '探索數位媒體的無限可能性'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Section 1: 創意導航 */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-orange-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-700 hover:text-orange-600 transition-colors">企業服務</Link>
              <Link href="/tech-store" className="text-gray-700 hover:text-orange-600 transition-colors">科技商店</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-orange-600 transition-colors">設計作品</Link>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              合作洽談
            </Button>
          </div>
        </div>
      </nav>

      {/* Section 2: 設計師介紹 */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-4xl font-bold text-white">JD</div>
              </div>
            </div>
            <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">創意設計師</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              創意設計
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent block">
                無限可能
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              我是一位充滿熱情的設計師，專精於品牌識別、數位體驗和視覺傳達設計。
              透過創意思維與專業技能，為每個專案注入獨特的視覺語言。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                查看作品
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
                下載履歷
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 設計服務 */}
      <section className="py-16 bg-white/70">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">設計服務</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              提供全方位的設計服務，從概念發想到最終執行，創造令人印象深刻的視覺體驗
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-all group border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <CardTitle className="text-gray-900">品牌設計</CardTitle>
                <CardDescription>
                  logo設計、識別系統、品牌指南
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all group border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <CardTitle className="text-gray-900">網頁設計</CardTitle>
                <CardDescription>
                  響應式網站、使用者體驗設計
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all group border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <CardTitle className="text-gray-900">平面設計</CardTitle>
                <CardDescription>
                  海報、名片、包裝設計
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-all group border-orange-200">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-8 h-8 bg-white rounded"></div>
                </div>
                <CardTitle className="text-gray-900">數位藝術</CardTitle>
                <CardDescription>
                  插畫創作、數位媒體設計
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: 設計作品 */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">精選作品</h2>
            <p className="text-gray-600">展示我最具代表性的設計作品</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all overflow-hidden border-orange-200">
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                      {item.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {item.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 h-auto text-orange-600 hover:text-orange-700">
                    查看詳情 →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
              查看所有作品
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始您的設計專案？</h2>
          <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
            讓我們一起創造令人驚艷的視覺體驗，為您的品牌注入創意靈魂
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-orange-600 hover:bg-gray-100">
              開始合作
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-600">
              聯絡我
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                Portfolio
              </div>
              <p className="text-sm">
                專業設計師，致力於創造獨特且有意義的視覺體驗
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">設計服務</h3>
              <ul className="space-y-2 text-sm">
                <li>品牌識別設計</li>
                <li>網頁界面設計</li>
                <li>平面設計</li>
                <li>數位藝術創作</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">作品分類</h3>
              <ul className="space-y-2 text-sm">
                <li>商業專案</li>
                <li>個人創作</li>
                <li>實驗性作品</li>
                <li>合作專案</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">聯絡方式</h3>
              <ul className="space-y-2 text-sm">
                <li>信箱: hello@portfolio.com</li>
                <li>LinkedIn: /in/designer</li>
                <li>Behance: /designer</li>
                <li>Instagram: @designer</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Portfolio. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}