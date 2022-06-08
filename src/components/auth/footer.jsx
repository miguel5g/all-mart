import Link from 'next/link';

export const Footer = (props) => {
  const { content, enter } = props;
  return (
    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
      <span className="text-sm text-gray-600 dark:text-gray-200">{content}</span>

      <Link href="/" passHref>
        <a className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">
          {enter}
        </a>
      </Link>
    </div>
  );
};
