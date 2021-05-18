//This is template for description of current choosed section

function SectionDescription({difficulty}){
    return(<article>
        <h1>{`${difficulty}`}</h1>
        <p>Level Section</p>
        {/* <p className="opac">{"In console you can find right answers(for testing only)"}</p> */}
    </article>)
}

export default SectionDescription;