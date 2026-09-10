import UserLayout from "./pages/UserLayout"
import ItemStore from "./components/ItemStore"
import "./App.css"

import { BrowserRouter, Route ,Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />} >
        <Route index element={<ItemStore />} />
          <Route path="/mycart" element={<h1>My Cart</h1>} />
            <Route path="/myorder" element={<h1>My Order</h1>} />
              <Route path="/settings" element={<h1>Settings</h1>} />
                <Route path="/profile" element={<h1>Profile</h1>} />
                <Route path="/logout" element={<h1>Logout</h1>} />
                <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
