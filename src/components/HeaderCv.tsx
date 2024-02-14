import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";
import { useContext } from "react";
import { FormDataContext } from "../App";

function HeaderCv() {
  const { headerData } = useContext(FormDataContext)!;
  const { fullName, email, phone, address } = headerData;

  return (
    <div className="header-cv">
      <h1 className="header-cv-fullname">{fullName}</h1>
      <div className="header-cv-contact">
        <div className="header-cv-contact-item">
          <MailIcon />
          {email}
        </div>
        <div className="header-cv-contact-item">
          <PhoneIcon />
          {phone}
        </div>
        <div className="header-cv-contact-item">
          <LocationIcon />
          {address}
        </div>
      </div>
    </div>
  );
}

export default HeaderCv;
