import {
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaQuestionCircle,
} from "react-icons/fa";

export default function Supports() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">
        How Can We Help You? 🤝
      </h1>
      <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl">
        Our support team is here to assist you. Whether you have questions, need
        technical help, or want to reach out, we`ve got you covered!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaHeadset className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">24/7 Live Support</h2>
          <p className="text-gray-600">
            Get assistance anytime from our dedicated support team.
          </p>
        </div>

        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaEnvelope className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Email Support</h2>
          <p className="text-gray-600">
            Drop us an email and we’ll get back to you within 24 hours.
          </p>
        </div>

        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaPhoneAlt className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Call Us</h2>
          <p className="text-gray-600">
            Speak directly with our support specialists for instant help.
          </p>
        </div>

        <div className="border border-teal-500 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform text-center">
          <FaQuestionCircle className="text-teal-500 text-5xl mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-600">
            Find answers to common questions in our knowledge base.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-500 italic text-center max-w-lg">
        ``Your satisfaction is our priority. Let us know how we can assist
        you!``
      </p>
    </div>
  );
}
