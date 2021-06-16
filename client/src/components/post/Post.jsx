import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img src="https://www.tecnomint.com/images/brand/2.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet consectetur 
                </span>
                <hr />
                <span className="postDate">
                    1 hour ago
                </span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo, iusto adipisci assumenda a saepe pariatur tenetur? Obcaecati asperiores officiis culpa ducimus facilis in expedita eum distinctio facere, tenetur fugiat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo, iusto adipisci assumenda a saepe pariatur tenetur? Obcaecati asperiores officiis culpa ducimus facilis in expedita eum distinctio facere, tenetur fugiat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo, iusto adipisci assumenda a saepe pariatur tenetur? Obcaecati asperiores officiis culpa ducimus facilis in expedita eum distinctio facere, tenetur fugiat.</p>
        </div>
    )
}
