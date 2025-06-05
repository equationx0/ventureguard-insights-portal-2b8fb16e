
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Search, BarChart, Users } from "lucide-react";

interface HeroProps {
  onLoginEntrepreneur: () => void;
  onLoginInvestor: () => void;
}

const Hero = ({ onLoginEntrepreneur, onLoginInvestor }: HeroProps) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Умные венчурные инвестиции
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Платформа нового поколения для безопасного финансирования стартапов с ИИ-верификацией и профессиональной аналитикой
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={onLoginEntrepreneur}
              size="lg" 
              className="bg-venture-blue hover:bg-blue-600 text-white px-8 py-4 text-lg"
            >
              Подать заявку на финансирование
            </Button>
            <Button 
              onClick={onLoginInvestor}
              size="lg" 
              variant="outline" 
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Найти стартапы для инвестиций
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <Shield className="w-12 h-12 venture-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">ИИ-Верификация</h3>
            <p className="text-gray-600">Автоматическая проверка на уникальность и подлинность</p>
          </Card>
          
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <Search className="w-12 h-12 venture-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Умный поиск</h3>
            <p className="text-gray-600">Фильтрация по секторам, стадиям и регионам</p>
          </Card>
          
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <BarChart className="w-12 h-12 venture-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Аналитика</h3>
            <p className="text-gray-600">Профессиональные метрики и визуализация данных</p>
          </Card>
          
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <Users className="w-12 h-12 venture-blue mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
            <p className="text-gray-600">Защищенные транзакции через Госуслуги</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Hero;
