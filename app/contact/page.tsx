import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600">We'd love to hear from you. Fill out the form below and our team will get back to you shortly.</p>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </main>
  );
}
