import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Brows a lis of highly active React Meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

export async function getStaticProps() {
  // fetch data from a server

  const client = await MongoClient.connect(
    "mongodb+srv://louis:nextjs@cluster0.efq20.mongodb.net/meetups?retryWrites=true&w=majority"
  );

  const db = client.db();
  const meetupCollections = db.collection("meetups");

  const meetups = await meetupCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          id: meetup._id.toString(),
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
        };
      }),
    },
    revalidate: 1,
  };
}

export default HomePage;

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   // fetch data from a server
//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }
