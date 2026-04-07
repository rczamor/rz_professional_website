"use client";

import { FormEvent, useState } from "react";

const HUBSPOT_PORTAL_ID = "245808914";
const HUBSPOT_FORM_GUID = "6203eb7b-c491-4906-949f-3927c68fed0d";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fields: [
        { name: "firstname", value: (data.get("firstname") as string).trim() },
        { name: "lastname", value: (data.get("lastname") as string).trim() },
        { name: "email", value: (data.get("email") as string).trim() },
        { name: "inquiry_type", value: data.get("inquiry_type") as string },
        { name: "message", value: (data.get("message") as string).trim() },
      ],
      context: {
        pageUri: "https://richezamor.com/contact",
        pageName: "Contact — Riché Zamor",
      },
    };

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        console.error("HubSpot submission error:", await res.text());
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission failed:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-card">
        <div style={{ textAlign: "center", padding: "60px 40px" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>&#x2713;</div>
          <h3 style={{ marginBottom: 12 }}>Message sent.</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: 15 }}>
            I typically respond within 48 hours. Looking forward to connecting.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="form-two-column">
          <div className="form-group">
            <label htmlFor="firstname" className="form-label">First Name</label>
            <input type="text" id="firstname" name="firstname" className="form-input" placeholder="First name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className="form-label">Last Name</label>
            <input type="text" id="lastname" name="lastname" className="form-input" placeholder="Last name" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" required />
        </div>

        <div className="form-group">
          <label htmlFor="inquiry_type" className="form-label">Type of Inquiry</label>
          <select id="inquiry_type" name="inquiry_type" className="form-select" required>
            <option value="">Select an option</option>
            <option value="Advisory Engagement">Advisory Engagement</option>
            <option value="Board Position">Board Position</option>
            <option value="Speaking / Podcast">Speaking / Podcast</option>
            <option value="Networking">Networking</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-textarea" placeholder="Tell me about what you're working on..." required />
        </div>

        <button type="submit" className="form-submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : <>Send Message <span>&rarr;</span></>}
        </button>

        {status === "error" && (
          <p style={{ color: "#ff6b6b", fontSize: 13, marginTop: 12, textAlign: "center" }}>
            Something went wrong. Please try again or email connect@richezamor.com directly.
          </p>
        )}
      </form>
    </div>
  );
}
