import dynamic from 'next/dynamic';
import * as React from 'react';
const Layout = dynamic(() => import('../components/module/Layout'));

export default function <%= componentName %>() {
  return (
    <Layout pageTitle="<%= componentName %>">
      <h1><%= componentName %></h1>
    </Layout>
  );
}
 