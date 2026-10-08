// Canonical production URL — change this when you deploy your own copy.
const productionUrl = "https://multidash-app.vercel.app"

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_ENV === "production") return productionUrl
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  return "http://localhost:3000"
}

export const siteConfig = {
  name: "Multidash",
  title: "Multidash — Free Next.js Admin Dashboard Template",
  description:
    "Free & open-source admin dashboard template built with Next.js, React and Tailwind CSS.",
  url: resolveSiteUrl(),
  keywords: [
    "Next.js dashboard",
    "admin dashboard template",
    "React admin",
    "Tailwind CSS dashboard",
    "shadcn/ui",
    "open source dashboard",
  ],
  links: {
    demo: productionUrl,
    github: "https://github.com/hasraltechno/multidash",
    // Replace with your checkout page (Polar.sh, Lemon Squeezy, Gumroad, ...).
    pro: "https://github.com/hasraltechno/multidash#-multidash-pro",
  },
}
