import photoHome from "@/assets/photo-home.webp";
import photoAbout from "@/assets/photo-about.webp";

import type { Profile } from "@/lib/types";

export const profile: Profile = {
  name: "Adi Romadhon",
  socials: {
    portal: "https://link.adiirmd.id",
    github: "https://github.com/adiirmd",
    linkedin: "https://www.linkedin.com/in/adi-romadhon-a925062b7/",
    music: "https://music.adiirmd.id",
    game: "https://game.adiirmd.id",
    medium: "https://medium.com/@adiirmd",
    email: "adiromadhon0@gmail.com",
  },
  photos: {
    home: photoHome,
    about: photoAbout,
  },
};
