import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://huidkliniekabore.nl'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',           // API routes blokkeren
          '/_next/',         // Next.js internal files
          '/admin/',         // Admin area (als die er komt)
          '/private/',       // Private content
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/static/',  // Static files niet indexeren
        ],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',          // Sta Google Images toe
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
