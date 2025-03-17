import router, { useRouter } from "next/router";
import { useEffect } from "react";

interface BenefitItem {
  heading: string;
  description: string;
}

interface BenefitsProps {
  benefitsContent: {
    para1: string;
    para2: string;
    para3: string;
    para4: string;
    benefitsArrayData: BenefitItem[];
  }
}

export default function Benefits(props: BenefitsProps) {
  const {para1, para2, para3, para4, benefitsArrayData} = props.benefitsContent;
  const benefits = [
    {
      heading: "Skilled Workforce",
      description:
        "Maharashtra offers a talented workforce in agriculture, handlooms, handicrafts, and IT, supported by local institutions and government initiatives.",
    },
    {
      heading: "Strategic Location",
      description: "Situated near international borders and serving as a gateway to Southwest Asia, Maharashtra provides excellent connectivity for trade and commerce with neighboring countries.",
    },
    {
      heading: "Natural Resources",
      description: " Compared to metropolitan cities, Manipur offers lower operational costs, affordable office spaces, and a high-quality lifestyle for entrepreneurs and employees.",
    },
    {
      heading: "Affordable Business Operations",
      description: "The state is rich in natural resources, offering opportunities for industries like agro-based businesses, handicrafts, and tourism.",
    },
    {
      heading: "Government Incentives",
      description: "The Maharashtra government actively promotes startups and businesses with subsidies, tax benefits, and initiatives under programs like StartUp Maharashtra and the South West Industrial Development Scheme (NEIDS).",
    },
    {
      heading: "Evolving Business Ecosystem",
      description: "Maharashtra’s growing focus on innovation, incubation centers, and local entrepreneurial initiatives makes it an attractive destination for innovative businesses and startups.",
    },
  ];
  const router = useRouter();

  useEffect(() => {
    // When the page loads, check if the URL contains a hash
    if (router.asPath.includes("#")) {
      const id = router.asPath.split("#")[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [router.asPath]);
  return (
    <div className="private-limited-benefits-container" id="benefits-of-private-company-registration">
      <h2 className="heading-benefits"><span>Benefits</span> of Private Limited Company Registration </h2>
      <p>
        {para1}
      </p>
      <div className="benefits-cards-container">
        {benefitsArrayData.map((item, index) => {
          return (
            <div className="benefits-card" key={index}>
              <h6 className="card-heading">{item.heading}</h6>
              <p className="card-description">{item.description}</p>
            </div>
          );
        })}
      </div>
      <p className="benefits-para">
        {para2}
      </p>
      <p className="benefits-para">{para3}</p>
      <p className="benefits-para">{para4}</p>
    </div>
  );
}
