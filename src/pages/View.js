import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Button, Icon, Block } from "../components/Component";
import Content from "../layout/content/Content";
import Head from "../layout/head/Head";
import LogoDark from "../images/logo-dark2x.png";
import { invoiceData } from "./pre-built/invoice/Invoice";

const Online = () => {
  // State Management
  const [data] = useState(invoiceData);
  const [user, setUser] = useState();
  const [iframeSrc, setIframeSrc] = useState('');

  // Router Hooks
  let { invoiceId } = useParams();
  const location = useLocation();

  // URL Parameter Handling
  useEffect(() => {
    const getUrlParameter = (name) => {
      const params = new URLSearchParams(location.search);
      return params.get(name);
    };

    const page = getUrlParameter('page');
    const web = getUrlParameter('web');

    if (page && web) {
      setIframeSrc(`https://${web}.mypancho.com${page}`);
    } else if (page) {
      setIframeSrc(`https://mypancho.com${page}`);
    } else if (web) {
      setIframeSrc(`https://${web}.mypancho.com`);
    } else {
      setIframeSrc('https://cms.mypancho.com'); // Default URL if no parameters provided
    }
  }, [location]);

  // User Data Handling
  useEffect(() => {
    const id = invoiceId;
    if (id !== undefined && id !== null && id !== "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [invoiceId, data]);

  // Render
  return (
    <div className="bg-white">
      <Head title="Mypancho.com"></Head>
      {user && (
        <Content>
          <div style={{ height: 'calc(100vh - 0px)', overflow: 'hidden' }}>
            <iframe
              id="fullscreen-iframe"
              src={iframeSrc}
              title="Dynamic Content"
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

export default Online;