const generateProof = async (input) => {
  try {
    const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(
      input,
      "main.wasm",
      "main.zkey"
    );
    const finalRes = {
      proof: JSON.stringify(proof, null, 1),
      input: JSON.stringify(publicSignals, null, 1),
    };
    return finalRes;
  } catch (err) {
    console.log(err);
    return -1;
  }
}

module.exports = {
  generateProof
}
