import CursorColorChanger from "../shared/CursorColorChanger";

export default function AboutPage({ children }) {
  return (
    <div className="outline cursor-none">
      <div className="h-full w-full mx-auto my-8 self-center flex justify-center">
        <div className="flex self-start justify-self-center md:pt-16 ">
          {children}
          <CursorColorChanger />
          </div>
      </div>
    </div>
  );
}
