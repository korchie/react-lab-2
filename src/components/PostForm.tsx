import "./PostForm.css";

export default function PostForm({
    onClose,
    setTitle,
    setThought,
    onSubmit
}: {
    onClose: () => void;
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setThought: React.Dispatch<React.SetStateAction<string>>;
    onSubmit: () => void;
}) {

    return (
        <form className="PostForm" onSubmit={(event) => {
            event.preventDefault();
            onSubmit();
            onClose();
        }}>
            <i className="fas fa-times-circle" onClick={() => { onClose() }}></i>
            <label>Title</label>
            <input type="text"
                onChange={(event) => {
                    setTitle(event.target.value);
                }}
            />
            <label>Thought</label>
            <textarea
                onChange={(event) => {
                    setThought(event.target.value);
                }}></textarea>
            <button id="addPost" type="submit">Add Post</button>
        </form >


    );
}