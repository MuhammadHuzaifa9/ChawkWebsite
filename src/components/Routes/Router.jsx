import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Product from "../../pages/Product";

export const router=[
    {path:'/',
        element:<Home/>
    },
    {path:'/Home',
        element:<Home/>
    },
    {path:'/Products',
        element:<Product/>
    },
    {path:'/Contact',
        element:<Contact/>
    },
    {path:'*',
        element:"Error 404!"
    }


] 