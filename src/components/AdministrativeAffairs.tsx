
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmailTemplateCard from "./EmailTemplateCard";

const AdministrativeAffairs = () => {
  const adminOfficesTemplates = [
    {
      title: "Requesting Transcripts",
      description: "Use this template when requesting official transcripts from the Registrar's Office.",
      template: `Subject: Request for Official Transcript - [Student ID]

Dear Registrar's Office,

I hope this email finds you well. My name is [Your Full Name], student ID [Your Student ID], and I am writing to request an official transcript for [purpose, e.g., graduate school application, employment, etc.].

Details of my request:
- Number of transcripts needed: [Number]
- Delivery method preferred: [Electronic/Physical Mail]
- Delivery address: [If physical mail, provide complete address]
- [If electronic] Email for delivery: [Email address]
- Any specific requirements: [e.g., sealed envelope, expedited delivery, etc.]

[If applicable] The deadline for submission is [Date], so I would appreciate receiving the transcript by [Date].

Please let me know if there are any fees associated with this request and how I should proceed with payment.

Thank you for your assistance.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    },
    {
      title: "International Student Visa Issues",
      description: "Use this template when contacting the International Student Office about visa-related matters.",
      template: `Subject: [Specific Visa Issue] - Urgent Assistance Needed - [Student ID]

Dear International Student Services,

I hope this email finds you well. My name is [Your Full Name], student ID [Your Student ID], and I am an international student from [Your Country] currently enrolled in the [Your Program] program.

I am writing regarding an urgent matter concerning my [Visa Type, e.g., F-1] visa status. Specifically, I need assistance with [detailed description of the issue, e.g., OPT application, I-20 extension, travel signature, etc.].

Currently, my situation is as follows:
[Provide relevant details about your current status, any deadlines, and specific concerns]

I have already taken the following steps:
1. [Action taken, e.g., completed form XYZ]
2. [Action taken, e.g., gathered required documents]
3. [Any other relevant actions]

Could you please advise me on the next steps I should take? If possible, I would like to schedule an appointment with an advisor to discuss this matter in more detail.

I am available for meetings on the following dates and times:
- [Date and Time Option 1]
- [Date and Time Option 2]
- [Date and Time Option 3]

Thank you for your assistance with this urgent matter.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    },
    {
      title: "Tuition Payment Inquiry",
      description: "Use this template when contacting the Bursar's Office about tuition or fees.",
      template: `Subject: Inquiry About [Specific Billing Issue] - [Student ID]

Dear Bursar's Office,

I hope this email finds you well. My name is [Your Full Name], student ID [Your Student ID], and I am writing regarding [specific issue, e.g., a payment discrepancy, payment plan, scholarship application, etc.] on my student account.

After reviewing my account statement dated [Date], I noticed [describe the specific issue or question you have]. [Include any relevant details such as payment dates, amounts, or specific charges that you're inquiring about].

I would appreciate if you could [state what you need, e.g., explain the charge, correct an error, provide a payment extension, etc.].

For your reference, I have attached [mention any relevant documents you're attaching, e.g., payment receipt, scholarship notification, etc.].

Thank you for your assistance in resolving this matter. I look forward to your response.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    }
  ];

  const housingTemplates = [
    {
      title: "Maintenance Request",
      description: "Use this template when reporting maintenance issues in university housing.",
      template: `Subject: Maintenance Request - [Building and Room Number]

Dear Housing Maintenance Services,

I am writing to report a maintenance issue in my dormitory room that requires attention.

Location: [Building Name, Room Number]
Issue: [Clear description of the problem]
Urgency: [Low/Medium/High - explain why if urgent]
Best times for maintenance to enter: [Provide convenient times]
Contact information: [Your phone number and email]

Additional details: [Any relevant information that might help maintenance staff, such as when the issue started, what might have caused it, attempts to fix it, etc.]

I would appreciate if this issue could be addressed at your earliest convenience. Please let me know if you need any further information from me.

Thank you for your assistance.

Sincerely,
[Your Full Name]
[Student ID]
[Room Number]`
    },
    {
      title: "Room Change Request",
      description: "Use this template when applying for a room change in university housing.",
      template: `Subject: Room Change Request - [Student ID]

Dear Housing Administration,

I hope this email finds you well. My name is [Your Full Name], student ID [Your Student ID], currently residing in [Current Building Name and Room Number]. I am writing to request a room change due to [brief reason, e.g., incompatibility with roommate, health concerns, academic needs, etc.].

More specifically, the reason for my request is [provide a more detailed explanation of your situation and why a room change would be beneficial/necessary].

My preferences for a new room assignment are:
1. Building preference: [Building name(s)]
2. Room type preference: [e.g., single, double, suite]
3. Specific needs: [Any specific requirements, e.g., quiet floor, accessibility features]
4. Timing: [When you would ideally like the change to occur]

I understand that room changes are subject to availability and housing policies. I am willing to discuss alternative options if my preferences cannot be accommodated.

Thank you for considering my request. I look forward to your response.

Sincerely,
[Your Full Name]
[Student ID]
[Current Room Number]
[Contact Information]`
    }
  ];

  const healthTemplates = [
    {
      title: "Scheduling a Medical Appointment",
      description: "Use this template when booking an appointment with university health services.",
      template: `Subject: Request for Medical Appointment

Dear University Health Services,

I would like to schedule an appointment with [specific department or provider if known, or "a healthcare provider"] for [general reason for visit, e.g., annual physical, illness, follow-up, etc.].

Patient information:
- Name: [Your Full Name]
- Student ID: [Your Student ID]
- Date of Birth: [Your DOB]
- Phone Number: [Your Phone Number]
- Insurance Information: [Your Insurance Provider and Member ID]

Reason for visit: [Provide a brief description of your symptoms or reason for seeking medical care]

Preferred appointment times:
- [Date and Time Option 1]
- [Date and Time Option 2]
- [Date and Time Option 3]

[If applicable] I have previously been seen by [Provider's Name] and would prefer to schedule with them if possible.

[If urgent] Please note that this is an urgent matter due to [brief explanation of urgency].

Thank you for your assistance in scheduling this appointment.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    },
    {
      title: "Insurance Claim Inquiry",
      description: "Use this template when following up on an insurance claim with the health center.",
      template: `Subject: Follow-up on Insurance Claim [Claim Number if available]

Dear Health Insurance Services,

I hope this email finds you well. My name is [Your Full Name], student ID [Your Student ID], and I am writing regarding an insurance claim for services received at [Healthcare Provider/Facility] on [Date of Service].

Claim details:
- Date of service: [Date]
- Provider: [Name of doctor/facility]
- Service provided: [Brief description of medical service]
- Claim number (if available): [Claim Number]
- Insurance policy number: [Your Policy Number]

I am contacting you because [explain the specific issue or question, e.g., the claim has been pending for an extended period, it was denied, you received a bill you believe should be covered, etc.].

I have attached [list any relevant documents you're attaching, such as Explanation of Benefits, bills, etc.] for your reference.

Could you please provide an update on the status of this claim and [any specific action you're requesting, e.g., explain why it was denied, expedite processing, etc.]?

Thank you for your assistance with this matter.

Sincerely,
[Your Full Name]
[Student ID]
[Contact Information]`
    }
  ];

  return (
    <div className="email-section">
      <h1 className="section-title">Administrative Affairs</h1>
      <p className="text-lg mb-6">
        Navigating university administrative processes requires clear communication. 
        Use these templates when contacting various administrative offices.
      </p>

      <Tabs defaultValue="admin" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="admin">Administrative Offices</TabsTrigger>
          <TabsTrigger value="housing">Housing Management</TabsTrigger>
          <TabsTrigger value="health">Health Services</TabsTrigger>
        </TabsList>
        
        <TabsContent value="admin" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contacting University Administrative Offices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                These templates will help you effectively communicate with various administrative offices 
                including the Registrar's Office, International Student Services, and the Bursar's Office.
              </p>
              
              {adminOfficesTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < adminOfficesTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="housing" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contacting Housing & Residence Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                These templates will help you communicate effectively with university housing services 
                for maintenance requests, room changes, and other housing-related issues.
              </p>
              
              {housingTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < housingTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="health" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Contacting Health & Wellness Centers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Use these templates when scheduling appointments or dealing with insurance matters 
                at your university's health services.
              </p>
              
              {healthTemplates.map((template, index) => (
                <EmailTemplateCard
                  key={index}
                  title={template.title}
                  description={template.description}
                  template={template.template}
                  className={index < healthTemplates.length - 1 ? "mb-6" : ""}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdministrativeAffairs;
