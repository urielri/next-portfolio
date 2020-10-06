import React, { useEffect, useState } from "react";

export const tema = {
  claro: {
    background: "#fff",
    color: "#404040",
  },
  oscuro: {
    background: "#404040",
    color: "#fff",
  },
};
//#0074FF
export const temaContext = React.createContext(tema.claro);
export const useTema = () => React.useContext(temaContext);
export const useChangeTema = (change: boolean) => {
  const [tem, setTema] = useState(tema.claro);
  useEffect(()=>{
    setTema(change ? tema.claro : tema.oscuro);
  }, [change])
  return tem;
};
export const TemaProvider = temaContext.Provider;
