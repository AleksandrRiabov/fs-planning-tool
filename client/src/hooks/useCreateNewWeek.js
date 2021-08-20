import { useState } from "react";
import { useHistory } from "react-router";

import { getFirstDayOfWeek } from "../helpers";

const useCreateNewWeek = ({ year, number }) => {
  const [creatingStatus, setCreatingStatus] = useState({
    inProgress: false,
    showBtn: false,
    message: "",
    error: false,
    refreshPage: false,
  });

  const history = useHistory();

  const createNewWeek = async () => {
    setCreatingStatus((prev) => ({
      ...prev,
      inProgress: true,
      message: "Please Wait..",
    }));
    const weekStartingDate = getFirstDayOfWeek(year, number);
    try {
      await fetch(`/api/add/week/${weekStartingDate}`);
      setCreatingStatus((prev) => ({
        ...prev,
        showBtn: true,
        message: "New Week Added Successfully!",
      }));
    } catch (err) {
      setCreatingStatus((prev) => ({
        ...prev,
        error: true,
        showBtn: true,
        message: "Something Went Wrong.. Can Not Create New Week!",
      }));
    }
  };

  const cancel = () => {
    history.goBack();
  };

  const closeModal = () => {
    if (creatingStatus.error) {
      cancel();
      setCreatingStatus((prev) => ({
        ...prev,
        inProgress: false,
        error: false,
        showBtn: false,
        message: "",
      }));
    } else {
      setCreatingStatus((prev) => ({
        inProgress: false,
        showBtn: false,
        message: "",
        refreshPage: !prev.refreshPage,
      }));
    }
  };

  return { creatingStatus, closeModal, cancel, createNewWeek };
};

export default useCreateNewWeek;