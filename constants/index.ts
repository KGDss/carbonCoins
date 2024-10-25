export const navBarLinks = [
  { title: "HOME", url: "/", id: "home" },
  { title: "HOW IT WORKS", url: "/", id: "howitworks" },
  { title: "ABOUT US", url: "/", id: "aboutus" },
  { title: "CONTACT US", url: "/", id: "contactus" },
];

export const languages = [
  { id: 1, lang: "EN" },
  { id: 2, lang: "TH" },
];

export const imageSlide = [
  "/landing/HIW1.svg",
  "/landing/HIW5.svg",
  "/landing/HIW4.svg",
  "/landing/HIW3.svg",
  "/landing/HIW2.svg",
];

export const textSlide = [
  {
    id: "1",
    text: "Forests play a vital role in mitigating climate change by absorbing carbon dioxide from the atmosphere through the process of photosynthesis. Trees act as natural carbon sinks, capturing CO2 and storing it in their biomass and in the soil. Did you know that one mature tree can absorb up to 48 pounds of CO2 per year? Moreover, forests are not only essential for carbon sequestration but also for biodiversity conservation, soil preservation, and providing habitat for wildlife. By preserving and restoring forests, we can significantly reduce the concentration of greenhouse gases in the atmosphere and combat climate change effectively.",
  },
  {
    id: "2",
    text: "To ensure the integrity of carbon credits, trusted organizations such as the Thailand Greenhouse Gas Management Organization (TGO) play a crucial role in verifying the legitimacy of emission reduction projects. These organizations rigorously assess project methodologies, monitor emission reductions, and issue carbon credits only to projects that meet established criteria. By verifying the credits, they instill trust and confidence in the carbon trading market, ensuring that every credit represents a genuine reduction in greenhouse gas emissions.",
  },
  {
    id: "3",
    text: "At Carbon Coins, our platform serves as a bridge between carbon credits and digital tokens, facilitating the transformation of verified credits into tradable coins. Through blockchain technology, we provide a transparent and efficient system for tokenizing carbon assets. By tokenizing credits, we democratize access to carbon trading, enabling organizations to buy and sell carbon coins seamlessly. Our platform ensures that every coin represents a genuine carbon offset, promoting sustainability and incentivizing emission reduction efforts worldwide.",
  },
  {
    id: "4",
    text: "Utilizing blockchain technology, our platform ensures transparency and traceability in carbon trading. Each carbon coin transaction is recorded on a distributed ledger, providing an immutable and transparent record of ownership and carbon offsetting activities. This decentralized approach eliminates the risk of double counting and fraud, enhancing trust and accountability in the carbon market. With blockchain, stakeholders can track the entire lifecycle of carbon coins, from issuance to retirement, with unparalleled transparency and integrity.",
  },
  {
    id: "5",
    text: "On our user-friendly platform, customers and factories can easily purchase carbon coins to offset their carbon footprint. By buying coins, individuals and businesses can support emission reduction projects and contribute to the fight against climate change. Whether it's investing in renewable energy projects, reforestation initiatives, or energy efficiency programs, purchasing carbon coins enables stakeholders to take tangible action towards a greener and more sustainable future. At Carbon Coins, we empower everyone to be part of the solution to climate change, one coin at a time.",
  },
];

export const imgCarousel = [
  { path: "/landing/PSU.svg", link: "https://en.psu.ac.th/" },
  { path: "/landing/CoC.svg", link: "https://www.computing.psu.ac.th/en/" },
  { path: "/landing/AiiLab.svg", link: "https://www.aiilab.tech/" },
  { path: "/landing/BLOCK.svg", link: "https://block.phuket.psu.ac.th/" },
  {
    path: "/landing/TGO.svg",
    link: "https://www.tgo.or.th/2023/index.php/en/",
  },
];

export const notUseNavBarPath = ["/token", "/admin", "/user", "/todo"];

export let sideBarOptions = [
  {
    title: "Dashboard",
    notSelectedUrl: "/sideBar/dashIcon.svg",
    selectedUrl: "/sideBar/dashIconSelected.svg",
    isSelected: true,
  },
  {
    title: "Market",
    notSelectedUrl: "/sideBar/market.svg",
    selectedUrl: "/sideBar/marketSelected.svg",
    isSelected: false,
  },
  {
    title: "Transfer",
    notSelectedUrl: "/sideBar/transfer.svg",
    selectedUrl: "/sideBar/transferSelected.svg",
    isSelected: false,
  },
];

export const hotelCF = [
  {
    topic: "Stationary Combustion (การเผาไหม้แบบอยู่กับที่)",
    details: [
      {
        topic: "Diesel (Generator)",
        storageUnit: "ลิตร (Litre)",
        ef: 2.7078,
        unit: "kg CO2e/ลิตร",
      },
      {
        topic: "Diesel (Fire pump) ",
        storageUnit: "ลิตร (Litre)",
        ef: 2.7078,
        unit: "kg CO2e/ลิตร",
      },
      {
        topic: "Diese (Fire pump) ",
        storageUnit: "ลิตร (Litre)",
        ef: 2.7078,
        unit: "kg CO2e/ลิตร",
      },
    ],
  },
  {
    topic: "Mobile Combustion (การเผาไหม้แบบเคลื่อนที่)",
    details: [
      {
        topic: "น้ำมัน Diesel (รถตู้, รถมอเตอร์ไซค์)",
        storageUnit: "ลิตร (Litre)",
        ef: 2.7406,
        unit: "kg CO2e/ลิตร",
      },
      {
        topic: "น้ำมัน Gasohol 91, E20, E85",
        storageUnit: "ลิตร (Litre)",
        ef: 2.2719,
        unit: "kg CO2e/ลิตร",
      },
      {
        topic: "น้ำมัน Gasohol 95",
        storageUnit: "ลิตร (Litre)",
        ef: 2.2719,
        unit: "kg CO2e/ลิตร",
      },
    ],
  },
];
