import { registerDecorator } from "class-validator";
import fs from "fs/promises";

export function IsCountry() {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isCountry",
      target: object.constructor,
      propertyName: propertyName,
      validator: {
        validate(value: any) {
          if (typeof value === "string" && value.length) {
            return fs.readFile("/src/Util/countries.json").then((buff) => {
              const countries: { name: string; code: string }[] = JSON.parse(
                buff.toString()
              );
              return !!countries.find((country) => country.name === value);
            });
          } else {
            return false;
          }
        },
      },
    });
  };
}
