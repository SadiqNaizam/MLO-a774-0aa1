import type { Config } from "tailwindcss";
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        // Shadcn UI theme colors, mapped to CSS variables from index.css
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))', // Page background (PRD: #157efb)
				foreground: 'hsl(var(--foreground))', // Text on page background (assumed white)
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Primary actions (PRD: accentBlue #157efb)
					foreground: 'hsl(var(--primary-foreground))', // Text on primary (white)
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))', // Muted text (PRD: secondaryText #878A99)
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))', // Accent color (PRD: accentBlue #157efb)
					foreground: 'hsl(var(--accent-foreground))', // Text on accent (white)
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))', // Popover background (PRD: surface #FFFFFF)
					foreground: 'hsl(var(--popover-foreground))', // Text on popover (PRD: primaryText #212529)
				},
				card: {
					DEFAULT: 'hsl(var(--card))', // Card background (PRD: surface #FFFFFF)
					foreground: 'hsl(var(--card-foreground))', // Text on card (PRD: primaryText #212529)
				},
        // Specific colors from PRD for direct use, as suggested by PRD typography/layout classes
        surface: 'hsl(var(--card))', // For `bg-surface` to use the card's white color, as per PRD layout
        primaryText: '#212529', // PRD: colorPalette.primaryText
        secondaryText: '#878A99', // PRD: colorPalette.secondaryText - for `text-secondaryText`
        accentBlue: '#157efb',    // PRD: colorPalette.accentBlue - for `text-accentBlue` / `bg-accentBlue`
			},
			borderRadius: {
        // Shadcn UI convention, using --radius from CSS
				lg: 'var(--radius)', // effectively 0.375rem, same as 'md' in Tailwind default
				md: 'calc(var(--radius) - 2px)', // default 0.375rem - 2px
				sm: 'calc(var(--radius) - 4px)', // default 0.375rem - 4px
			},
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
