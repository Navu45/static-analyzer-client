function Content(props){
    return(
        <article className="flex-item">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </article>
    );
}
export default Content;