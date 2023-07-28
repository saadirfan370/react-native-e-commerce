
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  const navigation = useNavigation();
  const { userInfo } = useSelector((state) => state.signIn);

  // console.log(userInfo,"asas");


  return userInfo && userInfo  ? children : navigation.navigate("Login");
};

export default UserRoute;
