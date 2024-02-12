import MailIcon from "../icons/MailIcon";

function HeaderCv() {
  return (
    <div className="header-cv">
      <div className="header-cv-fullname">John Doe</div>
      <div className="header-cv-contact">
        <div>
          <MailIcon />
          johndoe@example.com
        </div>
        <div>19028840</div>
        <div>Utrecht, NL</div>
      </div>
    </div>
  );
}

export default HeaderCv;
