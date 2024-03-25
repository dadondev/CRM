import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../general/utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../general/utils/theme";
import Header from "../general/components/Header";
import Home from "./Home/Home";
import Footer from "../general/components/Footer";
import Courses from "./Courses/Courses";
import Course from "./Course/Course";
import About from "./About/About";
import Pricing from "./Pricing/Pricing";
import Login from "./Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <main>
            <Outlet></Outlet>
          </main>
          <Footer />
        </ThemeProvider>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <Course />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/singup",
        element: <Login />,
      },
    ],
  },
]);

const StyledRoot = styled.div`
  height: 100%;
  width: 100%;
`;

const Root = () => {
  return (
    <StyledRoot>
      <RouterProvider router={router}></RouterProvider>
    </StyledRoot>
  );
};

export default Root;
