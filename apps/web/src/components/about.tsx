import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Image } from "./ui/image";
import { GraduationCap, Users, Clock, Heart, Sparkles, Leaf } from "lucide-react";

const achievements = [
  { icon: Users, value: "3,000+", label: "Souls Nurtured" },
  { icon: Clock, value: "18+", label: "Years of Devotion" },
  { icon: Heart, value: "99%", label: "Love & Satisfaction" },
  { icon: Sparkles, value: "8", label: "Healing Modalities" }
];

const credentials = [
  "Doctor of Chiropractic (D.C.)",
  "Certified Wellness Practitioner", 
  "Mindful Movement Specialist",
  "Energy Healing Certification",
  "Holistic Nutrition Guidance",
  "Meditation & Breathwork Guide"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-amber-50/20 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="w-6 h-6 text-amber-600" />
            <span className="text-sm text-muted-foreground tracking-wider uppercase">
              Your Wellness Guide
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl text-primary mb-6 tracking-tight">
            Meet Dr. Luna
            <span className="block text-amber-700 italic">Martinez</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A devoted healer whose gentle hands and compassionate heart guide you toward your most radiant self.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden warm-shadow">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                alt="Dr. Luna Martinez in her serene practice space"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-amber-200/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rose-200/20 rounded-full blur-xl"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Leaf className="w-6 h-6 text-amber-600" />
                <h3 className="text-2xl text-primary tracking-wide">
                  A Sacred Partnership in Healing
                </h3>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                For nearly two decades, Dr. Luna has walked alongside thousands on their journey to wellness, 
                blending the ancient wisdom of healing touch with modern understanding of the body's innate capacity for restoration.
              </p>
              
              <p className="text-base leading-relaxed text-muted-foreground">
                Her approach transcends the traditional boundaries of chiropractic care, embracing the whole person—
                body, mind, and spirit. Each session is a sacred dance between healer and soul, 
                creating space for your body to remember its natural state of harmony.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                <h4 className="text-lg text-primary">Credentials & Continuing Journey</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {credentials.map((credential, index) => (
                  <Badge key={index} variant="secondary" className="text-sm py-2 px-4 rounded-full bg-amber-50 text-amber-800 border-amber-200">
                    {credential}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100">
              <Sparkles className="w-6 h-6 text-amber-600 mb-4" />
              <h4 className="text-lg text-primary mb-3">A Personal Message</h4>
              <blockquote className="text-lg italic leading-relaxed text-muted-foreground">
                "True healing happens when we honor the body's wisdom and create space for its natural intelligence to shine. 
                My role is simply to be a gentle guide, helping you rediscover the vibrant health that is your birthright."
              </blockquote>
              <p className="text-sm text-amber-700 mt-4 font-medium">— Dr. Luna Martinez</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center border-0 warm-shadow bg-white/60 backdrop-blur-sm rounded-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-6">
                  <achievement.icon className="w-8 h-8 text-amber-700" />
                </div>
                <div className="text-3xl text-primary mb-2 tracking-tight">
                  {achievement.value}
                </div>
                <p className="text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-300 to-amber-500"></div>
            <Heart className="w-6 h-6 text-amber-600" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-amber-300 to-amber-500"></div>
            <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}