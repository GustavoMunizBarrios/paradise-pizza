import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />

      <main>
        {/* Outlet is a placeholder component that marks where the router should render the active route component. */}
        <Outlet />
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}
