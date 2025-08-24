import { Book, Target, Trophy, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-reading.jpg";

const Hero = () => {
  const stats = [
    { icon: Book, label: "Books Read", value: "24", color: "text-primary" },
    { icon: Target, label: "Goals Achieved", value: "12", color: "text-amber-warm" },
    { icon: Trophy, label: "Rewards Earned", value: "8", color: "text-sage-deep" },
    { icon: TrendingUp, label: "Reading Streak", value: "15 days", color: "text-navy-soft" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Cozy reading environment" 
          className="w-full h-full object-cover opacity-15 sm:opacity-20 animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-hero animate-fade-in"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-left text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight animate-slide-up">
                Track Your Reading
                <span className="block text-amber-warm animate-delayed-fade-in">Journey</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-delayed-slide-up">
                Transform your reading habits with VitaRead. Set goals, earn rewards, 
                and maintain consistency in your literary adventures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-bounce-in">
              <Button 
                variant="hero" 
                size="lg" 
                className="group hover:scale-105 hover:shadow-warm transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#dashboard');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Book className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-wiggle" />
                Start Reading
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const element = document.querySelector('#library');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Library
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 animate-fade-in-right">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="group bg-gradient-card p-4 sm:p-6 rounded-xl shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 sm:p-3 rounded-lg bg-accent ${stat.color} group-hover:animate-pulse-glow transition-all duration-300`}>
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary group-hover:text-amber-warm transition-colors duration-300">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;