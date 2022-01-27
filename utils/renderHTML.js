
import { figureLayout, wrapperClass } from "./constants"

export const renderHTMLfromBlocks = blocks => {
    let stack = []
    return blocks.map((block, i) => {
        //handle unorderstyle
        if (block.type === 'unordered-list-item') {
            stack.push({ key: block.key, text: block.text, inlineStyleRanges: block.inlineStyleRanges })
            if (!blocks[i + 1] || blocks[i + 1]?.type !== 'unordered-list-item') {
                let temp = [...stack]
                stack = []
                return orderStyleCase(temp)
            }

        }
        //handle image 
        else if( block.type ==='image'){
            return figureCase(block)
        }
        //handle normal style
        else
            return mapClassName(block)
    })
}

export const mapClassName = block => {
    if (!block.inlineStyleRanges.length) {
        return unstyledCase(block)
    } else {
        const arrayOfSpans =  splitToSmallSpan(block)
        return styleAtPosition(arrayOfSpans, block.text)
    }
}


const styleAtPosition = (arr, text)=>{
    // console.log({arr, text})
    return (
        <div className="graf graf--p">
            {
                arr.map((span,index)=>(
                    <span 
                    // style={`${generateFontWeight(span[2])}`}
                    className={`${generateFontWeight(span[2])}`}
                    key={index}>
                        {text.slice(span[0],span[1])}
                        </span>
                ))
            }
        </div>
    )
}

const generateFontWeight =(type) =>{
    switch(type){
        case null:
            return ""
        case 'ITALIC':
            return "italic"
        case 'BOLD':
            return 'font-bold'
        default:
            return 'italic font-bold' 
    }
}

const splitToSmallSpan = (block) => {
    let temp = [...block.inlineStyleRanges].sort((a, b) => a.offset - b.offset)
    // console.log({temp})
    let stack = [[0, temp[0].offset, null]]
    for (let arr of temp) {
        let prev = stack[stack.length - 1]

        if (arr.offset >= prev[1]) {
            stack.push([prev[1],arr.offset,null])
            stack.push([arr.offset, arr.offset + arr.length,arr.style])
        } else if (arr.offset + arr.length >=prev[1]){
            let pop = stack.pop()
            stack.push([pop[0],arr.offset,pop[2]])
            stack.push([arr.offset,pop[1], [pop[2], arr.style]])
            stack.push([pop[1],(arr.offset + arr.length),arr.style])
        }else{
            let pop = stack.pop()
            stack.push([pop[0],arr.offset,pop[2]])
            stack.push([arr.offset,(arr.offset + arr.length), [pop[2], arr.style]])
            stack.push([(arr.offset + arr.length),pop[1],pop[2]])
        }
    }
    stack.push([stack[stack.length - 1][1],block.text.length,null])
    // console.log({stack })
    return stack
}

const unstyledCase = (block) =>
{
    return(
    <div key={block.key} className={`graf ${wrapperClass[block.type]}`}>
        <span key={block.key}>{block.text}</span>
    </div>)
}


const orderStyleCase = list =>
(
    <ul className="graf graf--insertunorderedlist public-DraftStyleDefault-ul public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-depth0 list-dics">
        {
            list.map((item, index) => (
                <li key={index} className="graf graf--insertunorderedlist  public-DraftStyleDefault-unorderedListItem public-DraftStyleDefault-reset public-DraftStyleDefault-depth0 public-DraftStyleDefault-listLTR">
                    <span>{item.text}</span>
                </li>
            ))
        }
    </ul>
)

const figureCase =figure =>(
    <figure className={`graf graf--figure ${figureLayout[figure.data.direction]}`}>
        <figure>
            <div className="aspectRatioPlaceholder"
            style={{maxWidth: `${figure.data.width}`, maxHeight: `${figure.data.height}`}}
            >
                <img src={figure.data.url}
                height={figure.data.height}
                width={figure.data.width}
                className="graf-image"
                alt={`${figure.data.url}`}
                />
            </div>
        </figure>
    </figure>
)

//graf--layoutOutsetLeft