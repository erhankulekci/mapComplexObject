function normalize(data) {
    return objectMapper(data);
  }
  
  function objectMapper(data) {
    return Object.fromEntries(
      Object.entries(data).map(([key, object]) =>
        Array.isArray(object.value)
          ? [key, object.value.map((value) => objectMapper(value))]
          : [key, object.value]
      )
    );
  }

  module.exports = normalize;