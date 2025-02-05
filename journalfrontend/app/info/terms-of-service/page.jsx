import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Terms of Service</CardTitle>
          <p className="text-muted-foreground text-center mt-2">Last Updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p className="text-lg">
                Welcome to Journal App (&quot;the App&quot;). By accessing or using the App, you agree to be bound by these Terms
                of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
              </p>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">1. Use of the App</h2>
                <p>The App is provided on an &quot;as-is&quot; and &quot;as-available&quot; basis for personal use only.</p>
                <p>You are responsible for maintaining the security of your account and data.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">2. Data Storage and Loss</h2>
                <p>
                  While we take reasonable measures to safeguard user data, we do not guarantee the preservation or
                  security of any data stored in the App.
                </p>
                <p>
                  You acknowledge that any data entered into the App is done at your own risk, and we are not
                  responsible for any data loss, corruption, or unauthorized access.
                </p>
                <p>We strongly recommend that you keep your own backups of important journal entries.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">3. Limitation of Liability</h2>
                <p className="uppercase">
                  To the maximum extent permitted by law, we are not liable for any damages, including but not limited
                  to loss of data, loss of profits, or any other consequential damages arising from your use of the app.
                </p>
                <p className="uppercase">You expressly agree that your use of the app is at your sole risk.</p>
                <p className="uppercase">
                  Under no circumstances shall we be liable for any direct, indirect, incidental, special, or
                  consequential damages arising out of or in connection with the use of the app.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">4. No Warranties</h2>
                <p className="uppercase">
                  The app is provided &quot;as is,&quot; without any warranties of any kind, express or implied, including but not
                  limited to warranties of merchantability or fitness for a particular purpose.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">5. User Responsibilities</h2>
                <p>You agree not to use the App for any illegal or unauthorized purposes.</p>
                <p>
                  You are responsible for ensuring that your use of the App complies with all applicable laws and
                  regulations.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">6. Modifications to the Terms</h2>
                <p>
                  We reserve the right to modify or update these Terms at any time. Continued use of the App after
                  changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">7. Termination</h2>
                <p>
                  We may terminate or suspend your access to the App at our discretion, without prior notice, for any
                  violation of these Terms.
                </p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold">8. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of California, without regard to its conflict of law principles.
                </p>
              </section>

              <section className="mt-8 mb-8">
                <h2 className="text-2xl font-semibold">9. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at support@journalapp.com</p>
              </section>
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}