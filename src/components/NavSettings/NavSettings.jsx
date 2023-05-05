import Arrow from "../../assets/images/navbar/arrow.png";
import Notification from "../../assets/images/navbar/notif.svg";
import Messages from "../../assets/images/navbar/msgs.svg";

const NavSettings = () => {
  return (
    <>
      <div className="lang cursor-pointer flex items-center gap-x-2">
        <p>العربية</p>
        <div>
          <img src={Arrow} alt="arrow" />
        </div>
      </div>
      <div className="notification relative cursor-pointer">
        <img src={Notification} alt="notification" />
        <div className="notif-number absolute w-4 h-4 bg-active rounded-full">
          <p className="center font-medium leading-4">5</p>
        </div>
      </div>
      <div className="messages relative cursor-pointer">
        <img src={Messages} alt="messages" />
        <div className="msgs-number absolute w-4 h-4 bg-active rounded-full">
          <p className="center font-medium leading-4">3</p>
        </div>
      </div>
    </>
  );
};

export default NavSettings;
