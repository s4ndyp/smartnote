migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "todos",
      listRule: "",
      viewRule: "",
      createRule: "",
      updateRule: "",
      deleteRule: "",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          min: 1,
          max: 200,
          presentable: true,
        },
        {
          name: "kenmerk",
          type: "text",
          max: 80,
        },
        {
          name: "periode",
          type: "select",
          required: true,
          maxSelect: 1,
          values: ["zsm", "binnenkort", "later"],
        },
        {
          name: "done",
          type: "bool",
        },
      ],
    });

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("todos");
    app.delete(collection);
  }
);
