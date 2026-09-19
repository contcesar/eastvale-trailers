// Trailer types. Pages and cards are generated from this list, so add or
// edit a trailer here and it flows through the whole site.
//
// TODO: Add a real photo for each trailer at the `image` path below
//       (place files in /public/images/trailers/).
// TODO: Replace the `starterRate` placeholders with real pricing.
export const trailers = [
  {
    slug: 'enclosed',
    name: 'Enclosed Trailers',
    image: '/images/trailers/enclosed.jpg',
    blurb: 'Secure, weatherproof hauling for cargo and equipment.',
    description:
      'Enclosed trailers keep your cargo protected from weather, road debris, and prying eyes. They are ideal for moving valuable equipment, tools, furniture, and anything that needs to stay dry and locked down while you tow. Ramp or barn-door options make loading straightforward.',
    uses: [
      'Moving furniture and household goods',
      'Hauling tools and job-site equipment',
      'Transporting motorcycles or ATVs under cover',
      'Trade shows, deliveries, and mobile storage',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
  {
    slug: 'flatbed',
    name: 'Flatbed Trailers',
    image: '/images/trailers/flatbed.jpg',
    blurb: 'Open deck for large or oversized loads.',
    description:
      'Flatbed trailers give you a wide, open deck with no walls or roof, so you can carry oversized, awkward, or bulky loads that would never fit in an enclosed trailer. Load from any side and strap down with confidence.',
    uses: [
      'Lumber, building materials, and pallets',
      'Oversized or irregularly shaped loads',
      'Landscaping and construction hauls',
      'Equipment that needs top or side loading',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
  {
    slug: 'tilt',
    name: 'Tilt Trailers',
    image: '/images/trailers/tilt.jpg',
    blurb: 'Tilt deck for easy ground-level loading.',
    description:
      'Tilt trailers lower the deck to the ground so you can roll or drive equipment on without ramps. They make loading low-clearance vehicles and heavy rolling gear safer and far less of a struggle.',
    uses: [
      'Low-clearance vehicles and mowers',
      'Scissor lifts and rolling equipment',
      'Loads that are awkward to ramp',
      'Solo loading jobs',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
  {
    slug: 'car',
    name: 'Car Trailers',
    image: '/images/trailers/car.jpg',
    blurb: 'Haul vehicles low and level.',
    description:
      'Car trailers are built to carry vehicles securely and level, with tie-down points and a low deck height for confident loading. Perfect for moving a project car, a purchase across town, or a vehicle that is not road-ready.',
    uses: [
      'Moving a purchased or project vehicle',
      'Transporting a car that will not run',
      'Track days and car shows',
      'Dealer and private-party pickups',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
  {
    slug: 'utility',
    name: 'Utility Trailers',
    image: '/images/trailers/utility.jpg',
    blurb: 'Everyday hauling for landscaping, moving, and gear.',
    description:
      'Utility trailers are the everyday workhorse. Their open, low-side design handles landscaping debris, moving loads, mulch, appliances, and general gear with a fold-down ramp gate for easy loading.',
    uses: [
      'Landscaping and yard cleanup',
      'Moving day and dump runs',
      'Hauling mulch, gravel, and soil',
      'Appliances and general gear',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
  {
    slug: 'gooseneck',
    name: 'Gooseneck Trailers',
    image: '/images/trailers/gooseneck.jpg',
    blurb: 'Heavy-duty towing with a stable gooseneck hitch.',
    description:
      'Gooseneck trailers mount over the rear axle of your truck for a stable, high-capacity tow. They handle the heaviest loads with better maneuverability and weight distribution than a standard bumper-pull setup.',
    uses: [
      'Heavy equipment and machinery',
      'Large agricultural loads',
      'Multi-vehicle transport',
      'Commercial hauling jobs',
    ],
    starterRate: '$XX/day', // TODO: real rate
  },
];

export const getTrailer = (slug) => trailers.find((t) => t.slug === slug);
