import React, { useState } from "react";
import {
  Truck,
  PackageCheck,
  ShieldCheck,
  Timer,
  MapPin,
  CircleChevronDown,
  CircleChevronUp,
  SearchCheck,
  Clock10,
  FileEdit,
  BadgeCheck,
} from "lucide-react";

const faqs = [
    {
      id: 1,
      question: "Is the app free to use?",
      answerBng:
        "এই অ্যাপটি ব্যবহার একদম বিনামূল্যে। আপনি যদি কোনো হারানো আইটেম রিপোর্ট করেন, তাহলে সিস্টেম অনুযায়ী (যদি applicable হয়) কিছু পুরস্কার (Herq টোকেন) নির্ধারিত হতে পারে।",
      answer:
        "The app is completely free to use. If you report a lost item, the system may provide a reward (Herq token) based on the item's category.",
      icon: <BadgeCheck className="text-lime-500" />,
    },
    {
      id: 2,
      question: "How can I report a lost item?",
      answerBng:
        "হারানো কোনো জিনিস রিপোর্ট করতে হলে 'Report Lost' বাটনে ক্লিক করে নাম, ছবি, ব্র্যান্ড, অবস্থান, তারিখ, সময় ইত্যাদি প্রয়োজনীয় তথ্য দিয়ে সাবমিট করতে হবে।",
      answer:
        "To report a lost item, click the 'Add Post' button and fill in all required details like name, photo, brand, location, date, and time.",
      icon: <FileEdit className="text-blue-500" />,
    },

    {
      id: 3,
      question: "What happens after I submit a post?",
      answerBng:
        "আপনার রিপোর্টটি আমাদের ডাটাবেসে যুক্ত হবে এবং অন্য ইউজাররা সেটি দেখতে পারবে। কেউ যদি মিল খুঁজে পান তাহলে যোগাযোগ করতে পারবেন আপনার দেয়া তথ্য অনুযায়ী।",
      answer:
        "Once you submit a post, it gets added to our database. Other users can view it and contact you if they find a match.",
      icon: <Clock10 className="text-orange-500" />,
    },
    {
      id: 4,
      question: "Can I report a found item too?",
      answerBng:
        "জি হ্যাঁ, আপনি যদি কোনো হারানো আইটেম খুঁজে পান, তাহলে 'Report Found' অপশন থেকে রিপোর্ট করতে পারেন। এতে মূল মালিক তার জিনিস ফেরত পেতে পারেন।",
      answer:
        "Yes, if you find a lost item, you can post it using the 'Post Found' option to help return it to its rightful owner.",
      icon: <SearchCheck className="text-emerald-500" />,
    },
    {
      id: 5,
      question: "Is my contact information safe?",
      answerBng:
        "আপনার প্রাইভেসি আমাদের অগ্রাধিকার। শুধুমাত্র ভেরিফাইড রিপোর্টের ক্ষেত্রেই নির্দিষ্ট তথ্য প্রকাশ পায়। আমরা কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না।",
      answer:
        "Your privacy is our priority. Contact details are only shared when a report is verified. We do not share your data with third parties.",
      icon: <ShieldCheck className="text-red-500" />,
    }
];

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(1);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="max-w-5xl mx-auto rounded py-10 lg:py-20 p-2">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-center py-4"
      >
        <h1 className="text-4xl font-bold text-teal-950">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="py-4 w-full md:w-lg mx-auto text-gray-600">
          Find answers to common questions about our services. If you can't find
          what you're looking for, please contact us. We're here to help you.{" "}
        </p>
      </div>

      {faqs.map((faq, index) => (
        <div
          initial={{ opacity: 0 }}
          animate={{ height: "auto", opacity: 100 }}
          exit={{ height: 0, opacity: 0 }}
          key={index}
          className={`transition-all duration-300 ease-in-out mb-4 rounded-2xl p-4 border  ${
            openId === faq.id
              ? "bg-teal-50 border border-teal-700 "
              : "bg-white border-transparent"
          } `}
        >
          <button
            onClick={() => toggleAccordion(faq.id)}
            className="w-full text-left flex justify-between items-center pb-4 border-b border-gray-300"
          >
            <div className="flex items-center gap-4">
              <span>{faq.icon}</span>
              <p className="font-medium text-slate-700">{faq.question}</p>
            </div>
            <span className="text-gray-600 transition-transform duration-300">
              {openId === faq.id ? <CircleChevronUp /> : <CircleChevronDown />}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openId === faq.id ? "max-h-auto mt-4" : "max-h-0"
            }`}
          >
            <p className="text-slate-500 pl-10 w-10/12">{faq.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FAQAccordion;
