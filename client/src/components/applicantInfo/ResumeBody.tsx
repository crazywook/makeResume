import * as React from "react"
import Styled from "styled-components"

interface PropsType {
  className?: string;
}

const StyledBlock = Styled.div`

  hr {
    background: transparent;
    display: block;
    width: 100%;
    height: 1px;
    visibility: visible;
    border: none;
    border-bottom: 1px solid rgba(55, 53, 47, 0.09);
  }

  p {
    margin-top: 0.3em;
    margin-bottom: 0.3em;
  }

  @media only screen {
    margin: 2em auto;
    max-width: 600px;
    color: rgb(55, 53, 47);

    line-height: 1.5;
    white-space: pre-wrap;
  }

  a,
  a.visited {
    color: inherit;
    text-decoration: underline;
  }

  .pdf-relative-link-path {
    font-size: 80%;
    color: #444;
  }

  h1,
  h2,
  h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-top: 0.7em;
    margin-bottom: 0.3em;
  }

  h2 {
    font-size: 1.2rem;
  }

  figure {
    margin: 0.5em 0 0.75em;
    page-break-inside: avoid;
  }

  .block-color-gray_background {
    background: rgb(235, 236, 237);
  }

  .highlight-orange {
    color: rgb(217,115,13);
  }

  .highlight-brown {
    color: rgb(100,71,58);
  }

  .highlight-gray {
    color: rgb(155,154,151);
  }

  .callout {
    border-radius: 3px;
    padding: 1rem;
  }

  .indented {
    padding-left: 1.5em;
  }

  ul {
    margin: 0.5rem 0;
  }

  @media print {
    .decolorization-for-print {
      background-color: #fff;
    }
    .decolorization-and-no-pading-for-print {
      padding: 0 !important;
      background-color: #fff;
    }
  }
`;

export const ResumeBody: React.FunctionComponent<PropsType> = ({children, className = ""}) => {
  return (
    <StyledBlock className={className} >
      {children}
    </StyledBlock>
  );
};
