//simple code to scrape https://udonsharp.docs.vrchat.com/vrchat-api/ run on website in dev console

let result = "sorted: true \n references: \n";
document.querySelector("#docusaurus_skipToContent_fallback > div > main > div > div > div.col.docItemCol_VOVn > div > article > div.theme-doc-markdown.markdown").querySelectorAll("h3").forEach((title) => {
    if (title?.nextElementSibling?.tagName == "P") {
        (title.nextElementSibling.innerText).split("/").forEach((classname) => {
            let titleParsed = title.innerText.replace(/[\u200B-\u200D\uFEFF]/g, '');
            let parsedClassName = classname.replace(/^(.*((static class)|(class)|(enum)))/gi, "").replace(/[\u200B-\u200D\uFEFF ]/g, '');
                
            result += `- uid: ${parsedClassName}\n  name: ${titleParsed}\n  name.vb:\n  href: https://udonsharp.docs.vrchat.com/vrchat-api/#${titleParsed.toLowerCase().replace(" ", "-")}\n  commentId: T:${parsedClassName}\n  isSpec:\n  fullName: ${parsedClassName}\n  fullName.vb:\n  nameWithType: ${parsedClassName}\n  nameWithType.vb:\n  IsValid: true\n` 
        })
    }
});
console.log(result);
