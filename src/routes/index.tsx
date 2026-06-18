import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";

const NavigationRoutes = () => {
  const [user, setUser] = useState(undefined);

  const Routes = useCallback(() => {
    return user ? <PrivateRoutes /> : <PublicRoutes />;
  }, []);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default NavigationRoutes;
