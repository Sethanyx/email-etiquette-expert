
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import EmailTemplateCard from "./EmailTemplateCard";

const BestPractices = () => {
  const followUpTemplate = `Subject: Follow-up: Request for Office Hours Appointment

Dear Professor Smith,

I hope this email finds you well. I wanted to follow up on my previous email regarding scheduling an office hours appointment. I understand you may be busy, but I would appreciate any available time to discuss [mention topic].

Please let me know if a specific time works for you. Looking forward to your response.

Best regards,
[Your Full Name]
[Student ID]
[Contact Information]`;

  return (
    <div className="email-section">
      <h1 className="section-title">Best Practices for Writing Emails</h1>
      <p className="text-lg mb-6">
        Writing professional and effective emails is crucial for clear communication in academic and professional settings. 
        Here are some key points to keep in mind:
      </p>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Structure of a Formal Email</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">A well-structured email generally includes the following components:</p>
          <ul className="space-y-2">
            <li><span className="emoji-bullet">📌</span><strong>Subject Line</strong> – Clear and concise, summarizing the purpose of the email.</li>
            <li><span className="emoji-bullet">📌</span><strong>Salutation</strong> – Proper greeting (e.g., Dear Professor Smith,).</li>
            <li><span className="emoji-bullet">📌</span><strong>Introduction</strong> – Briefly introduce yourself (if necessary) and state the reason for your email.</li>
            <li><span className="emoji-bullet">📌</span><strong>Body</strong> – Provide detailed but concise information. Use paragraphs or bullet points for clarity.</li>
            <li><span className="emoji-bullet">📌</span><strong>Call to Action</strong> – Clearly state what you expect (e.g., requesting a meeting, asking for a response).</li>
            <li><span className="emoji-bullet">📌</span><strong>Closing</strong> – A polite closing phrase (e.g., Best regards, Sincerely,).</li>
            <li><span className="emoji-bullet">📌</span><strong>Signature</strong> – Your full name, university affiliation, and contact information (if applicable).</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>General Etiquette</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li><span className="emoji-bullet">📌</span><strong>Be respectful and professional</strong> – Even if you are frustrated, maintain a polite and formal tone.</li>
            <li><span className="emoji-bullet">📌</span><strong>Use proper grammar and spelling</strong> – Avoid slang, typos, or overly casual language.</li>
            <li><span className="emoji-bullet">📌</span><strong>Keep it concise</strong> – Professors, administrators, and professionals receive many emails daily. Get to the point.</li>
            <li><span className="emoji-bullet">📌</span><strong>Use a professional email address</strong> – If using a personal email, ensure it's appropriate (e.g., ethan.wu@wisc.edu rather than coolgamer123@email.com).</li>
            <li><span className="emoji-bullet">📌</span><strong>Reply promptly</strong> – If someone emails you back, acknowledge their response within 24-48 hours.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Subject Line Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">A good subject line should be:</p>
          <ul className="space-y-2 mb-4">
            <li><span className="emoji-bullet">✅</span><strong>Specific</strong> – Clearly indicate the topic (e.g., Request for Office Hours Appointment)</li>
            <li><span className="emoji-bullet">✅</span><strong>Concise</strong> – Avoid long or vague subject lines (e.g., Important Question is too vague)</li>
            <li><span className="emoji-bullet">✅</span><strong>Action-Oriented</strong> – If applicable, indicate urgency (e.g., Follow-up on Research Meeting – Response Needed by Friday)</li>
          </ul>
          <p className="mb-2"><strong>💡 Examples:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>[CS540] Question about Homework 3 Submission</li>
            <li>Request for Recommendation Letter – Your name</li>
            <li>Meeting Request: Research Progress Discussion</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Salutations and Closings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="mb-2"><span className="emoji-bullet">✅</span><strong>Proper greetings:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Dear Professor [Last Name],</li>
              <li>Dear Dr. [Last Name],</li>
              <li>Dear [First Name] [Last Name], (For industry professionals)</li>
            </ul>
            
            <p className="mt-4 mb-2"><span className="emoji-bullet">❌</span><strong>Avoid casual greetings:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hey Prof!</li>
              <li>Hi there!</li>
              <li>What's up?</li>
            </ul>
          </div>
          
          <Separator className="my-4" />
          
          <div>
            <p className="mb-2"><span className="emoji-bullet">✅</span><strong>Professional closings:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Best regards,</li>
              <li>Sincerely,</li>
              <li>Thank you,</li>
              <li>Looking forward to your response,</li>
            </ul>
            
            <p className="mt-4 mb-2"><span className="emoji-bullet">❌</span><strong>Avoid overly casual closings:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cheers!</li>
              <li>Take care!</li>
              <li>TTYL (Talk to you later)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <h2 className="subsection-title">Follow-Up Etiquette</h2>
      <p className="mb-4">
        If you haven't received a response within 3-5 business days, it's appropriate to send a polite follow-up email.
      </p>
      
      <EmailTemplateCard 
        title="Example Follow-Up Email" 
        template={followUpTemplate}
      />
    </div>
  );
};

export default BestPractices;
