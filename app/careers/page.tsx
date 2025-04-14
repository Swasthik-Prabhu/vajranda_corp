import ApplyNowButton from "./ApplyNowButton";
import SendResumeButton from "./SendResumeButton";

export default function CareersPage() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Full-Time",
      location: "Remote / Bangalore",
      description: "Build beautiful and scalable UI components using React and Tailwind CSS.",
    },
    {
      title: "Backend Developer",
      type: "Full-Time",
      location: "Remote / Hyderabad",
      description: "Work with FastAPI, MongoDB and scalable cloud infrastructure.",
    },
    {
      title: "Healthcare Consultant",
      type: "Part-Time",
      location: "Chennai / Remote",
      description: "Work closely with medical teams to improve digital workflows and patient experience.",
    },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Careers at Vajranda Corp</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join a team that’s innovating healthcare and technology. We're building solutions to empower lives every day.
        </p>
      </section>

      {/* Why Join Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Why Work With Us?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Innovative Culture</h3>
            <p className="text-gray-600 text-sm">We encourage ideas and creativity at every level.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Remote Flexibility</h3>
            <p className="text-gray-600 text-sm">Work from anywhere, anytime – results matter more than hours.</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Health & Wellness</h3>
            <p className="text-gray-600 text-sm">Enjoy wellness benefits and regular mental health check-ins.</p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Open Positions</h2>
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="border border-gray-200 p-6 rounded-lg shadow-sm transition duration-300 hover:shadow-lg hover:border-blue-500 hover:bg-blue-50 group"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition">{job.title}</h3>
                <span className="text-sm text-gray-500 group-hover:text-blue-600">{job.type}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{job.location}</p>
              <p className="text-gray-700 mb-4 text-sm">{job.description}</p>
              <ApplyNowButton jobTitle={job.title} />
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center">
  <h2 className="text-2xl font-semibold text-gray-800 mb-2">Didn’t find a role that fits?</h2>
  <p className="text-gray-600 mb-4">
    We’re always looking for passionate people. Email us at{" "}
    <a href="mailto:careers@vajranda.com" className="text-blue-600 underline">careers@vajranda.com</a>
  </p>
  <SendResumeButton />
</section>
    </main>
  );
}
