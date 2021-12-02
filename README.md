# Most frequent words

Given a text (string), return the n-most common words in descending order.

We want to know the most common word in the string "The map, maps keys to values; Keys can be anything."

The return value is an array with the most frequent word, "key". Punctuation is disregarded.

Example 1:

```shell
console.log(mostCommonWords("The map, maps keys to values; Keys can be anything.", 1));
```

Return:
```shell
['keys']
```

 Example 2:

 ```shell
console.log(mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago", 2));
```

Return:
```shell
['it', 'look']
```

Comments:
BUGGY! This works only when there are no equal values (frequencies) or when we only take the unique frequencies or at least the first frequency of non unique frequencies: