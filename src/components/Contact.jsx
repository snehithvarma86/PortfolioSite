import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Mail, MapPin, Send } from "lucide-react";

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

      setFormData({ name: "", email: "", message: "" });
      setSucess(true);
      setApiError("");
      setErrors({});
    } catch (error) {
      setApiError("Something went wrong. Please try again.");
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
              snehithvarma.dev@gmail.com
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
        {!success ? (
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
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                {errors.name && (
                  <p className="text-red-500">Please enter name</p>
                )}
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
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-full cursor-pointer hero-gradient py-4 rounded-md font-headline font-bold uppercase tracking-widest text-on-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              type="submit"
            >
              <Send size={18} />
              Send Message
            </motion.button>
            {apiError && <p className="text-red-500">{apiError}</p>}
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center space-y-6 py-16"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
              <CheckCircle2
                size={48}
                className="text-secondary fill-secondary/20"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-headline font-extrabold tracking-tight">
                Message Sent!
              </h3>
              <p className="text-xl font-headline font-bold text-primary">
                Thank you for reaching out!
              </p>
              <p className="text-on-surface-variant font-body">
                I'll get back to you as soon as possible.
              </p>
            </div>
            <button
              onClick={() => setSucess(false)}
              className="mt-4 border border-outline-variant px-8 py-3 rounded-md font-headline font-bold uppercase tracking-wider text-white hover:bg-white/5 transition-all"
            >
              Send another message
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
