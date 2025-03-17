import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is the minimum number of directors required?",
      answer: "You need at least two directors for a Private Limited Company in Nagpur. Contact RegisterKaro for guidance on director requirements."
    },
    {
      question: "Can a foreign national be a director?",
      answer: "Yes, but they must comply with specific guidelines. Get detailed advice from our private limited company registration consultant."
    },
    {
      question: "What is the maximum number of shareholders allowed?",
      answer: "A Private Limited Company in Nagpur can have up to 200 shareholders. Speak to RegisterKaro to understand shareholder regulations."
    },
    {
      question: "Is there a specific business activity required?",
      answer: "No, you can operate in any legal business sector. Contact us for clarity on business activity requirements."
    },
    {
      question: "What are the incorporation fees?",
      answer: "Fees for registration of a private limited company vary by business size and type. Reach out to RegisterKaro for transparent fee details."
    },
    {
      question: "Do I need to have a physical office in Nagpur?",
      answer: "Yes, you must have a registered office address in Nagpur. Let our team help you verify your office address documentation."
    },
    {
      question: "Can I change the company name after registration?",
      answer: "Yes, but it requires formal approval and amendment procedures. Contact RegisterKaro for support with name changes."
    },
    {
      question: "What is the role of a private limited company registration consultant?",
      answer: "They help guide you through the entire registration process, ensuring compliance. Hire our expert private limited company registration consultant for hassle-free service."
    },
    {
      question: "How secure is the online registration process?",
      answer: "Private limited company registration online is safe and streamlined. Trust RegisterKaro to manage your online submission securely."
    },
    {
      question: "What happens if documents are incomplete?",
      answer: "The registration may be delayed until all private limited company registration documents are complete. Rely on our expertise to ensure your documents required for registration of a private limited company are in order."
    },
    {
      question: "Can I incorporate my company remotely?",
      answer: "Yes, the entire process can be completed online. Connect with RegisterKaro to set up your Private Limited Company in Nagpur remotely."
    }
  ];

  return (
    <div className="faq-container">
      <h2 className="heading">Frequently Asked Questions</h2>
      
      <div className="faq-accordion">
        {faqItems.map((item, index) => (
          <div className="faq-item" key={index}>
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.question}</h3>
              {activeIndex === index ? (
                <CaretUp size={24} weight="bold" />
              ) : (
                <CaretDown size={24} weight="bold" />
              )}
            </div>
            
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
