import NavBar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UsersManagement from "./components/main/usersManagement";
import Main from "./components/main/";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Main
            render={(props) => {
              return (
                <Route exact path="/">
                  <UsersManagement {...props} />
                </Route>
              );
            }}
          />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
