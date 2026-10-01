# IPRG website

Public site for the **Indian Priests and Religious Gathering** (Paris). Reworked from the original single-file draft on the Desktop.

## How to run

No install is required. Double-click `index.html`, or in Cursor/VS Code use **Live Server** / **Open with Live Preview** so the page reloads as you edit.

The page needs internet the first time: fonts, Tailwind, icons, and photos load from CDNs.

## What lives where

| File | Role |
| --- | --- |
| `index.html` | All page content and layout (Tailwind classes) |
| `css/styles.css` | Background images and a few extras Tailwind does not cover |
| `js/main.js` | Mobile menu and footer year |
| `assets/banner.webp` | Hero banner (group photo, 8 Nov 2025) |

## Next useful edits

1. Put a real logo file in `assets/logo.png` and point the `<img>` tags at it (Google Drive links often fail in the browser).
2. Replace the `#` on the Member Directory button with the real shared document URL.
