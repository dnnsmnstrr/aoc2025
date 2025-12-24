import run from "aocrunner"
import { splitLines } from "../utils/index.js"

function mapper(line: string) {
  return line
}

const part1 = (rawInput: string) => {
  const input = splitLines(rawInput, { mapper })

  let totalJoltage = 0

  input.forEach((line: string) => {
    let highestInLine = 0;
    let firstIndex = 0;
    [...line].forEach((element, index) => {
      if (index >= line.length - 1) return;
      if (Number(element) > highestInLine) {
        highestInLine = Number(element)
        firstIndex = index
      }
    });
    let secondHighestInLine = 0;
    for (let index = firstIndex + 1; index < line.length; index++) {
      const element = line[index];
      if (Number(element) > secondHighestInLine) {
        secondHighestInLine = Number(element)
      }
    }
    const currentJoltage = `${highestInLine}${secondHighestInLine}`
    console.log(currentJoltage)
    totalJoltage += parseInt(`${highestInLine}${secondHighestInLine}`);
  })
  return String(totalJoltage)
}

const part2 = (rawInput: string) => {
  const input = splitLines(rawInput, { mapper })

  const result = ''
  return String(result)
}

const exampleInput = `
987654321111111
811111111111119
234234234234278
818181911112111

`

run({
  part1: {
    tests: [
      {
        input: exampleInput,
        expected: "357",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: exampleInput,
        expected: "",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  // onlyTests: true,
})