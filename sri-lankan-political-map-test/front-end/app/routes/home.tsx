import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sri Lankan Political Map Test" },
    { name: "description", content: "Welcome to Sri Lankan Political Map Test!" },
  ];
}

export default function Home() {
  return <>
    <NavBar />
    <Welcome />
    <Footer/>
  </>;
}
