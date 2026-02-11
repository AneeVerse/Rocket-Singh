import FastTrackClient from "./FastTrackClient";

export const metadata = {
  title: "Fast Track Immigration (FTI-TTP)",
  description: "Skip the queues with Fast Track Immigration (FTI-TTP). Trusted Traveller Program for Indian nationals and OCI cardholders at all India airports.",
  alternates: {
    canonical: '/fasttrack',
  },
  openGraph: {
    title: 'Fast Track Immigration (FTI-TTP) | Trusted Traveller Program',
    description: 'Skip the queues and enjoy seamless immigration clearance at all India airports.',
    url: 'https://www.urgentpassportvisa.com/fasttrack',
    type: 'article',
  },
};

export default function FastTrackPage() {
  return <FastTrackClient />;
}
