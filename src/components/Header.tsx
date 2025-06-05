
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onLoginEntrepreneur: () => void;
  onLoginInvestor: () => void;
}

const Header = ({ onLoginEntrepreneur, onLoginInvestor }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold venture-blue">VentureGuard</h1>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-600 hover:venture-blue px-3 py-2 text-lg font-medium transition-colors">
                Возможности
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:venture-blue px-3 py-2 text-lg font-medium transition-colors">
                Как это работает
              </a>
              <a href="#contact" className="text-gray-600 hover:venture-blue px-3 py-2 text-lg font-medium transition-colors">
                Контакты
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button 
              onClick={onLoginEntrepreneur}
              variant="outline" 
              className="border-blue-300 text-blue-600 hover:bg-blue-50 text-base px-6"
            >
              Войти через ЕСИА
            </Button>
            <Button 
              onClick={onLoginInvestor}
              className="bg-venture-blue hover:bg-blue-600 text-white text-base px-6"
            >
              Войти как инвестор
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
