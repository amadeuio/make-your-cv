import { useFormDataContext } from "../../Context";
import MailIcon from "../../icons/MailIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import LocationIcon from "../../icons/LocationIcon";

function HeaderCv() {
  const { headerObject } = useFormDataContext();
  const { fullName, email, phone, address } = headerObject;

  return (
    <div className="header-cv">
      <h1 className="header-cv-fullname">{fullName}</h1>
      <div className="header-cv-contact">
        {email && (
          <div className="header-cv-contact-item">
            <MailIcon />
            {email}
          </div>
        )}
        {phone && (
          <div className="header-cv-contact-item">
            <PhoneIcon />
            {phone}
          </div>
        )}
        {address && (
          <div className="header-cv-contact-item">
            <LocationIcon />
            {address}
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderCv;
