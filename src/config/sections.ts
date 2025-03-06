import AboutSectionOne from "@components/About/AboutSectionOne.astro";
import ExperienceSectionOne from "@components/Experience/ExperienceSectionOne.astro";
import ReferenceSectionOne from "@components/Reference/ReferenceSectionOne.astro";
import StackSectionOne from "@components/Stack/StackSectionOne.astro";
import ContactFormOne from "@components/Contact/ContactFormOne.astro";
import EndorsementSection from "@components/Endorsement/EndorsementSection.astro";

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
    component: ExperienceSectionOne,
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
    component: StackSectionOne,
  },
  {
    title: "References",
    icon: "heroicons:document-magnifying-glass",
    name: "references",
    component: ReferenceSectionOne,
  },
  {
    title: "Contact me",
    icon: "heroicons:chat-bubble-bottom-center-text",
    name: "contact",
    component: ContactFormOne,
  },
];
