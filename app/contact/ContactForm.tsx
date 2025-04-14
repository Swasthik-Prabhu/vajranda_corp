'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled before submitting
    OnClick(formData);
    
    // If form is filled, proceed with form submission logic
    if (formData.name && formData.email && formData.message) {
      // Submit form data (e.g., call API)
      console.log(formData);

      // Reset form after successful submission (optional)
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const OnClick = (formData: { name: string; email: string; message: string }) => {
    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields before submitting.");
    } else {
      // Show success message if form is filled
      alert("Form submitted successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition hover:cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
