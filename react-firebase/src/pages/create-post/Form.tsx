import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";

interface CreateFormData {
    title: string;
    description: string;
}

function Form() {
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });
    const { register, handleSubmit, formState: { errors }, } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postRef = collection(db, "posts")

    const onCreatePost = async (data: any) => {
        console.log(data);
        await addDoc(postRef, {
            // title: data.title,
            // description: data.description,
            ...data,
            username: user?.displayName,
            userId: user?.uid,
        })
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title' {...register("title")} />
            <p style={{ color: "red" }}>{errors.title?.message}</p>
            <textarea placeholder='Description' {...register("description")} />
            <p style={{ color: "red" }}>{errors.description?.message}</p>
            <input type="submit" />
            {/* <button type='submit' onClick={handleSubmit(onCreatePost)} >Submit</button> */}
        </form>
    )
}

export default Form