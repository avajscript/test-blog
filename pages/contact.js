import React, { useState } from "react";
import styled from "styled-components";
import SubmitBtn from "../components/Buttons/SubmitBtn";
import COLORS from "../Data/colors";
import emailjs, { init } from "@emailjs/browser";

const Cont = styled.div`
  display: flex;
  background-color: #fff;
  h2,
  h4,
  p {
    color: #00132e;
  }
  h2 {
    margin-bottom: 1rem;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TextField = styled.div`
  width: 496px;
  p {
    font-size: 20px;
  }
`;

const FormElem = styled.form`
  .field {
    .input {
      background-color: red !important;
    }
  }
`;

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
    images: [],
  });
  const form = React.useRef();

  function updateForm(e) {
    const value = e.currentTarget.value;
    const name = e.currentTarget.name;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  }
  function submitSuggestion(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3hso67w",
        "template_cxvs4sn",
        form.current,
        "VuMtr83gozV6G7IIc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    clearForm();
  }
  function clearForm() {
    init("VuMtr83gozV6G7IIc");

    setFormData((prevForm) => {
      return {
        name: "",
        email: "",
        feedback: "",
        images: [],
      };
    });
  }
  return (
    <div className="container">
      <Cont>
        <Flex className="flex-one">
          <TextField>
            <h2>How would you improve this website?</h2>
            <p>Use the form to send me any suggestions</p>
            <p>or feel free to ask me a question!</p>
          </TextField>
        </Flex>
        <Flex className="flex-one">
          <FormElem ref={form} onSubmit={submitSuggestion} colors={COLORS}>
            <div className="form-line line">
              <div className="field">
                <h4>Name</h4>
                <input
                  type="text"
                  name="name"
                  onChange={updateForm}
                  value={formData.name}
                  placeholder="Name"
                />
              </div>
              <div className="field">
                <h4>Email</h4>
                <input
                  type="email"
                  name="email"
                  onChange={updateForm}
                  value={formData.email}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field line">
              <h4>What Is Your Suggestion or Feedback? *</h4>
              <textarea
                required
                name="suggestion"
                onChange={updateForm}
                value={formData.suggestion}
              ></textarea>
            </div>
            <SubmitBtn type="submit"></SubmitBtn>
          </FormElem>
        </Flex>
      </Cont>
    </div>
  );
};

export default contact;
