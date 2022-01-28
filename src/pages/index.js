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
  return (
    <main style={pageStyles}>
      <Quote>"Ich mach heut gar nix"</Quote>
      <QuoteSignature>
        Roland,{" "}
        {new Date().toLocaleDateString("de-DE", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })}
      </QuoteSignature>
    </main>
  );
};

export default IndexPage;
