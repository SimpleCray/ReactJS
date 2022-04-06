/*
 This code is a practice Java interview question from testdome.com
 Problem statement:
    A playlist is considered a repeating playlist if any of the songs contain a reference to a previous song in the playlist. Otherwise, the playlist will end with the last song which points to null.
    Implement a function isRepeatingPlaylist that, efficiently with respect to time used, returns true if a playlist is repeating or false if it is not.
 + Passes 4/4 tests
 */
class Song {
    name;
    nextSong;

    constructor(name) {
        this.name = name;
    }

    /**
     * @return {boolean} true if the playlist is repeating, false if not.
     */
    isRepeatingPlaylist() {
        var current = this.nextSong;
        var next = current == null ? null : current.nextSong;
        while (next != null) {
            if (current == this || current == next) return true;
            current = current.nextSong;
            next = next.nextSong;
            if (next != null) next = next.nextSong;
        }
        return false;
    }
}

let first = new Song('Hello');
let second = new Song('Eye of the tiger');
let three = new Song('No Promises 1');
let four = new Song('No Promises 2');
let five = new Song('No Promises 3');

first.nextSong = second;
second.nextSong = three;
three.nextSong = four;
four.nextSong = five;
four.nextSong = first;

console.log(first.isRepeatingPlaylist());
