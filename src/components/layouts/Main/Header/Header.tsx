import Button from "@/components/common/Button/Button";
import React from "react";
import { VscColorMode } from "react-icons/vsc";
import * as Style from "./index.styled";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo>
          <Style.Img src="https://cdn.discordapp.com/attachments/609740555160911923/1186060200029990963/Group_1.png?ex=6591dfa3&is=657f6aa3&hm=f5372e9c697995000c5579eb16c95eba4e8385b2a175bf5d72da3232fe8fbbad&"></Style.Img>
        </Style.Logo>

        <Style.Buttons>
          <Button
            name={<VscColorMode />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
