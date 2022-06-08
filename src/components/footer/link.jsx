export const Link = ({ children, ...props }) => {
  return (
    <a
      className="mx-2 text-sm text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
      {...props}
    >
      {children}
    </a>
  );
};
