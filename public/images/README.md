# Images

The site uses WebP for photos (smaller files, faster load). Add your real
photos here at these paths:

- `eastvale-trailers-logo.webp`: header logo (added)
- `hero.webp`: homepage hero photo (added)
- `og.jpg`: social share image, about 1200x630 (TODO; keep JPG/PNG for best
  social-preview support)
- `trailers/enclosed.webp`
- `trailers/flatbed.webp` (added)
- `trailers/tilt.webp`
- `trailers/car.webp`
- `trailers/utility.webp`
- `trailers/gooseneck.webp`

To convert a new photo to WebP, you can use `sharp` (already installed):
`npx sharp -i photo.jpg -o trailers/enclosed.webp` or any image tool.

Until a trailer photo exists, cards and image slots show a "Photo coming soon"
placeholder, so the site still builds and looks clean. Anything in `/public` is
served from the site root (for example, `/images/trailers/car.webp`).
