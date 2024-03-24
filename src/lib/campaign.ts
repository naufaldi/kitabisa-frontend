type checkIfDonationAchievedProps = {
  target: number;
  received: number;
};

export const checkIfDonationAchieved = (target: number, received: number) => {
  const remaining = target - received;
  return remaining <= 0;
};

export const getDonationProgress = (data: number): number => {
  let percentage = data * 100;
  if (percentage > 100) {
    percentage = 100;
  }
  return parseFloat(percentage.toFixed(2));
};
