//Displays one Muse (name, origin, epithets, image)
{/*
import { getMuse } from "../api/muse";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

export default function museCard() {
  const [muse, setMuse] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMuse = async () => {
      const data = await getMuse(id);
      setMuse(data);
    };
    fetchMuse();
  }, [id]);

  if (!muse) return <p>Loading...</p>;

  return (
    <article className="muse-card">
      <h1>{muse.name}</h1>
      <h2>{muse.origin}</h2>
      <h3>{muse.media_type}</h3>
      <img src={muse.imageUrl} />
      <Link className="backBtn" to="/">
        Back
      </Link>
    </article>
  );
}

*/}
