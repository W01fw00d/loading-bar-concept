import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoading } from "./isLoadingSlice";
import styles from "./Content.module.css";

export function LoadingBar() {
  console.log("LoadingBar Renders");
  const isLoading = useSelector(selectIsLoading);

  return (
    <span className={styles.value}>
      {isLoading ? "IS LOADING" : "IS NOT LOADING"}
    </span>
  );
}
