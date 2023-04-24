// tailwind.config.js
// import daisyui from "daisyui";

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [daisyui],
//   daisyui: {
//     themes: [
//       "light",
//       {
//         black: {
//           primary: "rgb(29, 155, 240)",
//           secondary: "rgb(24, 24, 24)",
//         },
//       },
//     ],
//   },
// };



// // here
// import daisyui from "daisyui";
// import daisyUIThemes from "daisyui/src/theming/themes";
// /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [daisyui],

// 	daisyui: {
// 		themes: [
// 			"light",
// 			{
// 				black: {
// 					...daisyUIThemes["black"],
// 					primary: "rgb(29, 155, 240)",
// 					secondary: "rgb(24, 24, 24)",
// 				},
// 			},
// 		],
// 	},
// };


// tailwind.config.ts
import daisyui from 'daisyui';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const daisyUIThemes = require('daisyui/src/theming/themes');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light',
      {
        black: {
          ...daisyUIThemes['black'],
          primary: 'rgb(29, 155, 240)',
          secondary: 'rgb(24, 24, 24)',
        },
      },
    ],
  },
  plugins: [daisyui],
};
