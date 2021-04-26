function SectionDescription({difficulty}){
    return(<article>
        <h1>{`${difficulty}`}</h1>
        <p>{`This is ${difficulty.toLowerCase()} level section`}</p>
        <p className="opac">{"In console you can find right answers(for testing only)"}</p>
    </article>)
}

export default SectionDescription;