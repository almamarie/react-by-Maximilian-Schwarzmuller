import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("data: ", data);

    const client = await MongoClient.connect(
      "mongodb+srv://louis:nextjs@cluster0.efq20.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();
    const meetupCollections = db.collection("meetups");

    const result = await meetupCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ messgae: "Meetup inserted", id: result });
  }
}

export default handler;
