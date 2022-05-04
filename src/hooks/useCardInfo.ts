import React, { useState } from "react";

import { CardInfo, CardNumbers, Password } from "../types";

const initialCardInfo: CardInfo = {
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

export const useCardInfo = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const resetCardInfo = () => {
    setCardInfo(prev => ({
      ...prev,
      cardNumbers: ["", "", "", ""],
      expiredDate: { month: "", year: "" },
      userName: "",
      securityCode: "",
      password: ["", ""],
    }));
  };

  const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      dataset: { index },
    } = e.target;

    setCardInfo(prevCardInfo => {
      const newCardNumbers: CardNumbers = [...prevCardInfo.cardNumbers];

      newCardNumbers[index] = Number(index) < 2 ? value : "•".repeat(value.length);

      return {
        ...prevCardInfo,
        cardNumbers: newCardNumbers,
      };
    });
  };

  const onChangeExpiredDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      dataset: { key },
    } = e.target;

    setCardInfo(prevCardInfo => {
      const newExpiredDate = {
        ...prevCardInfo.expiredDate,
      };

      newExpiredDate[key] = value;

      return {
        ...prevCardInfo,
        expiredDate: newExpiredDate,
      };
    });
  };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (cardInfo.userName === "" && value === " ") {
      return;
    }

    const newUserName = value.replace("  ", " ").toUpperCase();

    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: newUserName }));
  };

  const onBlurUserName = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: prevCardInfo.userName.trim() }));
  };

  const onChangeSecurityCode = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const value = e.target.value;

    setCardInfo(prevCardInfo => ({
      ...prevCardInfo,
      securityCode: value,
    }));
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      value,
      dataset: { index },
    } = e.target;

    if (value === "") {
      setCardInfo(prevCardInfo => {
        const newPassword: Password = [...prevCardInfo.password];

        newPassword[index] = value;

        return {
          ...prevCardInfo,
          password: newPassword,
        };
      });
    }
  };

  return {
    cardInfo,
    resetCardInfo,
    onChangeCardNumber,
    onChangeExpiredDate,
    onChangeUserName,
    onBlurUserName,
    onChangeSecurityCode,
    onChangePassword,
  };
};