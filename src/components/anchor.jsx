import Link from 'next/link';

export const Anchor = ({ href, children, ...props }) => {
  return (
    <Link href={href} passHref>
      <a {...props}>{children}</a>
    </Link>
  );
};
