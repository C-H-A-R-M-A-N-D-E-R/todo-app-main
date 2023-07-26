/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      p: {
        bb: "hsl(220, 98%, 61%)",
        b: "hsl(280, 87%, 65%)",
        b2: "hsl(228, 45%, 44%)",
        p: "hsl(192, 100%, 67%)",
        t: "transparent",
      },
      lt: {
        vlg: "hsl(0, 0%, 98%)",
        vlgb: "hsl(236, 33%, 92%)",
        lgb: "hsl(233, 11%, 84%)",
        dgb: "hsl(236, 9%, 61%)",
        vdgb: "hsl(235, 19%, 35%)",
      },
      dt: {
        vdb: "hsl(235, 21%, 11%)",
        vddb: "hsl(235, 24%, 19%)",
        lgb: "hsl(234, 39%, 85%)",
        lgb2: "hsl(236, 33%, 92%)",
        dgb: "hsl(234, 11%, 52%)",
        vdgb: "hsl(233, 14%, 35%)",
        vdgb2: "hsl(237, 14%, 26%)",
      },
    },
    extend: {},
  },
  plugins: [],
};
