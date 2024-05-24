// const callServiceMethod = async (req, res, serviceMethodToCall, FN_name) => {
//   try {
//     const data = await serviceMethodToCall;
//     res.status(200).send(data);
//   } catch (error) {
//     res.status(500).send("error");
//     console.error(error);
//   }
// };

// export default callServiceMethod;

async function callServiceMethod(req, res, serviceMethodToCall, FN_name) {
  try {
    const data = await serviceMethodToCall;
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("error");
    console.error(error);
    console.log(error.message);
  }
}

// Export the function
module.exports = {
  callServiceMethod,
};

