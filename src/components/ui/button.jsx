export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
