export const convertBlobToBinary = async (content) => {
    // console.log("Funct ",content)
    let temptObject =JSON.parse(JSON.stringify(content))
    try {
         await Promise.all(temptObject.blocks.map(async (block, index) => {
           try {
            if (block.type === "image" && isBlobType(block.data.url)) {
                let blobUrl = block.data.url
                const blobData = await fetchBlog(blobUrl)
                if (blobData) {
                    var reader = new FileReader()
                    reader.readAsDataURL(blobData)
                    reader.onloadend = function () {
                        temptObject.blocks[index].data.url = reader.result
                    }
                }
            }
           } catch (error) {
               console.log(error)
           }
        }))
        return temptObject
    } catch (error) {
        console.log(error)
    }

}
const isBlobType =(url)=> url.startsWith('blob:')
const fetchBlog = async (url) => {
    const blobData = await fetch(url).then(blob => blob.blob())
    if (blobData)
        return blobData
}