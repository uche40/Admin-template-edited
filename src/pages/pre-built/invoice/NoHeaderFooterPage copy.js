import React, { useState, useEffect } from "react";
import { Button, Icon, Block } from "../../../components/Component";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/logo-dark2x.png";
import { invoiceData } from "./Invoice";
import { useParams } from "react-router-dom";

const NoHeaderFooterPage = () => {
  const [data] = useState(invoiceData);
  const [user, setUser] = useState();

  let { invoiceId } = useParams();

  // useEffect(() => {
  //   setTimeout(() => window.print(), 500);
  // }, []);

  useEffect(() => {
    const id = invoiceId;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [invoiceId, data]);

  return (
    <div className="bg-white">
      <Head title="Invoice Print"></Head>
      {user && (
     <Content>
     <div style={{ height: 'calc(100vh - 0px)', overflow: 'hidden' }}>
       <iframe
         id="fullscreen-iframe"
         src="https://mypancho.com/cms"
         width="100%"
         style={{
           height: '100%',
           border: 'none',
           overflow: 'scroll',
           scrollbarWidth: 'thin', // For Firefox
           msOverflowStyle: 'none' // For Internet Explorer and Edge
         }}
       />
     </div>
   </Content>
      )}
    </div>
  );
};

export default NoHeaderFooterPage;
