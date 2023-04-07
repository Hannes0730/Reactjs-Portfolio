import React from "react";

const certificates = [
  {
    id: 1,
    title: "Insights on Software Quality Engineering",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.linkedin.com/learning/certificates/d4cd6684e2fa8f325fa881f1e85257c1e70950954284220aeb85760f0d5e898b",
  },
  {
    id: 2,
    title: "Programming Foundations: Software Testing/QA",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.linkedin.com/learning/certificates/4adf16e3cee5bcae8b6b282d7bbc1ef308db80661f2647c314d99bdd0e77006a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BdtaISXA3Q5SpjdmMYWonCQ%3D%3D",
  },
  {
    id: 3,
    title: "CCNA: Enterprise Networking, Security, and Automation",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.credly.com/badges/094aedf4-ed66-4026-b77f-c9044484879b?source=linked_in_profile",
  },
  {
    id: 4,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.credly.com/badges/33faf9a0-e7da-496d-a86b-db6a5fcfe21c?source=linked_in_profile",
  },
  {
    id: 5,
    title: "CCNA: Introduction to Networks",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.credly.com/badges/0f5beb4d-d70c-4bea-8f0e-f53b445bf61e?source=linked_in_profile",
  },
  {
    id: 6,
    title: "Applied Plotting, Charting & Data Representation in Python",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/WJXH5WA6P6N7",
  },
  {
    id: 7,
    title: "Introduction to Data Science in Python",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/3NBHUNETEQFX",
  },
  {
    id: 8,
    title: "Introduction to Data Science in Python",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/3NBHUNETEQFX",
  },
  {
    id: 9,
    title: "Diode - pn Junction and Metal Semiconductor Contact",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/JLW6AL3WWRMA",
  },
  {
    id: 10,
    title: "Inferential Statistics",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/F5Q4KSL4AEJ8",
  },
  {
    id: 11,
    title: "Linear Regression and Modeling",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/RL7TWPN4VXEZ",
  },
  {
    id: 12,
    title: "Introduction to Probability and Data with R",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/YC7DC6JXVUSK",
  },
  {
    id: 13,
    title: "Introduction to Ordinary Differential Equations",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/R39A2VXMWGRE",
  },
  {
    id: 14,
    title: "Matrix Algebra for Engineers",
    image:
      "https://www.citypng.com/public/uploads/preview/hd-gold-black-certificate-logo-transparent-png-31625761576hadwkhbj6t.png",
    url: "https://www.coursera.org/account/accomplishments/certificate/TN2GUPFKE5YZ",
  },
];

function CertificateCard({ certificate }) {
  const [hovered, setHovered] = React.useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div
      id="Certificates"
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mb-[100px] p-3 relative "
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div
        className="w-full h-full absolute top-0 left-0 bg-opacity-50 bg-gray-900 rounded-lg transition-all duration-500 ease-in-out transform scale-0 z-10 overflow-hidden"
        style={{ transform: hovered ? "scale(1)" : "scale(0)" }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center text-white">
          <a
            href={certificate.url}
            target="_blank"
            className="bg-white text-gray-900 font-bold py-2 px-4 rounded hover:bg-gray-900 hover:text-white transition-all duration-500 ease-in-out"
          >
            View
          </a>
        </div>
      </div>
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="w-full bg-gray-900 bg-opacity-50 absolute bottom-0 left-0 p-2 text-white transition-all duration-500 ease-in-out transform translate-y-full z-0">
        <h3 className="font-bold text-lg">{certificate.title}</h3>
      </div>
    </div>
  );
}

function Certificates() {
  return (
    <div id="Certificate" className="md:px-0 px-11">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <div className="flex flex-wrap mx-2">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
