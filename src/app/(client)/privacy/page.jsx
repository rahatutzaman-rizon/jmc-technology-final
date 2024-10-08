import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">
        Embarking on a Secure Digital Voyage: JMC Technology LTD&apos;s Privacy Policy
      </p>
      <p className="mb-6">
        At JMC Technology LTD, we believe in navigating the digital seas with transparency and trust. Your data is your anchor, and we&apos;re committed to protecting it while ensuring a smooth and secure journey on our website and throughout our collaboration. This policy outlines how we collect, use, and safeguard your information, so you can chart your course with confidence.
      </p>

      <nav className="mb-8 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Quick Navigation</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><Link href="#data-collection" className="text-blue-600 hover:underline">Setting Sail with Data</Link></li>
          <li><Link href="#data-protection" className="text-blue-600 hover:underline">Guarding Your Treasure Map</Link></li>
          <li><Link href="#transparency" className="text-blue-600 hover:underline">Transparency at the Helm</Link></li>
          <li><Link href="#trust" className="text-blue-600 hover:underline">Your Trust is Our North Star</Link></li>
        </ul>
      </nav>

      <section id="data-collection" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Setting Sail with Data</h2>
        <h3 className="text-xl font-medium mb-2">Charting Your Course</h3>
        <p className="mb-4">
          Like gentle winds guiding your ship, we gather anonymous data such as browsing patterns and cookies to personalize your experience and optimize our services. This information stays anonymous and fuels insights to ensure a flawless sail.
        </p>
        <h3 className="text-xl font-medium mb-2">Sending Signals</h3>
        <p className="mb-4">
          When you send us messages through forms, emails, or calls, we collect your name, email address, and relevant details. Just like raising a signal flag, this helps us respond promptly and deliver the best possible service.
        </p>
        <h3 className="text-xl font-medium mb-2">Mapping Your Project</h3>
        <p className="mb-4">
          To meticulously craft your digital masterpiece, we collect project details and specifications during our collaboration. Think of it as plotting the course – this information remains confidential and serves as the blueprint for your success.
        </p>
      </section>

      <section id="data-protection" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guarding Your Treasure Map</h2>
        <h3 className="text-xl font-medium mb-2">No Data Pirates Here</h3>
        <p className="mb-4">
          We would never dream of selling or renting your personal information to third parties. Your data is your treasure, and we respect your privacy like a pirate respects their hidden map.
        </p>
        <h3 className="text-xl font-medium mb-2">Sailing with Secrecy</h3>
        <p className="mb-4">
          Your name, project details, and any other confidential information will never be publicly disclosed without your explicit consent. It&apos;s like having a secret handshake with us, ensuring your information stays under your control.
        </p>
      </section>

      <section id="transparency" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Transparency at the Helm</h2>
        <h3 className="text-xl font-medium mb-2">Controlling the Cookies</h3>
        <p className="mb-4">
          You have the freedom to manage and disable cookies through your browser settings, just like adjusting the sails to navigate your way.
        </p>
        <h3 className="text-xl font-medium mb-2">Data on Demand</h3>
        <p className="mb-4">
          Need to access, delete, or opt out of future communication? Just let us know! We believe your data belongs to you, and we&apos;re happy to respond to your requests promptly.
        </p>
        <h3 className="text-xl font-medium mb-2">Keeping You Informed</h3>
        <p className="mb-4">
          We&apos;ll transparently notify you of any changes to our privacy policy via email or prominently displayed on our website, ensuring you have the latest navigational chart.
        </p>
      </section>

      <section id="trust" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Trust is Our North Star</h2>
        <p className="mb-4">
          At JMC Technology LTD, your trust is our guiding principle. We strive to be transparent, accountable, and always available to answer your questions and address your concerns regarding our privacy policy. Don&apos;t hesitate to reach out .we&apos;re here to ensure your digital journey is as smooth and secure as the open seas can be.
        </p>
      </section>
    </div>
  );
}
