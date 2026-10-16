# NMS Mailer

Small page that sends NMS Ledger invoices and statements (PDF attached) from the signed-in user's Microsoft 365 mailbox through Microsoft Graph (`/me/sendMail`).

- Hosted on GitHub Pages: https://willy-nms.github.io/nms-mailer/
- NMS Ledger opens it in a popup and hands it the email with `postMessage`. The user reviews it and presses **Send**.
- Sign-in with MSAL (auth code + PKCE). App registration "NMS Mailer" in Entra ID: SPA, delegated `Mail.Send` + `User.Read`, single tenant, assignment required. **No client secret.**
- Nothing secret is stored in this repo. Tokens stay in the user's browser.
