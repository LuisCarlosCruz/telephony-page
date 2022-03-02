const getAllDDD = async (setAllDDD) => {
  const URL = `http://localhost:3001/DDD`;

  try {
    const res = await fetch(URL);
    const ddd = await res.json();
    setAllDDD(ddd);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

const getAllPlans = async (setAllPlans) => {
  const URL = `http://localhost:3001/plans`;

  try {
    const res = await fetch(URL);
    const plans = await res.json();
    setAllPlans(plans);
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

const getCallPossible = async (dddOrigin) => {
  const URL = `http://localhost:3001/DDD/${dddOrigin}`;
  try {
    const res = await fetch(URL);
    const call = await res.json();
    return call;
  } catch (err) {
    console.log(`Erro: ${err.message}`);
  }
};

const valueCall = async (origin, time, destination, plan) => {
  const URL = `http://localhost:3001/callvalue/calls?origin=${origin}&&destination=${destination}&&plan=${plan}&&time=${time}`;
  try {
    const res = await fetch(URL);
    const call = await res.json();
    return call;
  } catch (err) {
    return null;
  }
};

export { getAllDDD, getAllPlans, getCallPossible, valueCall };
