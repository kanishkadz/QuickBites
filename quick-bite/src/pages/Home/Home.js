import React from 'react';
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';


function Home() {
  return (
    <>
      <Layout>
        {/* hero banner */}
        <Section1 />

        {/* hero about */}
        <Section2 />
      </Layout>
    </>
  )
}

export default Home