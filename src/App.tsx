import React from "react";
import useAuth from "./hooks/useAuth";
import Private from "./components/Private";
import Public from "./components/Public";

const App: React.FC = (): JSX.Element => {
  const { isLogin } = useAuth();

  console.log(isLogin);

  return <>{isLogin ? <Private /> : <Public />}</>;
};

export default App;
