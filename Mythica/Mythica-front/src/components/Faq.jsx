import { useEffect, useState } from "react";
import styled from "styled-components";
import useRaceHandler from "../Hooks/useRaceHandler";
import useClassHandler from "../Hooks/useClassHandler";

const Main = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
`;
const Tittle = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-left: 2rem;
  }
`;
const Triangle = styled.div`
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1rem solid #000;
  margin-right: 2rem;
`;
const Aside = styled.aside`
  width: 100%;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0 0 10px 10px;
`;

function Faq({ data, type }) {
  const [Content, setContent] = useState(null);

  switch (type) {
    case "race":
      setContent(useRaceHandler(data));
      break;
    case "class":
      setContent(useClassHandler(data));
      break;
  }

  return (
    <Main>
      <Tittle>
        <h1>{data.name}</h1>
        <Triangle></Triangle>
      </Tittle>
      <div>
        <Aside>
          {Content &&
            Object.entries(Content).map((data) => (
              <p key={data}>
                <strong>{data[0]}</strong> {data[1]}
              </p>
            ))}
        </Aside>
      </div>
    </Main>
  );
}

// Array.from(growDiv.children).map(el => el.clientHeight).reduce((a, b) => a + b, 0)

export default Faq;
