
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, BookOpen, GraduationCap, Building } from "lucide-react";

const Index = () => {
  const sections = [
    {
      title: "Best Practices",
      description: "Learn the fundamentals of writing professional emails with proper structure, etiquette, and follow-up techniques.",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      path: "/"
    },
    {
      title: "Course-Related Communication",
      description: "Templates for contacting professors and TAs about assignments, absences, office hours, and recommendation letters.",
      icon: <Mail className="h-10 w-10 text-primary" />,
      path: "/course-related"
    },
    {
      title: "Academic & Research",
      description: "Templates for research opportunities, advisor meetings, progress reports, and library resource requests.",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      path: "/academic-research"
    },
    {
      title: "Administrative Affairs",
      description: "Templates for communicating with university offices about transcripts, housing, health services, and financial matters.",
      icon: <Building className="h-10 w-10 text-primary" />,
      path: "/administrative"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
              Professional Email Templates
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Write effective and professional emails for academic and professional settings.
              Browse our collection of templates for different scenarios and contexts.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <Button size="lg" asChild>
                <a href="#sections">Browse Templates</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Best Practices</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div id="sections" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Email Template Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center space-x-4">
                <div>{section.icon}</div>
                <div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {section.description}
                </CardDescription>
                <Button asChild>
                  <Link to={section.path}>View Templates</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why It Matters Section */}
      <div className="bg-blue-50 py-12 sm:py-16 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Email Etiquette Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>First Impressions</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Your email often creates the first impression in professional settings. Clear, well-structured emails demonstrate your communication skills and professionalism.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Communication Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Professional emails help ensure your message is understood correctly, reducing misunderstandings and saving time for both you and the recipient.</p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Relationship Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Effective communication helps build and maintain professional relationships with professors, advisors, and administrators throughout your academic career.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
