import { Metadata } from "next"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, Eye, Clock, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "آمار بازدید | کودکان هوشمند کردستان",
  description: "آمار بازدید سایت کودکان هوشمند کردستان"
}

export default function AnalyticsPage() {
  return (
    <div className="pt-16">
      <WhatsAppFloat />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">آمار بازدید</h1>
          <p className="text-muted-foreground text-center mb-12">
            آمار بازدید سایت به تفکیک صفحات و بازه زمانی
          </p>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">نمای کلی</TabsTrigger>
              <TabsTrigger value="pages">صفحات</TabsTrigger>
              <TabsTrigger value="users">کاربران</TabsTrigger>
              <TabsTrigger value="time">زمان</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">بازدید کل</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-muted-foreground">
                      +0% از ماه گذشته
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">کاربران فعال</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0</div>
                    <p className="text-xs text-muted-foreground">
                      +0% از ماه گذشته
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">میانگین زمان</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0 دقیقه</div>
                    <p className="text-xs text-muted-foreground">
                      +0% از ماه گذشته
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">نرخ رشد</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">0%</div>
                    <p className="text-xs text-muted-foreground">
                      +0% از ماه گذشته
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="pages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>بازدید صفحات</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">صفحه اصلی</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">درباره ما</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">تماس با ما</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">همکاری با ما</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>اطلاعات کاربران</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">کاربران جدید</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 کاربر</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">کاربران بازگشتی</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 کاربر</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">میانگین بازدید</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 صفحه</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="time" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>بازدید به تفکیک زمان</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">صبح (6-12)</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">ظهر (12-18)</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">شب (18-24)</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">نیمه شب (0-6)</span>
                      </div>
                      <div className="text-sm text-muted-foreground">0 بازدید</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
} 