# Abstract

### HTTP / Websocket (connexion ouverte)

- fait pour faire du temps réél
- screenshot du handskake

### Communiquer en JSON

- comme on le ferait une api

### On peut faire mieux : le binaire

- mode binaire
- envoyer des octet
- en JSON ça part quand même en binaire
- Passer juste l'info dont on a besoin

```diff
- { "name": "client:new", "id": 42 }
+ "client:new", 42
+ 1, 42
```

#### Custom event format :

- [id, clientId]
- [id, clientId, X, Y]

```diff
- { "name": "client:position", "id": 42, "x": 3466, "y": 6046 }
+ [5, 42, 3466, 6046]
```

- [id, clientId, length, T, o, m, 3, 2, i]
```diff
- { "name": "client:name", "id": 42, "value": "Tom32i" }
+ [6, 42, 6, 84, 111, 109, 51, 50, 105]
```
> [ 00000110, 00101010 , 00000110, 01010100 01101111 01101101 00110011 00110010 01101001]

### En Go ?!

- Monter un serveur, handle le hanskake
- Goroutine pour chaque client
- je reçois un tableau d'octet
- hop je le décode :
    - Je chope l'id dans le premier octet
    - Je trouve le handler correspondant
    - Le handler continue de décoder la suite du message
    - J'envoi une struct dans le chan !

### Demo Websocket

- Demo time


### TODO:
- touch support on client demo
- demo with json?
