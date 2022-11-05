import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/module/Layout'))

export default function T() {
  return (
    <Layout pageTitle="T">
      <h1>T</h1>
    </Layout>
  )
}
