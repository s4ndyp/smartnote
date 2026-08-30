migrate(
  (app) => {
    const collection = new Collection({
      type: "base",
      name: "notes",
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
          name: "beschrijving",
          type: "text",
          max: 20000,
        },
        {
          name: "created",
          type: "autodate",
          onCreate: true,
          onUpdate: false,
        },
        {
          name: "updated",
          type: "autodate",
          onCreate: true,
          onUpdate: true,
        },
      ],
    });

    app.save(collection);
  },
  (app) => {
    const collection = app.findCollectionByNameOrId("notes");
    app.delete(collection);
  }
);
