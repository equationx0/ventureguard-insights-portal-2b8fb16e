
import { Button } from "@/components/ui/button";

interface HeroProps {
  onLoginEntrepreneur: () => void;
  onLoginInvestor: () => void;
}

const Hero = ({ onLoginEntrepreneur, onLoginInvestor }: HeroProps) => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const showLoginOptions = () => {
    // Можно добавить модальное окно или другую логику выбора
    const choice = confirm("Выберите тип входа:\nОК - Предприниматель (ЕСИА)\nОтмена - Инвестор");
    if (choice) {
      onLoginEntrepreneur();
    } else {
      onLoginInvestor();
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-venture-light-blue/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-venture-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Умные венчурные
            <span className="bg-gradient-to-r from-venture-blue to-blue-600 bg-clip-text text-transparent block">
              инвестиции
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Платформа нового поколения для удобного и быстрого поиска стартапов с ИИ-верификацией и профессиональной аналитикой
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button 
              onClick={scrollToFeatures}
              size="lg" 
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              Узнать больше о платформе
            </Button>
            <Button 
              onClick={showLoginOptions}
              size="lg" 
              className="bg-gradient-to-r from-venture-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Начать работу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
