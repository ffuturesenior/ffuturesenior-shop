import AddProduct from "../pages/AddProduct";
import BascketPage from "../pages/BasketPage";
import LoginPage from "../pages/LoginPage";
import Main from "../pages/Main";
import ProductInfo from "../pages/ProductInfo";
import ProductPage from "../pages/ProductPage";
import RedactProfilePage from "../pages/RedactProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import SellStats from "../pages/SellStats";
import UserProfile from "../pages/UserProfile";


export const authRoutes=[
    {path:'/',Component:Main},
    {path:'/AddProduct',Component:AddProduct},
    {path:'/BasketPage',Component:BascketPage},
    {path:'/LoginPage',Component:LoginPage},
    {path:'/ProductInfo/:id',Component:ProductInfo},
    {path:'/ProductPage/:id&:userId',Component:ProductPage},
    {path:'/RedactProfilePage',Component:RedactProfilePage},
    {path:'/RegistrationPage',Component:RegistrationPage},
    {path:'/SellStats/:id',Component:SellStats},
    {path:'/UserProfilePage/:id',Component:UserProfile},
]


export const publicRoutes=[
    {path:'/',Component:Main},
    {path:'/RegistrationPage',Component:RegistrationPage},
    {path:'/LoginPage',Component:LoginPage},
]