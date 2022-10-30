import introduceScholar from "./1a-introduce-scholar";

test("introduceScholar introduces a Scholar by name with their cohort number", () => {
  expect(
    introduceScholar({
      lastName: "Akaka",
      firstName: "Sharon",
      cohortNumber: 0,
    })
  ).toBe("Sharon Akaka is an Academy Scholar, on Cohort 0.");

  expect(
    introduceScholar({
      cohortNumber: 1,
      lastName: "Alexander",
      firstName: "Cameron",
    })
  ).toBe("Cameron Alexander is an Academy Scholar, on Cohort 1.");

  expect(
    introduceScholar({
      firstName: "June",
      cohortNumber: 41,
      lastName: "August",
    })
  ).toBe("June August is an Academy Scholar, on Cohort 41.");
});
