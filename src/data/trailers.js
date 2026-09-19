// Trailer types. Pages and cards are generated from this list, so add or
// edit a trailer here and it flows through the whole site.
//
// Rates below are current advertised rental rates, shown as a guide; final
// pricing depends on availability and rental length. Update the `rates` arrays
// and `starterRate` values here to change what appears on the site.
//
// TODO: Add a real photo for each trailer at the `image` path below
//       (place files in /public/images/trailers/).
export const trailers = [
  {
    slug: 'enclosed',
    name: 'Enclosed Trailers',
    image: '/images/trailers/enclosed.jpg',
    blurb: 'Keep your load dry and out of sight.',
    description:
      'An enclosed trailer keeps your load dry and locked up while you tow. Good for furniture, tools, or a motorcycle you do not want out in the rain. We rent them from 16 to 34 feet, with a ramp or barn doors for loading.',
    uses: [
      'Moving furniture and boxes',
      'Hauling tools and job-site gear',
      'Moving a motorcycle or ATV under cover',
      'Deliveries and short-term storage',
    ],
    starterRate: 'From $120/day',
    rates: [
      { size: '16 ft', daily: '$120', weekly: '$600' },
      { size: '18 ft', daily: '$130', weekly: '$650' },
      { size: '20 ft', daily: '$140', weekly: '$700' },
      { size: '24 ft', daily: '$165', weekly: '$825' },
      { size: '28 ft', daily: '$220', weekly: '$1,100' },
      { size: '34 ft (2-car hauler)', daily: '$275', weekly: '$1,650' },
    ],
  },
  {
    slug: 'flatbed',
    name: 'Flatbed Trailers',
    image: '/images/trailers/flatbed.jpg',
    blurb: 'Open deck for big, awkward loads.',
    description:
      'A flatbed gives you an open deck with no walls or roof. Load from any side and strap it down. Good for lumber, pallets, and loads that will not fit in an enclosed trailer. We rent them from 20 to 26 feet.',
    uses: [
      'Lumber, pallets, and building materials',
      'Long or wide loads',
      'Landscaping and construction hauls',
      'Loads you reach from the side or top',
    ],
    starterRate: 'From $140/day',
    rates: [
      { size: '20 ft', daily: '$140', weekly: '$700' },
      { size: '22 ft', daily: '$150', weekly: '$750' },
      { size: '24 ft', daily: '$175', weekly: '$875' },
      { size: '26 ft', daily: '$185', weekly: '$925' },
    ],
  },
  {
    slug: 'tilt',
    name: 'Tilt Trailers',
    image: '/images/trailers/tilt.jpg',
    blurb: 'Deck tilts to the ground. No ramps.',
    description:
      'The deck tilts down to the ground, so you drive or roll the load right on. No ramps to line up. Good for low cars, mowers, and heavy rolling gear. We rent them from 20 to 26 feet.',
    uses: [
      'Low cars and mowers',
      'Scissor lifts and rolling equipment',
      'Loads that are hard to ramp',
      'Loading on your own',
    ],
    starterRate: 'From $140/day',
    rates: [
      { size: '20 ft', daily: '$140', weekly: '$700' },
      { size: '22 ft', daily: '$150', weekly: '$750' },
      { size: '24 ft', daily: '$175', weekly: '$875' },
      { size: '26 ft', daily: '$185', weekly: '$925' },
    ],
  },
  {
    slug: 'car',
    name: 'Car Trailers',
    image: '/images/trailers/car.jpg',
    blurb: 'Haul a car low and level.',
    description:
      'A car trailer carries a vehicle level, with tie-down points and a low deck for easy loading. Good for a project car, a new buy, or a car that will not start. We rent single-car and two-car trailers from 18 to 34 feet.',
    uses: [
      'Moving a car you bought',
      'Hauling a car that will not run',
      'Track days and car shows',
      'Dealer and private-party pickups',
    ],
    starterRate: 'From $100/day',
    rates: [
      { size: '18 ft', daily: '$100', weekly: '$600' },
      { size: '20 ft', daily: '$110', weekly: '$660' },
      { size: '22 ft', daily: '$120', weekly: '$720' },
      { size: '32 ft (2-car)', daily: '$150', weekly: '$900' },
      { size: '34 ft (2-car)', daily: '$175', weekly: '$1,050' },
    ],
  },
  {
    slug: 'utility',
    name: 'Utility Trailers',
    image: '/images/trailers/utility.jpg',
    blurb: 'Everyday hauling for yard work and moving.',
    description:
      'A utility trailer handles the everyday stuff. Open sides, a low deck, and a fold-down ramp gate. Load yard debris, mulch, appliances, or moving boxes and go.',
    uses: [
      'Yard cleanup and landscaping',
      'Moving day and dump runs',
      'Mulch, gravel, and soil',
      'Appliances and general gear',
    ],
    starterRate: 'From $110/day',
    rates: [{ size: 'Standard utility', daily: '$110', weekly: '$500' }],
  },
  {
    slug: 'gooseneck',
    name: 'Gooseneck Trailers',
    image: '/images/trailers/gooseneck.jpg',
    blurb: 'Heavy loads with a stable gooseneck hitch.',
    description:
      'A gooseneck hitches over your truck\'s rear axle, so it tows steady and turns tighter than a bumper-pull. Built for the heaviest loads. We rent them at 30 and 40 feet.',
    uses: [
      'Heavy equipment and machinery',
      'Large farm loads',
      'Hauling more than one vehicle',
      'Commercial jobs',
    ],
    starterRate: 'From $185/day',
    rates: [
      { size: '30 ft', daily: '$185', weekly: '$925' },
      { size: '40 ft', daily: '$225', weekly: '$1,350' },
    ],
  },
];

export const getTrailer = (slug) => trailers.find((t) => t.slug === slug);
