
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
    <div className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Умные венчурные инвестиции
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Платформа нового поколения для удобного и быстрого поиска стартапов с ИИ-верификацией и профессиональной аналитикой
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToFeatures}
              size="lg" 
              variant="outline"
              className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Узнать больше о платформе
            </Button>
            <Button 
              onClick={showLoginOptions}
              size="lg" 
              className="bg-venture-blue hover:bg-blue-600 text-white px-8 py-4 text-lg"
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
