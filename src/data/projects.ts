// Project Images
import cascadeTerrace from "@/assets/projects/cascade-terrace-garden.png";
import drywall01 from "@/assets/projects/drywall-01.png";
import drywall02 from "@/assets/projects/drywall-02.png";
import ellijayTower01 from "@/assets/projects/ellijay-tower-01.png";
import ellijayTower02 from "@/assets/projects/ellijay-tower-02.png";
import bangaloreMetro01 from "@/assets/projects/bangalore-metro-01.png";
import bangaloreMetro02 from "@/assets/projects/bangalore-metro-02.png";
import mixedUseResidential01 from "@/assets/projects/mixed-use-residential-01.png";
import mixedUseResidential02 from "@/assets/projects/mixed-use-residential-02.png";
import sfrSanDiego01 from "@/assets/projects/sfr-san-diego-01.png";
import sfrSanDiego02 from "@/assets/projects/sfr-san-diego-02.png";
import sfrHouston01 from "@/assets/projects/sfr-houston-01.png";
import sfrHouston02 from "@/assets/projects/sfr-houston-02.png";
import sfrJacksonville01 from "@/assets/projects/sfr-jacksonville-01.png";
import sfrJacksonville02 from "@/assets/projects/sfr-jacksonville-02.png";
import skylineTechOffice01 from "@/assets/projects/skyline-tech-office-01.png";
import industrialProcessPlant01 from "@/assets/projects/industrial-process-plant-01.png";
import industrialProcessPlant02 from "@/assets/projects/industrial-process-plant-02.png";
import jaipurRail01 from "@/assets/projects/jaipur-rail-01.png";
import jaipurRail02 from "@/assets/projects/jaipur-rail-02.png";
import universityResearch01 from "@/assets/projects/university-research-01.png";
import pharmaceuticalDublin01 from "@/assets/projects/pharmaceutical-dublin-01.png";
import dataCenterBoston01 from "@/assets/projects/data-center-boston-01.png";
import unicefSehore01 from "@/assets/projects/unicef-sehore-01.png";
import unicefVidisha01 from "@/assets/projects/unicef-vidisha-01.png";
import unicefUjjain01 from "@/assets/projects/unicef-ujjain-01.png";
import unicefRatlam01 from "@/assets/projects/unicef-ratlam-01.png";
import unicefBhopal01 from "@/assets/projects/unicef-bhopal-01.png";
import unicefJhabua01 from "@/assets/projects/unicef-jhabua-01.png";
import unicefDhar01 from "@/assets/projects/unicef-dhar-01.png";
import unicefJabalpur01 from "@/assets/projects/unicef-jabalpur-01.png";
import titanHouston01 from "@/assets/projects/titan-houston-01.png";
import titanHouston02 from "@/assets/projects/titan-houston-02.png";
import daishanPetrochemical01 from "@/assets/projects/daishan-petrochemical-01.png";

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  client: string;
  scale: string;
  status: string;
  image: string;
  galleryImages: string[];
  overview: string;
  deliverables: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "unicef-healthcare-facility-ratlam",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Ratlam, India",
    client: "UNICEF",
    scale: "22,00,00 sq.ft",
    status: "Built",
    image: unicefRatlam01,
    galleryImages: [unicefRatlam01],
    overview: "A large healthcare facility for UNICEF in Ratlam, executed using an integrated BIM approach across an extensive project footprint. Arcon Infratek delivered comprehensive BIM services supporting design development, coordination, construction planning, and execution. The BIM workflow ensured clash free coordination, improved constructability, and reliable as built documentation, supporting the efficient delivery of this complex healthcare development.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: true,
  },
  {
    id: 3,
    slug: "titan-process-platform-houston",
    title: "Titan Process Platform",
    category: "Industrial",
    location: "Houston, Texas, USA",
    client: "Confidential Energy Firm",
    scale: "4,20,00 sq.ft",
    status: "Completed",
    image: titanHouston01,
    galleryImages: [titanHouston01, titanHouston02],
    overview: "A multi discipline industrial BIM coordination project centered on detailed modeling and rigorous clash resolution across structural, mechanical, electrical, and process systems. The scope involved developing a highly coordinated, constructible BIM model that aligned with engineering design intent and real world site conditions. The integrated model supported enhanced visualization of installation sequencing, facilitated clear coordination between design, fabrication, and construction teams, and reduced field conflicts to support efficient and error minimized execution.",
    deliverables: [
      "BIM for Structural MEP and Process systems",
      "Clash detection and resolution workshops",
      "Site coordination BIM outputs",
      "3D BIM documentation and reports"
    ],
    featured: true,
  },
  {
    id: 4,
    slug: "unicef-healthcare-facility-bhopal",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Bhopal, India",
    client: "UNICEF",
    scale: "14,00,00 sq.ft",
    status: "Built",
    image: unicefBhopal01,
    galleryImages: [unicefBhopal01],
    overview: "A comprehensive healthcare complex designed to serve maternal and child health needs. BIM coordination focused on optimizing patient flow, medical gas systems, and infection control requirements through detailed spatial analysis. The integrated BIM driven workflow enabled effective decision making, reduced site conflicts, and ensured seamless translation of design intent into built reality.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: true,
  },
  {
    id: 5,
    slug: "bangalore-metro-station",
    title: "Bangalore Metro Station",
    category: "Infrastructure",
    location: "Bangalore, India",
    client: "Government of Karnataka",
    scale: "3,53,00 sq.ft",
    status: "Consultancy",
    image: bangaloreMetro01,
    galleryImages: [bangaloreMetro01, bangaloreMetro02],
    overview: "A public infrastructure BIM project focused on strengthening design coordination, technical clarity, and interdisciplinary alignment for a metro transit facility at an early design stage. The BIM environment supported structured coordination between architectural, structural, and MEP systems, enabling systematic clash review and spatial validation. The coordinated model enhanced design communication, improved constructability insight, and provided a reliable digital reference to inform decision making, stakeholder discussions, and subsequent project development.",
    deliverables: [
      "Architectural BIM modeling",
      "Facade coordination support",
      "Clash detection and reporting",
      "LOD 300 BIM deliverables"
    ],
    featured: true,
  },
  {
    id: 6,
    slug: "industrial-process-plant-module-baton-rouge",
    title: "Industrial Process Plant Module",
    category: "Industrial",
    location: "Baton Rouge, Louisiana, USA",
    client: "Reolo EPC Firm",
    scale: "85,000 sq.ft",
    status: "Completed",
    image: industrialProcessPlant01,
    galleryImages: [industrialProcessPlant01, industrialProcessPlant02],
    overview: "A brownfield industrial process module modernization project centered on high precision Scan to BIM workflows within an active operational facility. The project involved transforming dense laser scan data into an accurate, intelligent, and construction ready BIM model that reliably reflected existing conditions. This integrated digital twin supported fabrication detailing, retrofit planning, and construction sequencing while minimizing field uncertainties, improving spatial coordination, and enabling informed decision making among engineering, fabrication, and site teams. The model served as a coordinated reference for design validation, clash mitigation, and efficient implementation of modernization strategies.",
    deliverables: [
      "Point Cloud to BIM LOD 300",
      "As built 3D model Structural Piping MEP",
      "Clash detection and coordination report",
      "Fabrication ready BIM outputs",
      "Construction support drawings"
    ],
    featured: false,
  },
  {
    id: 7,
    slug: "unicef-healthcare-facility-jhabua",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Jhabua, India",
    client: "UNICEF",
    scale: "8,60,00 sq.ft",
    status: "Built",
    image: unicefJhabua01,
    galleryImages: [unicefJhabua01],
    overview: "A major healthcare development project for UNICEF in Jhabua, executed with a strong focus on BIM driven coordination and construction efficiency. Arcon Infratek provided comprehensive multi discipline BIM models across all LOD, enabling clash free coordination, effective construction planning, and reliable documentation for handover. The project benefited from reduced rework, improved collaboration, and enhanced overall delivery efficiency.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 8,
    slug: "data-center-as-built-modeling-boston",
    title: "Data Center As-Built Modeling",
    category: "Industrial",
    location: "Boston, USA",
    client: "Confidential Data Infrastructure Firm",
    scale: "6,00,00 sq.ft",
    status: "Completed",
    image: dataCenterBoston01,
    galleryImages: [dataCenterBoston01],
    overview: "A retrofit and verification project where existing site conditions were captured through high precision laser scanning and systematically converted into an accurate digital representation. The digital model served as a reliable information source for as built conditions, supporting facility management, maintenance planning, and future modification strategies. This Scan to BIM workflow improved visibility, reduced documentation gaps, and enabled informed decision making for ongoing building performance management.",
    deliverables: [
      "Point Cloud to BIM As built",
      "Detailed MEP system mapping",
      "BIM for operations and maintenance",
      "Verification of installed systems"
    ],
    featured: false,
  },
  {
    id: 9,
    slug: "daishan-petrochemical-process-module",
    title: "Daishan Petrochemical Process Module",
    category: "Industrial",
    location: "Zhejiang, China",
    client: "XIC Contractor",
    scale: "2,50,00 sq.ft",
    status: "Completed",
    image: daishanPetrochemical01,
    galleryImages: [daishanPetrochemical01],
    overview: "A highly complex petrochemical process module project centered on detailed Scan to BIM conversion within a live industrial environment. The scope involved translating dense laser scan data into an accurate, information rich BIM model that aligned with engineering intent and fabrication requirements. The coordinated digital model facilitated close collaboration between engineering, design, and fabrication teams, improving spatial accuracy, constructability, and installation planning while reducing field conflicts and supporting efficient execution of the process module.",
    deliverables: [
      "Point Cloud to BIM LOD 300",
      "Process piping and equipment modeling",
      "Multi discipline clash coordination",
      "Fabrication aligned BIM deliverables",
      "As built documentation"
    ],
    featured: false,
  },
  {
    id: 10,
    slug: "unicef-healthcare-facility-ujjain",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Ujjain, India",
    client: "UNICEF",
    scale: "5,80,00 sq.ft",
    status: "Built",
    image: unicefUjjain01,
    galleryImages: [unicefUjjain01],
    overview: "A comprehensive healthcare infrastructure project for UNICEF in Ujjain, executed using an integrated BIM approach. Arcon Infratek developed coordinated multi discipline BIM models to support design development, construction planning, and execution. Extensive clash detection, shop drawing production, and construction phase BIM support ensured smooth coordination between stakeholders and efficient delivery of this large healthcare facility.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 11,
    slug: "university-research-complex-boston",
    title: "University Research Complex",
    category: "Education",
    location: "Boston, USA",
    client: "Confidential Academic Institution",
    scale: "6,40,00 sq.ft",
    status: "Completed",
    image: universityResearch01,
    galleryImages: [universityResearch01],
    overview: "A large scale academic research facility where renovation and new build zones were supported through an integrated Scan to BIM and multi discipline coordination workflow. The work involved developing comprehensive Architectural and MEP BIM models that served as a single coordinated source of information for design and construction. For renovation areas, existing conditions were captured through laser scanning and converted into accurate information rich BIM models that reflected as built reality. Systematic clash detection and coordination were carried out across all disciplines to eliminate spatial conflicts and improve constructability. The coordinated models were further developed into construction ready BIM deliverables to support efficient execution.",
    deliverables: [
      "Comprehensive Architectural and MEP BIM",
      "Scan to BIM for renovation areas",
      "Clash detection and coordination",
      "Construction ready BIM deliverables"
    ],
    featured: false,
  },
  {
    id: 12,
    slug: "pharmaceutical-manufacturing-dublin",
    title: "Pharmaceutical Manufacturing",
    category: "Industrial",
    location: "Dublin, Ireland",
    client: "Celtis Contractors",
    scale: "7,50,00 sq.ft",
    status: "Built",
    image: pharmaceuticalDublin01,
    galleryImages: [pharmaceuticalDublin01],
    overview: "A purpose built pharmaceutical manufacturing facility developed to support GMP compliant production, controlled cleanroom environments, and high performance MEP systems. The project was organized around a linear industrial layout that optimized workflow, material movement, and operational efficiency. Comprehensive Architectural and MEP BIM models were delivered as a unified coordination platform throughout design and construction. For renovation zones, existing conditions were captured through laser scanning and translated into accurate Scan to BIM models reflecting as built reality. Systematic clash detection and interdisciplinary coordination were carried out across all trades to eliminate spatial conflicts and enhance constructability. The coordinated models were further developed into construction ready BIM deliverables, ensuring clarity, accuracy, and a smooth transition from design to site execution.",
    deliverables: [
      "Comprehensive Architectural and MEP BIM",
      "Scan to BIM for renovation areas",
      "Clash detection and coordination",
      "Construction ready BIM deliverables"
    ],
    featured: false,
  },
  {
    id: 13,
    slug: "jaipur-rail-transit-station",
    title: "Jaipur Rail Transit Station",
    category: "Infrastructure",
    location: "Jaipur, India",
    client: "Government of Rajasthan",
    scale: "4,52,00 sq.ft",
    status: "Consultancy",
    image: jaipurRail01,
    galleryImages: [jaipurRail01, jaipurRail02],
    overview: "A large scale transit infrastructure BIM project where support was provided for facade design development through structured BIM workflows across schematic design and design development phases. The scope included developing coordinated architectural BIM models that served as the basis for interface studies, design refinements, and overall project alignment. The BIM environment supported facade studies, technical evaluations, and informed decision making throughout the design process.",
    deliverables: [
      "Architectural BIM model",
      "Facade design and coordination",
      "Multi discipline coordination support"
    ],
    featured: false,
  },
  {
    id: 14,
    slug: "mixed-use-residential-estate-zhejiang",
    title: "Mixed-Use Residential Estate",
    category: "Residential",
    location: "Zhejiang, China",
    client: "LDG Group",
    scale: "6,52,00 sq.ft",
    status: "Completed",
    image: mixedUseResidential01,
    galleryImages: [mixedUseResidential01, mixedUseResidential02],
    overview: "A large scale mixed use development project where BIM was used to support the design and delivery through integrated Architectural and MEP BIM modeling. The work involved developing a coordinated digital model that aligned spatial design intent with building services while maintaining consistency across disciplines. Structural coordination support was provided to ensure evolving design intent remained technically feasible and constructible. Facade design coordination was carried out across multiple phases, with design components developed, iterated, and refined through schematic design and design development phases. Quality three dimensional renderings and visual outputs were generated to support design evaluation, stakeholder presentations, and decision making. The coordinated BIM environment also supported the preparation of construction documentation, ensuring a smooth transition from design to execution while minimizing coordination risks and improving overall project clarity.",
    deliverables: [
      "Architectural and MEP BIM modeling",
      "Structural coordination support",
      "Construction documentation BIM",
      "Facade design coordination"
    ],
    featured: false,
  },
  {
    id: 15,
    slug: "unicef-healthcare-facility-dhar",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Dhar, India",
    client: "UNICEF",
    scale: "4,40,00 sq.ft",
    status: "Built",
    image: unicefDhar01,
    galleryImages: [unicefDhar01],
    overview: "This healthcare facility in Dhar was delivered through a fully coordinated BIM driven workflow covering architectural, structural, MEP, and electrical disciplines. The BIM model enabled clash free coordination, accurate documentation, and efficient construction execution. The integrated model played a key role in design validation, constructability review, and streamlined site execution.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 16,
    slug: "skyline-tech-office-seattle",
    title: "Skyline Tech Office",
    category: "Commercial",
    location: "Seattle, Washington, USA",
    client: "TNC Associates",
    scale: "2,10,00 sq.ft",
    status: "Completed",
    image: skylineTechOffice01,
    galleryImages: [skylineTechOffice01],
    overview: "A commercial office project where comprehensive MEP BIM coordination was delivered to achieve a fully coordinated and conflict free design. The work involved developing an integrated coordination model aligning mechanical, electrical, and plumbing systems with architectural and structural elements. The coordinated BIM environment supported the preparation of construction documentation, ensured design accuracy, and enabled a smooth transition from design to site execution.",
    deliverables: [
      "MEP BIM coordination",
      "Clash free coordination model",
      "Construction documentation"
    ],
    featured: false,
  },
  {
    id: 17,
    slug: "unicef-healthcare-facility-sehore",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Sehore, India",
    client: "UNICEF",
    scale: "3,00,00 sq.ft",
    status: "Built",
    image: unicefSehore01,
    galleryImages: [unicefSehore01],
    overview: "A large scale healthcare facility developed for UNICEF in Sehore, India, where Arcon Infratek played a comprehensive role from design development to on site execution. The project involved end to end BIM implementation across architectural, structural, MEP, and electrical disciplines, ensuring a fully coordinated, constructible, and information rich digital model throughout the project lifecycle. Beyond modeling, Arcon Infratek actively supported construction execution and project management, coordinating between consultants, contractors, and stakeholders to maintain design intent, schedule compliance, and quality control. The integrated BIM driven workflow enabled effective decision making, reduced site conflicts, and ensured seamless translation of design intent into built reality across the entire 300,000 square foot facility.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 18,
    slug: "drywall-panel-bim-model-san-diego",
    title: "Drywall Panel BIM Model",
    category: "Commercial",
    location: "San Diego, California",
    client: "AMV Builders",
    scale: "17,00,00 sq.ft",
    status: "Built",
    image: drywall01,
    galleryImages: [drywall01, drywall02],
    overview: "A large scale commercial drywall coordination project where a detailed and constructible Drywall Panel BIM model was developed to support efficient installation and reduce on site conflicts. The model served as the primary coordination platform between drywall assemblies, ceiling interfaces, and adjacent MEP and structural systems. Comprehensive shop drawings were generated directly from the BIM model to guide installation, while continuous constructability reviews and coordination updates ensured accuracy as construction progressed.",
    deliverables: [
      "Clash free Drywall Panel BIM model",
      "Constructible panel layout model",
      "Shop drawings for drywall installation",
      "Coordination with MEP and structural systems"
    ],
    featured: false,
  },
  {
    id: 19,
    slug: "ellijay-tower-georgia",
    title: "Ellijay Tower",
    category: "Residential",
    location: "Ellijay, Georgia, USA",
    client: "Excalibur Associates Inc",
    scale: "2,30,00 sq.ft",
    status: "Completed",
    image: ellijayTower01,
    galleryImages: [ellijayTower01, ellijayTower02],
    overview: "A mid rise residential tower project where support was provided to the design process through structured BIM modeling at LOD 200. The scope focused on developing a coordinated Architectural BIM model that reflected design intent while maintaining clarity and consistency for further development. During the schematic design phase, multiple design options were explored and refined, with detailed three dimensional renderings produced to support client review and decision making. The BIM model also served as a reliable basis for approval drawings, ensuring alignment with regulatory requirements and facilitating smooth submission and review processes.",
    deliverables: [
      "BIM modeling LOD 200",
      "Schematic design options and renders",
      "Approval drawings support"
    ],
    featured: false,
  },
  {
    id: 20,
    slug: "unicef-healthcare-facility-jabalpur",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Jabalpur, India",
    client: "UNICEF",
    scale: "3,00,00 sq.ft",
    status: "Built",
    image: unicefJabalpur01,
    galleryImages: [unicefJabalpur01],
    overview: "A healthcare project for UNICEF in Jabalpur where BIM was used extensively to support construction planning, coordination, and accurate project handover. The integrated BIM workflow enabled effective clash resolution, construction sequencing, and reliable documentation throughout the project lifecycle.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 21,
    slug: "single-family-residence-san-diego",
    title: "Single Family Residence",
    category: "Residential",
    location: "San Diego, California, USA",
    client: "Private Client",
    scale: "2,40,00 sq.ft",
    status: "Completed",
    image: sfrSanDiego01,
    galleryImages: [sfrSanDiego01, sfrSanDiego02],
    overview: "A high end residential project where a coordinated Architectural and Structural BIM model was developed to support design clarity and constructability. The work focused on creating a precise and structured digital representation of the building that aligned with architectural intent and structural feasibility. The BIM model formed the basis for a complete approval drawing set, ensuring compliance with regulatory requirements and supporting smooth submission and review. Additionally, a detailed construction ready BIM was prepared to support on site execution, minimizing coordination risks and improving overall build accuracy.",
    deliverables: [
      "Architectural and Structural BIM",
      "Approval drawing set",
      "Detailed construction BIM"
    ],
    featured: false,
  },
  {
    id: 22,
    slug: "unicef-healthcare-facility-vidisha",
    title: "UNICEF Healthcare Facility",
    category: "Healthcare",
    location: "Vidisha, India",
    client: "UNICEF",
    scale: "2,00,00 sq.ft",
    status: "Built",
    image: unicefVidisha01,
    galleryImages: [unicefVidisha01],
    overview: "A large scale healthcare facility developed for UNICEF in Vidisha, where Arcon Infratek delivered end to end BIM services from design development through construction execution. The scope included fully integrated Architectural, Structural, MEP, and Electrical BIM modeling across all LOD, ensuring clash free coordination and constructible outcomes. The BIM workflow supported efficient construction planning, accurate site execution, and seamless translation of design intent to built reality.",
    deliverables: [
      "Comprehensive Architectural Structural MEP and Electrical BIM across all LOD",
      "Clash free multi discipline coordination model",
      "Complete tender approval and construction drawing sets",
      "Shop drawings and coordinated installation drawings",
      "Construction execution support using BIM",
      "Project management and stakeholder coordination",
      "As built BIM documentation for final handover"
    ],
    featured: false,
  },
  {
    id: 23,
    slug: "single-family-residential-houston",
    title: "Single Family Residential",
    category: "Residential",
    location: "Houston, Texas, USA",
    client: "Private Client",
    scale: "1,80,00 sq.ft",
    status: "Completed",
    image: sfrHouston01,
    galleryImages: [sfrHouston01, sfrHouston02],
    overview: "A high end residential project where a coordinated Architectural and Structural BIM model was developed to support design clarity and constructability. The work focused on creating a precise and structured digital representation of the building that aligned with architectural intent and structural feasibility. The BIM model formed the basis for a complete approval drawing set, ensuring compliance with regulatory requirements and smooth submission. Additionally, a detailed construction ready BIM was prepared to support on site execution, minimizing coordination risks and improving overall build accuracy.",
    deliverables: [
      "Architectural and Structural BIM",
      "Approval drawing set",
      "Detailed construction BIM"
    ],
    featured: false,
  },
  {
    id: 24,
    slug: "single-family-residential-jacksonville",
    title: "Single Family Residential",
    category: "Residential",
    location: "Jacksonville, Florida",
    client: "Private Client",
    scale: "1,95,00 sq.ft",
    status: "Completed",
    image: sfrJacksonville01,
    galleryImages: [sfrJacksonville01, sfrJacksonville02],
    overview: "A high end residential project where coordinated Architectural and Structural BIM modeling was carried out to support design clarity, regulatory compliance, and construction accuracy. The BIM workflow ensured precise alignment between design intent and structural feasibility while enabling efficient approvals and smooth execution.",
    deliverables: [
      "Architectural and Structural BIM",
      "Approval drawing set",
      "Detailed construction BIM"
    ],
    featured: false,
  },
  {
    id: 25,
    slug: "cascade-terrace-garden-penang",
    title: "Cascade Terrace Garden",
    category: "Landscape",
    location: "Penang Island, Malaysia",
    client: "Greenville Landscape",
    scale: "4,00,00 sq.ft",
    status: "Completed",
    image: cascadeTerrace,
    galleryImages: [cascadeTerrace],
    overview: "A landscape and site utility coordination project integrating BIM with terrain, grading, and site infrastructure to create a fully coordinated digital representation of the built and natural environment. The project involved aligning landscape elements, retaining structures, drainage networks, underground utilities, and built components within a unified BIM framework to enhance spatial clarity, reduce constructability conflicts, and support accurate design to construction translation. The integrated model served as a collaborative platform for designers, engineers, and contractors, enabling better decision making, efficient coordination, and improved execution on site.",
    deliverables: [
      "Landscape BIM coordination",
      "3D site visualization",
      "Construction layout documentation"
    ],
    featured: false,
  },
];

// Utility functions
export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getRelatedProjects = (currentSlug: string, category: string, limit: number = 4): Project[] => {
  return projects
    .filter(project => project.slug !== currentSlug && project.category === category)
    .slice(0, limit);
};

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};
