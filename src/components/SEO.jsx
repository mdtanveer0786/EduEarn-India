import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, ogImage, ogType }) => {
  const siteTitle = 'EduEarn India - Learn & Earn Digital Skills';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteDescription = description || 'EduEarn India is a platform dedicated to helping students and professionals learn digital skills and monetize them effectively.';
  const siteKeywords = keywords || 'learn and earn, digital marketing, freelancing, online courses, eduearn india';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType || 'website'} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={ogImage || '/og-image.jpg'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={ogImage || '/og-image.jpg'} />
    </Helmet>
  );
};

export default SEO;
