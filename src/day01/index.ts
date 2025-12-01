import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput

const initialPosition = 50;
const totalPositions = 100;
const normalizePosition = (newPos: number) => {
  if (newPos < 0) newPos = totalPositions + newPos
  return newPos % totalPositions;
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const lines = input.split('\n');
  let dialPosition = initialPosition
  let zeroCount = 0;
  lines.forEach(line => {
    const direction = line[0];
    const count = Number(line.slice(1))
    // console.log(direction, count)
    if (direction === 'L') {
      dialPosition = dialPosition - count;
    } else {
      dialPosition = dialPosition + count;
    }
    dialPosition = normalizePosition(dialPosition)
    console.log(dialPosition)
    if (dialPosition === 0) zeroCount++
  })

  return zeroCount
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      {
        input: `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`,
        expected: "3",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: !true,
})
