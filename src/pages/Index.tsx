import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [promoCode, setPromoCode] = useState('');
  const [activeSection, setActiveSection] = useState('inferno');
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const applyPromoCode = (basePrice: number) => {
    if (promoCode.toUpperCase() === 'INFERNO' || promoCode.toUpperCase() === 'ST1M') {
      return basePrice * 0.95;
    }
    return basePrice;
  };

  const handleDownload = (clientName: string, link: string) => {
    toast({
      title: `Скачивание ${clientName}`,
      description: 'Перейдите в Telegram канал и пролистайте в самый низ',
    });
    window.open(link, '_blank');
  };

  const reviews = [
    { name: 'Флюгер', rating: 5, text: 'Пенит на ивенте просто огонь! Лучший чит!' },
    { name: 'Брои', rating: 5, text: 'Стабильный, без банов. Играю уже месяц!' },
    { name: 'Бобик', rating: 4, text: 'Отличный функционал, рекомендую всем' },
    { name: 'Свомп', rating: 5, text: 'За эти деньги - лучшее что можно найти' },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">InfernoClient</div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#download" className="hover:text-primary transition-colors">Загрузка</a>
              <a href="#features" className="hover:text-primary transition-colors">Особенности</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#freetime" className="hover:text-primary transition-colors">FreeTime</a>
              <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            </div>
            <Button className="glow-effect">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float inline-block mb-8">
            <div className="text-8xl">🔥</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">InfernoClient</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Самый мощный чит-клиент для Minecraft. Непобедимая мощь в твоих руках.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="glow-effect text-lg">
              <Icon name="Download" size={24} className="mr-2" />
              Скачать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Telegram
            </Button>
          </div>
          <p className="text-red-500 font-bold text-lg mt-6">
            СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline hover:text-red-400">@InfernoClient</a>
          </p>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Особенности
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glow-effect hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">⚡</div>
                <CardTitle>Быстрая работа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Оптимизирован до предела. Никаких лагов и фризов.</p>
              </CardContent>
            </Card>
            <Card className="glow-effect hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">🛡️</div>
                <CardTitle>Защита от банов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Продвинутый обход античитов. Играй без страха.</p>
              </CardContent>
            </Card>
            <Card className="glow-effect hover:scale-105 transition-transform">
              <CardHeader>
                <div className="text-4xl mb-4">🎯</div>
                <CardTitle>Точность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Идеальный аим и килаура. Доминируй на PvP.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Выбери свой клиент
          </h2>
          <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="inferno">InfernoClient</TabsTrigger>
              <TabsTrigger value="venus">VenusFree</TabsTrigger>
              <TabsTrigger value="delta">DeltaClient</TabsTrigger>
              <TabsTrigger value="haruka">Haruka</TabsTrigger>
            </TabsList>

            <TabsContent value="inferno">
              <Card className="glow-effect">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">InfernoClient - Премиум</CardTitle>
                  <CardDescription className="text-lg">
                    Самый мощный клиент с максимальным функционалом
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl mb-4">Функции:</h3>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>KillAura Pro</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>Fly & Speed</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>X-Ray</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary" />
                        <span>AutoTotem</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-xl mb-4">Связь:</h3>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open('https://t.me/InfernoClientOffical', '_blank')}
                      >
                        <Icon name="Send" size={20} className="mr-2" />
                        Telegram канал
                      </Button>
                      <Button
                        className="w-full"
                        variant="outline"
                        onClick={() => window.open('https://t.me/InfernoClient', '_blank')}
                      >
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Связь с нами
                      </Button>
                    </div>
                  </div>
                  <p className="text-red-500 font-bold text-center text-xl">
                    СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="venus">
              <Card className="glow-effect border-green-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-3xl gradient-text">VenusFree</CardTitle>
                    <Badge className="bg-green-500">БЕСПЛАТНО</Badge>
                  </div>
                  <CardDescription className="text-lg">
                    Бесплатная версия с базовым функционалом
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h3 className="font-bold text-lg mb-2">📋 Инструкция по установке:</h3>
                    <p className="text-muted-foreground">
                      Перейдите в Telegram канал и пролистайте в самый низ для скачивания
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full glow-effect"
                    onClick={() => handleDownload('VenusFree', 'https://t.me/PerexodnikCheatsInferno')}
                  >
                    <Icon name="Download" size={24} className="mr-2" />
                    Скачать VenusFree
                  </Button>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open('https://t.me/VenusFreeCheats', '_blank')}
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Telegram канал VenusFree
                  </Button>
                  <p className="text-red-500 font-bold text-center text-xl">
                    СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="delta">
              <Card className="glow-effect border-blue-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-3xl gradient-text">DeltaClient Free</CardTitle>
                    <Badge className="bg-green-500">БЕСПЛАТНО</Badge>
                  </div>
                  <CardDescription className="text-lg">
                    Настоящая DeltaClient - проверенная временем
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                    <h3 className="font-bold text-lg mb-2">✅ Проверено:</h3>
                    <p className="text-muted-foreground">
                      Это оригинальная DeltaClient Free версия. Стабильная работа гарантирована!
                    </p>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h3 className="font-bold text-lg mb-2">📋 Инструкция:</h3>
                    <p className="text-muted-foreground">
                      Перейдите в Telegram переходник и следуйте инструкциям
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full glow-effect"
                    onClick={() => handleDownload('DeltaClient Free', 'https://t.me/PerexodnikCheatsInferno')}
                  >
                    <Icon name="Download" size={24} className="mr-2" />
                    Скачать DeltaClient Free
                  </Button>
                  <p className="text-red-500 font-bold text-center text-xl">
                    СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="haruka">
              <Card className="glow-effect border-pink-500/50">
                <CardHeader>
                  <CardTitle className="text-3xl gradient-text">Haruka Client</CardTitle>
                  <CardDescription className="text-lg">
                    Элегантный клиент с уникальными возможностями
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/30">
                    <h3 className="font-bold text-lg mb-2">📋 Инструкция:</h3>
                    <p className="text-muted-foreground">
                      Перейдите в Telegram переходник для скачивания
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="w-full glow-effect"
                    onClick={() => handleDownload('Haruka', 'https://t.me/PerexodnikCheatsInferno')}
                  >
                    <Icon name="Download" size={24} className="mr-2" />
                    Скачать Haruka
                  </Button>
                  <p className="text-red-500 font-bold text-center text-xl">
                    СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a>
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Цены на InfernoClient
          </h2>
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="bg-primary/10 border-primary/30">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Icon name="Gift" size={32} className="text-primary" />
                  <div>
                    <h3 className="font-bold text-xl">Промокоды на скидку 5%:</h3>
                    <p className="text-muted-foreground">INFERNO • ST1M</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Введите промокод"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => {
                      if (promoCode.toUpperCase() === 'INFERNO' || promoCode.toUpperCase() === 'ST1M') {
                        toast({
                          title: '✅ Промокод применен!',
                          description: 'Скидка 5% активирована',
                        });
                      } else {
                        toast({
                          title: '❌ Неверный промокод',
                          description: 'Попробуйте INFERNO или ST1M',
                          variant: 'destructive',
                        });
                      }
                    }}
                  >
                    Применить
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:scale-105 transition-transform glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Месяц</CardTitle>
                <div className="text-4xl font-bold gradient-text">
                  {promoCode && (promoCode.toUpperCase() === 'INFERNO' || promoCode.toUpperCase() === 'ST1M') ? (
                    <>
                      <span className="line-through text-muted-foreground text-2xl">50₽</span>
                      <br />
                      47.5₽
                    </>
                  ) : (
                    '50₽'
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>30 дней доступа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Все функции</span>
                  </li>
                </ul>
                <Button className="w-full glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Купить
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Оплата через Telegram Stars
                </p>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  QR код скоро будет
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform glow-effect border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Год</CardTitle>
                  <Badge className="bg-primary">Популярно</Badge>
                </div>
                <div className="text-4xl font-bold gradient-text">
                  {promoCode && (promoCode.toUpperCase() === 'INFERNO' || promoCode.toUpperCase() === 'ST1M') ? (
                    <>
                      <span className="line-through text-muted-foreground text-2xl">200₽</span>
                      <br />
                      190₽
                    </>
                  ) : (
                    '200₽'
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>365 дней доступа</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Все функции</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Экономия 400₽</span>
                  </li>
                </ul>
                <Button className="w-full glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Купить
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Оплата через Telegram Stars
                </p>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  QR код скоро будет
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform glow-effect border-secondary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Навсегда</CardTitle>
                  <Badge className="bg-secondary">Лучшее</Badge>
                </div>
                <div className="text-4xl font-bold gradient-text">
                  {promoCode && (promoCode.toUpperCase() === 'INFERNO' || promoCode.toUpperCase() === 'ST1M') ? (
                    <>
                      <span className="line-through text-muted-foreground text-2xl">350₽</span>
                      <br />
                      332.5₽
                    </>
                  ) : (
                    '350₽'
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Бессрочный доступ</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Все функции навсегда</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Приоритет поддержки</span>
                  </li>
                </ul>
                <Button className="w-full glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Купить
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Оплата через Telegram Stars
                </p>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  QR код скоро будет
                </p>
              </CardContent>
            </Card>

            <Card className="hover:scale-105 transition-transform glow-effect">
              <CardHeader>
                <CardTitle className="text-2xl">Сброс HWID</CardTitle>
                <div className="text-4xl font-bold gradient-text">50₽</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Сброс привязки</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={20} className="text-primary" />
                    <span>Новое устройство</span>
                  </li>
                </ul>
                <Button className="w-full glow-effect">
                  <Icon name="Send" size={20} className="mr-2" />
                  Купить
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Оплата через Telegram Stars
                </p>
                <p className="text-xs text-muted-foreground mt-1 text-center">
                  QR код скоро будет
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Отзывы игроков
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят известные ютуберы о наших читах
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-600'}>
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">🎥 Смотрите видео от популярных ютуберов:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://www.youtube.com/@LololoshkaFixPlay', '_blank')}
              >
                <Icon name="Youtube" size={24} className="mr-2 text-red-500" />
                Видео от Флюгера
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://www.youtube.com/@LololoshkaFixPlay', '_blank')}
              >
                <Icon name="Youtube" size={24} className="mr-2 text-red-500" />
                Видео от Брои
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://www.youtube.com/@LololoshkaFixPlay', '_blank')}
              >
                <Icon name="Youtube" size={24} className="mr-2 text-red-500" />
                Видео от Бобика
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => window.open('https://www.youtube.com/@LololoshkaFixPlay', '_blank')}
              >
                <Icon name="Youtube" size={24} className="mr-2 text-red-500" />
                Видео от Свомпа
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="freetime" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            🎮 FreeTime Server
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Лучший сервер для игры с нашими читами
          </p>
          <Card className="glow-effect border-primary">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <div className="text-center space-y-4 text-lg">
                  <p className="text-2xl">Доброе вечер, ☀️✨</p>
                  <p className="text-xl font-semibold">Радуем вас отличной новостью — наш сервер ОТКРЫТ! 🎉🚀</p>
                  
                  <div className="my-6">
                    <h3 className="text-xl font-bold mb-4">Что у нас есть для вас прямо сейчас:</h3>
                    <ul className="space-y-2 text-left max-w-xl mx-auto">
                      <li className="flex items-center gap-2">
                        <Icon name="Gift" size={20} className="text-primary flex-shrink-0" />
                        <span>/free и так далее — забирайте свои награды! 🎁🎯</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Icon name="Star" size={20} className="text-primary flex-shrink-0" />
                        <span>/piona, /aqua — специальный бонус от ютуберов! 📹🌟</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/30 my-6">
                    <h3 className="text-xl font-bold mb-4">Полезная информация:</h3>
                    <div className="space-y-3 text-left max-w-xl mx-auto">
                      <div className="flex items-center gap-3">
                        <Icon name="Server" size={20} className="text-primary flex-shrink-0" />
                        <span>IP сервера: <strong className="text-primary">FreeTime.gomc.me</strong> 🖥</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Globe" size={20} className="text-primary flex-shrink-0" />
                        <span>Сайт: <a href="https://freetime-dark-theme-site--preview.poehali.dev/" className="text-primary underline hover:text-primary/80">FreeTime сайт</a> 🌐</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="MessageCircle" size={20} className="text-primary flex-shrink-0" />
                        <span>Discord: <a href="https://discord.gg/WBrBCpUbkc" className="text-primary underline hover:text-primary/80">Присоединиться</a> 💬</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Icon name="Youtube" size={20} className="text-red-500 flex-shrink-0" />
                        <span>YouTube: <a href="https://www.youtube.com/@FreeTimeOffical" className="text-primary underline hover:text-primary/80">@FreeTimeOffical</a> 🎬</span>
                      </div>
                    </div>
                  </div>

                  <div className="my-6">
                    <h3 className="text-xl font-bold mb-4">А ещё у нас:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                        <div className="text-3xl mb-2">🛡</div>
                        <p className="font-semibold">Отличный античит</p>
                        <p className="text-sm text-muted-foreground">Играйте спокойно! ✅</p>
                      </div>
                      <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                        <div className="text-3xl mb-2">👮</div>
                        <p className="font-semibold">Много модераторов</p>
                        <p className="text-sm text-muted-foreground">Порядок гарантирован! 👮‍♀️</p>
                      </div>
                      <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/30">
                        <div className="text-3xl mb-2">💨</div>
                        <p className="font-semibold">0 лагов</p>
                        <p className="text-sm text-muted-foreground">Только плавность и кайф! 😎</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-2xl font-bold">Ждём вас на сервере — будет жарко! 🔥😄</p>
                  
                  <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/30 mt-6">
                    <p className="text-sm">
                      Нашел баг - дюп? Пиши мне{' '}
                      <a href="https://t.me/InfernoClient" className="text-primary underline font-bold">
                        @InfernoClient
                      </a>{' '}
                      Дадим подарок!
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-xl font-bold text-center mb-6">Отзывы игроков сервера:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Игрок123</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">⭐</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground">Лучший сервер! Никаких лагов, отличная администрация.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>ProGamer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500">⭐</span>
                        ))}
                      </div>
                      <p className="text-muted-foreground">Играю уже месяц, всё работает идеально!</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  size="lg"
                  className="glow-effect"
                  onClick={() => window.open('https://freetime-dark-theme-site--preview.poehali.dev/', '_blank')}
                >
                  <Icon name="ExternalLink" size={24} className="mr-2" />
                  Перейти на сайт FreeTime
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Оплата только через Telegram Stars
                </p>
              </div>
            </CardContent>
          </Card>
          <p className="text-red-500 font-bold text-center text-xl mt-6">
            СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a> и его сервер FreeTime
          </p>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Как купить InfernoClient?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Выберите нужный тариф, нажмите "Купить" и оплатите через Telegram Stars. После оплаты вы получите доступ к клиенту.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Работают ли промокоды?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да! Используйте промокоды INFERNO или ST1M для получения скидки 5% на любой тариф InfernoClient.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Какие читы бесплатные?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                VenusFree и DeltaClient Free - полностью бесплатные версии с базовым функционалом. Скачайте их прямо сейчас!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Банят ли за использование читов?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Наши читы имеют продвинутый обход античитов, но мы рекомендуем использовать их аккуратно. На сервере FreeTime можно играть свободно.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Как скачать бесплатные читы?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Перейдите в раздел "Загрузка", выберите нужный бесплатный чит (Venus, Delta или Haruka), нажмите "Скачать" и следуйте инструкциям в Telegram канале.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold">
                Что такое сброс HWID?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                HWID - это привязка клиента к вашему компьютеру. Если вы хотите использовать клиент на другом устройстве, нужен сброс HWID за 50₽.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">InfernoClient</h3>
              <p className="text-muted-foreground">
                Самый мощный чит-клиент для Minecraft. Доминируй на серверах!
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Связь</h4>
              <div className="space-y-2">
                <a
                  href="https://t.me/InfernoClientOffical"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Send" size={20} />
                  Telegram канал
                </a>
                <a
                  href="https://t.me/InfernoClient"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="MessageCircle" size={20} />
                  Связь с нами
                </a>
                <a
                  href="https://www.youtube.com/@LololoshkaFixPlay"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="Youtube" size={20} />
                  YouTube
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                  Главная
                </a>
                <a href="#download" className="block text-muted-foreground hover:text-primary transition-colors">
                  Загрузка
                </a>
                <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                  Цены
                </a>
                <a href="#freetime" className="block text-muted-foreground hover:text-primary transition-colors">
                  FreeTime
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center">
            <p className="text-muted-foreground">
              © 2024 InfernoClient. Все права защищены.
            </p>
            <p className="text-red-500 font-bold mt-2">
              СОЗДАТЕЛЬ - <a href="https://t.me/InfernoClient" className="underline">@InfernoClient</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;