const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuration de CORS
const corsOptions = {
  origin: 'http://localhost:4200', // L'URL de ton app Angular
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); // Utilisation de CORS avec les options définies
app.use(express.json()); // Pour parser les requêtes JSON

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/projetihm', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connecté à MongoDB'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Définition du schéma Mongoose pour les cours
const coursSchema = new mongoose.Schema({
  titre: String,
  description: String,
});
// Schéma de l'utilisateur
const utilisateurSchema = new mongoose.Schema({
  utilisateurId: { type: String, required: true ,unique:true},
  nomUtilisateur: { type: String, required: true },
  email: { type: String, required: true },
  cours: [{
        coursId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cours',
        },
        progression: {
            type: Number, // pourcentage de progression, de 0 à 100
            default: 0,
        },
    }],
});

const Cours = mongoose.model('Cours', coursSchema);
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

// Route GET pour récupérer tous les cours
app.get('/api/cours', async (req, res) => {
  try {
    const cours = await Cours.find();
    res.json(cours);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des cours.' });
  }
});
app.get('/api/cours/:id', async (req, res) => {
  try {
    const cours = await Cours.findById(req.params.id);
    if (!cours) {
      return res.status(404).json({ message: 'Cours non trouvé.' });
    }
    res.json(cours);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du cours.' });
  }
});

app.post('/api/utilisateur/:id/cours/:coursId', async (req, res) => {
  const { id, coursId } = req.params;
  console.log("Utilisateur ID:", id);
  console.log("Cours ID:", coursId);

  try {
      const utilisateur = await Utilisateur.findOne({ utilisateurId: id });
      if (!utilisateur) {
          return res.status(404).send('Utilisateur non trouvé');
      }

      // Vérifiez si le cours est déjà ajouté
      const coursExist = utilisateur.cours.find(c => c.coursId.toString() === coursId);
      if (coursExist) {
          return res.status(400).send('Ce cours est déjà ajouté');
      }

      utilisateur.cours.push({ coursId, progression: 0 });
      await utilisateur.save();
      res.status(201).json({ message: 'Cours ajouté avec succès' });

  } catch (error) {
      console.error("Erreur du serveur:", error);
      res.status(500).send(`Erreur du serveur: ${error.message}`);
  }
});







// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Le serveur tourne sur http://localhost:${PORT}`);
});
