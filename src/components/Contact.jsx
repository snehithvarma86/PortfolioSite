import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [success, setSucess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setApiError("");
      setSucess(false);

      const res = await fetch("https://formspree.io/f/mvzvzdae", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("failed to submit data, please try again");
      }

      const data = await res.json();

      console.log("Success:", data);

      // reset form
      setFormData({ name: "", email: "" });
    } catch (error) {
      setApiError(error);
    }
  };

  return (
    <section
      id="contact"
      className="bg-surface-container rounded-2xl p-4 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12"
    >
      <div className="md:col-span-5 p-4 md:p-8 flex flex-col justify-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-headline font-extrabold tracking-tight">
            Let's <span className="text-primary">Talk</span>
          </h2>
          <p className="text-on-surface-variant">
            Have a project in mind or looking to hire? I'm always open to
            discussing new opportunities in Web & AI development.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary">
              <Mail size={20} />
            </div>
            <span className="text-on-surface font-bold">
              sai.snehith@example.com
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
              <MapPin size={20} />
            </div>
            <span className="text-on-surface font-bold">Hyderabad, India</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 glass-card rounded-2xl p-8">
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary text-white placeholder:text-outline/40 outline-none"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              {errors.name && <p className="text-red-500">Please enter name</p>}
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary text-white placeholder:text-outline/40 outline-none"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-secondary text-white placeholder:text-outline/40 outline-none resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full cursor-pointer hero-gradient py-4 rounded-md font-headline font-bold uppercase tracking-widest text-on-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            type="submit"
          >
            <Send size={18} />
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
