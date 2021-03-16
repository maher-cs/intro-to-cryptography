const main = () => {
  // initialize numerical representation map
  const distribution = {};
  text
    .split(" ")
    .filter((l) => l != "")
    .forEach((letter) => {
      distribution[letter] = 0;
    });

  // count each representation frequencies
  text
    .split(" ")
    .filter((l) => l != "")
    .forEach((letter) => {
      distribution[letter] += 1;
    });

  // english letter distribution
  const engDistribution = "estaoinhrdlcumwfgypbvkjxqz".split("");

  // sort representation according to distribution
  const frequenciesSorted = Object.keys(distribution).sort((a, b) => distribution[b] - distribution[a]);

  // print distribution and sorted frequencies
  console.log(distribution);
  console.log(frequenciesSorted);

  // try to replace each representation with a letter according to the text and english
  // language charectaritics
  console.log(
    text
      .replaceAll(" 14 ", ` ${red("e")} `)
      .replaceAll(" 35 ", ` ${red("t")} `)
      .replaceAll(" 23 ", ` ${red("h")} `)
      .replaceAll(" 456 ", ` ${red("x")} `)
      .replaceAll(" 56 ", ` ${red("a")} `)
      .replaceAll(" 345 ", ` ${red("s")} `)
      .replaceAll(" 46 ", ` ${red("p")} `)
      .replaceAll(" 25 ", ` ${red("l")} `)
      .replaceAll(" 25 ", ` ${red("l")} `)
      .replaceAll(" 234 ", ` ${red("d")} `)
      .replaceAll(" 356 ", ` ${red("c")} `)
      .replaceAll(" 136 ", ` ${red("o")} `)
      .replaceAll(" 124 ", ` ${red("i")} `)
      .replaceAll(" 34 ", ` ${red("u")} `)
      .replaceAll(" 346 ", ` ${red("n")} `)
      .replaceAll(" 26 ", ` ${red("b")} `)
      .replaceAll(" 126 ", ` ${red("r")} `)
      .replaceAll(" 15 ", ` ${red("f")} `)
      .replaceAll(" 45 ", ` ${red("y")} `)
      .replaceAll(" 145 ", ` ${red("v")} `)
      .replaceAll(" 245 ", ` ${red("g")} `)
      .replaceAll(" 12 ", ` ${red("m")} `)
      .replaceAll(" 35 ", ` ${red("t")} `)
      .replaceAll(" 24 ", ` ${red("w")} `)
      .replaceAll(" 563 ", ` ${red("c")} `)
      .replaceAll(" 123 ", ` ${red("q")} `)
      .replaceAll(" 236 ", ` ${red("z")} `)
  );
};

// function to add green background on the printed text on the console
const greenBg = (txt) => {
  const ANSI_GREEN_BACKGROUND = "\u001B[42m";
  const ANSI_RESET = "\u001B[0m";
  return ANSI_GREEN_BACKGROUND + txt + ANSI_RESET;
};

// function to add red color on the printed text on the console
const red = (txt) => {
  const ANSI_RED = "\u001B[31m";
  const ANSI_RESET = "\u001B[0m";
  return ANSI_RED + txt + ANSI_RESET;
};

// the cipher text represented in numerical representation
const text =
  " 46 25 14 56 345 14 234 14 356 136 234 14 35 23 124 345 35 14 456 35 34 345 124 346 245 56 346 45 12 14 35 23 136 234 45 136 34 15 124 346 234 56 234 14 123 34 23 35 14 45 136 34 24 124 25 25 15 124 245 34 126 14 136 34 35 35 23 56 35 35 23 14 35 14 456 35 24 56 345 14 346 356 126 45 46 35 14 234 34 345 124 346 245 35 23 14 345 34 26 345 35 124 35 34 35 124 136 346 356 124 46 23 14 126 56 15 35 14 126 45 136 34 15 136 34 346 234 56 345 136 25 34 35 124 136 346 46 25 14 56 345 14 234 14 345 356 126 124 26 14 23 136 24 45 136 34 56 346 56 25 45 236 14 234 35 23 14 35 14 456 35 23 346 35 45 136 34 12 56 45 34 345 14 56 346 45 46 126 136 245 126 56 12 136 126 345 124 12 46 25 45 356 136 34 346 35 35 23 14 15 126 14 123 34 14 346 356 124 14 345 136 15 56 25 25 35 23 14 46 124 563 35 34 126 14 345 35 23 56 35 56 46 14 56 126 24 124 35 23 124 346 35 23 14 35 14 456 35 23 56 145 14 15 34 346 ";

main();
