"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    setStatus("idle");

    if (!firstName.trim() || !email.trim() || !message.trim() || !phone.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in First Name, Phone, Email & Message.");
      return;
    }

    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, phone, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message.");
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "An unexpected error occurred!");
    }
  }

  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* ✅ Background image */}
      <img
        alt="Contact us"
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/contact-us.png"
        title="Contact us"
      />

      {/* ✅ Overlay gradient (your exact gradient) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1B1331]/55 via-[#0D0A18]/40 to-transparent" />

      {/* ✅ Optional extra dark overlay for readability (remove if not needed) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center contact-form">
        <h3 className="text-center text-2xl sm:text-3xl font-normal text-white mb-8">
          Let’s{" "}
          <span className="bg-gradient-to-r from-[#7dd3fc] to-[#22d3ee] bg-clip-text text-transparent">
            get in touch
          </span>
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* First Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:ring-2 focus:ring-fuchsia-500/80 focus:border-transparent"
              required
            />

            <input
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:ring-2 focus:ring-fuchsia-500/80 focus:border-transparent"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="email"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:ring-2 focus:ring-fuchsia-500/80 focus:border-transparent"
              required
            />

            <input
              type="tel"
              placeholder="Phone*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:ring-2 focus:ring-fuchsia-500/80 focus:border-transparent"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Write message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-40 rounded-2xl bg-white/5 border border-white/10 px-5 py-3.5 text-sm sm:text-base text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/80 focus:border-transparent"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-2 w-full rounded-full bg-gradient-to-r from-[#a855f7] via-[#8b5cf6] to-[#22d3ee] py-3.5 text-sm sm:text-base font-medium text-white shadow-[0_0_40px_rgba(129,140,248,0.8)] hover:shadow-[0_0_55px_rgba(129,140,248,1)] transition-transform hover:-translate-y-[1px] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          <div className="min-h-[20px] text-sm mt-2" aria-live="polite">
            {status === "success" && (
              <p className="text-emerald-400">Thank you! Your enquiry has been sent.</p>
            )}
            {status === "error" && errorMsg && <p className="text-red-400">{errorMsg}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
