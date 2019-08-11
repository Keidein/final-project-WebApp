import Home from "../Components/Home";
import About from "../Components/About";
import Solutions from "../Components/Solutions";
import Developers from "../Components/Developers";
import Login from "../Components/Login";

const routes = {
    "/": () => <Home/>,
    "/About": () => <About/>,
    "/Solutions": () => <Solutions/>,
    "/Developers": () => <Developers/>,
    "/Login": () => <Login/>
}

export default routes;