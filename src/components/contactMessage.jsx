import React, { useEffect } from 'react';

const ContactMessage = () => {
  useEffect(() => {
    // ASCII art with a panda
    const asciiArt = `
    CONTACT ME   ----------------------------------------
       \\
        \\
         \\
            /\\/\\
           ( .. )
           / \\/ \\
          /\\/\\/
          /      \\
    
    Hey there! Thanks for checking out my site. If you're interested in my work,

    feel free to visit my GitHub repository at https://github.com/Kawkawa2/Portfolio

    You can also reach out to me via email at **kawtarelka25@gmail.com** for any inquiries.
    `;

    console.log(asciiArt);
  }, []);

  return null; // This component doesn't render anything visible
};

export default ContactMessage;
