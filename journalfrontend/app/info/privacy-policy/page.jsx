import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield } from "lucide-react"
import DateFactory from "@/app/utils/DateFactory"

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Privacy Policy</CardTitle>
          <p className="text-muted-foreground text-center mt-2">Last Updated: {DateFactory.getTodayDate().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <Alert className="mb-8">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your
                  personal information when you use Journal App (&quot;the App&quot;).
                </AlertDescription>
              </Alert>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Personal Information</h3>
                    <p>
                      When you create an account, we may collect your name, email address, and other identifying
                      information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Journal Entries</h3>
                    <p>
                      Your journal entries are stored securely but are not encrypted end-to-end. We recommend keeping
                      backups of important entries.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Usage Data</h3>
                    <p>
                      We may collect anonymous data about how you use the App, such as logins, features accessed, and
                      device information.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To provide and improve the App&apos;s functionality.</li>
                  <li>To personalize your experience.</li>
                  <li>To troubleshoot issues and improve security.</li>
                  <li>To send optional updates or service-related notifications.</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">3. Data Sharing and Security</h2>
                <div className="space-y-4">
                  <p>We do not sell or share your personal data with third parties for marketing purposes.</p>
                  <p>Your data is stored securely, but we cannot guarantee absolute security.</p>
                  <p>We may disclose information if required by law or to protect our legal rights.</p>
                </div>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">4. Third-Party Services</h2>
                <p>
                  The App may use third-party services (such as cloud storage or analytics providers) that have their
                  own privacy policies.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">5. Data Retention</h2>
                <p>
                  We retain your personal data as long as your account is active. If you delete your account, we will
                  remove your data within a reasonable timeframe.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">6. Your Rights</h2>
                <p>
                  You may request access to, modification of, or deletion of your data by contacting us at{" "}
                  <a href="mailto:support@journalapp.com" className="text-primary hover:underline">
                    support@journalapp.com
                  </a>
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">7. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Continued use of the App after changes
                  constitutes acceptance of the new policy.
                </p>
              </section>

              <section className="mt-8 mb-8">
                <h2 className="text-2xl font-semibold">8. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at{" "}
                  <a href="mailto:support@journalapp.com" className="text-primary hover:underline">
                    support@journalapp.com
                  </a>
                </p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}

