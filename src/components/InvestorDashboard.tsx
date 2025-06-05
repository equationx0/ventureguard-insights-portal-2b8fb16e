import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, User, ArrowLeft, PieChart, BarChart } from "lucide-react";
import { useState } from "react";
import StartupDetailDashboard from "./StartupDetailDashboard";

interface InvestorDashboardProps {
  onBack: () => void;
}

const InvestorDashboard = ({ onBack }: InvestorDashboardProps) => {
  const [selectedStartup, setSelectedStartup] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("search");

  const mockStartups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      sector: "Экотехнологии",
      stage: "Серия A",
      region: "Москва",
      description: "Разработка умных систем для мониторинга экологии",
      funding: "₽15,000,000",
      aiVerified: true,
      uniqueness: 95,
      riskLevel: "Средний",
      potentialReturn: "8.5x",
      founded: "2022",
      employees: 25,
      revenue: "₽12,000,000",
      growth: "+250%",
      founders: [
        { name: "Анна Петрова", role: "CEO", experience: "12 лет в экотехнологиях" },
        { name: "Сергей Иванов", role: "CTO", experience: "15 лет в разработке" }
      ]
    },
    {
      id: 2,
      name: "FinanceAI",
      sector: "Финтех",
      stage: "Seed",
      region: "Санкт-Петербург",
      description: "ИИ-платформа для автоматизации финансовой отчетности",
      funding: "₽8,000,000",
      aiVerified: true,
      uniqueness: 88,
      riskLevel: "Высокий",
      potentialReturn: "12x",
      founded: "2023",
      employees: 12,
      revenue: "₽3,500,000",
      growth: "+180%"
    }
  ];

  const portfolioData = [
    { name: "EcoTech Solutions", investment: 5000000, share: 15, status: "active", risk: "medium", return: 1.8 },
    { name: "MedAI Corp", investment: 3000000, share: 8, status: "active", risk: "low", return: 2.1 },
    { name: "GameDev Studio", investment: 2000000, share: 12, status: "exit", risk: "high", return: 4.5 },
    { name: "BlockChain Systems", investment: 4000000, share: 10, status: "active", risk: "high", return: 0.9 }
  ];

  if (selectedStartup) {
    return (
      <StartupDetailDashboard 
        startup={selectedStartup} 
        onBack={() => setSelectedStartup(null)} 
      />
    );
  }

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
                Назад
              </Button>
              <h1 className="text-2xl font-bold venture-blue">VentureGuard</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <User className="w-6 h-6 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="search" className="text-lg">Поиск стартапов</TabsTrigger>
            <TabsTrigger value="portfolio" className="text-lg">Портфель</TabsTrigger>
          </TabsList>

          <TabsContent value="search" className="mt-8">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Поиск инвестиционных возможностей</h2>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <Input placeholder="Название компании" className="text-base" />
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-base">
                    <option>Все секторы</option>
                    <option>Финтех</option>
                    <option>Экотехнологии</option>
                    <option>Медтех</option>
                    <option>EdTech</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-base">
                    <option>Все стадии</option>
                    <option>Pre-seed</option>
                    <option>Seed</option>
                    <option>Серия A</option>
                    <option>Серия B</option>
                  </select>
                  <select className="px-3 py-2 border border-gray-300 rounded-md text-base">
                    <option>Все регионы</option>
                    <option>Москва</option>
                    <option>Санкт-Петербург</option>
                    <option>Новосибирск</option>
                    <option>Екатеринбург</option>
                  </select>
                </div>
                <Button className="bg-venture-blue hover:bg-blue-600 text-white px-8">
                  <Search className="w-4 h-4 mr-2" />
                  Найти стартапы
                </Button>
              </Card>

              <div className="space-y-4">
                {mockStartups.map((startup) => (
                  <Card key={startup.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{startup.name}</h3>
                          {startup.aiVerified && (
                            <Badge className="bg-venture-green text-white">ИИ-Верифицирован</Badge>
                          )}
                          <Badge variant="outline" className="text-base">{startup.sector}</Badge>
                          <Badge variant="outline" className="text-base">{startup.stage}</Badge>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-4">{startup.description}</p>
                        
                        <div className="grid md:grid-cols-5 gap-4 mb-4">
                          <div>
                            <span className="text-sm text-gray-500">Требуется инвестиций</span>
                            <p className="text-xl font-semibold venture-blue">{startup.funding}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Уникальность</span>
                            <p className="text-xl font-semibold venture-green">{startup.uniqueness}%</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Риск</span>
                            <Badge variant={startup.riskLevel === "Низкий" ? "default" : startup.riskLevel === "Средний" ? "secondary" : "destructive"}>
                              {startup.riskLevel}
                            </Badge>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Потенциальная доходность</span>
                            <p className="text-xl font-semibold venture-orange">{startup.potentialReturn}</p>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Регион</span>
                            <p className="text-lg">{startup.region}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button 
                          onClick={() => setSelectedStartup(startup)}
                          className="bg-venture-blue hover:bg-blue-600 text-white px-6"
                        >
                          Подробный анализ
                        </Button>
                        <Button variant="outline" className="px-6">
                          Связаться
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="portfolio" className="mt-8">
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-6">Портфель инвестиций</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold venture-blue">₽14,000,000</div>
                    <div className="text-gray-600">Общий объем инвестиций</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold venture-green">+2.1x</div>
                    <div className="text-gray-600">Средняя доходность</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold venture-orange">4</div>
                    <div className="text-gray-600">Активных инвестиций</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Распределение портфеля</h3>
                    <div className="space-y-3">
                      {portfolioData.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-gray-600">{item.share}% портфеля</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">₽{(item.investment / 1000000).toFixed(1)}M</div>
                            <div className={`text-sm ${item.return >= 1 ? 'venture-green' : 'venture-red'}`}>
                              {item.return}x доходность
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Рекомендации по диверсификации</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded border-l-4 border-blue-400">
                        <div className="font-medium">Увеличить долю низкорисковых активов</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Рекомендуем инвестировать в 2-3 стартапа на стадии Series A для стабилизации портфеля
                        </div>
                      </div>
                      
                      <div className="p-4 bg-yellow-50 rounded border-l-4 border-yellow-400">
                        <div className="font-medium">Географическая диверсификация</div>
                        <div className="text-sm text-gray-600 mt-1">
                          70% инвестиций в Москве. Рассмотрите стартапы из других регионов
                        </div>
                      </div>

                      <div className="p-4 bg-green-50 rounded border-l-4 border-green-400">
                        <div className="font-medium">Секторальный баланс</div>
                        <div className="text-sm text-gray-600 mt-1">
                          Хорошее распределение по секторам. Портфель сбалансирован
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded">
                      <h4 className="font-medium mb-2">Метрики Risk-to-Reward</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Общий уровень риска:</span>
                          <Badge variant="secondary">Средний</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Sharpe Ratio:</span>
                          <span className="font-medium">1.8</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Max Drawdown:</span>
                          <span className="font-medium">-15%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvestorDashboard;
