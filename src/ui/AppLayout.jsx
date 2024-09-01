import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        {/* Outlet is a placeholder component that marks where the router should render the active route component. */}
        <Outlet />
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}
