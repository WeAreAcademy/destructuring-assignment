function listFollowers(followerNames: string[]): string {
  // complete function
  // use array destructuring, for practice!

  const [a, b, ...rest] = followerNames
  return `Followed by ${a}, ${b} and others`;
}

export default listFollowers;
