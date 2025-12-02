import run from "aocrunner"
import { splitIntoChunks, splitLines } from "../utils/index.js"

function mapper(line: string) {
  return line.split('-')
}

function checkForInvalidId(id: string) {
  const [firstHalf, secondHalf] = splitIntoChunks([...id], id.length/2).map(half => half.join(''))
  return firstHalf === secondHalf
}
const part1 = (rawInput: string) => {
  const ranges = splitLines(rawInput, { mapper, delimiter: ',' })
  let idSum = 0
  ranges.forEach((range) => {
    const start = Number(range[0])
    const end = Number(range[1])
    for (let currentId = start; currentId <= end; currentId++) {
      if (checkForInvalidId(String(currentId))) idSum += currentId
    }
  })
  const result = idSum
  return String(result)
}

function checkForInvalidId2(id: string) {
  // Check for any repeating pattern
  for (let patternLength = 1; patternLength <= id.length / 2; patternLength++) {
    if (id.length % patternLength === 0) {
      const pattern = id.substring(0, patternLength)
      let isRepeating = true
      for (let i = patternLength; i < id.length; i += patternLength) {
        if (id.substring(i, i + patternLength) !== pattern) {
          isRepeating = false
          break
        }
      }
      if (isRepeating) return true
    }
  }
  
  return false
}
const part2 = (rawInput: string) => {
  const ranges = splitLines(rawInput, { mapper, delimiter: ',' })
  let idSum = 0
  ranges.forEach((range) => {
    const start = Number(range[0])
    const end = Number(range[1])
    for (let currentId = start; currentId <= end; currentId++) {
      if (checkForInvalidId2(String(currentId))) idSum += currentId
    }
  })
  const result = idSum
  return String(result)
}

const exampleInput = `
11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124
`

run({
  part1: {
    tests: [
      {
        input: exampleInput,
        expected: "1227775554",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: exampleInput,
        expected: "4174379265",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: !true,
})