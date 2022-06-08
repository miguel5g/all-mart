export const InputGroup = ({ children, type, placeholder = '' }) => {
  return (
    <label htmlFor="email" className="text-gray-800 flex flex-col">
      <span className="flex gap-1 items-center mb-1">{children}</span>
      <input
        className="bg-zinc-100 rounded-md focus:outline-none p-2 pb-1.5"
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};
