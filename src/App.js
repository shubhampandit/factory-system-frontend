import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import OrderList from "./pages/orderList/OrderList";
import CreateOrder from "./pages/createOrder/CreateOrder";
import OrderDetails from "./pages/orderDetails/OrderDetails";
import LoginPage from "./pages/login/LoginPage";
import AuthService from "./service/AuthService";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import UserHome from "./pages/home/UserHome";
import UnauthorizedPage from "./pages/unauthorized/UnauthorizedPage";
import CreateCompanyPage from "./pages/createCompany/CreateCompanyPage";
import CompanyDetails from "./pages/companyDetails/CompanyDetails";
import CreateProductPage from "./pages/createProduct/CreateProductPage";
import ProductDetails from "./pages/productDetails/ProductDetails";
import TaskDetailsPage from "./pages/taskDetails/TaskDetailsPage";
import DashboardLayout from "./components/layout/DashboardLayout";

const initialUser = AuthService.getCurrentUser();
const intitialIsAdminValue = () =>
  initialUser && initialUser.role === "ROLE_ADMIN";

function App() {
  const [currentUser, setCurrentUser] = useState(initialUser);
  const [isAdmin, setIsAdmin] = useState(intitialIsAdminValue);
  const [isLoginScreen, setLoginScreen] = useState(false);
  const history = useHistory();

  const handleLogin = (username, password) => {
    AuthService.login(username, password)
      .then(() => {
        let user = AuthService.getCurrentUser();

        if (user) {
          setCurrentUser(user);
          setIsAdmin(user.role === "ROLE_ADMIN");
          setLoginScreen(false);
          user.role === "ROLE_ADMIN"
            ? history.push("/")
            : history.push("/userHome");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <>
      <Topbar isLogin={isLoginScreen} handleLogout={handleLogout} />
      <div className="appContainer">
        {!isLoginScreen && <Sidebar isAdmin={isAdmin} />}
        <Switch>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/userHome"
            component={UserHome}
            user={currentUser}
            currentUser={currentUser}
          />
          <PrivateRoute
            path="/orders"
            component={OrderList}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/createOrder"
            component={CreateOrder}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/createCompany"
            component={CreateCompanyPage}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/companyDetails/:companyId"
            component={CompanyDetails}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/createProduct"
            component={CreateProductPage}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/productDetails/:productId"
            component={ProductDetails}
            user={currentUser}
            adminOnly
          />
          <PrivateRoute
            path="/taskDetails/:taskId"
            component={TaskDetailsPage}
            user={currentUser}
          />
          <Route
            path="/order/:orderId"
            render={(props) => <OrderDetails {...props} />}
          />
          <Route
            path="/login"
            render={(props) => (
              <LoginPage
                setLogin={setLoginScreen}
                handleLogin={handleLogin}
                {...props}
              />
            )}
          />
          <Route
            path="/unauthorized"
            render={(props) => <UnauthorizedPage {...props} />}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
