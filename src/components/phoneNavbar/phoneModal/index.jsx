/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { ExitIcon, XIcon } from "../../../assets/icon";
import { sidebarData } from "../../../utils/sidebarData";
import ExitModal from "../exitModal";
import { useEffect, useState } from "react";

export default function PhoneModal({ setPhoneModalOpen, phoneModalOpen }) {
  const [modalOpen, setModalOpen] = useState(false);

  // DISABLE BACKGROUND SCROLL WHEN MODAI IS OPENED
  useEffect(() => {
    if (phoneModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [phoneModalOpen]);

  return (
    <div className={`w-full px-4 md:px-10`}>
      <div
        className={`fixed cursor-pointer z-[200] inset-0 w-full h-full bg-black opacity-40  ${
          phoneModalOpen ? "" : "hidden"
        }`}
        onClick={() => setPhoneModalOpen(false)}
      ></div>
      <section
        className={`max-w-[90%] md:max-w-[550px] z-[201] mx-auto w-full flex-col h-fit bg-white fixed py-[30px] md:py-[35px] px-[20px] md:px-[50px] rounded-t-lg rounded-b-lg md:top-[50%] duration-300 overflow-hidden left-0 right-0 top-0 bottom-0 my-auto ${
          phoneModalOpen ? "flex" : "hidden z-[-10]"
        }`}
      >
        <div className="w-full py-8">
          {sidebarData.map((item) => {
            return (
              <NavLink
                className="flex justify-center py-4 rounded-md text-base md:text-lg font-AeonikProMedium"
                key={item?.id}
                to={item.path}
                style={({ isActive }) => ({
                  color: isActive ? "#007DCA" : "#2C2C2C",
                  backgroundColor: isActive ? "#F2F2F2" : null,
                })}
              >
                <div className="flex w-[135px]">
                  <span
                    className={`${
                      item.id === 4 ? "ml-1 mr-3" : "mr-4"
                    }  flex w-[24px]`}
                  >
                    {item.icon}
                  </span>
                  {item.title}
                </div>
              </NavLink>
            );
          })}
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="justify-center mt-auto w-full text-[#ff2d55] rounded-md text-lg font-AeonikProMedium flex px-6 py-4 hover:bg-[#F2F2F2]"
        >
          <div className="flex w-[135px]">
            <div className="mr-4 flex w-[24px]">
              <ExitIcon color={"red"} />
            </div>
            Выйти
          </div>
        </button>

        {/* exit modal */}
        <ExitModal setModalOpen={setModalOpen} modalOpen={modalOpen} />
        {/* X button */}

        <button
          onClick={() => setPhoneModalOpen(false)}
          className="absolute top-5 right-5 p-[5px] border border-[F2F2F2] rounded-lg"
        >
          <XIcon />
        </button>
      </section>
    </div>
  );
}
