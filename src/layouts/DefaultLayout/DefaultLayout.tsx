import React from "react";

interface Props {
  children: React.ReactNode;
}

function DefaultLayout({ children }: Props) {
  return (
    <div>
      <div className="">HEADER</div>
      {children}
      <div className="">FOOTER</div>
    </div>
  );
}

export default DefaultLayout;
