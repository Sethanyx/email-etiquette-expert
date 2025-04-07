
import { useState } from 'react';
import CopyButton from './CopyButton';

interface EmailTemplateCardProps {
  title: string;
  description?: string;
  template: string;
  className?: string;
}

const EmailTemplateCard = ({ 
  title, 
  description, 
  template, 
  className = '' 
}: EmailTemplateCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`template-card relative ${className}`}>
      <div className="flex justify-between items-center">
        <h3 className="template-heading">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-primary hover:underline"
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
          <CopyButton textToCopy={template} />
        </div>
      </div>

      {description && <p className="text-muted-foreground mb-3">{description}</p>}
      
      <div className={`mt-3 ${isExpanded ? 'block' : 'hidden'}`}>
        <div className="bg-muted p-4 rounded-md whitespace-pre-wrap font-mono text-sm">
          {template}
        </div>
      </div>
    </div>
  );
};

export default EmailTemplateCard;
