"use client";

import { ReactNode } from "react";

export const AppContainer = ({ children }: { children: ReactNode }) => (
  <section className="w-[75%] mx-auto">{children}</section>
);
