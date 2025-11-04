import React, { useState } from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";

// Custom Icons
import Message from "../icons/contact/message.svg";
import SendIcon from "../icons/contact/send.svg";
import LocationIcon from "../icons/contact/location.svg";
import ClockIcon from "../icons/contact/time.svg";
import ConnectIcon from "../icons/contact/connect.svg";
import ExploreIcon from "../icons/contact/explore.svg";
import TimelineIcon from "../icons/contact/time.svg";
import RefineIcon from "../icons/contact/refine.svg";
import DeliverIcon from "../icons/contact/deliver.svg";

import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
=======

// Custom Icons
import Message from "../icons/contact/message.png";
import SendIcon from "../icons/contact/send.png";
import LocationIcon from "../icons/contact/location.png";
import ClockIcon from "../icons/contact/time.png";
import ConnectIcon from "../icons/contact/connect.png";
import ProcessIcon from "../icons/contact/process.png";
import TimelineIcon from "../icons/contact/time.png";
import RatesIcon from "../icons/contact/rate.png";
import RevisionsIcon from "../icons/contact/changes.png";

import SocialLinks from "../components/SocialLinks";
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
<<<<<<< HEAD
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
=======
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
    });
  };

  const faqs = [
    {
<<<<<<< HEAD
      question: "Explore",
      answer:
        "Every project starts with curiosity — I dig into the story, tone, and emotion behind the idea before touching any tools.",
      icon: ExploreIcon
    },
    {
      question: "Build",
      answer:
        "Concepts take shape through experimentation — sketches, prototypes, and visual tests until the direction feels alive.",
      icon: TimelineIcon
    },
    {
      question: "Refine",
      answer: "I tighten composition, lighting, and pacing until everything flows together — no detail left behind.",
      icon: RefineIcon
    },
    {
      question: "Deliver",
      answer:
        "The final piece is polished, exported, and documented for whatever comes next — whether it’s release, print, or motion.",
      icon: DeliverIcon
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    return null;
  };

  return (
    <>
      <Helmet>
        <title>NITTIN | Contact</title>
        <meta
          name="description"
          content="Get in touch with NITTIN — whether it’s a collaboration, commission, or creative discussion, let’s make something timeless together."
        />
      </Helmet>
      <div className="flex flex-col min-h-screen bg-background text-white overflow-x-hidden">
        <main className="flex-grow pt-36 sm:pt-48 md:pt-56 pb-12">
          <div className="max-w-6xl mx-auto px-7 sm:px-7 md:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12 sm:mb-16"
            >
              <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">Contact</p>
              <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Let’s Build Something <br className="hidden sm:block" />
                That Lasts
              </h1>
              <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
                Whether it’s a design challenge, collaboration, or idea in progress — reach out. I’m always open to
                thoughtful projects and creative discussions.
              </p>
            </motion.div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="md:col-span-2 bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-accent/20 transition"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <img
                    src={Message}
                    alt="Send Message"
                    loading="lazy"
                    decoding="async"
                    className="w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <h2 className="text-xl sm:text-2xl font-mono font-bold">Send Message</h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="NiTTiN KiTTiN"
                        className="w-full bg-primary/50 border-2 border-gray-600 rounded-lg
                   px-3 sm:px-4 py-2.5 sm:py-3
                   focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                   hover:border-blue-500
                   transition-colors text-sm sm:text-base text-[16px] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nittin@xzadik.com"
                        className="w-full bg-primary/50 border-2 border-gray-600 rounded-lg
                   px-3 sm:px-4 py-2.5 sm:py-3
                   focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                   hover:border-blue-500
                   transition-colors text-sm sm:text-base text-[16px] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Amazing website"
                      className="w-full bg-primary/50 border-2 border-gray-600 rounded-lg
                 px-3 sm:px-4 py-2.5 sm:py-3
                 focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                 hover:border-blue-500
                 transition-colors text-sm sm:text-base text-[16px] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Your site looks incredible — would love to work with you."
                      className="w-full bg-primary/50 border-2 border-gray-600 rounded-lg
                 px-3 sm:px-4 py-2.5 sm:py-3
                 focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                 hover:border-blue-500
                 transition-colors resize-none text-sm sm:text-base text-[16px] focus:outline-none"
                    ></textarea>
                  </div>

                  {/* Optimized Button with Tooltip */}
                  <div className="relative inline-block group">
                    <button
                      type="submit"
                      className="group bg-accent hover:bg-accent-light px-6 sm:px-8 py-3 sm:py-4
                 rounded-xl font-medium transition-colors flex items-center gap-2
                 text-white text-sm sm:text-base shadow-md focus:outline-none"
                    >
                      <img
                        src={SendIcon}
                        alt="Send"
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                      Send Message
                    </button>
                    <span
                      className="absolute top-1/2 left-full ml-3 -translate-y-1/2 opacity-0 group-hover:opacity-100
    bg-gray-800 text-white text-xs sm:text-sm rounded-lg px-3 py-1
    transition-opacity duration-300 whitespace-nowrap pointer-events-none"
                    >
                      Temporarily Disabled
                    </span>
                  </div>
                </form>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: LocationIcon,
                    title: "Location",
                    text: "Remote",
                    sub: "Available for collaboration worldwide",
                    delay: 0.1
                  },
                  {
                    icon: ClockIcon,
                    title: "Response Time",
                    text: "Typically replies within 24 hours",
                    sub: "Mon - Fri, 9 AM - 6 PM (local time)",
                    delay: 0.2
                  }
                ].map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: info.delay, duration: 0.5 }}
                    className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 hover:shadow-md hover:shadow-accent/20 transition"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <img
                        src={info.icon}
                        alt={info.title}
                        loading="lazy"
                        decoding="async"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      <h3 className="font-semibold text-sm sm:text-base">{info.title}</h3>
                    </div>
                    <p className="text-text-secondary text-sm sm:text-base">{info.text}</p>
                    <p className="text-text-muted text-xs sm:text-sm">{info.sub}</p>
                  </motion.div>
                ))}

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 hover:shadow-md hover:shadow-accent/20 transition"
                >
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <img
                      src={ConnectIcon}
                      alt="Connect"
=======
      question: "What's your design process?",
      answer:
        "I start with understanding your vision, then move through research, sketching, digital creation, and refinement until we achieve the perfect result.",
      icon: ProcessIcon,
    },
    {
      question: "How long does a project take?",
      answer:
        "Timeline varies by project complexity. Simple designs take 1-2 weeks, while comprehensive branding projects can take 4-6 weeks.",
      icon: TimelineIcon,
    },
    {
      question: "What are your rates?",
      answer:
        "Rates depend on project scope and timeline. I offer both hourly and project-based pricing. Let's discuss your needs for a custom quote.",
      icon: RatesIcon,
    },
    {
      question: "Do you offer revisions?",
      answer:
        "Yes! I include 3 rounds of revisions in all projects to ensure the final result exceeds your expectations.",
      icon: RevisionsIcon,
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6 sm:px-8 md:px-12 bg-background text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-text-muted text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
            Contact Us
          </p>
          <h1 className="font-mono text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Let’s Create Something{" "}
            <br className="hidden sm:block" />
            Amazing
          </h1>
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say
            hello? I’d love to hear from you. Drop me a message and let’s start
            a conversation.
          </p>
        </motion.div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-2 bg-secondary/30 p-6 sm:p-8 rounded-2xl border border-gray-700/50 shadow-lg hover:shadow-accent/20 transition"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <img
                src={Message}
                alt="Send Message"
                loading="lazy"
                decoding="async"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <h2 className="text-xl sm:text-2xl font-mono font-bold">
                Send Message
              </h2>
            </div>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full bg-primary/50 border border-gray-600 rounded-lg 
                   px-3 sm:px-4 py-2.5 sm:py-3 
                   focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                   hover:border-purple-400
                   transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full bg-primary/50 border border-gray-600 rounded-lg 
                   px-3 sm:px-4 py-2.5 sm:py-3 
                   focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                   hover:border-purple-400
                   transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  className="w-full bg-primary/50 border border-gray-600 rounded-lg 
                 px-3 sm:px-4 py-2.5 sm:py-3 
                 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                 hover:border-purple-400
                 transition-colors text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className="w-full bg-primary/50 border border-gray-600 rounded-lg 
                 px-3 sm:px-4 py-2.5 sm:py-3 
                 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                 hover:border-purple-400
                 transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Optimized Button */}
              <button
                type="submit"
                className="group bg-accent hover:bg-accent-light px-6 sm:px-8 py-3 sm:py-4 
               rounded-xl font-medium transition-colors flex items-center gap-2 
               text-white text-sm sm:text-base shadow-md"
              >
                <img
                  src={SendIcon}
                  alt="Send"
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                icon: LocationIcon,
                title: "Location",
                text: "Paris, France",
                sub: "Available for remote work worldwide",
                delay: 0.1,
              },
              {
                icon: ClockIcon,
                title: "Response Time",
                text: "Usually within 24 hours",
                sub: "Mon - Fri, 9 AM - 6 PM CET",
                delay: 0.2,
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: info.delay, duration: 0.5 }}
                className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 hover:shadow-md hover:shadow-accent/20 transition"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <img
                    src={info.icon}
                    alt={info.title}
                    loading="lazy"
                    decoding="async"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <h3 className="font-semibold text-sm sm:text-base">
                    {info.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm sm:text-base">
                  {info.text}
                </p>
                <p className="text-text-muted text-xs sm:text-sm">{info.sub}</p>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 hover:shadow-md hover:shadow-accent/20 transition"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <img
                  src={ConnectIcon}
                  alt="Connect"
                  loading="lazy"
                  decoding="async"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                <h3 className="font-semibold text-sm sm:text-base">
                  Let's Connect
                </h3>
              </div>
              <SocialLinks />
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 shadow-sm hover:shadow-lg hover:shadow-accent/20 transition"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={faq.icon}
                      alt={faq.question}
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
                      loading="lazy"
                      decoding="async"
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
<<<<<<< HEAD
                    <h3 className="font-semibold text-sm sm:text-base">Let's Connect</h3>
                  </div>
                  <SocialLinks />
                </motion.div>
              </div>
            </div>

            {/* FAQ Section */}
            <section>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 sm:mb-12"
              >
                <h2 className="font-mono text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Creative Workflow</h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-secondary/30 p-5 sm:p-6 rounded-xl border border-gray-700/50 shadow-sm hover:shadow-lg hover:shadow-accent/20 transition"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <img
                          src={faq.icon}
                          alt={faq.question}
                          loading="lazy"
                          decoding="async"
                          className="w-4 h-4 sm:w-5 sm:h-5"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-2">{faq.question}</h3>
                        <p className="text-text-secondary text-xs sm:text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          <style>
            {`
            input, textarea, select {
              font-size: 16px !important;
            }
          `}
          </style>
        </main>
        <BackToTop />
        <Footer />
      </div>
    </>
=======
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

        {/* ---------------- FOOTER ---------------- */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="py-10 px-6 sm:px-8 md:px-12 border-t border-gray-800"  // 🔥 Increased padding to match sections
      >
        <div className="max-w-6xl mx-auto text-center text-text-muted text-sm max-sm:text-xs">
          © Elara Vance 2025. All rights reserved.
        </div>
      </motion.footer>
    </div>
>>>>>>> a4084e00452dc66727786b7f875a41ff8bbfc7e0
  );
};

export default Contact;
