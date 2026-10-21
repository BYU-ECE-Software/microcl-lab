import type { CircuitChallenge, Course, ExternalLink } from "./types";

export const about = {
  introduction:
    "The Micropower Circuits Laboratory (MCL) investigates high-performance, low-power designs for analog/mixed-signal/RF integrated circuits. Our research projects include ultra-low-power analog front-end circuits, energy-efficient data converters, and novel signal-acquisition and conditioning circuits for sensors and communication systems. Please feel free to reach out to me regarding research, collaboration, and consulting!",
  invitation:
    "Do you have what it takes to be a great circuit designer? Test your skills here!",
};

export const circuitChallenges: CircuitChallenge[] = [
  {
    prompt:
      "Calculate the small-signal gain of the amplifiers in a) and b). What are the trade-offs between the two topologies?",
    image: "/images/differential-amplifiers.png",
    alt: "Two differential amplifier circuit topologies",
    width: 664,
    height: 301,
  },
  {
    prompt:
      "What is the minimum Iss to start up the oscillator? What is the maximum Iss before the transistors go into triode? How does Cp affect the phase noise of the oscillator?",
    image: "/images/cross-coupled-oscillator.png",
    alt: "Cross-coupled transistor oscillator circuit",
    width: 223,
    height: 393,
  },
  {
    prompt:
      "Assuming that the capacitors’ sizes are fixed, what is the minimum amplifier open-loop gain (gmR) to achieve 10-bit precision (precision referred to input)? What is the minimum gm to achieve 10-bit settling in T seconds?",
    image: "/images/feedback-amplifier.png",
    alt: "Capacitive-feedback amplifier circuit",
    width: 386,
    height: 188,
  },
];

export const biography = {
  portrait: "/images/wood-chiang-portrait.jpg",
  portraitAlt: "Professor Shiuh-hua Wood Chiang",
  paragraphs: [
    "Shiuh-hua Wood Chiang received his B.S. degree in Computer Engineering from the University of Waterloo, Waterloo, Canada in 2007, the M.S. degree in Electrical Engineering from the University of California, Irvine in 2009, and the Ph.D. degree in Electrical Engineering from the University of California, Los Angeles in 2013. He was a Postdoctoral Scholar in the Communication Circuits Laboratory at the University of California, Los Angeles in 2013.",
    "From 2013 to 2014 he was a Senior Design Engineer in Qualcomm. He joined the Department of Electrical and Computer Engineering of Brigham Young University in 2014 as a faculty member. His research interests include low-power analog/mixed-signal/RF circuits for communications and sensing applications. He is an Associate Editor for IEEE Solid-State Circuits Letters (SSCL) and IEEE Open Journal of Circuits and Systems (OJCAS), and an IEEE Senior Member.",
  ],
  departmentUrl: "https://ece.byu.edu/",
};

export const courses: Course[] = [
  { code: "ECEn 549", title: "VLSI Communication Circuit Design" },
  { code: "ECEn 548", title: "Analog CMOS Circuit Design" },
  { code: "ECEn 543", title: "CMOS Amplifier Design" },
  { code: "ECEn 475/476", title: "Capstone" },
  { code: "ECEn 445", title: "Mixed-Signal VLSI" },
  { code: "ECEn 340", title: "Electronic Circuit Design" },
  { code: "ECEn 301", title: "Elements of Electrical Engineering" },
];

export const relatedLinks: ExternalLink[] = [
  {
    label: "Faculty profile, Brigham Young University",
    href: "https://ecedev.byu.edu/people/faculty/wood-chiang/",
  },
  {
    label: "Communication Circuits Laboratory, UCLA",
    href: "http://www.seas.ucla.edu/brweb/",
  },
  {
    label: "Integrated Scientific Imaging Laboratory, UC Irvine",
    href: "http://engineering.uci.edu/users/stuart-kleinfelder",
  },
];

export const contact = {
  name: "Prof. Shiuh-hua Wood Chiang",
  department: "Department of Electrical and Computer Engineering",
  university: "Brigham Young University",
  city: "Provo, UT 84602",
  phoneDisplay: "(801) 422-6749",
  phoneHref: "tel:+18014226749",
  email: "wochiang@byu.edu",
};
