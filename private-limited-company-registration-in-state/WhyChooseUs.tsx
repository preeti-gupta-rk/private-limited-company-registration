import Image from "next/image";
import whyChooseHeroImg from "../../../assets/images/whyChooseUs/why-choose-img.png"

interface WhyChooseRegKaroProps{
  state: string
  whyChooseRegisterKaroContent:{
      para?:string;
      features:string[];
      image:string;
  }
}
export default function WhyChooseUs(props:WhyChooseRegKaroProps) {
  const {state, whyChooseRegisterKaroContent:{para, features, image}} = props;
  return (
    <div className="why-choose-us-container" id="why-choose-register-karo">
      <h2 className="why-heading">
      Why <span>Choose RegisterKaro</span> For Private Limited Company Registration in {state}?
      </h2>
      <p className="why-description">
        {para}
      </p>
      <div className="why-container">
        <div className="why-choose-us-left">
          <ul>
            {features.map((listItem,index)=>(
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
        <div className="why-choose-us-right">
          <Image
            src={whyChooseHeroImg}
            width={500}
            height={300}
            alt="why-image"
            draggable={false}
            style={{
              width: '100%',  
              height: 'auto', 
            }}
          ></Image>
        </div>
      </div>
    </div>
  );
}


// extra code
/*

<li>Trusted by 50,000+ Clients</li>
            <li>
              Proven track record of successful registrations across India.
            </li>
            <li>Fast document preparation and filing process.</li>
            <li>Assistance at every step from consultation to compliance.</li>
            <li>Transparent and budget-friendly pricing.</li>

*/ 