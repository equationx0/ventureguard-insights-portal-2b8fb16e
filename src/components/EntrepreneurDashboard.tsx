
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, Upload, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react";

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
        return <Badge className="bg-venture-green text-white">Одобрено</Badge>;
      case "under_review":
        return <Badge className="bg-venture-yellow text-black">На рассмотрении</Badge>;
      case "rejected":
        return <Badge className="bg-venture-red text-white">Отклонено</Badge>;
      default:
        return <Badge variant="outline">Неизвестно</Badge>;
    }
  };

  const getAICheckBadge = (status: string) => {
    switch (status) {
      case "passed":
        return <Badge className="bg-venture-green text-white">Пройдена</Badge>;
      case "flagged":
        return <Badge className="bg-venture-red text-white">Обнаружены проблемы</Badge>;
      case "in_progress":
        return <Badge className="bg-venture-yellow text-black">В процессе</Badge>;
      default:
        return <Badge variant="outline">Ожидание</Badge>;
    }
  };

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
              <span className="text-gray-600">Личный кабинет предпринимателя</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Добро пожаловать в VentureGuard!</h2>
          <p className="text-xl text-gray-600">
            Управляйте своими заявками на финансирование и отслеживайте их статус
          </p>
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Быстрые действия</h3>
          <div className="flex gap-4">
            <Button className="bg-venture-blue hover:bg-blue-600 text-white px-6">
              <Download className="w-4 h-4 mr-2" />
              Скачать шаблон паспорта стартапа
            </Button>
            <Button variant="outline" className="px-6">
              <Upload className="w-4 h-4 mr-2" />
              Подать новую заявку
            </Button>
          </div>
        </Card>

        {/* Applications List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">Мои заявки на финансирование</h3>
          
          {applications.map((app) => (
            <Card key={app.id} className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold mb-2">{app.projectName}</h4>
                  <p className="text-gray-600">Подано: {new Date(app.submittedDate).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold venture-blue mb-2">{app.amount}</div>
                  {getStatusBadge(app.status)}
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <div>
                  <span className="text-sm text-gray-500 block">ИИ-проверка</span>
                  {getAICheckBadge(app.aiCheck)}
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">Уникальность</span>
                  {app.uniqueness ? (
                    <span className={`font-semibold ${app.uniqueness >= 70 ? 'venture-green' : 'venture-red'}`}>
                      {app.uniqueness}%
                    </span>
                  ) : (
                    <span className="text-gray-400">Проверяется...</span>
                  )}
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">Финансовая верификация</span>
                  {app.financialVerification === "verified" ? (
                    <Badge className="bg-venture-green text-white">Подтверждена</Badge>
                  ) : (
                    <Badge className="bg-venture-yellow text-black">Ожидание</Badge>
                  )}
                </div>
                <div>
                  <span className="text-sm text-gray-500 block">Действия</span>
                  <div className="flex gap-2">
                    {app.status === "rejected" && (
                      <Button size="sm" variant="outline" className="text-xs">
                        Подать апелляцию
                      </Button>
                    )}
                    <Button size="sm" variant="outline" className="text-xs">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>

              {/* Status Details */}
              {app.status === "approved" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 venture-green" />
                    <span className="font-medium venture-green">Заявка одобрена!</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Поздравляем! Ваша заявка прошла все проверки и одобрена для финансирования. 
                    В ближайшее время с вами свяжется инвестор.
                  </p>
                </div>
              )}

              {app.status === "under_review" && (
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 venture-yellow" />
                    <span className="font-medium text-yellow-800">На рассмотрении</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ваша заявка находится в процессе проверки. Среднее время рассмотрения: 5-7 рабочих дней.
                  </p>
                </div>
              )}

              {app.status === "rejected" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <XCircle className="w-5 h-5 venture-red" />
                    <span className="font-medium venture-red">Заявка отклонена</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Причина: {app.rejectionReason}
                  </p>
                  <p className="text-sm text-gray-600">
                    Вы можете подать апелляцию или исправить замечания и подать новую заявку.
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <Card className="p-6 mt-8">
          <h3 className="text-xl font-bold mb-4">Нужна помощь?</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-medium mb-2">Как заполнить паспорт стартапа?</h4>
              <p className="text-sm text-gray-600">Подробное руководство по заполнению документов</p>
              <Button variant="link" className="p-0 h-auto venture-blue">Читать →</Button>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-medium mb-2">Критерии оценки проектов</h4>
              <p className="text-sm text-gray-600">Узнайте, как мы оцениваем стартапы</p>
              <Button variant="link" className="p-0 h-auto venture-blue">Узнать →</Button>
            </div>
            <div className="p-4 bg-blue-50 rounded">
              <h4 className="font-medium mb-2">Техническая поддержка</h4>
              <p className="text-sm text-gray-600">Свяжитесь с нами для получения помощи</p>
              <Button variant="link" className="p-0 h-auto venture-blue">Написать →</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;
