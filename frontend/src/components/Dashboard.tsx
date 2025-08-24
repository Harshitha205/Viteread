import { useState } from "react";
import { Book, Clock, Target, Calendar, Award, Star, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentBooks, setCurrentBooks] = useState([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      progress: 65,
      totalPages: 180,
      currentPage: 117,
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=150&h=200&fit=crop",
      description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      progress: 32,
      totalPages: 324,
      currentPage: 104,
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=200&fit=crop",
      description: "The story of young Scout Finch and her father Atticus in a racially divided Alabama town."
    },
    {
      title: "1984",
      author: "George Orwell",
      progress: 88,
      totalPages: 298,
      currentPage: 262,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=200&fit=crop",
      description: "A dystopian novel about totalitarianism and surveillance society."
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      progress: 45,
      totalPages: 432,
      currentPage: 194,
      cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=150&h=200&fit=crop",
      description: "The story of Elizabeth Bennet and Mr. Darcy in Georgian-era England."
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      progress: 78,
      totalPages: 366,
      currentPage: 285,
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=200&fit=crop",
      description: "Bilbo Baggins embarks on an unexpected journey with thirteen dwarves."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      progress: 12,
      totalPages: 277,
      currentPage: 33,
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=150&h=200&fit=crop",
      description: "Holden Caulfield's journey through New York City after being expelled from prep school."
    }
  ]);

  const updateProgress = (bookTitle: string, newPage: number) => {
    setCurrentBooks(books => 
      books.map(book => {
        if (book.title === bookTitle) {
          const newProgress = Math.min(100, (newPage / book.totalPages) * 100);
          return { ...book, currentPage: newPage, progress: newProgress };
        }
        return book;
      })
    );
  };

  const openBook = (book: any) => {
    setSelectedBook(book);
    setCurrentPage(book.currentPage);
  };

  const closeBook = () => {
    setSelectedBook(null);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (selectedBook && currentPage < selectedBook.totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      updateProgress(selectedBook.title, newPage);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      updateProgress(selectedBook.title, newPage);
    }
  };

  const recentAchievements = [
    { name: "First Book Complete", icon: Book, date: "2 days ago" },
    { name: "7-Day Streak", icon: Calendar, date: "1 week ago" },
    { name: "Goal Crusher", icon: Target, date: "2 weeks ago" },
  ];

  return (
    <section id="dashboard" className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Your Reading Dashboard</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Track your progress and celebrate your achievements</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Current Reading Progress */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-left">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <Book className="h-5 w-5 text-primary animate-float" />
                  <span>Currently Reading</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {currentBooks.map((book, index) => (
                  <div 
                    key={book.title} 
                    className="group p-3 sm:p-4 bg-accent rounded-lg hover:bg-accent/80 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-3 mb-3">
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className="w-12 h-16 object-cover rounded shadow-sm"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary text-sm sm:text-base group-hover:text-amber-warm transition-colors duration-200">{book.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{book.description}</p>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-primary bg-background px-2 py-1 rounded self-start">
                        {book.currentPage}/{book.totalPages}
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={book.progress} className="mb-2 h-2 sm:h-3" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-progress-flow"></div>
                    </div>
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-2">
                      <span className="text-xs sm:text-sm text-muted-foreground">
                        {book.progress}% complete
                      </span>
                      <Button 
                        variant="reading" 
                        size="sm" 
                        className="hover:scale-105 transition-transform duration-200 self-start xs:self-auto"
                        onClick={() => openBook(book)}
                      >
                        Continue Reading
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reading Goals */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-left" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg sm:text-xl">
                  <Target className="h-5 w-5 text-amber-warm animate-pulse-glow" />
                  <span>Monthly Goals</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium">Books to Read</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">3/4</span>
                    </div>
                    <div className="relative">
                      <Progress value={75} className="h-2 sm:h-3" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-warm/20 to-transparent animate-progress-flow"></div>
                    </div>
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs sm:text-sm font-medium">Reading Hours</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">18/20</span>
                    </div>
                    <div className="relative">
                      <Progress value={90} className="h-2 sm:h-3" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sage-deep/20 to-transparent animate-progress-flow"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar with Stats and Achievements */}
          <div className="space-y-4 sm:space-y-6">
            {/* Quick Stats */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-right">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between group hover:bg-accent/50 p-2 rounded-lg transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-sage-deep group-hover:animate-pulse" />
                    <span className="text-xs sm:text-sm">Reading Time Today</span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">2h 15m</span>
                </div>
                <div className="flex items-center justify-between group hover:bg-accent/50 p-2 rounded-lg transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-navy-soft group-hover:animate-pulse" />
                    <span className="text-xs sm:text-sm">Current Streak</span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">15 days</span>
                </div>
                <div className="flex items-center justify-between group hover:bg-accent/50 p-2 rounded-lg transition-all duration-200">
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-amber-warm group-hover:animate-pulse" />
                    <span className="text-xs sm:text-sm">Total Rewards</span>
                  </div>
                  <span className="font-semibold text-sm sm:text-base">8</span>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card className="shadow-soft hover:shadow-warm transition-all duration-300 animate-fade-in-right" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-base sm:text-lg">
                  <Star className="h-5 w-5 text-amber-warm animate-glow" />
                  <span>Recent Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 sm:space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div 
                    key={achievement.name} 
                    className="group flex items-center space-x-3 p-2 sm:p-3 rounded-lg hover:bg-accent transition-all duration-300 hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="p-2 bg-gradient-primary rounded-lg group-hover:animate-pulse-glow">
                      <achievement.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm font-medium group-hover:text-amber-warm transition-colors duration-200">{achievement.name}</p>
                      <p className="text-xs text-muted-foreground">{achievement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Book Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl shadow-soft border border-border max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedBook.cover} 
                  alt={selectedBook.title}
                  className="w-12 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-xl font-bold text-primary">{selectedBook.title}</h2>
                  <p className="text-sm text-muted-foreground">by {selectedBook.author}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={closeBook}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Book Content */}
            <div className="p-6 flex-1 overflow-y-auto">
              <div className="max-w-2xl mx-auto">
                <div className="text-lg leading-relaxed text-foreground">
                  <p className="mb-4">
                    This is page {currentPage} of {selectedBook.totalPages}. In a real application, 
                    this would contain the actual book content for this page.
                  </p>
                  <p className="mb-4">
                    {selectedBook.description}
                  </p>
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 border-t border-border">
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={prevPage}
                  disabled={currentPage <= 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {selectedBook.totalPages}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={nextPage}
                  disabled={currentPage >= selectedBook.totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-muted-foreground">
                  {Math.round((currentPage / selectedBook.totalPages) * 100)}% complete
                </span>
                <Progress value={(currentPage / selectedBook.totalPages) * 100} className="w-24" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Dashboard;