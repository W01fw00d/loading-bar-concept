import React from "react";
import { useDispatch } from "react-redux";
import { on, off, offAsync } from "./isLoadingSlice";

import styles from "./Content.module.css";

export function Content() {
  console.log("Content Renders");
  const dispatch = useDispatch();

  return (
    <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="On"
        onClick={() => {
          dispatch(on());
          dispatch(offAsync());
        }}
      >
        Send request
      </button>

      <button
        className={styles.button}
        aria-label="Off"
        onClick={() => dispatch(off())}
      >
        Cancel request
      </button>
    </div>
  );
}
