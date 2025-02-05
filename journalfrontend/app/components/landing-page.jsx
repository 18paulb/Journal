import Link from "next/link";
import {
  ArrowRight,
  ImageIcon,
  Lock,
  Mic,
  Pencil,
  Shield,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="min-h-screen bg-background">
        <section className="px-4 py-8 md:py-16 lg:py-24 overflow-hidden">
          <div className="container max-w-6xl flex flex-col items-center text-center space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-in slide-in-from-bottom duration-500">
              Your Digital Safe Space for
              <span className="relative">
                <span className="bg-gradient-to-r from-rose-400/90 via-sky-400/90 to-violet-400/90 bg-clip-text text-transparent">
                  {" "}
                  Personal Reflection
                </span>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-in slide-in-from-bottom duration-500 delay-150">
              Capture your thoughts, memories, and experiences with text,
              images, and audio. Your private digital journal for life&apos;s
              precious moments.
            </p>
            <Button
              size="lg"
              asChild
              className="animate-in slide-in-from-bottom duration-500 delay-300 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              <Link href="/api/auth/login" passHref>
                Start Your Journal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container max-w-6xl px-4 py-8 md:py-16 lg:py-24 border-t">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
            Express Yourself Your Way
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <feature.icon className="w-10 h-10 text-primary mb-2 transition-transform group-hover:scale-110" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Privacy Section */}
        <section className="border-t">
          <div className="container max-w-6xl px-4 py-8 md:py-16 lg:py-24">
            <div className="text-center mb-8">
              <Lock className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
                Your Privacy Comes First
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We believe your personal thoughts should remain personal.
                That&apos;s why we&apos;ve built Journify with privacy and
                security at its core.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {privacyCards.map((card, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary/10 mb-2 transition-transform group-hover:scale-110">
                      <card.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
              <Card className="md:col-span-2 lg:col-span-3 transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Start Your Journey Today
                  </CardTitle>
                  <CardDescription className="text-base">
                    Get started with our free plan and unlock your journaling
                    potential
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {freeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <p className="text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full mt-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
                    asChild
                  >
                    <Link href="/api/auth/login" passHref>
                      Create Free Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Pencil,
    title: "Rich Text Entries",
    description:
      "Write and format your thoughts with our intuitive editor. Add headings, lists, and more.",
  },
  {
    icon: ImageIcon,
    title: "Photo Memories",
    description:
      "Upload and attach photos to your entries. A picture is worth a thousand words.",
  },
  {
    icon: Mic,
    title: "Voice Notes",
    description: "Record audio messages when you prefer speaking over typing.",
  },
];

const privacyCards = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "Your entries are encrypted before they leave your device, ensuring complete privacy.",
  },
  {
    icon: Shield,
    title: "Secure Backup",
    description:
      "Automatic cloud backups keep your memories safe without compromising security.",
  },
  {
    icon: Users,
    title: "Controlled Sharing",
    description:
      "Choose what to share and with whom. Keep private entries private.",
  },
];

const freeFeatures = [
  "Unlimited text entries",
  "Up to 100 photos per month",
  "10 hours of voice recording",
  "Basic text formatting",
];
