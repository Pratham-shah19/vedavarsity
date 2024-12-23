export const mainURL = 'https://ibmedu.org';

const defaultSEO = {
  defaultTitle: 'Iskcon Bhagavata Mahavidyalaya | Unveiling Eternal Knowledge',
  description: 'Explore profound teachings of the Bhagavad Gita at Iskcon Bhagavata Mahavidyalaya. Learn Bhakti Shashtri, Teacher Training Course, and IDC. Enrol Now!',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: mainURL, //TODO: Change this on Domain name change
    site_name: 'IBMEDU',
    images: [
      {
        url: `${mainURL}/iskconseo.png`
      }
    ]
  },
  twitter: {
    handle: '@IskconBhagavata',
    site: '@IskconBhagavata',
    cardType: 'summary_large_image'
  }
};

export default defaultSEO;
