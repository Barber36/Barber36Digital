
# Barber 36 - Static Website

A professional barbering website for Barber 36 in Sutton Coldfield.

## Features

- Responsive design optimized for all devices
- Service showcase with pricing
- Google Calendar integration for online booking
- Contact information and location details
- Professional gallery section

## Local Development

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

## GitHub Pages Deployment

1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. The workflow will automatically deploy your site

## Building for Production

To build the static files locally:

```bash
cd client
npm run build
```

The built files will be in the `client/dist` directory.

## Configuration

- Update the `base` path in `client/vite.config.ts` to match your GitHub repository name
- The Google Calendar booking integration is embedded and ready to use
- Contact information is already configured for Barber 36

## Contact Information

- **Address**: 36A High Street, Sutton Coldfield, Birmingham, West Midlands, B73 6LB
- **Phone**: 0121 725 1977
- **Email**: barber36sutton@gmail.com
