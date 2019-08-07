import Home from "../Components/Home";
import About from "../Components/About";
import Solutions from "../Components/Solutions";
import Developers from "../Components/Developers";

const routes = {
    "/": () => <Home/>,
    "/About": () => <About/>,
    "/Solutions": () => <Solutions/>,
    "/Developers": () => <Developers/>
}

export default routes;