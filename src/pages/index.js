import * as React from "react";
import styled from "styled-components";

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  height: "100%",
};

const Quote = styled.p`
  font-size: 36px;
  margin: 0px 20px;
  text-align: center;
`;

const QuoteSignature = styled.p`
  font-size: 20px;
`;

// markup
const IndexPage = () => {
  const { current: currentDate } = React.useRef(new Date());

  return (
    <main style={pageStyles}>
      <Quote>"Ich mach heut gar nix"</Quote>
      <QuoteSignature>
        Roland,{" "}
        {currentDate.toLocaleDateString("de-DE", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </QuoteSignature>
    </main>
  );
};

export default IndexPage;
