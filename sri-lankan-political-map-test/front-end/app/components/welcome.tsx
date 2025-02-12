export function Welcome() {
  return (
    <main>
    <div style={{zIndex: "1", position: "fixed", right:"15px", top:"100px", background: "white", width:"fit-content", height: "fit-content", padding:"5px 5px 5px 10px", borderRadius: "15px", opacity:"90%"}}>Connect with us at <span className="p-1"><a href="https://web.facebook.com/profile.php?id=61564578416698" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
      </svg></a></span></div>
    <section id="home" className="vh-100 overflow-auto d-flex flex-column justify-content-around align-items-center text-light" style={{backgroundImage: "url('./assets/bg-image-1.jpg')", alignContent: "center", paddingTop:"30px"}}>
        <div className = "text-center bg-secondary bg-opacity-50">
                <h1 className="mx-auto display-1" style={{alignContent: "center", width: "90%"}}><strong>Sri Lankan Political Map Test</strong></h1>
                <p className="mx-auto p-5 fs-2 text-start" style={{width: "90%"}}><strong>Sri Lankan Political Map Test is a web-based application designed to help users identify their political alignment based on economic, governance and social factors relevant to the Sri Lankan socio-political context. The application provides insights into where users stand politically, enabling a deeper understanding of political ideologies and their nuances.</strong></p>
        </div>
        <div>
            <a href="test" target="_blank" style={{textDecoration:"none"}}>
                <div style={{backgroundImage: "url(assets/pencil.jpeg)", height: "282px", width:"500px", borderRadius: "15px", border:"solid lightyellow"}}><div className = "text-center bg-secondary bg-opacity-50 p-3" style={{borderRadius: "15px"}}><p className="fs-2 text-light">Take the test</p></div></div>
            </a>
        </div>        
    </section>
    </main>
  );
}