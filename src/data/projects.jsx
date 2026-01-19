import batoursImg from "../assets/projects/ba-tours.png";
import proyectoFinalImg from "../assets/projects/kiddo.png";
import mealdbImg from "../assets/projects/mealdb.png";
import priceListImg from "../assets/projects/priceList.png";

export const projects = [
  {
    id: 1,
    title: "BA Tours",
    description:
      "Aplicación web de turismo desarrollada con React y Firebase. Incluye catálogo dinámico de tours, carrito de compras, checkout y persistencia de datos en Firestore.",
    tech: ["React", "Firebase", "Tailwind", "Framer Motion"],
    image: batoursImg,
    github: "https://github.com/belenzar/ba-tours",
    demo: "https://ba-tours.vercel.app",
  },
  {
    id: 2,
    title: "Proyecto Final - Juguetería Kiddo",
    description:
      "Proyecto final integrador donde desarrollé un e-commerce de una juguetería, manejo de estado y diseño responsive.",
    tech: ["React", "CSS", "Firebase", "Bootstrap"],
    image: proyectoFinalImg,
    github: "https://github.com/belenzar/ProyectoFinal-Zarate",
    demo: "proyecto-final-zarate.vercel.app/",
  },
  {
    id: 3,
    title: "MealDB App",
    description:
      "Aplicación que consume la API pública TheMealDB para mostrar recetas de forma dinámica, con búsqueda y renderizado condicional.",
    tech: ["React", "API REST", "JavaScript", "Bootstrap"],
    image: mealdbImg,
    github: "https://github.com/belenzar/MealDb",
    demo: "https://meal-db-lilac.vercel.app/",
  },
  {
    id: 4,
    title: "Price List",
    description:
      "Listado de precios con enfoque en maquetado, estructura visual y diseño responsive.",
    tech: ["HTML", "CSS", "Bootstrap"],
    image: priceListImg,
    github: "https://github.com/belenzar/price-list",
    demo: "https://lista-precios-2024.vercel.app/",
  },
];
