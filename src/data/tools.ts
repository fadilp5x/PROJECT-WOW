export interface ToolItem {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  tags: string[];
}

export const TOOLS_DATA: ToolItem[] = [
  {
    id: "tool-time",
    category: "TIME ANALYSIS",
    title: "Time Intelligence",
    headline: "Time doesn't disappear. It gets lost.",
    description: "Understand waiting time and delays in public queues. Reveal hidden friction, measure wasted collective hours, and identify concrete opportunities for infrastructural improvement.",
    ctaText: "Launch Time Intelligence",
    ctaUrl: "#launch-time-intelligence",
    tags: ["Wait-Time Decay", "Queue Friction", "Productivity Simulation"]
  },
  {
    id: "tool-student",
    category: "PRODUCTIVITY",
    title: "Student Time Tracker",
    headline: "Every hour tells a story.",
    description: "Understand how students distribute their time, isolate fragmentation patterns, and discover structured opportunities to protect energy and master daily academic routines.",
    ctaText: "Explore Student Tracker",
    ctaUrl: "#launch-student-tracker",
    tags: ["Cognitive Flow Audit", "Context-Switching", "Routine Synthesis"]
  },
  {
    id: "tool-group",
    category: "COLLABORATION INTELLIGENCE",
    title: "Group Contribution Analyzer",
    headline: "See the effort behind every message.",
    description: "Upload exported group conversations and let AI analyze participation patterns, timeline involvement, and distribution balance across collaborative teams.",
    ctaText: "Explore Group Analyzer",
    ctaUrl: "#launch-group-analyzer",
    tags: ["Participation Streams", "Timeline Involvement", "Contribution Balance"]
  },
  {
    id: "tool-privacy",
    category: "DIGITAL PRIVACY",
    title: "Privacy & Terms Analyzer",
    headline: "Before you agree, understand.",
    description: "Understand app permissions and legal terms. Discover what personal information, financial identifiers, background sensors, and digital access an application actually requests.",
    ctaText: "Explore Privacy Analyzer",
    ctaUrl: "#launch-privacy-analyzer",
    tags: ["Geolocation Flags", "Data Broker Mapping", "Rights Revocation"]
  },
  {
    id: "tool-metadata",
    category: "DIGITAL FORENSICS",
    title: "Image Metadata Intelligence",
    headline: "Your images have hidden stories.",
    description: "Inspect image metadata to discover available capture devices, timestamps, and embedded GPS coordinates. Create a cleaned copy with sensitive metadata removed before sharing.",
    ctaText: "Explore Metadata Analyzer",
    ctaUrl: "#launch-metadata-analyzer",
    tags: ["EXIF / IPTC / XMP", "GPS Coordinates", "Zero-Loss Sanitization"]
  }
];
