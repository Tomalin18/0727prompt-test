import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '現代企業官網 | 專業服務領導者',
  description: '我們是專業的企業服務提供商，致力於為客戶提供卓越的解決方案和優質的服務體驗。',
  keywords: ['企業服務', '專業解決方案', '商業諮詢', '優質服務'],
  openGraph: {
    title: '現代企業官網 | 專業服務領導者',
    description: '我們是專業的企業服務提供商，致力於為客戶提供卓越的解決方案和優質的服務體驗。',
    type: 'website',
    images: ['/og-corporate.jpg'],
  },
}

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Section 1: 透明導航 */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-blue-600">Corporate</div>
            <div className="hidden md:flex space-x-8">
              <Link href="/corporate" className="text-gray-700 hover:text-blue-600 transition-colors">企業服務</Link>
              <Link href="/tech-store" className="text-gray-700 hover:text-blue-600 transition-colors">科技商店</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">設計作品</Link>
            </div>
            <Button>聯絡我們</Button>
          </div>
        </div>
      </nav>

      {/* Section 2: 漸層主視覺 */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              專業服務
              <span className="text-blue-600 block">引領未來</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              我們致力於為企業提供創新的解決方案，幫助您在數位時代中保持競爭優勢，
              實現業務目標並創造持續價值。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                立即開始
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: 成就數據 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">成功客戶</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">客戶滿意度</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">服務年資</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">技術支援</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: 核心優勢 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心優勢</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我們憑藉專業的團隊、先進的技術和豐富的經驗，為客戶提供最優質的服務
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  </div>
                  專業團隊
                </CardTitle>
                <CardDescription>
                  擁有多年行業經驗的專家團隊，提供專業的諮詢和技術支援
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-600 rounded"></div>
                  </div>
                  創新技術
                </CardTitle>
                <CardDescription>
                  運用最新的技術和工具，確保解決方案的先進性和可靠性
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-600 rounded"></div>
                  </div>
                  客戶至上
                </CardTitle>
                <CardDescription>
                  以客戶需求為中心，提供個性化的服務和持續的技術支援
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: 客戶見證 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">客戶見證</h2>
            <p className="text-gray-600">聽聽我們的客戶怎麼說</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <p className="text-gray-700 italic">
                    &ldquo;與這個團隊合作是我們做過最明智的決定。他們的專業程度和服務品質超出了我們的預期。&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">王先生</div>
                    <div className="text-sm text-gray-600">科技公司 CEO</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <p className="text-gray-700 italic">
                    &ldquo;優秀的技術團隊，快速的響應時間，以及持續的支援讓我們的業務運作更加順暢。&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold">李女士</div>
                    <div className="text-sm text-gray-600">零售集團 CTO</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 6: 行動呼籲 */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">準備開始您的數位轉型之旅？</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            立即聯絡我們，讓我們的專家團隊為您量身打造最適合的解決方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              免費諮詢
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600">
              查看案例
            </Button>
          </div>
        </div>
      </section>

      {/* Section 7: 現代頁尾 */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-white mb-4">Corporate</div>
              <p className="text-sm">
                致力於為企業提供專業的數位服務和創新解決方案
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">服務項目</h3>
              <ul className="space-y-2 text-sm">
                <li>數位轉型</li>
                <li>系統整合</li>
                <li>技術諮詢</li>
                <li>維護支援</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">公司資訊</h3>
              <ul className="space-y-2 text-sm">
                <li>關於我們</li>
                <li>團隊介紹</li>
                <li>新聞動態</li>
                <li>職涯機會</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">聯絡方式</h3>
              <ul className="space-y-2 text-sm">
                <li>電話: +886-2-1234-5678</li>
                <li>信箱: contact@corporate.com</li>
                <li>地址: 台北市信義區</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-700" />
          <div className="text-center text-sm">
            <p>&copy; 2025 Corporate. 版權所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}