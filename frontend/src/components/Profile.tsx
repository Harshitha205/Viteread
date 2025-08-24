import { useState } from "react";
import { User, Book, Target, Trophy, Settings, Edit, LogOut, ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ProfileProps {
  onClose: () => void;
}

const Profile = ({ onClose }: ProfileProps) => {
  // Mock user data - in a real app, this would come from your backend
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    username: "@alexreader",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    joinDate: "January 2024",
    readingLevel: "Advanced",
    totalBooks: 24,
    currentStreak: 15,
    longestStreak: 28,
    totalPages: 8420,
    pagesReadToday: 45,
    achievements: 8,
    goals: 12,
    penalties: 2,
    penaltyPoints: 15,
    readingTimeToday: "2h 15m",
    averageReadingTime: "1h 30m",
    favoriteGenre: "Fiction",
    currentGoal: "Read 30 books this year",
    goalProgress: 80
  };

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(user);

  const handleSaveChanges = () => {
    // In a real app, this would save to your backend
    console.log('Saving changes:', userData);
    setIsEditing(false);
    // You could show a success toast here
  };

  const handleSignOut = () => {
    // In a real app, this would handle logout
    console.log('Signing out...');
    onClose();
    // You could redirect to login page here
  };

  const stats = [
    { icon: Book, label: "Books Read", value: user.totalBooks, color: "text-primary" },
    { icon: Target, label: "Goals Achieved", value: user.goals, color: "text-amber-warm" },
    { icon: Trophy, label: "Achievements", value: user.achievements, color: "text-sage-deep" },
    { icon: Target, label: "Current Streak", value: `${user.currentStreak} days`, color: "text-navy-soft" },
    { icon: Target, label: "Longest Streak", value: `${user.longestStreak} days`, color: "text-purple-500" },
    { icon: Book, label: "Pages Today", value: user.pagesReadToday, color: "text-green-500" },
    { icon: Clock, label: "Reading Time", value: user.readingTimeToday, color: "text-blue-500" },
    { icon: Target, label: "Penalties", value: user.penalties, color: "text-red-500" },
  ];

  const recentAchievements = [
    { name: "Bookworm", description: "Read 20 books", icon: Book, earned: "2 days ago" },
    { name: "Streak Master", description: "15 day reading streak", icon: Target, earned: "1 week ago" },
    { name: "Page Turner", description: "Read 5000 pages", icon: Book, earned: "2 weeks ago" },
  ];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-card rounded-xl shadow-soft border border-border w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">Profile</h2>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="hidden sm:flex">
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)} className="sm:hidden">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* User Info - Prominent Display */}
          <div className="bg-gradient-to-r from-primary/5 to-amber-warm/5 rounded-xl p-4 sm:p-6 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32 ring-4 ring-primary/20">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-xl sm:text-2xl font-bold">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-3 sm:space-y-4 text-center sm:text-left">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">{user.name}</h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-1 break-all">{user.email}</p>
                  <p className="text-primary font-semibold">{user.username}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <Badge variant="secondary" className="text-sm">
                    {user.readingLevel} Reader
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Member since {user.joinDate}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Favorite Genre:</span>
                    <p className="font-medium">{user.favoriteGenre}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Average Reading:</span>
                    <p className="font-medium">{user.averageReadingTime}/day</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Current Goal Section */}
            <div className="mt-4 sm:mt-6 pt-4 border-t border-primary/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-1 sm:space-y-0 mb-2">
                <span className="text-sm font-medium text-muted-foreground">Current Goal:</span>
                <span className="text-sm font-medium text-primary">{user.goalProgress}% Complete</span>
              </div>
              <p className="font-medium text-primary mb-2 text-sm sm:text-base">{user.currentGoal}</p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-accent rounded-full h-2 sm:h-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-amber-warm h-2 sm:h-3 rounded-full transition-all duration-300" 
                    style={{ width: `${user.goalProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Reading Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="group bg-gradient-card p-3 sm:p-4 rounded-xl shadow-soft hover:shadow-warm transition-all duration-500 hover:scale-105"
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`p-1.5 sm:p-2 rounded-lg bg-accent ${stat.color}`}>
                        <stat.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Penalties Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-red-500" />
                <span>Penalties & Warnings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-red-50 rounded-lg border border-red-200 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-red-100 text-red-600">
                      <Target className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-red-700 text-sm sm:text-base">Missed Reading Goal</div>
                      <div className="text-xs sm:text-sm text-red-600">Didn't read for 3 consecutive days</div>
                    </div>
                  </div>
                  <Badge variant="destructive" className="text-xs self-start sm:self-center">
                    -5 points
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-yellow-50 rounded-lg border border-yellow-200 space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-1.5 sm:p-2 rounded-lg bg-yellow-100 text-yellow-600">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-yellow-700 text-sm sm:text-base">Late Reading Session</div>
                      <div className="text-xs sm:text-sm text-yellow-600">Started reading after midnight</div>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs self-start sm:self-center">
                    -3 points
                  </Badge>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  Total Penalty Points: <span className="font-semibold text-red-600">{user.penaltyPoints}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Recent Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAchievements.map((achievement, index) => (
                  <div key={achievement.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-accent rounded-lg space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-3">
                      <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                        <achievement.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-primary text-sm sm:text-base">{achievement.name}</div>
                        <div className="text-xs sm:text-sm text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs self-start sm:self-center">
                      {achievement.earned}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
            <Button variant="outline" onClick={handleSignOut} className="w-full sm:w-auto">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
            <Button variant="warm" onClick={handleSaveChanges} className="w-full sm:w-auto">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
