import { HomestayData } from '@/types/homestay';

const homestayData: HomestayData = {
  hero: {
    title: "We provide the best",
    titleHighlight: "PROPERTY FOR YOU",
    subtitle: "GET YOUR DREAM HOME",
    description: "Aliquam Porta Nisl Dolor, Molestie Pellentesque Elit Molestie In. Morbi Metus Neque, Elementum Ullamcorper Hendrerit Eget, Tincidunt Et Nisl. Sed Magna Nunc, Consequat Vel Aliquam Vitae, Porta Ac Mi.",
    cta: "Find Your Stay",
    properties: [
      {
        id: 1,
        image: "/images/hero-main.png",
        title: "Modern Villa with Pool",
        location: "Luxury Estate"
      },
      {
        id: 2,
        image: "/placeholder.svg?height=600&width=800",
        title: "Urban Apartment",
        location: "City Center"
      },
      {
        id: 3,
        image: "/placeholder.svg?height=600&width=800",
        title: "Countryside Cottage",
        location: "Rural Retreat"
      },
      {
        id: 4,
        image: "/placeholder.svg?height=600&width=800",
        title: "Beachfront House",
        location: "Ocean View"
      }
    ]
  },
  features: [
    {
      icon: "Home",
      title: "Authentic Local Experience",
      description: "Stay with local families and immerse yourself in genuine cultural experiences"
    },
    {
      icon: "MapPin",
      title: "Prime Locations",
      description: "Carefully selected homes in the heart of vibrant neighborhoods and scenic areas"
    },
    {
      icon: "Heart",
      title: "Comfort & Care",
      description: "Enjoy home-cooked meals, comfortable rooms, and personalized attention"
    },
    {
      icon: "DollarSign",
      title: "Great Value",
      description: "Affordable rates with breakfast, WiFi, and local guidance included"
    }
  ],
  gallery: [
    {
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      title: "Comfortable Bedrooms",
      description: "Rest in thoughtfully designed spaces"
    },
    {
      image: "https://images.pexels.com/photos/5661718/pexels-photo-5661718.jpeg",
      title: "Shared Dining",
      description: "Enjoy meals with your host family"
    },
    {
      image: "https://images.pexels.com/photos/10071390/pexels-photo-10071390.jpeg",
      title: "Scenic Views",
      description: "Wake up to breathtaking surroundings"
    },
    {
      image: "https://images.pexels.com/photos/15720195/pexels-photo-15720195.jpeg",
      title: "Common Areas",
      description: "Relax in welcoming shared spaces"
    }
  ],
 testimonials: [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  pricing: [
    {
      name: "Standard Room",
      price: "$45",
      period: "per night",
      features: ["Private bedroom", "Shared bathroom", "Breakfast included", "WiFi access", "Local guidance"],
      popular: false
    },
    {
      name: "Deluxe Room",
      price: "$65",
      period: "per night",
      features: [
        "Private bedroom",
        "Private bathroom",
        "All meals included",
        "WiFi access",
        "Local tours",
        "Airport pickup"
      ],
      popular: true
    },
    {
      name: "Family Suite",
      price: "$95",
      period: "per night",
      features: [
        "2 bedrooms",
        "Private bathroom",
        "All meals included",
        "WiFi access",
        "Local tours",
        "Airport pickup",
        "Laundry service"
      ],
      popular: false
    }
  ],
  contact: {
    email: "hello@homestayworld.com",
    phone: "+1 (555) 123-4567",
    address: "123 Travel Street, Adventure City, AC 12345",
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#"
    }
  }
};

export default homestayData;