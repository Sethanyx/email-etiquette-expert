
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailTemplateCard from "./EmailTemplateCard";

const CourseRelated = () => {
  const professorTemplates = [
    {
      title: "Requesting Office Hours",
      description: "Use this template when you need to schedule an appointment during your professor's office hours.",
      template: `Subject: Request for Office Hours Appointment - [Your Name]

Dear Professor [Last Name],

I hope this email finds you well. My name is [Your Full Name], and I am a student in your [Course Name and Number] class this semester.

I would like to schedule an appointment during your office hours to discuss [specific topic or question]. I am available during the following times:
- [Date and Time Option 1]
- [Date and Time Option 2]
- [Date and Time Option 3]

Please let me know if any of these times work for you, or if there is another time that would be more convenient.

Thank you for your time and consideration.

Best regards,
[Your Full Name]
[Student ID]
[Class Section/Time if applicable]`
    },
    {
      title: "Notifying About Absence",
      description: "Use this template when you need to inform your professor about missing a class.",
      template: `Subject: Absence Notification - [Class Name & Section] - [Your Name]

Dear Professor [Last Name],

I am writing to inform you that I will be unable to attend the [Course Name] class on [Date] due to [brief reason - e.g., medical appointment, family emergency, etc.].

I understand that we will be covering [topic if known] during this session. I plan to review the lecture notes and will follow up with a classmate to ensure I don't miss any important information. I will also complete and submit the assignment that is due on [due date] on time.

Please let me know if there is anything else I should do to make up for this absence.

Thank you for your understanding.

Sincerely,
[Your Full Name]
[Student ID]
[Class Section/Time]`
    },
    {
      title: "Asking About Course Content",
      description: "Use this template when you have questions about assignments or course materials.",
      template: `Subject: Question about [Assignment/Reading] for [Course Code]

Dear Professor [Last Name],

I hope this email finds you well. I am [Your Name], a student in your [Course Name and Number] class.

I am working on [specific assignment/reading] and have a question regarding [specific aspect that is confusing]. After reviewing the course materials and textbook, I'm still unclear about [specific question or issue].

Could you please provide some clarification on this matter? [Optional: Include any relevant details or steps you've already taken to understand the material].

Thank you for your time and assistance.

Best regards,
[Your Full Name]
[Student ID]
[Class Section/Time if applicable]`
    },
    {
      title: "Requesting a Recommendation Letter",
      description: "Use this template when asking your professor for a letter of recommendation.",
      template: `Subject: Request for Letter of Recommendation - [Your Name] for [Program/Position]

Dear Professor [Last Name],

I hope this email finds you well. My name is [Your Full Name], and I was a student in your [Course Name(s)] course(s) during [Semester/Year].

I am applying for [specific program/position/scholarship] and would be honored if you would consider writing a letter of recommendation on my behalf. The deadline for submission is [date], and the recommendation can be submitted [explain how - e.g., through an online portal, by email, etc.].

During your course, I [mention specific achievements, projects, or interactions that might help the professor remember you]. I believe that my performance in your class and my interest in [subject area] demonstrate my suitability for this opportunity.

If you are willing to write the letter, I would be happy to provide additional information, such as my resume, statement of purpose, and other relevant details about the application.

I understand that writing a recommendation requires time and effort, and I greatly appreciate your consideration of my request.

Thank you for your time and support.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]
[Current Position/Program if applicable]`
    }
  ];

  const taTemplates = [
    {
      title: "Asking for Homework Help",
      description: "Use this template when you need assistance with assignments from your TA.",
      template: `Subject: [Course Code] - Help with Assignment [Number]

Dear [TA's Name],

I hope this email finds you well. My name is [Your Name], and I am a student in [Professor's Name]'s [Course Name and Number] class, [Section Number if applicable].

I am working on Assignment [Number] and have encountered difficulty with [specific problem or concept]. After reviewing the lecture notes, textbook, and online resources, I am still struggling to understand [specific aspect].

I have attempted to solve the problem as follows: [briefly describe your approach and what you've tried].

Would you be able to provide some guidance or clarification on this issue? I would greatly appreciate any help you can offer.

Thank you for your time and assistance.

Best regards,
[Your Full Name]
[Student ID]
[Course Section/Time]`
    },
    {
      title: "Arranging a Make-up Session",
      description: "Use this when you need to schedule a make-up lab or discussion session.",
      template: `Subject: Request for Make-Up [Lab/Discussion] Session - [Course Code]

Dear [TA's Name],

I hope you are doing well. My name is [Your Name], and I am enrolled in [Course Name and Number], [Section Number].

Unfortunately, I was unable to attend the [lab/discussion] session on [date] due to [brief explanation of reason]. I understand the importance of these sessions and would like to inquire about the possibility of a make-up session.

I have reviewed the material that was covered during the session I missed, but I would benefit from going through the practical components with guidance. I am available at the following times:
- [Date and Time Option 1]
- [Date and Time Option 2]
- [Date and Time Option 3]

If none of these times work for you, please let me know what would be convenient for your schedule.

Thank you for considering my request. I appreciate your time and assistance.

Sincerely,
[Your Full Name]
[Student ID]
[Course Section/Time]`
    }
  ];

  return (
    <div className="email-section">
      <h1 className="section-title">Course-Related Communication</h1>
      <p className="text-lg mb-6">
        Effective communication with professors and teaching assistants is essential for academic success. 
        Use these templates as a starting point for your course-related emails.
      </p>

      <Tabs defaultValue="professors" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="professors">Contacting Professors</TabsTrigger>
          <TabsTrigger value="tas">Contacting TAs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="professors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Emailing Professors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                When emailing professors, it's important to be clear, concise, and respectful. 
                These templates cover common scenarios for student-professor communication.
              </p>
              
              {professorTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < professorTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tas" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Emailing Teaching Assistants (TAs)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                TAs are often your first point of contact for specific questions about assignments, 
                labs, or discussion sections. Use these templates when communicating with TAs.
              </p>
              
              {taTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < taTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseRelated;
