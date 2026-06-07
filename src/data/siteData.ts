import {
  FaBed,
  FaBolt,
  FaBroom,
  FaCar,
  FaCouch,
  FaDumbbell,
  FaHeadset,
  FaShieldAlt,
  FaTint,
  FaTshirt,
  FaUtensils,
  FaWifi
} from "react-icons/fa";
import { imageFor } from "@/lib/constants";

export const heroImage = imageFor("photo-1560448204-e02f11c3d0e2");

export const highlights = ["AC Rooms", "Non AC Rooms", "Food", "WiFi", "24x7 Security"];

export const homeGalleryImages = [
  { src: "/gallery/building1.jpg", alt: "PG building exterior" },
  { src: "/gallery/bed2.jpg", alt: "PG room bed" },
  { src: "/gallery/bathroom3.jpg", alt: "PG bathroom" },
  { src: "/gallery/kitchen4.jpg", alt: "PG kitchen" },
  { src: "/gallery/washing-machine5.jpg", alt: "Washing machine facility" },
  { src: "/gallery/dining6.jpg", alt: "PG dining area" },
  { src: "/gallery/study-area7.jpg", alt: "PG study area" },
  { src: "/gallery/study-area8.jpg", alt: "Student study space" },
  { src: "/gallery/Gym9.jpg", alt: "PG gym area" }
];

export const stats = [
  { label: "Students", value: "500+" },
  { label: "Rooms", value: "50+" },
  { label: "Security", value: "24x7" },
  { label: "High Speed WiFi", value: "150 Mbps" }
];

export const rooms = [
  {
    slug: "single-ac",
    title: "Single AC Room",
    type: "Single",
    ac: true,
    price: 13500,
    available: "Available",
    images: ["/single-room.jpg", "/gallery/bed2.jpg"],
    features: ["Private bed", "Study desk", "AC", "Attached washroom", "Meals included"]
  },
  {
    slug: "single-non-ac",
    title: "Single Non AC Room",
    type: "Single",
    ac: false,
    price: 13500,
    available: "Available",
    images: ["/single-room.jpg", "/gallery/study-area7.jpg"],
    features: ["Private space", "Ventilated room", "Study desk", "Meals included", "WiFi"]
  },
  {
    slug: "double-sharing-ac",
    title: "Double Sharing AC",
    type: "Double",
    ac: true,
    price: 11000,
    available: "Available",
    images: ["/Double%20Seater.jpg", "/gallery/bed2.jpg"],
    features: ["Two beds", "AC", "Wardrobes", "Housekeeping", "Power backup"]
  },
  {
    slug: "double-sharing-non-ac",
    title: "Double Sharing Non AC",
    type: "Double",
    ac: false,
    price: 11000,
    available: "Available",
    images: ["/Double%20Seater.jpg", "/gallery/study-area8.jpg"],
    features: ["Two beds", "Natural light", "Common balcony", "WiFi", "Meals included"]
  },
  {
    slug: "triple-sharing-ac",
    title: "Triple Sharing AC",
    type: "Triple",
    ac: true,
    price: 9000,
    available: "Available",
    images: ["/triple-room.jpg", "/gallery/bed2.jpg"],
    features: ["Three beds", "AC", "Lockers", "Study area", "CCTV coverage"]
  },
  {
    slug: "triple-sharing-non-ac",
    title: "Triple Sharing Non AC",
    type: "Triple",
    ac: false,
    price: 9000,
    available: "Available",
    images: ["/triple-room.jpg", "/gallery/study-area7.jpg"],
    features: ["Budget friendly", "Three beds", "Lockers", "Daily cleaning", "Meals included"]
  }
];

export const facilities = [
  { title: "WiFi", icon: FaWifi, text: "High speed internet for classes, streaming, and late-night submissions." },
  { title: "Food", icon: FaUtensils, text: "Fresh vegetarian meals with breakfast, lunch, snacks, and dinner." },
  { title: "Laundry", icon: FaTshirt, text: "Convenient laundry support with weekly pickup and delivery." },
  { title: "Power Backup", icon: FaBolt, text: "Reliable backup for lights, WiFi, fans, and essential services." },
  { title: "CCTV Security", icon: FaShieldAlt, text: "Monitored entrances and common spaces for safer living." },
  { title: "RO Water", icon: FaTint, text: "Filtered drinking water available throughout the day." },
  { title: "Housekeeping", icon: FaBroom, text: "Regular room and common-area cleaning by trained staff." },
  { title: "Parking", icon: FaCar, text: "Secure two-wheeler parking for residents." },
  { title: "Study Area", icon: FaBed, text: "Quiet corners and desks designed for focused study sessions." },
  { title: "Common Room", icon: FaCouch, text: "Relax, watch matches, and meet other students after class." },
  { title: "Gym", icon: FaDumbbell, text: "Basic fitness setup for daily movement and wellness." },
  { title: "24x7 Support", icon: FaHeadset, text: "Responsive staff support whenever residents need help." }
];

export const gallery = [
  { category: "Campus", src: "/gallery/building1.jpg", title: "PG Building" },
  { category: "Rooms", src: "/gallery/bed2.jpg", title: "Room Bed" },
  { category: "Facilities", src: "/gallery/bathroom3.jpg", title: "Bathroom" },
  { category: "Food", src: "/gallery/kitchen4.jpg", title: "Kitchen" },
  { category: "Facilities", src: "/gallery/washing-machine5.jpg", title: "Washing Machine" },
  { category: "Food", src: "/gallery/dining6.jpg", title: "Dining Area" },
  { category: "Facilities", src: "/gallery/study-area7.jpg", title: "Study Area" },
  { category: "Facilities", src: "/gallery/study-area8.jpg", title: "Study Space" },
  { category: "Facilities", src: "/gallery/Gym9.jpg", title: "Gym Area" }
];

export const pricingPlans = [
  { name: "Single AC", price: 13500, deposit: 10000, recommended: false, features: ["AC", "Private room", "Meals", "WiFi", "Laundry support"] },
  { name: "Single Non AC", price: 13500, deposit: 8000, recommended: false, features: ["Private room", "Meals", "WiFi", "Housekeeping"] },
  { name: "Double Sharing AC", price: 11000, deposit: 8000, recommended: true, features: ["AC", "Meals", "WiFi", "Power backup", "CCTV"] },
  { name: "Double Sharing Non AC", price: 11000, deposit: 7000, recommended: false, features: ["Meals", "WiFi", "Housekeeping", "RO water"] },
  { name: "Triple Sharing AC", price: 9000, deposit: 7000, recommended: false, features: ["AC", "Meals", "WiFi", "Lockers"] },
  { name: "Triple Sharing Non AC", price: 9000, deposit: 6000, recommended: false, features: ["Meals", "WiFi", "Lockers", "Budget plan"] }
];

export const testimonials = [
  { name: "Aarav Sharma", university: "Galgotias University", quote: "Clean rooms, good food, and the staff responds quickly. It feels organized and secure." },
  { name: "Nidhi Singh", university: "NIU University", quote: "The location saves a lot of travel time. WiFi and study space are the biggest plus points." },
  { name: "Rohan Verma", university: "Galgotias University", quote: "I liked the transparent pricing and the simple booking process. No surprises after moving in." }
];
