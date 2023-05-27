import appwrite from '../../appwrite'; // Path to appwrite.js file

appwrite.setEndpoint('https://cloud.appwrite.io/v1').setProject('64709871a7fc1a6b44d8');

export default {
  '/api/register': {
    methods: ['POST'],
    middleware: [],
    handler: async (req, res) => {
      try {
        const { email, password } = req.body;
        const response = await appwrite.account.create(email, password);
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ message: 'Failed to register user' });
      }
    },
  },
  '/api/login': {
    methods: ['POST'],
    middleware: [],
    handler: async (req, res) => {
      try {
        const { email, password } = req.body;
        const response = await appwrite.account.createSession(email, password);
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ message: 'Failed to login' });
      }
    },
  },
  '/api/documents': {
    methods: ['GET'],
    middleware: [],
    handler: async (req, res) => {
      try {
        const response = await appwrite.database.listDocuments('collectionId');
        res.status(200).json(response);
      } catch (error) {
        res.status(400).json({ message: 'Failed to fetch documents' });
      }
    },
  },
};
