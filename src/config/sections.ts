import AboutSectionOne from "@components/About/AboutSectionOne.astro";
import ExperienceSection from "../components/Experience/ExperienceSection.astro";
import ReferenceSection from "../components/Reference/ReferenceSection.astro";
import StackSection from "@components/Stack/StackSection.astro";
import ContactFormOne from "../components/Contact/ContactFormOne.astro";
import EndorsementSection from "../components/Endorsement/EndorsementSection.astro";

export const sections = [
  {
    title: "About me",
    icon: "heroicons:user-circle",
    name: "about",
    component: AboutSectionOne,
  },
  {
    title: "Experience",
    icon: "heroicons:briefcase",
    name: "experience",
    component: ExperienceSection,
  },
  {
    title: "Endorsements",
    icon: "heroicons:chat-bubble-left-right",
    name: "endorsements",
    component: EndorsementSection,
  },
  {
    title: "Stack",
    icon: "heroicons:code-bracket-square",
    name: "stack",
    component: StackSection,
  },
  {
    title: "References",
    icon: "heroicons:document-magnifying-glass",
    name: "references",
    component: ReferenceSection,
  },
  {
    title: "Contact me",
    icon: "heroicons:chat-bubble-bottom-center-text",
    name: "contact",
    component: ContactFormOne,
  },
];
