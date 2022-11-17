import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContaniner } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContaniner>
      <Header />
      <Outlet />
    </LayoutContaniner>
  );
}
