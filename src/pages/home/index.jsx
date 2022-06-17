import React, { useEffect, useRef, useState } from "react";
import * as S from "../../styles/global.style";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

import { Input } from "../../components/form/FormComponents";
import { Form, FormWrapper } from "../../styles/form.style";

import { TimelineHeader, Div } from "./style";

import Header from "../../components/header.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const navigate = useRef(useNavigate());
  const { userToken } = useContext(UserContext);

  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [isAwaitingRequest, setIsAwaitingRequest] = useState(false);

  useEffect(() => {
    if (!userToken) navigate.current("/");
  }, [userToken]);

  const config = {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAwaitingRequest(true);
    setDescription("");
    setUrl("");

    const data = {
      url: url,
      description: description,
    };
    const promise = axios.post("https://localhost:5000/timeline", data, config);

    promise.then((response) => {
      setIsAwaitingRequest(false);
      console.log("Sucess to send post", response);
    });

    promise.catch((err) => {
      setIsAwaitingRequest(false);
      console.log(userToken);
      alert("Houve um erro ao publicar seu link");
    });
  };

  return (
    <>
      <Header />
      <FormWrapper>
        <S.Body>
          <Div>
            <TimelineHeader>timeline</TimelineHeader>
          </Div>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="http://..."
              onChange={(e) => setUrl(e.target.value)}
              value={url}
              name="url"
              disabled={isAwaitingRequest}
              required
            />
            <Input
              type="text"
              placeholder="Awesome article about #javascript"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              name="description"
              disabled={isAwaitingRequest}
            />
            <button type="submit" disabled={isAwaitingRequest}>
              {isAwaitingRequest ? "Publishing..." : "Publish"}
            </button>
          </Form>
        </S.Body>
      </FormWrapper>
    </>
  );
}