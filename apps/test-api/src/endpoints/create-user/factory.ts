import { faker } from "@faker-js/faker";
import { Factory } from "fishery";

import { CreateUserRequestSchema } from "./schema";

export const createUserRequestFactory = Factory.define<CreateUserRequestSchema>(
  () => ({
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
  }),
);
