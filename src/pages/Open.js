import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Head from "../layout/head/Head";
import Content from "../layout/content/Content";

const Open = () => {
  // State Management
  const [iframeSrc, setIframeSrc] = useState('');

  // Router Hooks
  const location = useLocation();

  // URL Parameter Handling
  useEffect(() => {
    const getUrlParameter = (name) => {
      const params = new URLSearchParams(location.search);
      return params.get(name);
    };

    const page = getUrlParameter('page');

    if (page) {
      setIframeSrc(`https://mypancho.com/${page}`);
    } else {
      setIframeSrc('https://mypancho.com/cms'); // Default URL if no page provided
    }
  }, [location]);

  // Iframe Height Adjustment
  useEffect(() => {
    function adjustFrameHeight() {
      const iframe = document.getElementById('fullscreen-iframe');
      if (iframe && iframe.contentWindow) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      }
    }

    window.addEventListener('load', adjustFrameHeight);
    window.addEventListener('resize', adjustFrameHeight);

    return () => {
      window.removeEventListener('load', adjustFrameHeight);
      window.removeEventListener('resize', adjustFrameHeight);
    };
  }, []);

  // Render
  return (
    <React.Fragment>
      <Head title="Client Area" />
      <Content>
        <div style={{ height: '100vh', overflow: 'hidden' }}>
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
    </React.Fragment>
  );
};

export default Open;