# How to Deploy FleurVerze

Since this is a simple static website (HTML, CSS, JS), deploying it is very easy and often free.

## Option 1: Netlify (Recommended for beginners)
1.  Go to [Netlify Drop](https://app.netlify.com/drop).
2.  Drag and drop the entire `flower-bouquet` folder onto the page.
3.  **Done!** Netlify will give you a live URL (e.g., `https://random-name.netlify.app`).

## Option 2: Vercel
1.  Install Vercel CLI or go to [Vercel.com](https://vercel.com).
2.  If using the website, simply import your project from GitHub (if you pushed it there) or use the Vercel CLI command `vercel` in your terminal inside the project folder.

## Option 3: GitHub Pages
1.  Create a GitHub repository.
2.  Push your code to it.
3.  Go to **Settings** > **Pages** and select the `main` branch.

## Getting a Custom Domain (e.g., www.fleurverze.com)
1.  **Buy the Domain**: You need to purchase your desired name from a registrar like **GoDaddy**, **Namecheap**, or **Google Domains**.
2.  **Connect it**:
    *   On Netlify/Vercel: Go to "Domain Settings".
    *   Click "Add Custom Domain".
    *   Enter your `www.yourdomain.com`.
    *   Follow the instructions to add the DNS records (usually a CNAME or A record) in your Domain Registrar's dashboard.
