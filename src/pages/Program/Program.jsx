import { useState } from "react";
/* import { useTable } from "react-table";
import axios from "axios"; */
import Select from "react-select";
import "./program.scss";
// Components
import Form from "../../components/Form/Form";
import MainButton from "../../components/Buttons/MainButton";
import Table from "../../components/Table/Table";
import Aside from "../../components/Shared/Aside/Aside";
import Navbar from "../../components/Shared/Navbar/Navbar";
import AddProgram from "../../components/AddProgram/AddProgram";
// Images
import formImage from "../../assets/images/program/searchIcon.png";
import PlusImage from "../../assets/images/program/plus.png";



// Select Box Options
const options = [{ value: "", label: "" }];

const Program = () => {
  const [overlay, setOverlay] = useState(false);
  const [togglePrograms, setTogglePrograms] = useState(false);
  // Close Overlay Section
  const handleOverlay = () => {
    setOverlay(false);
    setTogglePrograms(false);
  };
  return (
    <div className={`${overlay && "overlay"}`}>
      {/* Add A Program Section */}
      <AddProgram
        togglePrograms={togglePrograms}
        handleOverlay={handleOverlay}
      />

      <Navbar />
      <section className="hero bg-light-gray flex">
        <Aside />
        <section className="program flex-grow overflow-hidden">
          <div className="program-container my-5 mx-6 bg-white p-6 rounded-lg">
            {/* Form Section */}
            <div className="program-form flex justify-end mb-8">
              <Form
                classes="flex bg-form-light gap-x-4 items-center rounded-lg px-2 py-3 font-normal"
                context="ابحث عن برنامج"
                formImage={formImage}
              />
            </div>
            {/* Create A Program */}
            <div className="create flex justify-between items-center mb-8">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setOverlay(!overlay);
                  setTogglePrograms(!togglePrograms);
                }}
              >
                <MainButton image={PlusImage} context="إنشاء برنامج" />
              </div>
              <div className="select">
                <Select options={options} placeholder="نوع البرنامج" />
              </div>
            </div>
            {/* Table Section */}
            <div className="table-section">
              <Table />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Program;
