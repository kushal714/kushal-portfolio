# KUSHAL S S — Personal Portfolio Website

A responsive five-page personal portfolio built with HTML5, CSS3, JavaScript and jQuery.

## Folder structure

```text
kushal-portfolio/
├── index.html
├── resume.html
├── biodata.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── profile-photo.jpeg
└── README.md
```

## Run locally (beginner steps)

1. Download and extract `kushal-portfolio.zip`.
2. Open the extracted `kushal-portfolio` folder.
3. Double-click `index.html` to open the homepage in your browser.
4. Use the top navigation to visit the other four pages.
5. Internet access is needed for Google Fonts and the jQuery CDN. The site layout and local files still work without them.

For a better editing experience, open the folder in Visual Studio Code. You can install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

## Resume PDF

1. Open `resume.html`.
2. Click **Save Resume as PDF**.
3. In the browser print dialog, choose **Save as PDF** as the destination.
4. Save the file as `Kushal_SS_Resume.pdf`.

## Activate the contact form

The contact form validates fields in the browser, but it will not deliver messages until you configure Web3Forms.

1. Visit https://web3forms.com/ and create an access key using `9686kushal@gmail.com`.
2. Open `contact.html` in a text editor.
3. Find `ADD_YOUR_WEB3FORMS_ACCESS_KEY`.
4. Replace that placeholder with your actual access key.
5. Save and test the form. Do not publish your access key in a public repository if your form provider advises against exposing it; follow the provider's current security guidance. A client-side static form necessarily exposes its configured key in page source, so use provider-side domain restrictions / spam controls if available.

## Publish using GitHub Pages

1. Create a GitHub account at https://github.com/ if you do not already have one.
2. Create a **public** repository named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).
3. Open the repository and choose **Add file → Upload files**.
4. Upload the *contents* of this project folder (the five HTML files, `css` folder, `js` folder, `assets` folder and README), not an extra enclosing folder.
5. Commit the files to the `main` branch.
6. In the repository, open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch **main** and folder **/(root)**, then click **Save**.
9. Wait for GitHub Pages to publish. Your site address should be `https://yourusername.github.io/`.
10. Open the address in a private/incognito window and check all five pages, the photograph, theme toggle, mobile menu, resume print button and contact form.

## Troubleshooting

- **404 page:** Check that `index.html` is at the repository root and Pages is set to `main` / `/(root)`.
- **Missing photo:** Confirm `assets/profile-photo.jpeg` was uploaded with the same spelling and capitalization.
- **Styles missing:** Confirm `css/style.css` and the `css` folder were uploaded.
- **JavaScript not working:** Confirm `js/script.js` exists and reload with Ctrl+F5.
- **Contact form not sending:** Replace the access-key placeholder, confirm the Web3Forms setup, and check spam/junk folders.
- **Changes not visible:** Wait a minute or two and hard-refresh the browser.

## Before publishing

Review every personal detail, especially your phone number, email, location, date of birth and gender. This is a public website. Remove any personal detail you do not want publicly visible.
