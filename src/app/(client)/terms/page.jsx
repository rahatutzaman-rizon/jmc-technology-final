import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      <p className="mb-6">
        Welcome to JMC Technology LTD! We empower businesses of all sizes with innovative software solutions and customized technology services. By accessing our website or engaging with our products and services, you agree to these Terms & Conditions. Please read them carefully before proceeding.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Intellectual Property</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>All content, including code, trademarks, logos, designs, and materials, are the exclusive property of JMC Technology LTD.</li>
          <li>We grant you a non-exclusive, non-transferable license to use our products and services under these terms.</li>
          <li>Any unauthorized use, modification, reproduction, or distribution is strictly prohibited.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Products & Services</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We offer a range of ready-made software solutions and tailor-made technology services.</li>
          <li>Customized projects require a signed agreement outlining the project scope, timeline, and fees.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Content & Community</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Our website may feature a blog or resources with various articles and opinions. Respectful contributions are welcome, but inappropriate content is prohibited.</li>
          <li>Uploading viruses, malware, or promoting prohibited goods/services is strictly prohibited.</li>
          <li>Respect the copyright and intellectual property rights of others.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Payment & Fees</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We accept various payment methods like credit cards, bank transfers, and checks.</li>
          <li>Advance payments may be required for customized projects.</li>
          <li>Late payments may incur additional fees and potential termination of services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cancellation & Refunds</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Refunds for ready-made software follow the terms of the respective marketplaces.</li>
          <li>Customized projects typically do not offer refunds after 30 days of project initiation unless under exceptional circumstances and agreed upon by both parties.</li>
          <li>Modifications to our code or scripts may void your refund eligibility.</li>
          <li>We reserve the right to cancel your account for breach of terms.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Privacy Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We prioritize your privacy and safeguard your personal information.</li>
          <li>Refer to our separate Privacy Policy for detailed information on data collection and usage.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Disclaimers & Warranties</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We strive to provide reliable products and services but cannot guarantee complete error-free performance.</li>
          <li>We disclaim any warranties regarding suitability, safety, or uninterrupted service.</li>
          <li>Information on this website might contain inaccuracies or be outdated. We reserve the right to update it at any time.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Limitations & Liabilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>JMC Technology LTD will not be liable for any direct, indirect, consequential, or incidental damages arising from the use of our products or services.</li>
          <li>This includes lost profits, business interruptions, or data loss.</li>
          <li>Your use of this website and its content is at your own risk.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
        <p>
          For any questions about these Terms & Conditions, please contact us at{' '}
          <Link href="mailto:hello@jmc.technology" className="text-blue-600 hover:underline">
            hello@jmc.technology
          </Link>
          .
        </p>
      </section>
    </div>
  )
}