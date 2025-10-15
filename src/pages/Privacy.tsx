import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-secondary/20 pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <div className="space-y-8 text-foreground">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At Clinic Hub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dental practice management software.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Information We Collect</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Account information (name, email, phone number)</li>
                    <li>Practice information (practice name, address, specialty)</li>
                    <li>Patient data (as entered by you for practice management)</li>
                    <li>Payment information (processed securely through third-party payment processors)</li>
                    <li>Usage data and analytics</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send administrative messages and updates</li>
                    <li>Respond to your comments and questions</li>
                    <li>Analyze usage patterns to improve user experience</li>
                    <li>Detect and prevent fraud and abuse</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>AES-256 encryption for data at rest</li>
                    <li>TLS/SSL encryption for data in transit</li>
                    <li>Role-based access control (RBAC)</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Daily automated backups</li>
                    <li>Secure data centers with physical security</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">WhatsApp Communications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Clinic Hub allows your staff to send WhatsApp messages manually to patients for appointment reminders and notifications. By using our service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>You agree to obtain proper consent from patients before sending them WhatsApp messages</li>
                    <li>You acknowledge that WhatsApp's own privacy policies apply to these communications</li>
                    <li>You are responsible for the content of messages sent through our platform</li>
                    <li>Patients can opt out of WhatsApp communications at any time</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Data Sharing</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>With your explicit consent</li>
                    <li>With service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Access your personal data</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Export your data</li>
                    <li>Withdraw consent at any time</li>
                    <li>Lodge a complaint with supervisory authorities</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Data Retention</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your data for as long as your account is active or as needed to provide services. After account termination, we retain data for 30 days to allow for account recovery, after which it is permanently deleted unless legal obligations require longer retention.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Clinic Hub is not intended for use by children under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Changes to This Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by email or through a prominent notice in our application. Your continued use of Clinic Hub after such changes constitutes acceptance of the updated policy.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="pl-4 space-y-1 text-muted-foreground">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:HassanKashakesh313@gmail.com"
                        className="text-primary underline underline-offset-2"
                      >
                        HassanKashakesh313@gmail.com
                      </a>
                    </p>
                    <p>Address: ClinicHub, Beirut, Lebanon</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-8">
                  <p className="text-sm text-muted-foreground">
                    This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect except with respect to any changes in its provisions in the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
