type DateType={
    year:"numeric",
    month:"numeric",
    day:"numeric"
}

type YearType = {
    year:"numeric"
}

export const fullDate = (string:string) => {
	let options:DateType = { year: "numeric", month: "numeric", day: "numeric" };
	return new Date(string).toLocaleDateString([], options);
};

export const getYear = (string:any) => {
  let options:YearType = {year:"numeric"}
  return new Date(string).toLocaleDateString([], options);
}