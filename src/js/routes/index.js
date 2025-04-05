import Home from "@containers/Home/Home"
import Landing from "../containers/Home/Landing"
import HomePage from "../containers/Home/Homepage"
import Lawyers from "../containers/Home/Lawyers"
import Services from "../containers/Home/Services"
import Contact from "../containers/Home/Contact"

const routes = [
    {
        path: "/",
        end: true,
        component: Home,
    },
    {
        path: "/landing",
        end: true,  
        component: Landing,
    },
    {
        path: "/homepage",
        end: true,
        component: HomePage,
    },
    {
        path: "/lawyers",
        end: true,
        component: Lawyers,
    },
    {
        path: "/services",
        end: true,
        component: Services,
    },
    {
        path: "/contact",
        end: true,
        component: Contact,
    }
]

export default routes
