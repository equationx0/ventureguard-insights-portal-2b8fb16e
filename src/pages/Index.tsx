
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InvestorDashboard from "@/components/InvestorDashboard";
import EntrepreneurDashboard from "@/components/EntrepreneurDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"home" | "investor" | "entrepreneur">("home");

  const handleLoginEntrepreneur = () => {
    console.log("Redirect to ESIA login for entrepreneurs");
    setCurrentView("entrepreneur");
  };

  const handleLoginInvestor = () => {
    console.log("Redirect to investor login");
    setCurrentView("investor");
  };

  const handleBackToHome = () => {
    setCurrentView("home");
  };

  if (currentView === "investor") {
    return <InvestorDashboard onBack={handleBackToHome} />;
  }

  if (currentView === "entrepreneur") {
    return <EntrepreneurDashboard onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLoginEntrepreneur={handleLoginEntrepreneur}
        onLoginInvestor={handleLoginInvestor}
      />
      <Hero 
        onLoginEntrepreneur={handleLoginEntrepreneur}
        onLoginInvestor={handleLoginInvestor}
      />
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают VentureGuard?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные технологии для безопасного и эффективного венчурного инвестирования
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Безопасность данных</h3>
              <p className="text-gray-600">
                Интеграция с Госуслугами обеспечивает максимальную защиту персональных данных и финансовой информации.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold mb-4">ИИ-аналитика</h3>
              <p className="text-gray-600">
                Искусственный интеллект анализирует проекты на уникальность, подлинность и инвестиционную привлекательность.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Умная аналитика</h3>
              <p className="text-gray-600">
                Профессиональные дашборды с метриками риска, доходности и рекомендациями по диверсификации портфеля.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Точный поиск</h3>
              <p className="text-gray-600">
                Расширенные фильтры по секторам, стадиям развития, географии и другим параметрам для точного поиска.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Быстрая проверка</h3>
              <p className="text-gray-600">
                Автоматизированный процесс верификации сокращает время рассмотрения заявок до 5-7 дней.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Прозрачность</h3>
              <p className="text-gray-600">
                Полная прозрачность процесса, понятная система апелляций и обратной связи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает?
            </h2>
            <p className="text-xl text-gray-600">
              Простой и понятный процесс от подачи заявки до получения инвестиций
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            {/* For Entrepreneurs */}
            <div>
              <h3 className="text-2xl font-bold mb-8 venture-blue">Для предпринимателей</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Регистрация через Госуслуги</h4>
                    <p className="text-gray-600">Безопасная авторизация через ЕСИА</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Заполнение паспорта стартапа</h4>
                    <p className="text-gray-600">Скачайте шаблон и заполните информацию о проекте</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">ИИ-верификация</h4>
                    <p className="text-gray-600">Автоматическая проверка на уникальность и подлинность</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Получение решения</h4>
                    <p className="text-gray-600">Отслеживайте статус и получайте уведомления</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* For Investors */}
            <div>
              <h3 className="text-2xl font-bold mb-8 venture-green">Для инвесторов</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-green text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Вход в систему</h4>
                    <p className="text-gray-600">Быстрый доступ к поиску инвестиционных возможностей</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-green text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">Поиск и фильтрация</h4>
                    <p className="text-gray-600">Находите стартапы по секторам, стадиям и регионам</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-green text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Анализ данных</h4>
                    <p className="text-gray-600">Изучайте детальную аналитику и метрики риска</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-venture-green text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Принятие решений</h4>
                    <p className="text-gray-600">Управляйте портфелем и получайте рекомендации</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к VentureGuard и откройте новые возможности для развития бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleLoginEntrepreneur}
              className="bg-venture-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Подать заявку на финансирование
            </button>
            <button 
              onClick={handleLoginInvestor}
              className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Начать инвестировать
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
