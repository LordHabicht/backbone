describe("Album",function(){

    var album;

    beforeEach(function () {

        album =  new Album();

    });

    it("should have correct url",function () {

        expect(album.url).toEqual("/api/song")

    });

    it("has popp undefined",function(){
       expect(album.getPopularSong()).toBeUndefined();

    });

    it("delivers correct song on popular",function(){

        album.add([

            new Song({title:"123",numberOfPlays:1}),
            new Song({title:"abc",numberOfPlays:2})
        ]);
        var name = album.getPopularSong().get("title");
        expect(name).toEqual("abc");

    });

});