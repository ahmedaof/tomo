import { Link, useLocation } from "react-router-dom";
import "./aside.scss";
// Images
import Control from "../../../assets/images/aside/data1.svg";
import Train from "../../../assets/images/aside/data2.svg";
import Clients from "../../../assets/images/aside/data3.svg";
import Coach from "../../../assets/images/aside/data4.svg";
import Subscription from "../../../assets/images/aside/data5.svg";
import Reports from "../../../assets/images/aside/data6.svg";
import Messages from "../../../assets/images/aside/messages.svg";
import Gear from "../../../assets/images/aside/gear.svg";
import Logout from "../../../assets/images/aside/log-out.svg";
import LeftArrow from "../../../assets/images/aside/left-arrow.svg";

const Aside = () => {
  // Get The Route Location Tet Set Aside Active Class
  const location = useLocation();

  const asideData = {
    firstElements: [
      { id: 1, icon: Control, text: "لوحة التحكم", path: "/dashboard" },
      { id: 2, icon: Train, text: "برامج التدريب", path: "/program" },
      { id: 3, icon: Clients, text: "العملاء" },
      { id: 4, icon: Coach, text: "المدربين" },
      { id: 5, icon: Subscription, text: "الإشتراكات" },
      { id: 6, icon: Reports, text: "التقارير" },
    ],
    secondElements: [
      { id: 7, icon: Messages, text: "الرسائل", numOfMsgs: true },
      { id: 8, icon: Gear, text: "الإعدادات" },
      { id: 9, icon: Logout, text: "خروج" },
    ],
  };
  return (
    <aside className="text-primary bg-white h-full">
      <div className="px-1 sm:px-3 md:px-6 py-5 sm:py-10 aside-container">
        {/* Top Aside Elements */}
        <div className="first-elements">
          {asideData.firstElements.map((elem) => {
            return (
              <div
                key={elem.id}
                className={`cursor-pointer mb-10 ${
                  elem?.path === location?.pathname && "active"
                }`}
              >
                <Link
                  className="flex flex-col sm:flex-row items-center gap-3 justify-between"
                  to={elem.path}
                >
                  <img
                    src={elem.icon}
                    alt={elem.text}
                    className="mb-2 sm:mb-0"
                  />
                  <p className="text-center">{elem.text}</p>
                  <img
                    src={LeftArrow}
                    alt="left-arrow"
                    className="hidden sm:block"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        {/* Bottom Aside Elements */}
        <div className="second-elements">
          {asideData.secondElements.map((elem) => {
            return (
              <div
                key={elem.id}
                className={`cursor-pointer mb-10 ${
                  elem?.path === location?.pathname && "active"
                }`}
              >
                <Link className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="relative">
                    <img
                      src={elem.icon}
                      alt={elem.text}
                      className="mb-2 sm:mb-0"
                    />
                    <div
                      className="number absolute w-4 h-4 rounded-full bg-active"
                      style={{ display: elem.numOfMsgs ? "block" : "none" }}
                    >
                      <p className="text-white center">3</p>
                    </div>
                  </div>
                  <p className="text-center">{elem.text}</p>
                  <img
                    src={LeftArrow}
                    alt="left-arrow"
                    className="hidden sm:block"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
