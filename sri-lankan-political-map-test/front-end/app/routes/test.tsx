import NavBar from "../components/navBar";
import Footer from "../components/footer";
import Form from "../components/form";
export function meta() {
    return [
      { title: "Sri Lankan Political Map Test" },
      {
        property: "og:title",
        content: "Sri Lankan Political Map Test",
      },
      {
        name: "description",
        content: "This app is a political questionnaire",
      },
    ];
  }
  
export default function MyRouteComponent() {
    return (
      <>
        <NavBar/>
        <br/>
        <br/>
        <Form/>
        <Footer/>
      </>
    );
  }
