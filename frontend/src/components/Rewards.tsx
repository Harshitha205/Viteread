import { Trophy, Star, Gift, Crown, Medal, Award, Zap, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Rewards = () => {
  const achievements = [
    {
      id: 1,
      title: "First Book",
      description: "Complete your first book",
      icon: Book,
      earned: true,
      rarity: "common",
      points: 10,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Speed Reader",
      description: "Read 5 books in a month",
      icon: Zap,
      earned: true,
      rarity: "rare",
      points: 50,
      date: "2024-02-28",
    },
    {
      id: 3,
      title: "Bookworm",
      description: "Read 25 books",
      icon: Crown,
      earned: true,
      rarity: "epic",
      points: 100,
      date: "2024-08-12",
    },
    {
      id: 4,
      title: "Genre Explorer",
      description: "Read books from 10 different genres",
      icon: Medal,
      earned: false,
      rarity: "rare",
      points: 75,
      progress: 7,
      total: 10,
    },
    {
      id: 5,
      title: "Century Club",
      description: "Read 100 books",
      icon: Trophy,
      earned: false,
      rarity: "legendary",
      points: 500,
      progress: 24,
      total: 100,
    },
    {
      id: 6,
      title: "Night Owl",
      description: "Read for 3 hours after 10 PM",
      icon: Star,
      earned: false,
      rarity: "uncommon",
      points: 25,
    },
  ];

  const recentRewards = [
    { title: "Reading Points", amount: "+50", type: "points", date: "Today" },
    { title: "Streak Bonus", amount: "+25", type: "points", date: "Yesterday" },
    { title: "Achievement Unlock", amount: "Bookworm Badge", type: "badge", date: "2 days ago" },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "common": return "border-muted text-muted-foreground";
      case "uncommon": return "border-sage-deep text-sage-deep";
      case "rare": return "border-amber-warm text-amber-warm";
      case "epic": return "border-primary text-primary";
      case "legendary": return "border-gradient-primary text-primary font-bold";
      default: return "border-muted text-muted-foreground";
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case "common": return "bg-muted/20";
      case "uncommon": return "bg-sage-deep/20";
      case "rare": return "bg-amber-warm/20";
      case "epic": return "bg-primary/20";
      case "legendary": return "bg-gradient-primary/20";
      default: return "bg-muted/20";
    }
  };

  return (
    <section id="rewards" className="py-16 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Rewards & Achievements</h2>
          <p className="text-muted-foreground">Earn points, unlock badges, and celebrate your reading milestones</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements Grid */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-primary">Your Achievements</h3>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">24 Earned</Badge>
                <Badge variant="outline">1,850 Points</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card 
                  key={achievement.id} 
                  className={`shadow-soft hover:shadow-warm transition-all duration-300 ${
                    achievement.earned ? 'ring-2 ring-amber-warm/20' : 'opacity-75'
                  } ${getRarityBg(achievement.rarity)}`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${
                        achievement.earned 
                          ? 'bg-gradient-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <achievement.icon className="h-6 w-6" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-primary">{achievement.title}</h4>
                          <Badge variant="outline" className={getRarityColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-3">
                          {achievement.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-amber-warm">
                              {achievement.points} pts
                            </span>
                            {achievement.earned && achievement.date && (
                              <span className="text-xs text-muted-foreground">
                                Earned {achievement.date}
                              </span>
                            )}
                          </div>
                          
                          {achievement.earned ? (
                            <Badge className="bg-amber-warm text-primary">
                              <Trophy className="h-3 w-3 mr-1" />
                              Earned
                            </Badge>
                          ) : achievement.progress ? (
                            <span className="text-sm text-muted-foreground">
                              {achievement.progress}/{achievement.total}
                            </span>
                          ) : (
                            <Badge variant="outline">Locked</Badge>
                          )}
                        </div>
                        
                        {achievement.progress && !achievement.earned && (
                          <div className="mt-3">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-sage-deep h-2 rounded-full transition-all" 
                                style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Points Summary */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-amber-warm" />
                  <span>Your Points</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">1,850</div>
                  <p className="text-muted-foreground">Total Points Earned</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>This Month</span>
                      <span className="font-medium">+325</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Week</span>
                      <span className="font-medium">+75</span>
                    </div>
                  </div>
                  <Button variant="warm" className="w-full">
                    <Gift className="h-4 w-4 mr-2" />
                    Redeem Points
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Rewards */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-sage-deep" />
                  <span>Recent Rewards</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentRewards.map((reward, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-accent rounded-lg">
                    <div>
                      <p className="text-sm font-medium">{reward.title}</p>
                      <p className="text-xs text-muted-foreground">{reward.date}</p>
                    </div>
                    <span className={`text-sm font-semibold ${
                      reward.type === 'points' ? 'text-amber-warm' : 'text-sage-deep'
                    }`}>
                      {reward.amount}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Challenge of the Week */}
            <Card className="shadow-soft bg-gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span>Weekly Challenge</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <Medal className="h-12 w-12 text-amber-warm mx-auto mb-2" />
                    <h4 className="font-semibold text-primary">Read 3 Different Genres</h4>
                    <p className="text-sm text-muted-foreground">Complete by Sunday</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>1/3</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-sage-deep h-2 rounded-full w-1/3" />
                    </div>
                  </div>
                  <div className="text-center">
                    <Badge className="bg-amber-warm text-primary">
                      <Trophy className="h-3 w-3 mr-1" />
                      +100 Points
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;