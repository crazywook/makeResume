import * as React from "react";
import Styled from "styled-components";

interface PropsType {
  className?: string;
  email: string;
  phone: string;
}

export const Contact: React.FunctionComponent<PropsType> = ({email, phone, className = ""}) => {
  return (
    <p className={className} >
      📩 {email} / 📞 {phone}
    </p>
  );
};
