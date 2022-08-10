const verify = (constraintName: string, condition: number | string) => {
  if (!condition || condition == 0)
    throw new Error(`${constraintName} is required`);
};

export default verify;
