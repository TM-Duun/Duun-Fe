import Counsel from "../Pages/Counsel/Counsel";
import Faq from "../Pages/FAQ/Faq";
import Likes from "../Pages/Likes/Likes";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import LoginComplete from "../Pages/Login/LoginComplete";
import MyPage from "../Pages/MyPage/MyPage";
import SignUp1 from "../Pages/SignUp/SignUp1";
import SignUp2 from "../Pages/SignUp/SignUp2";
import SignUp3 from "../Pages/SignUp/SignUp3";
import SignUpComplete from "../Pages/SignUp/SignUpComplete";
import Cart from "../Pages/Cart/Cart";
import Category from "../Pages/Category/Category";
import Payment from "../Pages/Payment/Payment";
import MyReview from "../Pages/MyReview/MyReview";
import Order from "../Pages/Order/Order";
import Refund from "../Pages/Refund/Refund";
import MyInfo from "../Pages/MyInfo/MyInfo";
import Detail from "../Pages/Detail/Detail";
import Coupon from "../Pages/Coupon/Coupon";

// Router path경로 지정 파일, 필요시 params도 넣을것
export const routers = [
    {
        path:"/",
        Element: <Home />
    },
    {
        path:"/login",
        Element: <Login />
    },
    {
        path:"/LoginComplete",
        Element: <LoginComplete />
    },
    {
        path:"/signup/1",
        Element: <SignUp1 />
    },
    {
        path:"/signup/2",
        Element: <SignUp2 />
    },
    {
        path:"/signup/3",
        Element: <SignUp3 />
    },
    {
        path:"/signUpComplete",
        Element: <SignUpComplete />
    },
    {
        path: "/mypage",
        Element: <MyPage />
    },
    {
        path:"/category",
        Element:<Category />
    },
    {
        path:"/cart",
        Element: <Cart />
    },
    {
        path:"/detail/:index",
        Element: <Detail />
    },
    {
        path: "/likes",
        Element: <Likes />
    },
    {
        path: "/payment",
        Element: <Payment />
    },
    {
        path: "/myreview",
        Element: <MyReview />
    },
    {
        path: "/order",
        Element: <Order />
    },
    {
        path: "/refund",
        Element: <Refund />
    },
    {
        path: "/faq",
        Element: <Faq />
    },
    {
        path: "/counsel",
        Element: <Counsel />
    },
    {
        path: "/myinfo",
        Element: <MyInfo />
    },
    {
        path: "/coupon",
        Element: <Coupon />
    }
]