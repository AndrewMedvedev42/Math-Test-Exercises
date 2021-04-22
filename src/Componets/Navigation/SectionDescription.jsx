function SectionDescription({difficulty}){
    return(<article>
        <h1>{`${difficulty}`}</h1>
        <p>{`This is ${difficulty.toLowerCase()} level section`}</p>
    </article>)
}

export default SectionDescription;