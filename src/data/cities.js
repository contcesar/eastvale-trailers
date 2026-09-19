// Service-area cities. City pages are generated from this list.
// Eastvale is the home base (defined in business.js); these are the
// surrounding cities we serve.
export const cities = [
  {
    slug: 'corona',
    name: 'Corona',
    intro:
      'Renting a trailer in Corona is quick and local. Whether you are hauling landscaping debris, moving across town, or picking up a big-box purchase, we have the right trailer a short tow away.',
  },
  {
    slug: 'norco',
    name: 'Norco',
    intro:
      'Norco runs on horsepower and hard work, and our trailers are built for it. From hauling feed and equipment to moving projects around the ranch, we keep well-maintained trailers ready for pickup nearby.',
  },
  {
    slug: 'jurupa-valley',
    name: 'Jurupa Valley',
    intro:
      'Serving Jurupa Valley with dependable trailer rentals for home projects, moves, and job-site hauling. Reserve the size you need and get back to work.',
  },
  {
    slug: 'chino',
    name: 'Chino',
    intro:
      'Trailer rentals for Chino residents and businesses. Utility, flatbed, enclosed, and heavy-duty options are all available for a short tow from our Eastvale base.',
  },
  {
    slug: 'chino-hills',
    name: 'Chino Hills',
    intro:
      'From weekend moves to landscaping hauls, Chino Hills customers get clean, road-ready trailers and fair rates. Reserve ahead and pick up when you are ready.',
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    intro:
      'Ontario businesses and homeowners rely on us for straightforward trailer rentals. Enclosed cargo, flatbeds, and utility trailers are ready when your project is.',
  },
  {
    slug: 'riverside',
    name: 'Riverside',
    intro:
      'Serving Riverside with a full lineup of rental trailers. Whether it is a one-day dump run or a multi-day hauling job, reserve the trailer that fits and tow with confidence.',
  },
];

export const getCity = (slug) => cities.find((c) => c.slug === slug);
