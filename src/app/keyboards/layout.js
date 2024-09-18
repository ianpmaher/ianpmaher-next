import CursorColorChanger from "../shared/CursorColorChanger";

export default function KeyboardLayout({ children }) {
  return (
    <div className="h-full w-full mx-auto my-8 self-center flex justify-center bg-bottom bg-fixed">
      <div className="cursor-none">
      <CursorColorChanger />

      <div className="flex self-start justify-self-center md:pt-16 ">{children}</div>
      </div>
    </div>
  );
}
