"use client";

import { ReactNode } from "react";

export const AppContainer = ({ children }: { children: ReactNode }) => (
  <section className="w-11/12 md:w-10/12 mx-auto lg:max-w-screen-xl">{children}</section>
);
