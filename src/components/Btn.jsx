export default function Btn({children,...props}) {
  return (
    <button className="px=4 py-w text-xs bg-stone-700 text-stone-100 rounded-md p-2 hover:text-red-300" {...props}>
      {children}
    </button>
  );
}
