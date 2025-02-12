import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState, useEffect } from "react";
import { useFormData } from "herotofu-react";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: "/bootstrap/css/bootstrap.min.css"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Welcome() {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsxs("div", { style: { zIndex: "1", position: "fixed", right: "15px", top: "100px", background: "white", width: "fit-content", height: "fit-content", padding: "5px 5px 5px 10px", borderRadius: "15px", opacity: "90%" }, children: [
      "Connect with us at ",
      /* @__PURE__ */ jsx("span", { className: "p-1", children: /* @__PURE__ */ jsx("a", { href: "https://web.facebook.com/profile.php?id=61564578416698", target: "_blank", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", fill: "black", className: "bi bi-facebook", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" }) }) }) })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "home", className: "vh-100 overflow-auto d-flex flex-column justify-content-around align-items-center text-light", style: { backgroundImage: "url('./assets/bg-image-1.jpg')", alignContent: "center", paddingTop: "30px" }, children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center bg-secondary bg-opacity-50", children: [
        /* @__PURE__ */ jsx("h1", { className: "mx-auto display-1", style: { alignContent: "center", width: "90%" }, children: /* @__PURE__ */ jsx("strong", { children: "Sri Lankan Political Map Test" }) }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto p-5 fs-2 text-start", style: { width: "90%" }, children: /* @__PURE__ */ jsx("strong", { children: "Sri Lankan Political Map Test is a web-based application designed to help users identify their political alignment based on economic, governance and social factors relevant to the Sri Lankan socio-political context. The application provides insights into where users stand politically, enabling a deeper understanding of political ideologies and their nuances." }) })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "test", target: "_blank", style: { textDecoration: "none" }, children: /* @__PURE__ */ jsx("div", { style: { backgroundImage: "url(assets/pencil.jpeg)", height: "282px", width: "500px", borderRadius: "15px", border: "solid lightyellow" }, children: /* @__PURE__ */ jsx("div", { className: "text-center bg-secondary bg-opacity-50 p-3", style: { borderRadius: "15px" }, children: /* @__PURE__ */ jsx("p", { className: "fs-2 text-light", children: "Take the test" }) }) }) }) })
    ] })
  ] });
}
function NavBar() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("script", { src: "./bootstrap/js/bootstrap.bundle.min.js" }),
    /* @__PURE__ */ jsx("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top bg-opacity-75", style: { paddingTop: "0", paddingBottom: "0" }, children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
      /* @__PURE__ */ jsx(Link, { className: "navbar-brand", to: "#", style: { paddingTop: "0", paddingBottom: "0" }, children: /* @__PURE__ */ jsx("img", { src: "assets/logo.jpeg", height: "40" }) }),
      /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
      /* @__PURE__ */ jsx("div", { className: "collapse navbar-collapse", id: "navbarNav", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav ms-auto", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "#home", children: /* @__PURE__ */ jsx("strong", { children: "Home" }) }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx(Link, { className: "nav-link", to: "#contact", children: /* @__PURE__ */ jsx("strong", { children: "Contact" }) }) })
      ] }) })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { id: "contact", className: "text-center bg-body-tertiary", style: { paddingTop: "15px" }, children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row row-cols-1 row-cols-md-3 g-3", children: [
    /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: "Contact:admin@digitaldemocracy.lk" }) }),
    /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: "© 2024 DigitalDemocracy. All Rights Reserved." }) }),
    /* @__PURE__ */ jsx("div", { className: "col", children: /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: "https://web.facebook.com/profile.php?id=61564578416698", target: "_blank", children: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "25", height: "25", fill: "black", className: "bi bi-facebook", viewBox: "0 0 16 16", children: /* @__PURE__ */ jsx("path", { d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" }) }) }) }) })
  ] }) }) });
}
function meta$1({}) {
  return [{
    title: "Sri Lankan Political Map Test"
  }, {
    name: "description",
    content: "Welcome to Sri Lankan Political Map Test!"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx(Welcome, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function Form() {
  const [data, setData] = useState([{ _id: "1", question: "", answers: [{ _id: "1", answer: "" }] }]);
  const [inputs, setInputs] = useState({ ["string"]: "" });
  const url = "http://localhost:3000";
  const { formState, getFormSubmitHandler } = useFormData(url);
  useEffect(() => {
    fetch(url).then((response) => {
      try {
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        response.json().then((data2) => {
          setData(data2);
        });
      } catch (error) {
        console.log(error);
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    const body = [];
    Object.entries(inputs).forEach(([key, value]) => {
      body.push({ "question_id": key, "answer_id": value });
    });
    console.log(body);
    fetch(`${url}/questionAnswers`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    }).then((result) => result.json()).then((info) => {
      console.log(info);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    !!formState.status && /* @__PURE__ */ jsxs("div", { children: [
      "Current form status is: ",
      formState.status
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
      data.map((q_item) => {
        return /* @__PURE__ */ jsxs("div", { style: { padding: "5px" }, children: [
          /* @__PURE__ */ jsxs("label", { htmlFor: q_item._id, children: [
            `${q_item._id}. ${q_item.question}`,
            /* @__PURE__ */ jsx("br", {}),
            q_item.answers.map((item) => /* @__PURE__ */ jsxs("div", { style: { padding: "5px" }, children: [
              /* @__PURE__ */ jsx("input", { required: true, type: "radio", name: q_item._id, value: item._id, onChange: handleChange, checked: JSON.stringify(inputs) !== "{}" && inputs[q_item._id] === item._id }),
              /* @__PURE__ */ jsx("span", { style: { padding: "5px" }, children: item.answer }),
              /* @__PURE__ */ jsx("br", {})
            ] }))
          ] }),
          /* @__PURE__ */ jsx("br", {})
        ] });
      }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "submit", children: " Submit " }) })
    ] })
  ] });
}
function meta() {
  return [{
    title: "Sri Lankan Political Map Test"
  }, {
    property: "og:title",
    content: "Sri Lankan Political Map Test"
  }, {
    name: "description",
    content: "This app is a political questionnaire"
  }];
}
const test = withComponentProps(function MyRouteComponent() {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx(Form, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: test,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Muopawjd.js", "imports": ["/assets/chunk-D52XG6IA-5MlK6y6A.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CcbPW-LB.js", "imports": ["/assets/chunk-D52XG6IA-5MlK6y6A.js", "/assets/with-props-DV0fwj31.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-BnxhUIw2.js", "imports": ["/assets/with-props-DV0fwj31.js", "/assets/chunk-D52XG6IA-5MlK6y6A.js", "/assets/footer-C0Zn45r5.js"], "css": [] }, "routes/test": { "id": "routes/test", "parentId": "root", "path": "test", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/test-BXrEKmY9.js", "imports": ["/assets/with-props-DV0fwj31.js", "/assets/chunk-D52XG6IA-5MlK6y6A.js", "/assets/footer-C0Zn45r5.js"], "css": [] } }, "url": "/assets/manifest-109fa950.js", "version": "109fa950" };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/test": {
    id: "routes/test",
    parentId: "root",
    path: "test",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
