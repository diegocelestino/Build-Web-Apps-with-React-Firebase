import { useState, useEffect } from "react";
import { projectAuth, projectFirestore, projectStorage } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );


      if (!res) {
        throw new Error("Could not complete signup");
      }

      const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
      const image = await projectStorage.ref(uploadPath).put(thumbnail)
      const imageUrl = await image.ref.getDownloadURL()

      await res.user.updateProfile({ displayName: displayName, photoURL: imageUrl });

      await projectFirestore.collection('users').doc(res.user.uid).set({
        online: true,
        displayName: displayName,
        photoURL: imageUrl
      })

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    }
  };

  useEffect(() => {
    setIsCanceled(false);
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { error, isPending, signup };
};
