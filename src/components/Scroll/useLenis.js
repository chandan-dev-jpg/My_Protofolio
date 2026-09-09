import { useContext } from "react";
import { LenisContext } from "./LenisContext";

export const useLenis = () => {
  return useContext(LenisContext);
};