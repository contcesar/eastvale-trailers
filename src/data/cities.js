// Service-area cities. City pages are generated from this list.
// Eastvale is the home base (defined in business.js); these are the
// surrounding cities we serve.
export const cities = [
  {
    slug: 'corona',
    name: 'Corona',
    intro:
      'Renting a trailer in Corona is quick. We are a short tow away, so you can grab a utility trailer for a dump run, a flatbed for a big load, or an enclosed trailer for a move. Reserve it and go.',
  },
  {
    slug: 'norco',
    name: 'Norco',
    intro:
      'Norco runs on trucks and hard work. We rent trailers for hauling feed, equipment, and gear, or moving a project around the property. Pickup is close by.',
  },
  {
    slug: 'jurupa-valley',
    name: 'Jurupa Valley',
    intro:
      'Need a trailer in Jurupa Valley? We rent utility, flatbed, enclosed, and heavy-duty trailers for home projects, moves, and job-site hauling. Pick your size and get to work.',
  },
  {
    slug: 'chino',
    name: 'Chino',
    intro:
      'Trailer rentals for Chino homes and businesses. Utility, flatbed, enclosed, and gooseneck trailers are all a short tow from our Eastvale lot.',
  },
  {
    slug: 'chino-hills',
    name: 'Chino Hills',
    intro:
      'From a weekend move to a landscaping haul, Chino Hills customers get clean trailers and clear rates. Reserve ahead and pick up when you are ready.',
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    intro:
      'Ontario homeowners and businesses rent trailers from us for hauling and deliveries. Enclosed, flatbed, and utility trailers are ready when you are.',
  },
  {
    slug: 'riverside',
    name: 'Riverside',
    intro:
      'We rent trailers to Riverside for jobs big and small. Book a utility trailer for a one-day dump run or a gooseneck for a multi-day haul. Reserve the size you need.',
  },
];

export const getCity = (slug) => cities.find((c) => c.slug === slug);
