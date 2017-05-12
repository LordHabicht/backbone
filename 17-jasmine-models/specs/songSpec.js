describe("Song",function () {

    var song;

    beforeEach(function () {
        song = new Song();
    });

    it("should have root",function(){
        console.log(song);
        expect(song.urlRoot).toBe("api/songs");

    });

    it("should have default 0",function () {
       expect(song.get("numberOfPlays")).toEqual(0);
    });

    it("should add to play",function () {
       song.play();
       expect(song.get("numberOfPlays")).toEqual(1);
    });

    it("title required",function(){
        expect(song.isValid()).toBeFalsy();
        song.set("title","123");
        expect(song.isValid()).toBeTruthy();
    });

})