# SEO Implementation Guide for Optivis

This document outlines the SEO improvements implemented for the Optivis website and the steps to complete the setup.

## What's Been Implemented

### 1. **Enhanced Metadata** (layout.tsx)
- ✅ Title templates for consistency
- ✅ Comprehensive keywords
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Robot directives for search engines
- ✅ Canonical URLs
- ✅ Structured metadata JSON-LD

### 2. **Sitemap** (src/app/sitemap.ts)
- ✅ Automatically generated XML sitemap
- ✅ Includes all main sections with change frequency
- ✅ Accessible at `/sitemap.xml`

### 3. **Robots.txt** (public/robots.txt)
- ✅ Search engine crawler directives
- ✅ Sitemap reference
- ✅ Crawl delay settings for major search engines

### 4. **Structured Data** (public/schema.json)
- ✅ Organization schema
- ✅ Local business schema
- ✅ Professional service schemas
- ✅ WebSite schema with search action

### 5. **Page Metadata** (src/app/page.tsx)
- ✅ Page-specific title and description
- ✅ Open Graph metadata for social sharing

### 6. **SEO Utilities** (src/lib/seo.ts)
- ✅ Reusable site configuration
- ✅ Default metadata constants
- ✅ Structured data generators

## Next Steps Required

### 🔴 CRITICAL - Complete These Immediately

#### 1. **Google Search Console Verification**
You need to verify your website with Google Search Console:

1. Go to https://search.google.com/search-console/
2. Add your property (https://optivis.com)
3. Choose verification method:
   - **HTML tag** (recommended): Copy the verification code
   - Replace `YOUR_GOOGLE_VERIFICATION_CODE` in [src/app/layout.tsx](src/app/layout.tsx) line 45
4. Or upload HTML file to verify domain ownership

#### 2. **Update Configuration**
Replace these placeholders in [src/app/layout.tsx](src/app/layout.tsx):

```typescript
// Line 45 - Add your Google verification code
verification: {
  google: "YOUR_GOOGLE_VERIFICATION_CODE",
}
```

#### 3. **Update Domain URLs**
In [src/app/layout.tsx](src/app/layout.tsx) and [src/app/sitemap.ts](src/app/sitemap.ts):
- Replace `https://optivis.com` with your actual domain
- Example: `https://yourdomain.com`

#### 4. **Add OG Images**
Create or provide an Open Graph image:
- Recommended size: 1200x630px
- Supported formats: JPG, PNG, GIF, WEBP
- Save to: `public/og-image.png`
- Update URL in metadata if different

### 🟡 RECOMMENDED - High Priority

#### 5. **Update Social Links**
In [src/lib/seo.ts](src/lib/seo.ts), update social media links:
```typescript
links: {
  twitter: "https://twitter.com/optivis",      // Add your handle
  linkedin: "https://linkedin.com/company/optivis",  // Add your company
  github: "https://github.com/optivis",        // Add your org
}
```

#### 6. **Logo Files**
Add these to `public/`:
- `logo.png` - Main logo (200x200px minimum)
- `favicon.ico` - Favicon
- `apple-icon.png` - Apple touch icon

#### 7. **Update Business Contact Info**
The contact information from [src/content/site-content.json](src/content/site-content.json) is already included in metadata. Ensure it's accurate:
- Email: optivis.ocs.support@gmail.com
- Phone: +91 7978289942

### 🟢 OPTIONAL - Nice to Have

#### 8. **Bing Webmaster Tools**
1. Go to https://www.bing.com/webmasters/
2. Add your site
3. Verify ownership
4. Submit sitemap

#### 9. **Google Analytics**
Add Google Analytics to [src/app/layout.tsx](src/app/layout.tsx):
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### 10. **Meta Description Optimization**
Review all page descriptions to ensure they:
- Are 155-160 characters (fits in search results)
- Include main keywords naturally
- Have a clear call-to-action

### 11. **Add Breadcrumb Schema**
For better navigation visibility in search results, add breadcrumb schema to section components.

## Testing Your SEO

### 1. **Check Metadata**
Use browser dev tools (F12) > Network > HTML > Response headers
- Look for meta tags in `<head>`
- Verify Open Graph and Twitter tags

### 2. **Test Structured Data**
- Google Structured Data Tester: https://validator.schema.org/
- Paste your site's structured data
- Ensure no errors or warnings

### 3. **Mobile Testing**
- Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Ensures responsive design works on mobile

### 4. **Page Speed**
- Google PageSpeed Insights: https://pagespeed.web.dev/
- Check mobile and desktop performance

### 5. **Check Sitemap**
- Visit: https://optivis.com/sitemap.xml
- Should return XML with all pages
- Already referenced in robots.txt

## SEO Best Practices Already Implemented

✅ **Technical SEO**
- Mobile-responsive design
- Fast-loading pages (Next.js static export)
- Proper HTML structure
- Meta tags and Open Graph
- Sitemap and robots.txt

✅ **On-Page SEO**
- Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Keyword-rich content
- Internal linking structure
- Alt text for images (add to img components)

✅ **Structured Data**
- Organization schema
- Service schemas
- Local business information
- WebSite schema

## Ongoing SEO Maintenance

### Monthly
- Check Google Search Console for errors
- Monitor keyword rankings
- Review analytics for top-performing pages
- Update meta descriptions if needed

### Quarterly
- Audit internal links
- Check for broken links
- Review and update content
- Optimize underperforming pages

### Annually
- Comprehensive SEO audit
- Competitor analysis
- Update structured data
- Review search queries and CTR

## Files Created/Modified

| File | Purpose |
|------|---------|
| [src/app/layout.tsx](src/app/layout.tsx) | Enhanced metadata and schema markup |
| [src/app/page.tsx](src/app/page.tsx) | Page-specific metadata |
| [src/app/sitemap.ts](src/app/sitemap.ts) | XML sitemap generation |
| [src/lib/seo.ts](src/lib/seo.ts) | SEO utilities and configuration |
| [public/robots.txt](public/robots.txt) | Robot crawler directives |
| [public/schema.json](public/schema.json) | Organization structured data |

## Resources

- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Support

For questions or issues with your SEO implementation:
1. Check Google Search Console for crawl errors
2. Use Google's Rich Result Test for structured data
3. Run PageSpeed Insights for performance issues
4. Consult Google Search Central documentation

---

**Last Updated:** April 21, 2026
**Status:** Ready for Google Search Console verification
