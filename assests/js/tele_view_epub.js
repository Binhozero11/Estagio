class TelaViewEpub  {
    static initialize() {
        console.log("initialize")
        var book = ePub('../epub/biologia.epub');
        var rendition = book.renderTo("area", {width: 600, height: 400});
        rendition.display();
    }
}