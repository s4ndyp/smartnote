migrate(
  (app) => {
    const notes = app.findCollectionByNameOrId("notes");
    notes.fields.add(
      new BoolField({
        name: "pinned",
      })
    );
    app.save(notes);

    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.add(
      new BoolField({
        name: "pinned",
      })
    );
    app.save(todos);
  },
  (app) => {
    const notes = app.findCollectionByNameOrId("notes");
    notes.fields.removeByName("pinned");
    app.save(notes);

    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.removeByName("pinned");
    app.save(todos);
  }
);
