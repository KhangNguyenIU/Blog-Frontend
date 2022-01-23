


export const checkBlogConditionToBeSubmit = (title, background, content) => {
    return checkBackground(background) && checkTitleLength(title) && checkContentLength(content)
};

 const checkTitleLength = (title = "") => title.length > 0
 const checkBackground = (background = "") => background.length > 0
 const checkContentLength = content => {
    let len = 0
    if (content?.blocks?.length > 0) {
        content.blocks.map((block, index) => {
            if (block.type !== 'image') len += block.text.length
        })
        console.log({ len })
        return len >= 50
    }
    return false
};