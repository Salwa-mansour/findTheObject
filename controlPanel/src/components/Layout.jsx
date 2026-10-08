import { Outlet } from "react-router"

function Layout() {
  return (
    <main>
        <Outlet></Outlet>
    </main>
  )
}

export default Layout