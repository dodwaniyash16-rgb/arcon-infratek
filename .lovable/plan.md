

## Favicon Update Plan

### Overview
Replace the default favicon with your uploaded company icon (`icon_new.png`) so it appears in browser tabs when the website is hosted on Lovable or on your own domain via Hostinger/GitHub.

### What Will Be Done

**Step 1: Copy Icon to Public Directory**
- Copy `user-uploads://icon_new.png` to `public/favicon.png`
- The public folder is required for favicons since they're referenced directly in HTML

**Step 2: Update index.html**
- Change the favicon link from the default `/favicon.ico` to reference the new `/favicon.png`
- Add multiple favicon sizes for better browser compatibility:
  ```html
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/favicon.png" />
  ```

### Files to Modify
| File | Action |
|------|--------|
| `public/favicon.png` | Create (copy from upload) |
| `index.html` | Update favicon link tags |

### Result
- Your "AR" logo will appear in browser tabs on all browsers
- Works on Lovable preview, published Lovable URL, and when hosted on Hostinger with your custom domain
- Apple touch icon included for iOS home screen bookmarks

### Technical Notes
- PNG format is widely supported and works well for favicons
- The magenta/pink gradient will display correctly
- No visual changes to the website itself - only the browser tab icon changes

