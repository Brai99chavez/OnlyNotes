module.exports = {
  categories: [
    {
      name: "daily",
    },
    {
      name: "weekly",
    },
    {
      name: "monthly",
    },
    {
      name: "food",
    },
    {
      name: "cook",
    },
    {
      name: "kitchen",
    },
    {
      name: "house",
    },
    {
      name: "cleaning",
    },
    {
      name: "random",
    },
    {
      name: "study",
    },
    {
      name: "work",
    },
    {
      name: "information",
    },
  ],
  notes: [
    {
      title: "limpiar mi casa",
      content: "hacer todo lo referente a limpieza ",
      isArchived: false,
      checked: ["cleaning","work"]
    },
    {
      title: "informacion personal",
      content: "correo: pepito@gmail.com , contraseña: 2223323 ",
      isArchived: false,
      checked: ["information"],
    },
    {
      title: "iniciar un proyecto react",
      content: " 1- npx create-react-app myapp",
      isArchived: false,
      checked: [
        "work"

      ],
    },
    {
      title: "cocina",
      content: "lunes: pure de papa , martes: fideos con tuco , miercoles: sopa de pollo, jueve: ensalada con chuleta, viernes:pescado al horno",
      isArchived: true,
      checked: [
        "food",
        "cook"
      ],
    },
    {
      title: "hacer tarea de la facultad",
      content: "hacer tp 1 y 2 de la materia Ingeniera de Software 2",
      isArchived: true,
      checked: [
        "study"
      ],
    },
    {
      title: "hacer las compras",
      content: "hacer tp 1 y 2 de la materia Ingeniera de Software 2",
      isArchived: false,
      checked: [
        "kitchen"
      ],
    },
  ],
};