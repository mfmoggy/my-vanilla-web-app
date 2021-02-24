module.exports = async function (context, req) {
    context.res = {
      body: {
        text: "Hola! Estos son datos de mi API"
      }
    };
  };