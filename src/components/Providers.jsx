"use client";

import { Toaster } from "react-hot-toast";
import { PlanProvider } from "@/context/PlanContext";

export default function Providers({ children }) {
  return (
    <PlanProvider>
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#15171d",
            color: "#fff",
            border: "1px solid #222630",
            fontSize: "14px",
          },
          success: { iconTheme: { primary: "#c2f800", secondary: "#000" } },
        }}
      />
    </PlanProvider>
  );
}
