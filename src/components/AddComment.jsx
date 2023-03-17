import { useState } from "react";



const AddComment = () => {

const [commentData, setCommentData] = useState({
    body: "",
    username: "",
    review_id: "",
})

return (
    <section className="addCommentForm">
        <form onSubmit={submitHandler}>
            
        </form>
    </section>
)





}

export default AddComment;