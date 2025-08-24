import { Book, Search, Filter, Plus, Star, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import booksStackImage from "@/assets/books-stack.jpg";

const Library = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      status: "reading",
      progress: 65,
      rating: 4,
      cover: "/placeholder.svg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: "completed",
      progress: 100,
      rating: 5,
      cover: "/placeholder.svg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      status: "reading",
      progress: 88,
      rating: 0,
      cover: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      status: "want-to-read",
      progress: 0,
      rating: 0,
      cover: "/placeholder.svg",
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      status: "completed",
      progress: 100,
      rating: 4,
      cover: "/placeholder.svg",
    },
    {
      id: 6,
      title: "Brave New World",
      author: "Aldous Huxley",
      status: "want-to-read",
      progress: 0,
      rating: 0,
      cover: "/placeholder.svg",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "reading": return "bg-sage-deep text-primary";
      case "completed": return "bg-amber-warm text-primary";
      case "want-to-read": return "bg-navy-soft text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "reading": return "Reading";
      case "completed": return "Completed";
      case "want-to-read": return "Want to Read";
      default: return "Unknown";
    }
  };

  return (
    <section id="library" className="py-12 sm:py-16 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Your Library</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Organize and track all your books in one place</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 animate-slide-down">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search your library..."
              className="pl-10 h-10 sm:h-11"
            />
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Button variant="outline" size="icon" className="hover:scale-110 transition-transform duration-200">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="warm" className="hover:scale-105 transition-transform duration-200">
              <Plus className="h-4 w-4 mr-2" />
              <span className="hidden xs:inline">Add Book</span>
              <span className="xs:hidden">Add</span>
            </Button>
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {books.map((book, index) => (
            <Card 
              key={book.id} 
              className="group hover:shadow-warm transition-all duration-500 hover:-translate-y-2 hover:scale-105 shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-3 sm:p-4">
                <div className="relative mb-3 sm:mb-4">
                  <div className="aspect-[3/4] bg-accent rounded-lg flex items-center justify-center overflow-hidden group-hover:bg-accent/80 transition-colors duration-300">
                    <img 
                      src={booksStackImage} 
                      alt={book.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Book className="h-8 w-8 sm:h-12 sm:w-12 text-primary opacity-60 group-hover:animate-float" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full transition-all duration-300 group-hover:scale-110 ${getStatusColor(book.status)}`}>
                      {getStatusText(book.status)}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-primary line-clamp-2 text-sm sm:text-base group-hover:text-amber-warm transition-colors duration-300">{book.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{book.author}</p>
                  
                  {book.status === "reading" && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <div className="relative w-full bg-muted rounded-full h-1.5 sm:h-2">
                        <div 
                          className="bg-sage-deep h-1.5 sm:h-2 rounded-full transition-all duration-500 group-hover:animate-pulse-glow" 
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {book.rating > 0 && (
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 transition-all duration-200 group-hover:scale-110 ${
                            i < book.rating
                              ? "text-amber-warm fill-current group-hover:animate-glow"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-3 sm:mt-4 flex gap-1 sm:gap-2">
                  {book.status === "reading" && (
                    <Button variant="reading" size="sm" className="flex-1 text-xs hover:scale-105 transition-transform duration-200">
                      <Clock className="h-3 w-3 mr-1" />
                      <span className="hidden xs:inline">Continue</span>
                      <span className="xs:hidden">Read</span>
                    </Button>
                  )}
                  {book.status === "want-to-read" && (
                    <Button variant="warm" size="sm" className="flex-1 text-xs hover:scale-105 transition-transform duration-200">
                      <span className="hidden xs:inline">Start Reading</span>
                      <span className="xs:hidden">Start</span>
                    </Button>
                  )}
                  {book.status === "completed" && book.rating === 0 && (
                    <Button variant="outline" size="sm" className="flex-1 text-xs hover:scale-105 transition-transform duration-200">
                      <span className="hidden xs:inline">Rate Book</span>
                      <span className="xs:hidden">Rate</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add More Books CTA */}
        <div className="text-center mt-8 sm:mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Card className="inline-block p-6 sm:p-8 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105">
            <CardContent className="text-center space-y-3 sm:space-y-4">
              <Book className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto animate-float" />
              <h3 className="text-base sm:text-lg font-semibold text-primary">Expand Your Library</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Discover new books and add them to your collection</p>
              <Button variant="hero" className="hover:scale-105 transition-transform duration-200">
                Browse Books
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Library;