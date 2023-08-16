"use client";

import { AppContainer, Blog, HeaderNav, Hero } from "@/components";

export default function Home() {
  return (
    <AppContainer>
      <HeaderNav />
      <Hero />
      <Blog />
    </AppContainer>
  );
}
