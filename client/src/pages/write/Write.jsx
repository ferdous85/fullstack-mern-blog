import './write.css'

export default function Write() {
    return (
        <div>
            <img src="https://www.tecnomint.com/images/brand/8.jpg" alt="" className="writeImg" />
            <form  className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                     <input type="file" id="fileInput" style={{display:"none"}} />
                     <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell Your Story ....' type="text" cols="30" rows="10" className='writeInput writeText'></textarea>
                </div>
                <button className="wtiteSubmit">Publish</button>
            </form>
        </div>
    )
}
