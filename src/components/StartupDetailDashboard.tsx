
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, DollarSign, Shield, AlertTriangle, CheckCircle, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

interface StartupDetailDashboardProps {
  startup: any;
  onBack: () => void;
}

const StartupDetailDashboard = ({ startup, onBack }: StartupDetailDashboardProps) => {
  const revenueData = [
    { month: 'Янв', revenue: 800000, profit: 120000 },
    { month: 'Фев', revenue: 1200000, profit: 180000 },
    { month: 'Мар', revenue: 1800000, profit: 290000 },
    { month: 'Апр', revenue: 2100000, profit: 350000 },
    { month: 'Май', revenue: 2800000, profit: 480000 },
    { month: 'Июн', revenue: 3200000, profit: 580000 }
  ];

  const userGrowthData = [
    { month: 'Янв', users: 1200 },
    { month: 'Фев', users: 2100 },
    { month: 'Мар', users: 3800 },
    { month: 'Апр', users: 5200 },
    { month: 'Май', users: 7800 },
    { month: 'Июн', users: 12500 }
  ];

  const fundingUsage = [
    { name: 'Разработка продукта', value: 40, color: '#0ea5e9' },
    { name: 'Маркетинг', value: 25, color: '#22c55e' },
    { name: 'Команда', value: 20, color: '#f59e0b' },
    { name: 'Операционные расходы', value: 15, color: '#ef4444' }
  ];

  const riskFactors = [
    { factor: 'Рыночный риск', level: 'Средний', description: 'Конкуренция растет, но рынок расширяется' },
    { factor: 'Технологический риск', level: 'Низкий', description: 'Зрелые технологии, проверенное решение' },
    { factor: 'Командный риск', level: 'Низкий', description: 'Опытная команда с релевантным опытом' },
    { factor: 'Финансовый риск', level: 'Средний', description: 'Здоровая структура капитала, но нужны инвестиции' }
  ];

  const kpiMetrics = [
    { name: 'CAC (Customer Acquisition Cost)', value: '₽2,400', trend: -15, good: true },
    { name: 'LTV (Customer Lifetime Value)', value: '₽18,600', trend: +22, good: true },
    { name: 'Monthly Churn Rate', value: '3.2%', trend: -8, good: true },
    { name: 'Gross Margin', value: '68%', trend: +12, good: true },
    { name: 'Net Promoter Score', value: '47', trend: +5, good: true },
    { name: 'Monthly Active Users', value: '12,500', trend: +45, good: true }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={onBack}
                className="mr-4"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                К поиску
              </Button>
              <h1 className="text-2xl font-bold venture-blue">VentureGuard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-venture-green hover:bg-green-600 text-white px-6">
                Подать заявку на финансирование
              </Button>
              <Button variant="outline">
                Связаться со стартапом
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <Card className="p-8 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl font-bold">{startup.name}</h1>
                {startup.aiVerified && (
                  <Badge className="bg-venture-green text-white text-lg px-3 py-1">
                    <Shield className="w-4 h-4 mr-1" />
                    ИИ-Верифицирован
                  </Badge>
                )}
                <Badge className="text-lg px-3 py-1">{startup.uniqueness}% уникальность</Badge>
              </div>
              <p className="text-xl text-gray-600 mb-6">{startup.description}</p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <span>Основан в {startup.founded}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>{startup.employees} сотрудников</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>{startup.region}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">Требуется инвестиций</div>
              <div className="text-4xl font-bold venture-blue mb-4">{startup.funding}</div>
              <div className="flex gap-2">
                <Badge variant="outline">{startup.sector}</Badge>
                <Badge variant="outline">{startup.stage}</Badge>
              </div>
            </div>
          </div>

          {/* Key Metrics Row */}
          <div className="grid grid-cols-5 gap-6 p-6 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold venture-green">{startup.revenue}</div>
              <div className="text-sm text-gray-600">Выручка (год)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold venture-blue">{startup.growth}</div>
              <div className="text-sm text-gray-600">Рост выручки</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold venture-orange">{startup.potentialReturn}</div>
              <div className="text-sm text-gray-600">Потенциальная доходность</div>
            </div>
            <div className="text-center">
              <Badge variant={startup.riskLevel === "Низкий" ? "default" : startup.riskLevel === "Средний" ? "secondary" : "destructive"} className="text-lg px-3 py-1">
                {startup.riskLevel}
              </Badge>
              <div className="text-sm text-gray-600 mt-1">Уровень риска</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">12,500</div>
              <div className="text-sm text-gray-600">Активных пользователей</div>
            </div>
          </div>
        </Card>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Revenue Chart */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Динамика выручки и прибыли</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₽${value.toLocaleString()}`} />
                  <Line type="monotone" dataKey="revenue" stroke="#0ea5e9" strokeWidth={3} name="Выручка" />
                  <Line type="monotone" dataKey="profit" stroke="#22c55e" strokeWidth={3} name="Прибыль" />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* User Growth Chart */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Рост пользовательской базы</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#0ea5e9" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* KPI Metrics */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Ключевые показатели эффективности</h3>
              <div className="grid grid-cols-2 gap-4">
                {kpiMetrics.map((metric, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm text-gray-600">{metric.name}</div>
                      <div className={`flex items-center text-sm ${metric.good ? 'venture-green' : 'venture-red'}`}>
                        <TrendingUp className="w-4 h-4 mr-1" />
                        {metric.trend > 0 ? '+' : ''}{metric.trend}%
                      </div>
                    </div>
                    <div className="text-xl font-bold">{metric.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="space-y-6">
            {/* Funding Usage */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Использование инвестиций</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={fundingUsage}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${value}%`}
                  >
                    {fundingUsage.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {fundingUsage.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Risk Assessment */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Оценка рисков</h3>
              <div className="space-y-4">
                {riskFactors.map((risk, index) => (
                  <div key={index} className="p-3 border rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{risk.factor}</span>
                      <Badge variant={risk.level === "Низкий" ? "default" : risk.level === "Средний" ? "secondary" : "destructive"}>
                        {risk.level}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{risk.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Team */}
            {startup.founders && (
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Команда основателей</h3>
                <div className="space-y-4">
                  {startup.founders.map((founder: any, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-gray-500" />
                      </div>
                      <div>
                        <div className="font-medium">{founder.name}</div>
                        <div className="text-sm text-gray-600">{founder.role}</div>
                        <div className="text-sm text-gray-500">{founder.experience}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* AI Verification */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">ИИ-Верификация</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 venture-green" />
                  <span>Уникальность идеи: {startup.uniqueness}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 venture-green" />
                  <span>Проверка на ИИ-генерацию: Пройдена</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 venture-green" />
                  <span>Верификация финансов: Подтверждена</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 venture-green" />
                  <span>Проверка команды: Выполнена</span>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span>contact@ecotech-solutions.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Москва, Сколково</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetailDashboard;
