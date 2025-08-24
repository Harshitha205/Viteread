import { useState } from "react";
import { Book, User, Trophy, Target, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Profile from "./Profile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: Book, href: "#dashboard" },
    { name: "Library", icon: Book, href: "#library" },
    { name: "Goals", icon: Target, href: "#goals" },
    { name: "Rewards", icon: Trophy, href: "#rewards" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gradient-card shadow-soft border-b border-border/50 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in">
            <Book className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-float" />
            <span className="text-lg sm:text-2xl font-bold text-primary">VitaRead</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 animate-fade-in-right">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
              </button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in-left">
            <Button 
              variant="warm" 
              size="sm" 
              className="hover:scale-105 transition-transform duration-200"
              onClick={() => setShowProfile(true)}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative hover:scale-110 transition-transform duration-200"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'}`}>
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 shadow-soft animate-slide-down">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-3 text-foreground hover:text-primary hover:bg-accent rounded-md transition-all duration-200 hover:scale-105 hover:shadow-soft animate-fade-in-up w-full text-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
            <div className="px-3 py-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button 
                variant="warm" 
                size="sm" 
                className="w-full hover:scale-105 transition-transform duration-200"
                onClick={() => {
                  setShowProfile(true);
                  setIsMenuOpen(false);
                }}
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Modal */}
      {showProfile && (
        <Profile onClose={() => setShowProfile(false)} />
      )}
    </header>
  );
};

export default Header;