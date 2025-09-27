import React, { useState } from "react";
import axios from "axios";

const FIELD_MAPPING = {
  name: "entry.2005620554",
  email: "entry.1045781291",
  phone: "entry.1166974658",
  branch: "entry.839337160",
  course: "entry.1031730528",
  year: "entry.775207927",
};

const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfs7zegk0icV56MK2DuNa_VvJW-_LzpQRx1BEl2qZQV1HZfiQ/formResponse";

export default function EnrollForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    branch: "",
    course: "",
    year: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      errs.email = "Valid email is required";
    if (!formData.phone.match(/^[0-9]{6,15}$/)) errs.phone = "Valid phone is required";
    if (!formData.branch.trim()) errs.branch = "Branch is required";
    if (!formData.course.trim()) errs.course = "Course is required";
    if (!formData.year.trim()) errs.year = "Year is required";
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const data = new FormData();
    for (const key in FIELD_MAPPING) {
      data.append(FIELD_MAPPING[key], formData[key]);
    }

    try {
      await axios.post(GOOGLE_FORM_ACTION, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", branch: "", course: "", year: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-green-500">Thank you for enrolling!</h2>
        <p>We will contact you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-6 bg-gray-50 rounded-lg shadow-md">
      {["name", "email", "phone", "branch", "course", "year"].map((field) => (
        <div key={field} className="flex flex-col">
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors[field] && <span className="text-red-500 text-sm mt-1">{errors[field]}</span>}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition"
      >
        Enroll Now
      </button>
    </form>
  );
}
