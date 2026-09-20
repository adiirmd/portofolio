import photoHome from "@/assets/photo-home.jpg";
import photoAbout from "@/assets/photo-about.jpg";

import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Adi Romadhon",
  socials: {
    portal: "https://link.adiirmd.id",
    github: "https://github.com/adiirmd",
    linkedin: "https://www.linkedin.com/in/adi-romadhon-a925062b7/",
    email: "adiromadhon0@gmail.com",
  },
  photos: {
    home: photoHome,
    about: photoAbout,
  },
};
