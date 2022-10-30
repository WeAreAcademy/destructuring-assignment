interface Scholar {
  firstName: string;
  lastName: string;
  cohortNumber: number;
}

function introduceScholar(scholar: Scholar): string {
  // complete function
  // use object destructuring, for practice!
  const { firstName, lastName, cohortNumber} = scholar;
  return `${firstName} ${lastName} is an Academy Scholar, on Cohort ${cohortNumber}.`;
  
  
}

export default introduceScholar;
