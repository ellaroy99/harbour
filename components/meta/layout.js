import { Nav, Footer } from "."

export const Layout = ({ children, seo, navBlack, navActive }) => (
  <>
    <Nav isBlack={navBlack} seo={seo} active={navActive} />
    <div id="main-content">
      {children}
    </div>
    <Footer />
  </>
)

