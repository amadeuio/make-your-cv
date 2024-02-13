import MailIcon from "../icons/MailIcon";
import PhoneIcon from "../icons/PhoneIcon";
import LocationIcon from "../icons/LocationIcon";

function HeaderCv() {
  return (
    <div className="header-cv">
      <div className="header-cv-fullname">John Doe</div>
      <div className="header-cv-contact">
        <div className="header-cv-contact-item">
          <MailIcon />
          johndoe@example.com
        </div>
        <div className="header-cv-contact-item">
          <PhoneIcon />
          19028840
        </div>
        <div className="header-cv-contact-item">
          <LocationIcon />
          Utrecht, NL
        </div>
      </div>
    </div>
  );
}

export default HeaderCv;
