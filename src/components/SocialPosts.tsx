import "./SocialPosts.css";
import { useState } from "react";
import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";

export default function SocialPosts() {
    const [formIsVisible, setFormIsVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
    const [posts, setPosts] = useState<Post[]>
        ([
            {
                title: "Grand Circus", thought:
                    "Grand Circus is cool."
            },
            {
                title: "React", thought:
                    "React give me power!"
            },
            {
                title: "Beatrice", thought:
                    "My friend has mad skills. She made the top 10~ I'm just so proud of her!"
            }
        ]);

    function deletePost(i: number) {
        // copy then modify
        let copiedPosts = [...posts];
        copiedPosts.splice(i, 1);
        setPosts(copiedPosts);
    }

    function onSubmit() {
        // copy, then modify
        let copiedPosts = [...posts];
        copiedPosts.unshift({ "title": title, "thought": thought });
        setPosts(copiedPosts);
        return
    }

    return <div className="SocialPosts">
        <h1>My Thoughts</h1>

        <button id="newThought" onClick={() => { setFormIsVisible(true) }}>New Thought</button>
        {formIsVisible && <PostForm
            onSubmit={() => { onSubmit() }}
            setTitle={setTitle}
            setThought={setThought}
            onClose={() => { setFormIsVisible(false) }} />}
        {posts.map((post, index) => (
            <PostInList
                key={index}
                post={post}
                onDelete={() => { deletePost(index) }} />
        ))}
    </div>
}