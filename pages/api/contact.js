import { connectDatabase, insertDocument } from '../../lib/db-util';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    // store in a database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    try {
      const result = await insertDocument(
        client,
        'messageContacts',
        newMessage
      );

      if (!result.acknowledged) {
        throw new Error(result);
        return;
      }

      newMessage.id = result.insertedId;

      res.status(201).json({ message: 'Success', messageData: newMessage });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Document was not inserted!' });
    } finally {
      await client.close();
    }
  }
}

export default handler;
