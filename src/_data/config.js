// Config for the entire site.
module.exports = {
  // Site title.
  title: "Pankaj Yadav",

  // Default description for pages. Provide "description" in the front matter of
  // a page to override this.
  description: "Contact information for Pankaj Yadav.",

  // Site URLs.
  baseUrl: "https://www.pankajyadav.me/", // No slash at the end.
  shortBaseUrl: "www.pankajyadav.me", // Same as baseUrl but without http or https.

  // Your name.
  name: "Pankaj Yadav",

  // Profile picture on home page. Set to null to leave out.
  profilePic: {
    best: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadav.JPG",
    small: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadav.JPG",
  },

  // Name pronunciation. Set to null to leave out.
  pronunciation: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadavSlow.mp3",

  // Tagline that shows up below the profile picture on the home page and below
  // the name on the business card. Set to null to leave out.
  tagline: "Tech Evangelist and CEO at Tagglabs",

  // Path to Open Graph image. Change this URL whenever the image changes so
  // that sites like FB change their preview. Set to null to leave out.
  openGraph: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadav.JPG",
  },

  // Path to Twitter preview image. Set to null to leave out.
  twitterPreview: {
    absolute: true,
    url: "https://d35hr0os3yc7ki.cloudfront.net/PankajYadav.JPG",
  },

  // Links to your other websites.
  // - "fa" is the FontAwesome code for the icon; for example, see here:
  //   https://fontawesome.com/v5.15/icons/globe-americas
  // - textColor is configured strangely because tailwind needs to pick up on it
  //   and avoid purging the class name -- see here:
  //   https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html
  //   - See tailwind.config.js (in the root of this repo) for how to add custom
  //     colors.
  links: [
    {
      name: "Website",
      desc: "pankajyadav.me",
      url: "https://www.pankajyadav.me",
      fa: "fas fa-globe-americas",
      textColor: "text-website",
    },
    {
      name: "Work",
      desc: "pankaj@tagglabs.in",
      url: "mailto:pankaj@tagglabs.in",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
     {
      name: "Personal",
      desc: "mail@pankajyadav.me",
      url: "mailto:mail@pankajyadav.me",
      fa: "fas fa-envelope",
      textColor: "text-gray-600",
    },
    {
      name: "Twitter",
      desc: "@psy_techie",
      url: "https://twitter.com/psy_techie",
      fa: "fab fa-twitter",
      textColor: "text-twitter",
    },
    {
      name: "LinkedIn",
      desc: "@pankajsinghyadav",
      url: "https://www.linkedin.com/in/pankajsinghyadav/",
      fa: "fab fa-linkedin",
      textColor: "text-linkedin",
    },
       {
      name: "Instagram",
      desc: "@mud_born_lotus",
      url: "https://www.instagram.com/mud_born_lotus/",
      fa: "fab fa-instagram",
      textColor: "text-instagram",
    },
    {
      name: "Save Contact",
      url: "https://d35hr0os3yc7ki.cloudfront.net/pankajcontact.vcf",
      fa: "fas fa-file-alt",
      textColor: "text-yellow-500",
    },
  ],
};
