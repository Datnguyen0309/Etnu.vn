import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { BtnTheme } from "./BtnTheme";

interface IInputRes {
  placeholder?: string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const InputRes = (props: IInputRes) => {
  const { placeholder, label, onClick } = props;
  return (
    <InputGroup size="md"> 
      <Input pr="10rem" type="text" placeholder={placeholder}  color={"#000"}/>
      <InputRightElement width="4.5rem" mr="4px">
        <BtnTheme
          h="2rem"
          size="md"
          bg={"blue.900"}
          fontSize="sm"
          fontWeight="bold"
          color={"white"}
          onClick={(e) => onClick && onClick(e)}
        >
          {label}
        </BtnTheme>
      </InputRightElement>
    </InputGroup>
  );
};
