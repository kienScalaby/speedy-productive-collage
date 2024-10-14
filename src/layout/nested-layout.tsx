import { ReactNode } from "react";

interface NestedLayoutProps {
  children: ReactNode;
}

export default function NestedLayout({ children }: NestedLayoutProps) {
  return (
    <>
      <div>Is Login</div>
      <main>{children}</main>
    </>
  );
}
