import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setAppliedQuery } from "../app/features/search/searchSlice";

export const useInput = (searchQuery: string) => {
  const dispatch = useDispatch();

  let timerRef: React.MutableRefObject<any> = useRef(null);

  React.useEffect(() => {
    const delay = 1000;

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      dispatch(setAppliedQuery(searchQuery));
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [searchQuery, dispatch]);
}