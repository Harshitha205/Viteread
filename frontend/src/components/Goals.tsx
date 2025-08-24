import { Target, Calendar, Clock, TrendingUp, Plus, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Read 50 Books This Year",
      description: "Challenge yourself to read one book per week",
      progress: 48,
      target: 50,
      timeframe: "Annual",
      status: "active",
      daysLeft: 45,
    },
    {
      id: 2,
      title: "Read 4 Books This Month",
      description: "Maintain consistent reading habits",
      progress: 75,
      target: 4,
      timeframe: "Monthly",
      status: "active",
      daysLeft: 8,
    },
    {
      id: 3,
      title: "Read 30 Minutes Daily",
      description: "Build a daily reading routine",
      progress: 90,
      target: 30,
      timeframe: "Daily",
      status: "active",
      daysLeft: 0,
    },
    {
      id: 4,
      title: "Finish Classic Literature Collection",
      description: "Complete 10 classic novels",
      progress: 100,
      target: 10,
      timeframe: "Custom",
      status: "completed",
      daysLeft: 0,
    },
  ];

  const streaks = [
    { title: "Current Reading Streak", value: "15 days", icon: TrendingUp },
    { title: "Longest Streak", value: "28 days", icon: Target },
    { title: "This Month", value: "22 days", icon: Calendar },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "text-sage-deep";
      case "completed": return "text-amber-warm";
      case "overdue": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section id="goals" className="py-12 sm:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3 sm:mb-4">Reading Goals</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Set targets and track your reading progress</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Goals List */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3 sm:gap-4 animate-slide-down">
              <h3 className="text-lg sm:text-xl font-semibold text-primary">Your Goals</h3>
              <Button variant="warm" className="hover:scale-105 transition-transform duration-200 self-start xs:self-auto">
                <Plus className="h-4 w-4 mr-2" />
                New Goal
              </Button>
            </div>

            <div className="space-y-4">
              {goals.map((goal) => (
                <Card key={goal.id} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-lg font-semibold text-primary">{goal.title}</h4>
                          {goal.status === "completed" && (
                            <CheckCircle className="h-5 w-5 text-amber-warm" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{goal.description}</p>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="px-2 py-1 bg-accent rounded-full text-accent-foreground">
                            {goal.timeframe}
                          </span>
                          {goal.daysLeft > 0 && (
                            <span className="text-muted-foreground">
                              {goal.daysLeft} days left
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          {goal.timeframe === "Daily" ? `${Math.round(goal.progress)}%` : `${Math.round(goal.progress * goal.target / 100)}/${goal.target}`}
                        </div>
                        <div className={`text-sm ${getStatusColor(goal.status)}`}>
                          {goal.status === "completed" ? "Completed" : `${goal.progress}%`}
                        </div>
                      </div>
                    </div>

                    <Progress value={goal.progress} className="mb-4" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Progress: {goal.progress}%
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {goal.status === "active" && (
                          <Button variant="reading" size="sm">
                            Update Progress
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar with Streaks and Quick Stats */}
          <div className="space-y-6">
            {/* Reading Streaks */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-sage-deep" />
                  <span>Reading Streaks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {streaks.map((streak) => (
                  <div key={streak.title} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <streak.icon className="h-4 w-4 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">{streak.title}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{streak.value}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Goal Templates */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5 text-amber-warm" />
                  <span>Goal Templates</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  52 Books in a Year
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="h-4 w-4 mr-2" />
                  Daily Reading Habit
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Target className="h-4 w-4 mr-2" />
                  Genre Challenge
                </Button>
                <Button variant="warm" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Custom Goal
                </Button>
              </CardContent>
            </Card>

            {/* Motivational Quote */}
            <Card className="shadow-soft bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <div className="text-2xl">📚</div>
                  <blockquote className="text-sm italic text-primary">
                    "The more that you read, the more things you will know. 
                    The more that you learn, the more places you'll go."
                  </blockquote>
                  <cite className="text-xs text-muted-foreground">- Dr. Seuss</cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;