import Link from 'next/link';
const styledLink = { marginRight: 15 };

export default () => (
  <div>
    <Link href="/login">
      <a style={styledLink}>Login</a>
    </Link>
    <Link href="/signup">
      <a style={styledLink}>Sign up</a>
    </Link>
  </div>
);