migrate((app) => {
  const settings = app.settings();
  settings.meta.appName = "Smartnote";
  app.save(settings);
});
