"use client";

import { Toaster } from "react-hot-toast";
import { PlanProvider } from "@/context/PlanContext";

export default function Providers({ children }) {
  return (
    <PlanProvider>
      {children}
      <Toaster
        position="top-right"
        // Sit below the sticky navbar so toasts don't cover the Plan/Saved badges.
        containerStyle={{ top: 96 }}
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
