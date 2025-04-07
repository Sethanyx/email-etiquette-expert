
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailTemplateCard from "./EmailTemplateCard";

const AcademicResearch = () => {
  const advisorTemplates = [
    {
      title: "Seeking Research Opportunities",
      description: "Use this template when inquiring about research positions with a professor.",
      template: `Subject: Inquiry About Research Opportunities in [Research Area]

Dear Professor [Last Name],

I hope this email finds you well. My name is [Your Full Name], and I am a [year] [major] student at [University Name]. I am writing to express my interest in research opportunities in your lab focusing on [specific research area].

I recently [read your paper/attended your lecture/learned about your research] on [specific topic], and I found your work on [specific aspect] particularly fascinating. I am especially interested in [explain why this research appeals to you and how it connects to your academic goals].

My relevant coursework includes [list relevant courses], and I have experience with [mention relevant skills, techniques, or previous research experience, if any]. I am eager to contribute to your research and develop my skills in [specific techniques or areas].

I have attached my resume and transcript for your consideration. I would greatly appreciate the opportunity to discuss potential research positions in your lab, whether for course credit, as a volunteer, or as a paid position.

Thank you for considering my inquiry. I look forward to your response.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    },
    {
      title: "Reporting Research Progress",
      description: "Use this template for regular updates to your research advisor.",
      template: `Subject: Research Progress Update - [Project Name] - [Date or Week Number]

Dear Professor [Last Name],

I hope this email finds you well. I am writing to provide you with an update on my progress with the [Project Name] research project for the period of [time frame, e.g., past two weeks].

Progress Made:
1. [Accomplishment 1] - [Brief description of what was completed]
2. [Accomplishment 2] - [Brief description]
3. [Accomplishment 3] - [Brief description]

Challenges Encountered:
- [Challenge 1]: [Brief description of the issue and any attempts to solve it]
- [Challenge 2]: [Brief description and current status]

Next Steps:
For the coming [time frame, e.g., two weeks], I plan to:
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

Questions:
I would appreciate your input on the following questions:
1. [Question 1]?
2. [Question 2]?

I have attached [any relevant documents, data, or preliminary results] for your review. Would you be available to meet on [propose date and time] to discuss these matters further?

Thank you for your continued guidance and support.

Best regards,
[Your Full Name]
[Contact Information]`
    },
    {
      title: "Scheduling an Advisor Meeting",
      description: "Use this template to set up a meeting with your academic or research advisor.",
      template: `Subject: Request for Advisory Meeting - [Brief Reason]

Dear Professor [Last Name],

I hope this email finds you well. I would like to schedule a meeting with you to discuss [brief description of topic, e.g., my research progress, academic planning, etc.].

Specifically, I would like to address the following:
1. [Topic 1]
2. [Topic 2]
3. [Topic 3]

I am available at the following times:
- [Date and Time Option 1]
- [Date and Time Option 2]
- [Date and Time Option 3]

The meeting would take approximately [estimated duration, e.g., 30 minutes]. If none of these times work for you, please let me know when would be convenient for your schedule.

Thank you for your time and consideration. I look forward to meeting with you.

Best regards,
[Your Full Name]
[Student ID]
[Contact Information]`
    }
  ];

  const libraryTemplates = [
    {
      title: "Requesting Access to Resources",
      description: "Use this template when you need access to specific academic resources.",
      template: `Subject: Request for Access to [Specific Resource/Database/Collection]

Dear Library Staff,

I hope this email finds you well. My name is [Your Full Name], and I am a [year] [major] student at [University Name].

I am currently working on [research project/thesis/assignment] related to [topic] under the supervision of Professor [Advisor's Name] from the Department of [Department Name].

For my research, I need to access [specific resource, database, collection, or materials], which I understand is available through the library but requires special permission for access. Could you please guide me through the process of obtaining access to this resource?

[If applicable: I have already attempted to access this resource through [describe previous attempts] but encountered [specific issue].]

If additional information or documentation is required for this request, please let me know, and I will provide it promptly.

Thank you for your assistance.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    },
    {
      title: "Reserving a Study Space",
      description: "Use this template to book a group study room or individual space.",
      template: `Subject: Study Room Reservation Request

Dear Library Services,

I would like to reserve a study room in the [specific library building if applicable] for the following date and time:

Date: [Date]
Time: [Start Time] to [End Time]
Number of people: [Number]
Purpose: [Brief description, e.g., group project meeting, thesis work, etc.]

If possible, I would prefer a room with [specific requirements, e.g., a whiteboard, projector, etc.].

Please let me know if a room is available during this time frame and if there are any additional steps I need to take to confirm this reservation.

Thank you for your assistance.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    }
  ];

  return (
    <div className="email-section">
      <h1 className="section-title">Academic & Research Communication</h1>
      <p className="text-lg mb-6">
        Effective communication is crucial for building successful academic and research relationships. 
        Use these templates to communicate professionally with advisors and library staff.
      </p>

      <Tabs defaultValue="advisors" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="advisors">Contacting Advisors</TabsTrigger>
          <TabsTrigger value="library">Contacting Library</TabsTrigger>
        </TabsList>
        
        <TabsContent value="advisors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Emailing Academic & Research Advisors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Building a good relationship with your advisors is essential for academic success and research opportunities. 
                These templates will help you communicate effectively with your advisors.
              </p>
              
              {advisorTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < advisorTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="library" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Emailing Library Staff</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                The library is a valuable resource for your academic and research pursuits. Use these
                templates when you need to communicate with library staff.
              </p>
              
              {libraryTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < libraryTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AcademicResearch;
