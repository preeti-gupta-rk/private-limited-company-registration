interface DocumentItem {
  name: string;
  description: string[]
}

interface DocumentsRequiredProps {
  documentsContents: {
    para: string;
    documentsArrayData: DocumentItem[]
  }
}

export default function DocumentsRequired(props: DocumentsRequiredProps) {
  const {para, documentsArrayData} = props.documentsContents;
  const documents = [
    {
      name: "For Directors and Shareholders",
      description: [
        "PAN Card",
        "Proof of Identity",
        "Address Proof",
        "Passport (for Foreign Nationals)",
      ],
    },
    {
      name: "For the Registered Office",
      description: ["Proof of Address", "Utility Bill"],
    },

    {
      name: "For Company Registration",
      description: [
        "Digital Signature Certificate",
        "Director Identification Number",
        "Memorandum of Association",
        "Articles of Association",
      ],
    },
  ];
  return (
    <div className="documents-container" id="documents-required-for-registration">
      <h2 className="heading-documents"><span>Documents Required</span> for Private Limited Company Registration in Maharashtra.</h2>
      <p>
       {para}
      </p>

      <div className="documents-card-container">
        {documentsArrayData.map((item, index) => {
          return (
            <div className="documents-card" key={index}>
              <h6 className="document-card-heading">{item.name}</h6>

              <ul className="document-card-list">
                {item.description.map((listItem, listIndex) => {
                  return <li className="document-card-description" key={listIndex}>{listItem}</li>;
                })}
              </ul>
            </div>
          ) 
        })}
      </div>
    </div>
  );
}
