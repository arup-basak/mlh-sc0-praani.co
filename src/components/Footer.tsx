import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}

const Button = ({ text, url }: ButtonProps) => {
  return (
    <Link href={url} className="p-2">
      {text}
    </Link>
  );
};

const Footer = () => {
  const buttons = [
    { text: "Services", url: "/services" },
    { text: "Emergency", url: "/emergency" },
    { text: "Hospital", url: "/hospital" },
    { text: "Pathology", url: "/pathology" },
    { text: "Support", url: "/support" },
    { text: "FAQ", url: "/faq" },
    { text: "Contact", url: "/contact" },
    { text: "Pricing", url: "/pricing" },
    { text: "Legal", url: "/legal" },
    { text: "Privacy", url: "/privacy" },
    { text: "Terms", url: "/terms" },
    { text: "Disclaimer", url: "/disclaimer" },
  ];
  return (
    <section className="text-white bg-black ">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 p-2 w-8/12">
          {buttons.map((item, index) => (
            <Button key={index} text={item.text} url={item.url} />
          ))}
        </div>
      </div>
      {/* <div className='flex justify-center w-5/12'>
                <div>
                    © 2023 Emergency Hospital Connect. All rights reserved.
                </div>
                <div>

                </div>
            </div> */}
    </section>
  );
};

export default Footer;
