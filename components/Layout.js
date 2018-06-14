import Head from 'next/head'
import Menu from './Menu'

const layoutStyle = {
  padding: 20,
  borderTop: '8px solid rgb(95, 75, 139)'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Head>
      <title key="title">Next.js title</title>
    </Head>
    <style jsx global>{`
        body{ margin: 0; }
      `}
    </style>
    <Menu />
    {props.children}
  </div>
)

export default Layout