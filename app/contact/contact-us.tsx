"use client";

import React, { useState } from "react";
import {
  faEnvelopeOpenText,
  faHdd,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faCommentDots,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

/* ================= Contact Info Data ================= */

const contactInfoList = [
  {
    icon: faEnvelopeOpenText,
    label: "contact@datswatech.com",
    href: "mailto:contact@datswatech.com",
  },
  {
    icon: faPhoneAlt,
    label: "+91 9XXXXXXXXX",
    href: "tel:+919XXXXXXXXX",
  },
  {
    icon: faHdd,
    label: "www.datswatech.com",
    href: "https://www.datswatech.com",
  },
];

/* ================= Contact Form ================= */

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setValidated(true);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="relative bg-gradient-to-br from-gray-800 to-gray-900 dark:from-[#1F2A3A] dark:to-[#0F1C2C] 
                 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm border border-gray-700 
                 hover:scale-105 transform transition-all duration-300 space-y-6"
    >
      {/* Name + Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faUser}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
          <input
            required
            type="text"
            placeholder="Your Name"
            className="min-h-[48px] w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5
                       text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition-all duration-300 ease-in-out hover:bg-white/20"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
          <input
            required
            type="email"
            placeholder="Your Email"
            className="min-h-[48px] w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5
                       text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition-all duration-300 ease-in-out hover:bg-white/20"
          />
        </div>
      </div>

      {/* Phone + Company Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Phone */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faPhoneAlt}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
          <input
            required
            type="tel"
            placeholder="Your Phone"
            className="min-h-[48px] w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5
                       text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition-all duration-300 ease-in-out hover:bg-white/20"
          />
        </div>

        {/* Company */}
        <div className="relative">
          <FontAwesomeIcon
            icon={faHdd}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
          <input
            type="text"
            placeholder="Company"
            className="min-h-[48px] w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5
                       text-white placeholder-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-400
                       transition-all duration-300 ease-in-out hover:bg-white/20"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faCommentDots}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300"
        />
        <input
          required
          type="text"
          placeholder="Subject"
          className="min-h-[48px] w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5
                     text-white placeholder-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-400
                     transition-all duration-300 ease-in-out hover:bg-white/20"
        />
      </div>

      {/* Message */}
      <div className="relative">
        <FontAwesomeIcon
          icon={faCommentDots}
          className="absolute left-4 top-4 text-gray-300"
        />
        <textarea
          required
          rows={4}
          placeholder="Tell us about your requirement"
          className="w-full rounded-xl bg-white/10 dark:bg-white/5 pl-12 px-5 py-3
                     text-white placeholder-gray-300
                     focus:outline-none focus:ring-2 focus:ring-blue-400
                     transition-all duration-300 ease-in-out hover:bg-white/20"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-500 
                   text-white font-semibold shadow-lg
                   hover:from-blue-700 hover:to-indigo-600 hover:scale-105 transform 
                   transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

/* ================= Card ================= */

const ContactFormCard = () => (
  <div className="rounded-2xl bg-gray-100 dark:bg-[#162231] p-6 md:p-12 shadow-xl relative overflow-hidden group">
    {/* Top gradient border with hover animation and shadow */}
    <div
      className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 
                    rounded-t-2xl shadow-md transition-all duration-500 ease-in-out
                    group-hover:from-gray-300 group-hover:via-gray-400 group-hover:to-gray-500
                    group-hover:shadow-lg"
    ></div>

    <h2 className="mb-4 text-2xl md:text-[38px] font-bold text-center">
      Let’s Build Something Great
    </h2>
    <p className="mb-10 text-lg text-gray-600 dark:text-gray-300 text-center">
      Connect with DatswaTech for consulting, engineering, and digital
      transformation services.
    </p>

    <ContactForm />
  </div>
);

/* ================= Contact Info ================= */

const ContactInfo = () => (
  <div className="mt-4 flex flex-col gap-6 bg-gary-100 dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
    {contactInfoList.map((info, i) => (
      <div
        key={i}
        className={classNames(
          "flex items-center rounded-xl bg-gray-100 dark:bg-gray-800 p-5 shadow max-w-[360px]"
        )}
      >
        <FontAwesomeIcon icon={info.icon} className="text-2xl text-blue-600" />
        <a
          href={info.href}
          className="ml-4 text-lg font-medium hover:text-blue-600"
        >
          {info.label}
        </a>
      </div>
    ))}
  </div>
);

/* ================= Main Section ================= */

export default function ContactUs() {
  return (
    <section className="relative overflow-hidden py-14 md:py-24">
      {/* Background */}
      <div
        className="absolute inset-x-0 top-60 hidden h-full bg-cover bg-center md:block"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/contact/contact_12.svg)",
        }}
      />

      <div className="container relative mx-auto px-4">
        {/* Header + Subheader centered above both columns */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-[36px] font-bold">
            How can <span className="text-blue-600">DatswaTech</span> help you?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            From strategy to execution, we help businesses build scalable,
            secure, and intelligent solutions.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-12 gap-10 ">
          {/* Left Content: Contact Info */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-5 mt-4">
            <ContactInfo />
          </div>

          {/* Right Form */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 mt-6">
            <ContactFormCard />
          </div>
        </div>
      </div>
    </section>
  );
}
