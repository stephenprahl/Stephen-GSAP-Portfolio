import { Analytics } from "@vercel/analytics/react";

// Renders Vercel Analytics only in production
const VercelAnalytics = () => {
  if (import.meta.env.MODE !== "production") return null;
  return <Analytics />;
};

export default VercelAnalytics;
