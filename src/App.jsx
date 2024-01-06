import {
  Hero,
  Follow,
  Footer,
  Popularbikes,
  Services,
  Specialoffer,
  Institute,
} from "./sections";
import Nav from "./components/Nav";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <main className="relative bg-blue-50">
              <Nav />
              <section className="xl:padding-1 wide:padding-r padding-b ">
                <Hero className="bg-blue-50" />
              </section>

              <section className="padding bg-blue-50">
                <Popularbikes />
              </section>
              <section className="padding bg-blue-50 ">
                <Services />
                {/* </section>
  <section className="padding">
    <Specialoffer/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Follow/> */}
              </section>
              <section className="padding-x padding-t pb-8 bg-black text-blue-200">
                <Footer />
              </section>
              {/* <section>
                <Institute />
              </section> */}
            </main>
          }
        />

        <Route path="institute" element={<Institute />} />
        <Route path="services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
