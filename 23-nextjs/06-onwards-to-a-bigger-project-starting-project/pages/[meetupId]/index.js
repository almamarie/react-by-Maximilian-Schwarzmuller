import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>{" "}
      <MeetupDetail {...props.meetupData} />{" "}
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://louis:nextjs@cluster0.efq20.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollections = db.collection("meetups");

  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: {
          meetupId: meetup._id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://louis:nextjs@cluster0.efq20.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollections = db.collection("meetups");

  const meetupData = await meetupCollections.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  console.log(meetupData);
  return {
    props: {
      meetupData: {
        id: meetupData._id.toString(),
        title: meetupData.title,
        description: meetupData.description,
        address: meetupData.address,
        image: meetupData.image,
      },
    },
  };
}

export default MeetupDetails;
