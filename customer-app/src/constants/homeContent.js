import { Wand2, Camera, Video, Tv } from "lucide-react";

const CATEGORY_ICONS = {
  editing: Wand2,
  photography: Camera,
  videography: Video,
  broadcast: Tv,
};

export const SERVICE_CATEGORIES = [
  {
    id: "editing",
    label: "Editing",
    img: "https://picsum.photos/seed/lumen-editing/700/850",
    items: [
      {
        title: "Photo & Video Editing",
        desc: "Color grading, retouching, and post-production for photo and film delivery.",
      },
    ],
  },
{
    id: "photography",
    label: "Photography",
    img: "https://picsum.photos/seed/lumen-photography/700/850",
    groups: [
      {
        label: "Candid Family",
        items: [
          { title: "Documentary Photography", tag: "Pure candid" },
          { title: "Lifestyle Photography", tag: "Soft candid" },
          { title: "Street Photography", tag: "Artistic candid" },
          { title: "Staged / Directed Candid", tag: "Polished candid" },
        ],
      },
      {
        label: "Traditional Family",
        items: [
          { title: "Classical / Posed Portrait", tag: "Pure traditional" },
          { title: "Traditional Wedding Photography", tag: "Formal traditional" },
          { title: "Fine Art Portrait", tag: "Artistic traditional" },
        ],
      },
    ],
  },
{
    id: "videography",
    label: "Videography",
    img: "https://picsum.photos/seed/lumen-videography/700/850",
    items: [
      { title: "Event Videography", desc: "Full coverage of weddings, parties, and gatherings." },
      { title: "Commercial / Product", desc: "Product-focused video for ads and e-commerce." },
      { title: "Corporate Video", desc: "Internal, training, and brand-facing corporate content." },
      { title: "Music Video", desc: "Concept-driven video production for artists." },
      { title: "Documentary", desc: "Long-form storytelling and interview-based film." },
      { title: "Real Estate", desc: "Property walkthroughs and listing video." },
      { title: "Sports / Action", desc: "High-motion capture for sports and action content." },
      { title: "Scientific / Macro", desc: "Precision macro and technical video capture." },
      { title: "Live Production", desc: "Multi-camera live event production." },
    ],
  },
  {
    id: "broadcast",
    label: "Broadcast",
    img: "https://picsum.photos/seed/lumen-broadcast/700/850",
    items: [
      { title: "News (Live / ENG)", desc: "Electronic news gathering and live broadcast segments." },
      { title: "Sports Broadcast", desc: "Live sports coverage and multi-angle production." },
      { title: "Studio Talk Shows / Panel", desc: "Multi-camera studio talk and panel formats." },
      { title: "Game Shows", desc: "Studio-based game show production." },
      { title: "Awards / Red Carpet", desc: "Live event and red carpet broadcast coverage." },
      { title: "Live Events", desc: "General live event broadcast production." },
    ],
  },
];

// Attaches the icon + a flat service count to each category, without
// duplicating the icon/count by hand for every entry above.
SERVICE_CATEGORIES.forEach((cat) => {
  cat.icon = CATEGORY_ICONS[cat.id];
  cat.count = cat.groups
    ? cat.groups.reduce((sum, g) => sum + g.items.length, 0)
    : cat.items.length;
});

export const PROCESS_STEPS = [
  { index: "01", title: "Inquire", desc: "Tell us about your vision and date." },
  { index: "02", title: "Consult", desc: "We align on style, location, and shot list." },
  { index: "03", title: "Shoot", desc: "Session day — relaxed, directed, unhurried." },
  { index: "04", title: "Deliver", desc: "Edited gallery delivered to your dashboard." },
];

export const FEATURED_WORK = [
  { id: 1, title: "Coastal Editorial", category: "Portrait", img: "https://picsum.photos/seed/lumen1/800/1000" },
  { id: 2, title: "Amara & Jide", category: "Wedding", img: "https://picsum.photos/seed/lumen2/800/1000" },
  { id: 3, title: "Nord Studio Campaign", category: "Commercial", img: "https://picsum.photos/seed/lumen3/800/1000" },
  { id: 4, title: "Golden Hour Series", category: "Portrait", img: "https://picsum.photos/seed/lumen4/800/1000" },
  { id: 5, title: "The Ellery Reception", category: "Wedding", img: "https://picsum.photos/seed/lumen5/800/1000" },
  { id: 6, title: "Atelier Reel", category: "Film", img: "https://picsum.photos/seed/lumen6/800/1000" },
];

export const TESTIMONIALS = [
  {
    quote:
      "They didn't just photograph our wedding — they understood our story before the first frame was even shot. Six months later, we still can't stop looking at the gallery.",
    name: "Amara & Jide O.",
    context: "Wedding — Riverside Reception",
    rating: 5,
  },
  {
    quote:
      "MSP Videography delivered a campaign that outperformed every agency shoot we'd run before. Sharp direction, faster turnaround, and the product shots practically sell themselves.",
    name: "Divya Menon",
    context: "Marketing Lead, Nord Studio",
    rating: 5,
  },
  {
    quote:
      "I've never felt comfortable in front of a camera — until this session. They somehow made a two-hour shoot feel like twenty minutes, and the results still stop me every time I open the gallery.",
    name: "Priya K.",
    context: "Portrait Client",
    rating: 4,
  },
];