Array.prototype.sameStructureAs = function (other) {
  let original = [];
  let second = [];

  JSON.stringify(this)
    .split("")
    .forEach((v, i) => {
      if (
        (JSON.stringify(this).split("")[i - 1] == `"` && v == "[") ||
        (v == "]" && JSON.stringify(this).split("")[i + 1] != undefined)
      ) {
        original.push("");
      } else {
        original.push(v.replace(/[^\[\], ]+/, ""));
      }
    });

  JSON.stringify(other)
    .split("")
    .forEach((v, i) => {
      if (
        (JSON.stringify(other).split("")[i - 1] == `"` && v == "[") ||
        (v == "]" && JSON.stringify(this).split("")[i + 1] != undefined)
      ) {
        original.push("");
      } else {
        second.push(v.replace(/[^\[\], ]+/, ""));
      }
    });

  return JSON.stringify(original.join("")) == JSON.stringify(second.join(""));
};
[1, "[", "]"].sameStructureAs(["[", "]", 1]);
