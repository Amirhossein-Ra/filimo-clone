import { useDebugValue, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccordion } from "../../Redux/Accordion/AccordionSlice";
import "./Acoordion.css";
const AccordionR = () => {
  const { Accordions } = useSelector((state) => state.Accordion);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAccordion());
  }, []);
  const [activeKey, setActiveKey] = useState("0");
  const handleAccordionChange = (key) => {
    setActiveKey(key);
  };
  return (
    <div className="w-full h-[450px] sm:py-[80px] py-4 bg-[rgb(14,14,14)] flex-col justify-center items-center sm:gap-y-10 space-y-4">
      <div className="flex justify-center items-center font-bold text-white text-[18px]">
        سوالات متداول
      </div>
      <p className="text-gray-400 flex justify-center items-center text-[15px]">
        سوالات شایع دیگر کاربران شاید سوال شما هم باشد
      </p>
      <Accordion
        activeKey={activeKey}
        onSelect={handleAccordionChange}
        flush
        dir="rtl"
        className="w-full flex flex-col sm:gap-y-5 justify-center items-center "
      >
        {Accordions?.map((elem) => {
          return (
            <Accordion.Item
              eventKey={elem.id - 1}
              key={elem.id}
              className="w-[90%] rounded-lg"
            >
              <Accordion.Header className="font-bold text-white">
                {elem.title}
              </Accordion.Header>
              <Accordion.Body className="bg-[#2b2b2b]  text-white">
                {elem.body}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default AccordionR;
