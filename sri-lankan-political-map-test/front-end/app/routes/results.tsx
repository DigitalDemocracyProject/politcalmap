import type { Route } from "./+types/home";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import CallApi from "../components/callapi";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sri Lankan Political Map Test" },
    { name: "description", content: "Results" },
  ];
}

export default function Results() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(()=>{
    if (location.state?.from?.pathname !== '/test'){
      //console.log(location);
      navigate("/", {replace: true});
    }
  }, [])
  
    return (
    <>
      <NavBar />
      <br/><br/>
      <CallApi/>
      <Footer/>
    </>
    );
}

