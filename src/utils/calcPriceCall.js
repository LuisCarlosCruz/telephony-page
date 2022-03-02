const calcPriceCall = (callObj, time, setWitfPlan, setNoPlan) => {
  const valueFixed = time * callObj.callPrices.min_value_fixed;
  setNoPlan(valueFixed.toFixed(2));
  // price FaleMais
  if (time <= callObj.selectPlan.minutes_free) return setWitfPlan(0);
  if (time > callObj.selectPlan.minutes_free) {
    const timeExcedida = time - callObj.selectPlan.minutes_free;
    const total = timeExcedida * callObj.callPrices.min_value_mais;
    setWitfPlan(total.toFixed(2));
  }
};

export { calcPriceCall };
