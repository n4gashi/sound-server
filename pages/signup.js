import Link from 'next/link';
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <h1>Sign up</h1>
    <Link href="/auth/facebook">
      <a>Sign up with Facebook</a>
    </Link>
  </Layout>
);
