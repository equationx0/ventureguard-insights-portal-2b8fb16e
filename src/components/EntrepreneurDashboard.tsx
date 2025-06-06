
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Upload, CheckCircle, XCircle, Clock, Send, Sparkles, TrendingUp } from "lucide-react";

interface EntrepreneurDashboardProps {
  onBack: () => void;
}

const EntrepreneurDashboard = ({ onBack }: EntrepreneurDashboardProps) => {
  const applications = [
    {
      id: 1,
      projectName: "EcoTech Solutions",
      status: "approved",
      submittedDate: "2024-01-15",
      amount: "₽15,000,000",
      aiCheck: "passed",
      uniqueness: 95,
      financialVerification: "verified"
    },
    {
      id: 2,
      projectName: "FinanceAI Platform",
      status: "under_review",
      submittedDate: "2024-01-20",
      amount: "₽8,000,000",
      aiCheck: "in_progress",
      uniqueness: null,
      financialVerification: "pending"
    },
    {
      id: 3,
      projectName: "Smart Logistics",
      status: "rejected",
      submittedDate: "2024-01-10",
      amount: "₽12,000,000",
      aiCheck: "flagged",
      uniqueness: 45,
      financialVerification: "verified",
      rejectionReason: "Низкая уникальность идеи"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-venture-green text-white shadow-glow-green hover-scale transition-premium">Одобрено</Badge>;
      case "under_review":
        return <Badge className="bg-venture-yellow text-black hover-scale transition-premium">На рассмотрении</Badge>;
      case "rejected":
        return <Badge className="bg-venture-red text-white hover-scale transition-premium">Отклонено</Badge>;
      default:
        return <Badge variant="outline">Неизвестно</Badge>;
    }
  };

  const getAICheckBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <Badge className="bg-venture-green text-white shadow-glow-green hover-scale transition-premium">Пройдена</Badge>;
      case "flagged":
        return <Badge className="bg-venture-red text-white hover-scale transition-premium">Обнаружены проблемы</Badge>;
      case "in_progress":
        return <Badge className="bg-venture-yellow text-black hover-scale transition-premium">В процессе</Badge>;
      default:
        return <Badge variant="outline">Ожидание</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Premium Header with Glassmorphism */}
      <div className="glass border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Button
                variant="ghost"
                onClick={onBack}
                className="mr-4 hover-lift transition-premium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Назад
              </Button>
              <h1 className="text-2xl font-display font-bold venture-blue">VentureGuard</h1>
              <Sparkles className="w-5 h-5 ml-2 venture-blue animate-float" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Premium Typography */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-4xl font-display font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Добро пожаловать в VentureGuard!
          </h2>
          <p className="text-xl text-gray-600 font-inter font-light leading-relaxed">
            Управляйте своими заявками на финансирование и отслеживайте их статус
          </p>
        </div>

        {/* Quick Actions with Glassmorphism */}
        <Card className="glass-card p-8 mb-8 hover-lift transition-premium animate-slide-up">
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 venture-blue mr-3" />
            <h3 className="text-2xl font-display font-bold">Быстрые действия</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button className="gradient-primary hover:shadow-glow text-white px-8 py-3 rounded-xl font-medium transition-premium hover-lift">
              <Download className="w-5 h-5 mr-2" />
              Скачать шаблон паспорта стартапа
            </Button>
            <Button className="gradient-success hover:shadow-glow-green text-white px-8 py-3 rounded-xl font-medium transition-premium hover-lift">
              <Send className="w-5 h-5 mr-2" />
              Подать заявку на финансирование
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-xl font-medium transition-premium hover-lift glass border-gray-200">
              <Upload className="w-5 h-5 mr-2" />
              Загрузить документы
            </Button>
          </div>
        </Card>

        {/* Applications List with Premium Design */}
        <div className="space-y-8 animate-slide-up">
          <h3 className="text-3xl font-display font-bold">Мои заявки на финансирование</h3>
          
          {applications.map((app, index) => (
            <Card key={app.id} className="glass-card p-8 hover-lift transition-premium" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-2xl font-display font-bold mb-3">{app.projectName}</h4>
                  <p className="text-gray-600 text-lg font-inter">Подано: {new Date(app.submittedDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-display font-bold venture-blue mb-3">{app.amount}</div>
                  {getStatusBadge(app.status)}
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 mb-6">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-2 font-inter font-medium">ИИ-проверка</span>
                  {getAICheckBadge(app.aiCheck)}
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-2 font-inter font-medium">Уникальность</span>
                  {app.uniqueness ? (
                    <span className={`font-bold text-lg font-display ${app.uniqueness >= 70 ? 'venture-green' : 'venture-red'}`}>
                      {app.uniqueness}%
                    </span>
                  ) : (
                    <div className="animate-shimmer h-6 w-20 rounded"></div>
                  )}
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-2 font-inter font-medium">Финансовая верификация</span>
                  {app.financialVerification === "verified" ? (
                    <Badge className="bg-venture-green text-white shadow-glow-green">Подтверждена</Badge>
                  ) : (
                    <Badge className="bg-venture-yellow text-black">Ожидание</Badge>
                  )}
                </div>
                <div className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
                  <span className="text-sm text-gray-500 block mb-2 font-inter font-medium">Действия</span>
                  <div className="flex gap-2">
                    {app.status === "rejected" && (
                      <Button size="sm" variant="outline" className="text-sm transition-premium hover-lift">
                        Подать апелляцию
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-sm transition-premium hover-lift">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>

              {/* Status Details with Premium Styling */}
              {app.status === "approved" && (
                <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 venture-green" />
                    <span className="font-display font-semibold venture-green text-lg">Заявка одобрена!</span>
                  </div>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    Поздравляем! Ваша заявка прошла все проверки и одобрена для финансирования. 
                    В ближайшее время с вами свяжется инвестор.
                  </p>
                </div>
              )}

              {app.status === "under_review" && (
                <div className="mt-6 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 venture-yellow animate-pulse-soft" />
                    <span className="font-display font-semibold text-yellow-800 text-lg">На рассмотрении</span>
                  </div>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    Ваша заявка находится в процессе проверки. Среднее время рассмотрения: 3-4 минуты.
                  </p>
                </div>
              )}

              {app.status === "rejected" && (
                <div className="mt-6 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <XCircle className="w-6 h-6 venture-red" />
                    <span className="font-display font-semibold venture-red text-lg">Заявка отклонена</span>
                  </div>
                  <p className="text-gray-700 font-inter leading-relaxed mb-3">
                    Причина: {app.rejectionReason}
                  </p>
                  <p className="text-gray-700 font-inter leading-relaxed">
                    Вы можете подать апелляцию или исправить замечания и подать новую заявку.
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Help Section with Premium Design */}
        <Card className="glass-card p-8 mt-12 hover-lift transition-premium">
          <h3 className="text-2xl font-display font-bold mb-6">Нужна помощь?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl hover-lift transition-premium">
              <h4 className="font-display font-semibold mb-3 text-lg">Как заполнить паспорт стартапа?</h4>
              <p className="text-gray-600 font-inter mb-4 leading-relaxed">Подробное руководство по заполнению документов</p>
              <Button variant="link" className="p-0 h-auto venture-blue text-lg font-medium">Читать →</Button>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl hover-lift transition-premium">
              <h4 className="font-display font-semibold mb-3 text-lg">Критерии оценки проектов</h4>
              <p className="text-gray-600 font-inter mb-4 leading-relaxed">Узнайте, как мы оцениваем стартапы</p>
              <Button variant="link" className="p-0 h-auto venture-blue text-lg font-medium">Узнать →</Button>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl hover-lift transition-premium">
              <h4 className="font-display font-semibold mb-3 text-lg">Техническая поддержка</h4>
              <p className="text-gray-600 font-inter mb-4 leading-relaxed">Свяжитесь с нами для получения помощи</p>
              <Button variant="link" className="p-0 h-auto venture-blue text-lg font-medium">Написать →</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
