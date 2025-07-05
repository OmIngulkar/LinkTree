import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import ClientProfile from "./ClientProfile";

export default async function Page({ params }) {
  const handle = params.handle;

  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  const mongoItem = await collection.findOne({ handle });
  if (!mongoItem) return notFound();

  // Convert MongoDB document to plain object
  const item = {
    handle: mongoItem.handle,
    pic: mongoItem.pic,
    desc: mongoItem.desc,
    links: mongoItem.links,
  };

  return <ClientProfile item={item} />;
}
