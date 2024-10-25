import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import CategoryProducts from "../../pages/CategoryProducts";
import Search from "../../pages/Search";

export const router=[
    {path:'/',
        element:<Home/>
    },
    {path:'/Home',
        element:<Home/>
    },
    {path:'/Home/:category',
        element:<CategoryProducts/>

    },
    {path:'/Products',
        element:<Product/>
    },
    {path:'/Contact',
        element:<Contact/>
    },
    {path:'/Search',
        element:<Search/>
    },
    {path:'*',
        element:"Error 404!"
    }


] 