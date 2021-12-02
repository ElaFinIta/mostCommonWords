/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results, the n most frequent words
 * @return {string[]}
 */

function mostCommonWords(text, howManyWords) {
    // 1. split the text into lowercase and remove whitespace and punctuation

    // Santosh:
    // const words = text.toLowerCase().split(/\W+/);

    // Elena:
    const words = text.toLowerCase().split(/[,.?!;" ']/g);
    const cleanedWords = words.filter(item => (item !== ''));

    // Santosh 2.
    // const map = words.reduce

    // Elena 2. put words into an hash and count the freq of words
    const freqHash = {};
    for (let word of cleanedWords) {
        if (freqHash[word] === undefined) {
            freqHash[word] = 1;
        } else {
            freqHash[word] += 1;
        }
    }
    // console.log(freqHash);


    // 3. sort words by frequency and return the top n words
    // take the values from hash:
    let valuesArr = Object.values(freqHash);
    // sort them in ascending order:
    valuesArr.sort(function(a, b){return b - a});
    // helper arrays to store keys:
    const freqWords = [];
    // take keys with corresponding values i.e. sort keys
    for (let i of valuesArr) {
        // BUGGY! This works only when there are no equal values (frequencies) or when we only take the unique frequqncues or at least the first frequency of non unique frequencies:
        freqWords.push(Object.keys(freqHash).find(key => freqHash[key] === i));
    }

    // call shift on an array-like object (freqWords) and store the specific number of keys (words) in array:
    const myWords = [];
    for (let x=0; x <howManyWords; x++) {
        myWords.push(Array.prototype.shift.call(freqWords))
    }
    return myWords;
}

console.log(mostCommonWords("The map, maps keys to values; Keys can be anything.", 1)); // ['keys']
console.log(mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago",2)); // ['it', 'look']
console.log(mostCommonWords("a; a,b, a's c A!; b,B, c.", 4)); // ['a', 'b', 'c', 's']
