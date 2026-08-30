# Smartnote

Smartphone-first notitie- en to-do-app. Eén HTML-bestand, donker glas-uiterlijk, opslag in [PocketBase](https://pocketbase.io) 0.40.1.

## Starten met Docker

```bash
docker compose up -d --build
```

Open daarna [http://localhost:8080](http://localhost:8080).

Data blijft bewaard in het Docker-volume `smartnote_data`.

Stoppen:

```bash
docker compose down
```

## Beheer

PocketBase-admin: [http://localhost:8080/_/](http://localhost:8080/_/)

Eerste superuser aanmaken:

```bash
docker compose exec pocketbase /pb/pocketbase superuser upsert admin@example.com 'kies-een-wachtwoord'
```

De collecties `notes` en `todos` zijn publiek lees- en schrijfbaar, bedoeld voor een persoonlijke instance achter je eigen netwerk.

## Zonder Docker

```bash
./pocketbase serve --http=0.0.0.0:8080 --dir=./pb_data --publicDir=./pb_public --migrationsDir=./pb_migrations
```
