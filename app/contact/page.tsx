import ContactUs from "./contact-us";
import WhoIsSection from "./who-is-section";
import Hero from "./hero";

export const metadata = {
  title: "Contact Us | DatswaTech",
  description:
    "Get in touch with DatswaTech for consulting, development, and technology solutions.",
};

export default function ContactPage() {
  return (
    <>
      <Hero />
      <ContactUs />
      <WhoIsSection />
    </>
  );
}
