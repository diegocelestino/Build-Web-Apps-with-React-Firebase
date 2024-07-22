import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Recipe() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
        if (doc.exists) {
            setData(doc.data())
            setIsPending(false)
        } else {
            setIsPending(false)
            setError("Could not find that recipe")
        }
    })
  }, [id])

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <>
          <h2 className="page-title">{data.title}</h2>
          <p>Takes {data.cookingTime}</p>
          <ul>
            {data.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </>
      )}
    </div>
  );
}
