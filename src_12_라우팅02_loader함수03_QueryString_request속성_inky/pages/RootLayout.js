import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/products">Products</Link><br/>
        <Link to="/users">Users</Link><br/>
        <Link to="/users/2">Users/2</Link><br/>
        <Link to="/users2?page=2">users2?page=2</Link><br/>
      </div>
      <hr/>
      {/* all the other elements */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}