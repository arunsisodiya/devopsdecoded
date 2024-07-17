// @ts-check
/** @type {import("pliny/config").PlinyConfig } */

const siteMetadata = {
  title: 'Deep dive into the world of DevOps',
  author: 'Arun Sisodiya',
  fullName: 'Arun Singh Sisodiya',
  headerTitle: 'Devops Decoded',
  description: "I am driven by the desire to hone my skills and disseminate the knowledge I've acquired. 🌟",
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://devopsdecoded.cloud',
  siteRepo: 'https://github.com/arunsisodiya/devopsdecoded',
  siteLogo: '/static/images/avatar.jpg',
  socialBanner: '',
  image: '/static/images/avatar.jpg',
  email: 'btrack44@gmail.com',
  github: 'https://github.com/arunsisodiya',
  facebook: 'https://www.facebook.com/devopsdecoded',
  linkedin: 'https://www.linkedin.com/in/arunsinghsisodiya/',
  twitter: 'https://x.com/devopsdecoded',
  youtube: 'https://youtube.com/devopsdecoded',
  locale: 'en-US',
  socialAccounts: {
    github: 'arunsisodiya',
    linkedin: 'arunsinghsisodiya',
    facebook: 'devopsdecoded',
  },
  analyticsURL: 'https://eu.umami.is/share/SzxqLWSihM2QHk3h/www.devopsdecoded.cloud',
  analytics: {
    umamiWebsiteId: '2cd93df7-05f0-4d60-b772-77f1221eab1f',
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
      inputPosition: 'top',
    },
  },
};

module.exports = siteMetadata;
