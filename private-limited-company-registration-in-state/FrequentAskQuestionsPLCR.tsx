import React from "react";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";

interface FAQItem {
  question: string;
  answer: string;
}

interface FrequentAskQuestionPLCRProps {
  faq: FAQItem[];
}
const FrequentAskQuestionPLCR = ({ faq }: FrequentAskQuestionPLCRProps) => {
  return (
    <section className="faq-local-page">
      <div className="faq-main-container">
        <h2 className="faq-heading">Frequently Asked Questions (FAQs)</h2>
        <div className="faq-accordian-container">
        <MDBAccordion initialActive={1}>
            {faq.map((faqItem: any, index: number) => (
              <MDBAccordionItem
                collapseId={index + 1}
                headerTitle={faqItem.question}
                className=""
                key={index}
              >
                {faqItem.answer}
              </MDBAccordionItem>
            ))}
          </MDBAccordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentAskQuestionPLCR;