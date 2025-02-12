export default function Footer(){
    return <footer id="contact" className="text-center bg-body-tertiary" style={{paddingTop: "15px"}}>
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-3">
                <div className="col">
                    <p>
                        Contact:admin@digitaldemocracy.lk
                      </p>
                </div>
                <div className="col">
                    <p>
                          &copy; 2024 DigitalDemocracy. All Rights Reserved.
                      </p>
                </div>
                <div className="col">
                    <p>
                        <a href="https://web.facebook.com/profile.php?id=61564578416698" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                          </svg>
                        </a>
                      </p>
                </div>
            </div>
        </div>
    </footer>
}