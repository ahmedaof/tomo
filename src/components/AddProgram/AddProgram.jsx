import { useEffect, useState } from "react";

import { Accordion, Button, Modal, Spinner } from "flowbite-react";

import Select from "react-select";
import "./add-program.scss";
// Components
import MainButton from "../Buttons/MainButton";
import SecondaryButton from "../Buttons/SecondaryButton";

// Images
import closeImg from "../../assets/images/dashboard/close.png";
import plusRedImg from "../../assets/images/dashboard/plus-red.png";

// services
import { apiAddProgram, apiAddProgramMeals, apiUploadImg } from "./services";

// const options = [
//   { value: "option1", label: "option1" },
//   { value: "option2", label: "option2" },
// ];

import { Formik, Form, FieldArray, Field, useFormikContext } from "formik";
import * as Yup from "yup";

const AddProgram = ({ togglePrograms, handleOverlay }) => {
  const [isLoading, setIsLoading] = useState(false);
  // handle submit function
  function handleSubmit(values, actions) {
    console.log(actions);
    setIsLoading(true);
    apiAddProgram({
      name: values.program,
    }).then((res) => {
      apiAddProgramMeals({
        ...values,
        program: res.data.data.id,
      })
        .then((res) => {
          actions.resetForm();
          handleOverlay();
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }

  function addExtraMeal(arrayHelpers) {
    arrayHelpers.push({
      name: "الوجبة",
      details: "",
      calories: "",
      image: "",
    });
  }

  function deleteMeal(arrayHelpers, index) {
    arrayHelpers.remove(index);
  }

  // schema
  const schema = Yup.object().shape({
    program: Yup.string().required("هذا الحقل مطلوب"),
  });

  const mealsTitles = ["وجبة الافطار", "وجبة العشاء", "وجبة الغداء"];

  return (
    <Modal
      show={togglePrograms}
      position="center"
      onClose={handleOverlay}
      dismissible={true}
      size="4xl"
    >
      <div className="add-program-modal">
        {/* header  */}
        <div className="create flex justify-between items-center mb-8">
          <p className="text-primary">إنشاء برنامج جديد</p>
          <div className="cursor-pointer" onClick={handleOverlay}>
            <img src={closeImg} alt="close" />
          </div>
        </div>

        {/* export  */}
        <div className="import mb-8">
          <SecondaryButton context="استيراد من برنامج" image={plusRedImg} />
        </div>

        {/* form  */}
        <Formik
          initialValues={{
            program: "",
            meals: [
              {
                name: "first",
                extra: [
                  {
                    name: "الوجبة الاولى",
                    details: "",
                    calories: "",
                    image: "",
                  },
                ],
              },
              {
                name: "second",
                extra: [
                  {
                    name: "الوجبة الاولى",
                    details: "",
                    calories: "",
                    image: "",
                  },
                ],
              },
              {
                name: "third",
                extra: [
                  {
                    name: "الوجبة الاولى",
                    details: "",
                    calories: "",
                    image: "",
                  },
                ],
              },
            ],
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ values }) => (
            <Form>
              <div className="program-form">
                {/* program name */}
                <div className="program-name relative mb-6">
                  <label className="field-label" htmlFor="program">
                    اسم البرنامج
                  </label>
                  <Field
                    className="field"
                    type="text"
                    name="program"
                    placeholder="اسم البرنامج"
                    id="program"
                  />
                  <label className="field-icon m-0" htmlFor="program">
                    <img src="images/edit-icon.svg" alt="edit icon" />
                  </label>
                </div>
                {/* program meals  */}
                <Accordion flush={true} collapseAll={true}>
                  {values.meals.map((meal, index) => (
                    <Accordion.Panel key={meal.name + index}>
                      <Accordion.Title>{mealsTitles[index]}</Accordion.Title>
                      <Accordion.Content>
                        <FieldArray
                          name={`meals[${index}].extra`}
                          render={(arrayHelpers) => (
                            <div>
                              {meal.extra.map((extraMeal, idx) => (
                                <div
                                  key={index + "--" + idx}
                                  className="mb-[23px]"
                                >
                                  <div className="flex justify-between items-center">
                                    <h6 className="text-[18px] text-primary mb-[28px]">
                                      {extraMeal.name}
                                    </h6>
                                    {idx > 0 && (
                                      <img
                                        src="images/trash-icon.svg"
                                        alt="delete meal"
                                        className="cursor-pointer"
                                        onClick={() =>
                                          deleteMeal(arrayHelpers, idx)
                                        }
                                      />
                                    )}
                                  </div>

                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="meals-details relative mb-6">
                                      <label
                                        className="field-label"
                                        htmlFor={index + "__" + idx}
                                      >
                                        تفاصيل الوجبة
                                      </label>
                                      <Field
                                        className="field field-textarea"
                                        type="textarea"
                                        as="textarea"
                                        name={`meals[${index}].extra[${idx}].details`}
                                        placeholder="تفاصيل الوجبة"
                                        id={index + "__" + idx}
                                      />
                                      <label
                                        className="field-icon m-0"
                                        htmlFor={index + "__" + idx}
                                      >
                                        <img
                                          src="images/edit-icon.svg"
                                          alt="edit icon"
                                        />
                                      </label>
                                    </div>
                                    <div className="meals-details relative mb-6">
                                      <label
                                        className="field-label"
                                        htmlFor={
                                          index + "__" + idx + "calories"
                                        }
                                      >
                                        السعرات الحراريه
                                      </label>
                                      <Field
                                        className="field field-textarea"
                                        type="textarea"
                                        as="textarea"
                                        name={`meals[${index}].extra[${idx}].calories`}
                                        placeholder="تفاصيل الوجبة"
                                        id={index + "__" + idx + "calories"}
                                      />
                                      <label
                                        className="field-icon m-0"
                                        htmlFor={
                                          index + "__" + idx + "calories"
                                        }
                                      >
                                        <img
                                          src="images/edit-icon.svg"
                                          alt="edit icon"
                                        />
                                      </label>
                                    </div>
                                  </div>
                                  <FileUploader
                                    name={`meals[${index}].extra[${idx}].image`}
                                  />

                                  <Button
                                    onClick={() => addExtraMeal(arrayHelpers)}
                                    className="bg-transparent border border-[#2AD7A1] hover:bg-transparent mt-[24px] text-[#2AD7A1] text-[14px] flex min-w-[121px] h-[48px] "
                                  >
                                    <img
                                      src="images/plus-green-icon.svg"
                                      alt=""
                                      className="img-fluid ml-[8px]"
                                    />
                                    <span>اضافة وجبة</span>
                                  </Button>
                                </div>
                              ))}
                            </div>
                          )}
                        />
                      </Accordion.Content>
                    </Accordion.Panel>
                  ))}
                </Accordion>
                <div className="buttons flex flex-col gap-[24px] mt-[24px]">
                  <MainButton
                    context="حفظ"
                    type="submit"
                    classes="!mb-0 h-[48px] text-[18px] font-[500] flex items-center justify-center text-center"
                    loading={isLoading}
                  />
                  <SecondaryButton
                    onClick={handleOverlay}
                    context="إلغاء"
                    classes="!mb-0 h-[48px] text-[18px] font-[500] flex items-center justify-center text-center"
                  />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default AddProgram;

function FileUploader({ name }) {
  const { setFieldValue, values } = useFormikContext();
  const [isLoading, setIsLoading] = useState(false);
  const [imageRes, setImageRes] = useState(null);
  function handleUploadFile(e) {
    setIsLoading(true);
    const fd = new FormData();

    fd.append("image", e.target.files[0]);

    apiUploadImg(fd)
      .then((res) => {
        setImageRes(res.data.data.path);
        setFieldValue(name, res.data.data.path);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <label className="col-span-2 meals-img flex flex-col items-center justify-center gap-2 bg-form-light m-0 h-[80px] rounded-[10px] border border-[#DEE6ED] border-dashed">
      <input type="file" className="hidden" onChange={handleUploadFile} />
      {isLoading ? (
        <Spinner aria-label="Medium sized spinner example" size="md" />
      ) : imageRes ? (
        <>
          <img
            src={process.env.REACT_APP_ADMIN_URL + "/api/v1/" + imageRes}
            alt="file uploading"
          />
        </>
      ) : (
        <>
          <img src="images/camera.svg" alt="camera" className="w-[22px]" />
          <span className="text-[12px] text-primary leading-5">
            ارفاق صوره او عدة صور
          </span>
        </>
      )}
    </label>
  );
}
