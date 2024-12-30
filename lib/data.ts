import { Data, IProductInput } from "@/types";
import { toSlug } from "./utils";

const products: IProductInput[] = [
  // T-shirts
  {
    name: "Nike Mens Slim-fit Long-Sleeve T-Shirt",
    slug: toSlug("Nike Mens Slim-fit Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    images: ["/images/p11-1.jpg", "/images/p11-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: "Nike",
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      "Made with chemicals safer for human health and the environment",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Red", "Black"],

    reviews: [],
  },
  {
    name: "Jerzees Men's Long-Sleeve T-Shirt",
    slug: toSlug("Jerzees Men Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/p13-1.jpg", "/images/p13-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 13.86,
    listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 13,
    description:
      "The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort. If you are looking for a versatile shirt that you can wear throughout the transitioning seasons, then look no further.",
    sizes: ["XL", "XXL"],
    colors: ["Green", "White"],

    reviews: [],
  },
  {
    name: "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts",
    slug: toSlug(
      "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts"
    ),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/p14-1.jpg", "/images/p14-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 26.95,
    listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 14,
    description:
      "Elevate your outfit with this soft long sleeve t shirt men. This full sleeves tee is the ultimate upgrade from your regular cotton t-shirt. ",
    sizes: ["XL", "XXL"],
    colors: ["Yellow", "White"],

    reviews: [],
  },
  // Jeans
  {
    name: "Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans",
    slug: toSlug("Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans"),
    category: "Jeans",
    brand: "Silver Jeans Co",
    images: ["/images/p21-1.jpg", "/images/p21-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      "Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    slug: toSlug(
      "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)"
    ),
    category: "Jeans",
    brand: "Levi's",
    images: ["/images/p22-1.jpg", "/images/p22-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 59.99,
    listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      "A veritable classic, this 505 is made to have a comfortable look and style.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Essentials Mens Straight-Fit Stretch Jean",
    slug: toSlug("Essentials Mens Straight-Fit Stretch Jean"),
    category: "Jeans",
    brand: "Essentials",
    images: ["/images/p23-1.jpg", "/images/p23-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 38.9,
    listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 23,
    numSales: 54,
    description:
      "These classic 5-pocket straight-fit jeans are crafted with a bit of stretch for additional comfort and to help maintain their shape",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Grey", "Blue"],

    reviews: [],
  },
  {
    name: "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans",
    slug: toSlug(
      "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans"
    ),
    category: "Jeans",
    brand: "Buffalo David Bitton",
    images: ["/images/p24-1.jpg", "/images/p24-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 69.99,
    listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 24,
    numSales: 53,
    description:
      "Stretch recycled denim jeans in an authentic and sanded wash blue. Features a comfortable low-rise waist with a relaxed fit at the leg. The distressed look gives these jeans an effortlessly worn-in feel. The eco-friendly logo patch in tan and red is at the back waistband. The signature maple leaf graphic is debossed at the zip-fly.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Dickies Mens Relaxed Fit Carpenter Jean",
    slug: toSlug("Dickies Mens Relaxed Fit Carpenter Jean"),
    category: "Jeans",
    brand: "Dickies",
    images: ["/images/p25-1.jpg", "/images/p25-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 25,
    numSales: 48,
    description:
      "Relaxed work jean with traditional carpenter-style pockets and logo patch at back pockets",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  // Watches
  {
    name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/p31-1.jpg", "/images/p31-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 530.0,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      "Casing: Case made of stainless steel Case shape: round Case colour: silver Glass: Hardlex Clasp type: Fold over clasp with safety",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch",
    slug: toSlug(
      "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch"
    ),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/p32-1.jpg", "/images/p32-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 375.83,
    listPrice: 400,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 32,
    numSales: 48,
    description:
      "Seiko 5 Sports Collection Inspired by vintage field/aviator style: Automatic with manual winding capability",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch ",
    slug: toSlug(
      "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch"
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/p33-1.jpg", "/images/p33-2.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 60.78,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 33,
    numSales: 48,
    description:
      "The Casio range is growing with this model  MWA-100H-1AVEF. Sporting a stainless steel case with a brushed finish, it will easily withstand all the shocks of everyday life.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch",
    slug: toSlug(
      "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch"
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/p34-1.jpg", "/images/p34-2.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 34.22,
    listPrice: 54.99,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 34,
    numSales: 48,
    description:
      "The new MTPVD01D-7EV is a classic 50 meter water resistant stainless steel watch now updated with a white dial. This elegant 3 hand, date display timepiece is perfect for any setting.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    slug: toSlug("Fossil Men's Grant Stainless Steel Quartz Chronograph Watch"),
    category: "Wrist Watches",
    brand: "Fossil",
    images: ["/images/p35-1.jpg", "/images/p35-2.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 171.22,
    listPrice: 225,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 35,
    numSales: 48,
    description:
      "Chronograph watch featuring silver- and blue-tone case, blue sunray dial, and silver-tone Roman numeral indices",
    sizes: [],
    colors: ["Blue", "Black", "Sliver"],

    reviews: [],
  },
  // Sneakers
  {
    name: "adidas Mens Grand Court 2.0 Training Shoes Training Shoes",
    slug: toSlug("adidas Mens Grand Court 2.0 Training Shoes Training Shoes"),
    category: "Shoes",
    brand: "adidas",
    images: ["/images/p41-1.jpg", "/images/p41-2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 81.99,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 41,
    numSales: 48,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["White", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes",
    slug: toSlug(
      "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes"
    ),
    category: "Shoes",
    brand: "ziitop",
    images: ["/images/p42-1.jpg", "/images/p42-2.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 39.97,
    listPrice: 49.96,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 42,
    numSales: 50,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["Beige", "Black", "Grey"],

    reviews: [],
  },
];

const data: Data = {
  products,
  headerMenus: [
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  carousels: [
    {
      title: "Most Popular Shoes For Sale",
      buttonCaption: "Shop Now",
      image: "/images/car1.jpg",
      url: "/search?category=Shoes",
      isPublished: true,
    },
    {
      title: "Best Sellers in T-Shirts",
      buttonCaption: "Shop Now",
      image: "/images/car2.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Best Deals on Wrist Watches",
      buttonCaption: "See More",
      image: "/images/car3.jpg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },
  ],
};

export default data;
