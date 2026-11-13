# Kartik & Sangini — Wedding Invitation

A responsive, single-page wedding invitation inspired by the supplied Sam & Tam recording.

## Personalised details currently included
- Kartik & Sangini
- 1–2 January 2027
- Jaipur, Rajasthan
- Shah Family
- Events: Dev Darshan, Haldi Carnival, Mayera, Sangeet Night and Nikasi

## Publish with GitHub Pages
1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select **master** and **/(root)**, then Save.
5. Wait for the Pages deployment. Your site will be available at the repository's GitHub Pages URL.

## Update details
Edit `index.html` to change event descriptions, names, dates and venue text. Edit `styles.css` for the design. The event dates/times and venue are intentionally marked as to-be-announced because they were not supplied.

## RSVP note
The current form saves responses in the browser's local storage on the device used to submit it. This is suitable for a preview, but it does **not** collect responses centrally across guests or send them to you. For shared RSVP tracking, connect a hosted database/form service (for example Supabase) and replace the local-storage handler in `app.js` with its submission API before sharing the invitation widely.

All decorative event illustrations are CSS artwork; no copyrighted assets from the reference site are included.
