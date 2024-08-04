import React from "react";

function ToursLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-2xl bg-blue-500 text-center w-1/2 rounded">
        Tours Layout
      </h1>
      {children}
    </div>
  );
}
export default ToursLayout;
