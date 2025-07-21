import React from 'react';
// Importación de íconos desde src/resources
import facebookIcon from "../resources/facebook.png";
import instagramIcon from "../resources/instagram.png";
import linkedinIcon from "../resources/linkedin.png";
import whatsappIcon from "../resources/whatsapp.png";
import githubIcon from "../resources/github.png";

const Footer: React.FC = () => {
    return (
<>
<footer className="bg-black text-white text-center py-15 mt-20">
      <h3 className="text-lg font-semibold">MATECORE</h3>
      <p className="mt-2">
        We're part of the{" "}
        <a href="#" className="text-blue-400 hover:underline">
          Argentina
        </a>{" "}
        family.
      </p>
      <p className="text-sm text-gray-400 mt-1">© 2025 Matecore soft.</p>

      <div className="flex justify-center items-center mt-4 space-x-4">
        <a href="https://www.facebook.com/profile.php?id=61577641365641" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" />
        </a>
        <a href="https://www.linkedin.com/company/matecore" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 hover:opacity-80 transition" />
        </a>
        <a href="https://github.com/Matecore-repo" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
        </a>
      </div>
    </footer>
</>  
    );
};

export default Footer;