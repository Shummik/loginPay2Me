import React from "react";
import Footer from "./components/Footer/Footer";
import Layout from "./components/Layout/Layout";
import LogForm from "./pages/LogForm/LogForm";

function App() {
  return (
    <>
      <Layout>
        <LogForm />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
