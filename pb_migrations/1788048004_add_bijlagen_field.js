migrate(
  (app) => {
    const notes = app.findCollectionByNameOrId("notes");
    notes.fields.add(
      new FileField({
        name: "bijlagen",
        maxSelect: 20,
        maxSize: 10485760,
        thumbs: ["200x200f", "800x0"],
      })
    );
    app.save(notes);

    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.add(
      new FileField({
        name: "bijlagen",
        maxSelect: 20,
        maxSize: 10485760,
        thumbs: ["200x200f", "800x0"],
      })
    );
    app.save(todos);
  },
  (app) => {
    const notes = app.findCollectionByNameOrId("notes");
    notes.fields.removeByName("bijlagen");
    app.save(notes);

    const todos = app.findCollectionByNameOrId("todos");
    todos.fields.removeByName("bijlagen");
    app.save(todos);
  }
);
