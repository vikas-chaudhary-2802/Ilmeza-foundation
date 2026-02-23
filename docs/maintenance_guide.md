# Maintenance & Content Update Guide

This document provides instructions on how to maintain and update the Ilmeza Trust Hub website. As requested, we have implemented a central "Source of Truth" architecture to make future changes easy and consistent.

## Centralized Content Management

All website text, image arrays, and brand details are stored in a single file:
`src/data/siteConfig.ts`

### How to Update Content

1.  **Open the Configuration File**:
    Navigate to `src/data/siteConfig.ts` in your code editor.

2.  **Locate the Section**:
    The file is organized by page and component:
    - `brand`: Global details (Email, Tagline, Social Links).
    - `home`: Homepage content and stats.
    - `about`: Story, Vision, and Mission.
    - `getInvolved`: Volunteer and Partner sections.

3.  **Change Text**:
    Simply edit the string values. For example, to change the vision heading:
    ```typescript
    vision: {
      title: "Vision",
      heading: "New Vision Heading Here",
      description: "Updated description..."
    }
    ```

4.  **Update Images (Interactive Swap)**:
    Most sections use an `images` array for the "Click to Swap" feature. To add or change images, update the URLs in the array:
    ```typescript
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
      "/images/local-asset.png"
    ]
    ```
    - The first image in the array is the one shown on page load.
    - You can add as many images as you like; the component will cycle through them automatically on click.

### Best Practices for Images
- **Resolution**: Use high-resolution images (at least 1920x1080 for hero sections, 1000x1000 for squares).
- **Format**: `.webp` or `.jpg` are recommended for performance.
- **Reliability**: If using external links (like Unsplash), ensure they are direct links to the image file.

## Visibility & Design
We have implemented **High-Contrast Glassmorphism**. If you notice text becoming hard to read after changing a background image:
1.  Ensure you are using `text-foreground` or `text-white` classes in the component.
2.  The `glass-card` component already includes a backdrop blur to help with legibility.

## Contact & Donation Information
To update the organization's email, social media handles, or donation QR:
- **Email, Socials & Forms**: Modify the `brand` section in `siteConfig.ts`. This includes the `web3formsKey` for your contact forms.
- **Donation QR**: Update the `donate` section in `siteConfig.ts`. Replace the `qrPath` with your new image path and update the `upiId` as needed.

---
*Developed by Senior Engineering & Founder Team (30+ years XP)*
